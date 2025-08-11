// src/app/projects/[slug]/page.tsx
import projectsData from "@/data/projects.json";

import fs from "fs/promises";
import path from "path";
import { remark } from 'remark';
import html from 'remark-html';

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
    markdown = "*Could not load sample.md*";
  }

  // Convert markdown to HTML
  const processed = await remark().use(html).process(markdown);
  const contentHtml = processed.toString();

  return (
    <div className="p-4">
      <div
        className="
          [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:mb-4 
          [&>h2]:text-2xl 
          [&>h3]:text-xl 
          [&>p]:mb-4 
          [&>ul]:list-disc 
          [&>ul]:pl-6
        "
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </div>
  );
}
