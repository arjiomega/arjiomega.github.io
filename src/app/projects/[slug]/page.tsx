// src/app/projects/[slug]/page.tsx
import projectsData from "@/data/projects.json";

import fs from "fs/promises";
import path from "path";
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from "remark-gfm";

interface Project {
  slug: string;
  title: string;
  description: string;
  media: string;
}

interface ProjectGroup {
  group_title: string;
  list_of_projects: Project[];
}


export async function generateStaticParams() {
  const groups = projectsData as ProjectGroup[];
  return groups.flatMap((g) =>
    g.list_of_projects.map((p) => ({ slug: p.slug }))
  );
}

// NOTE: params is a Promise in Next 15 — type it that way and await it
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const groups = projectsData as ProjectGroup[];
  const project = groups
    .flatMap((g) => g.list_of_projects)
    .find((p) => p.slug === slug);

  console.log(slug)

  if (!project) {
    return <div>Project not found</div>; // or `notFound()` from next/navigation
  }

  const mdPath = path.join(process.cwd(), "src", "data", `${slug}.md`);
  let markdown = "";
  try {
    markdown = await fs.readFile(mdPath, "utf8");
  } catch {
    markdown = "*No project details available.*";
  }

  // Convert markdown to HTML
  const processed = await remark().use(remarkGfm).use(html).process(markdown);
  const contentHtml = processed.toString();

  return (
    <div className="markdown-body p-4">
      <div
        className="
          [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:pb-4 
          [&>h2]:text-2xl [&>h2]:py-4 
          [&>h3]:text-xl [&>h3]:py-4 
          [&>p]:mb-4 
          [&>pre]:bg-gray-900 [&>pre]:text-green-200 [&>pre]:rounded-lg [&>pre]:p-4 [&>pre]:my-4 [&>pre]:overflow-x-auto
          [&>table]:border-collapse [&>table]:border [&>table]:border-gray-400 [&>table]:w-full [&>table]:my-4
          [&_th]:border [&_th]:border-gray-400 [&_th]:px-3 [&_th]:py-2 [&_th]:bg-gray-100
          [&_td]:border [&_td]:border-gray-400 [&_td]:px-3 [&_td]:py-2
        [&_tr:nth-child(even)]:bg-gray-50
        [&_tr:hover]:bg-gray-100
          [&>ul]:list-disc 
          [&>ul]:pl-6
        "
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </div>
  );
}
