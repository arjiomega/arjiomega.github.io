import React from "react";
import Image from 'next/image';

const lorem_ipsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi eros, varius vel molestie sed, pharetra vel est. Quisque dignissim in lorem eget pulvinar. Vestibulum dolor libero, congue at elit sed, euismod bibendum purus. Suspendisse volutpat scelerisque quam vitae facilisis. Aenean magna erat, egestas in mi eu, convallis rutrum magna. Nullam varius diam maximus, pulvinar ex sit amet, volutpat ante. Vestibulum nec magna lobortis, tristique ipsum nec, porttitor eros. Vivamus in purus semper, rhoncus massa vitae, tempus felis. Maecenas scelerisque nulla in elit rhoncus semper. Vivamus auctor, justo in egestas fermentum, purus libero elementum est, et tincidunt libero quam in nibh. Nullam eu pulvinar urna.";

const TargetedProject = ({
  title = "What is it?",
  project_overview = lorem_ipsum,
  contributions = lorem_ipsum,
  techDetails = lorem_ipsum,
  media,
  mediaSourceName = null,
  mediaSourceURL = null
}) => {
  return (
    <div className="p-6 mb-5 rounded-lg bg-white">
  <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>

  {/* Container: stacks on <lg, side-by-side on lg+ */}
  {/* <div className="flex flex-col-reverse lg:flex-row gap-6 items-stretch mb-3"> */}
  <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-6 items-start mb-6">
  {/* Left column */}
  <div className="w-full lg:w-[80%] flex flex-col gap-4">
    <div className="bg-yellow-100 p-4 rounded-lg">
      <h3 className="font-semibold text-lg mb-1">Project Overview</h3>
      <p className="text-sm">{project_overview}</p>
    </div>
    <div className="bg-green-100 p-4 rounded-lg">
      <h3 className="font-semibold text-lg mb-1">Contributions</h3>
      <p className="text-sm whitespace-pre-line">{contributions}</p>
    </div>
  </div>

  {/* Right column */}
<div className="w-full lg:w-[20%] flex flex-col justify-between bg-gray-50 rounded-lg p-4">
  <div className="flex-1 flex items-center justify-center">
    <Image
        src={media}
        alt="Project Media"
        width={20}
        height={20}
        className="h-full max-h-full w-auto object-contain"
    />
  </div>

  {mediaSourceName && mediaSourceURL && (
    <p className="text-xs text-center mt-2 text-gray-600">
      Media Source:{" "}
      <a
        href={mediaSourceURL}
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-blue-600"
      >
        {mediaSourceName}
      </a>
    </p>
  )}
</div>

</div>

  {/* Bottom section */}
  <div className="bg-red-100 p-4 rounded-lg">
    <h3 className="font-semibold text-lg mb-1">Tech Stack & Methods</h3>
    <p className="text-sm whitespace-pre-line">{techDetails}</p>
  </div>
</div>

  );
};

export default TargetedProject;
