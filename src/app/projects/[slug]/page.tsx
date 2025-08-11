// src/app/projects/[slug]/page.tsx
import projectsData from "@/data/projects.json";

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

  if (!project) {
    return <div>Project not found</div>; // or `notFound()` from next/navigation
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="pb-4">{project.description}</p>
      <img src={project.media} alt={project.title} />
    </div>
  );
}
