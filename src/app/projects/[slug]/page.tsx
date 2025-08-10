export async function generateStaticParams() {
  return [
    { slug: "sample" },
    // add more slugs as needed
  ];
}


export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Project: {slug}</h1>
      <p className="text-lg">Details about the project "{slug}" will go here.</p>
    </div>
  );
}