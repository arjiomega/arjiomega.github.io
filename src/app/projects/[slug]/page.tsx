export async function generateStaticParams() {
  return [
    { slug: "sample" },
  ];
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Project: {slug}</h1>
      <p className="text-lg">Details about the project &quot;{slug}&quot; will go here.</p>
    </div>
  );
}