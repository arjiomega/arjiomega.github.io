export async function generateStaticParams() {
  return [
    { slug: "vision-based-parking-lot-occupancy-detection-with-classical-and-deep-learning-approaches" },
    { slug: "interactive-puzzle-solving-using-hand-tracking-and-spatial-analysis-in-opencv" },
    { slug: "simulated-model-decay-and-retraining-pipeline-for-store-sales-forecasting" },
    { slug: "real-time-driving-assistant-with-distance-estimation-and-localized-object-detection" },
    { slug: "end-to-end-movie-management-and-recommendation-platform" },
    { slug: "robust-digit-classification-via-classical-ml-and-data-centric-optimization" },
    { slug: "computational-fluid-dynamics-based-parametric-optimization-of-axial-fan-performance" },
    { slug: "thermal-efficiency-optimization-of-data-center-cooling-systems-using-cfd" },
    { slug: "solidworks-3d-modeling-of-a-wankel-rotary-engine" },
    { slug: "solidworks-3d-modeling-of-a-servo-motor" },
    { slug: "solidworks-floor-jack" },
    { slug: "solidworks-dc-motor" },
    { slug: "solidworks-v6-engine" }
  ];
}



export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Project: {slug}</h1>
      <p className="text-lg">Details about the project &quot;{slug}&quot; will go here.</p>
    </div>
  );
}