import React from "react";
import "../../styles/header.css"
import "../../styles/mediaheader.css"

import Image from 'next/image';

interface SkillCardProps {
    title: string;
    skills: { icon: string; name?: string }[];
}

const SkillCard = ({ title, skills }: SkillCardProps) => (
  <div className="bg-white rounded-2xl shadow-lg p-6 w-full">
    <h2 className="text-xl font-semibold text-center mb-4">{title}</h2>
    <div className="flex flex-wrap gap-4 justify-center">
      {skills.map(({ icon,name }, idx) => (
        <div
          key={idx}
          className={`flex items-center justify-center gap-2`}
        >
            <Image
                src={icon}
                alt={name || 'Tech icon'}
                width={name ? 10 : 20}
                height={name ? 10 : 20}
                className={name ? 'w-10 h-10' : 'w-20 h-20 object-contain'}
            />

          {name && <p className="text-lg">{name}</p>}
        </div>
      ))}
    </div>
  </div>
);


export const Skills = () => {
  return (
    <div className="py-10 px-4 flex flex-col flex-wrap justify-center gap-6 mb-10" id="skills">
    <h1 className="title">Skills</h1>
      <SkillCard
        title="Languages"
        skills={[
          { icon: "/techstackicons/python.svg", name: 'Python' },
          { icon: "/techstackicons/html-5.svg", name: 'HTML/CSS' },
          { icon: "/techstackicons/javascript.svg", name: 'JavaScript' },
        ]}
      />
      <SkillCard
        title="Backend / APIs"
        skills={[
          { icon: "/techstackicons/django-icon.svg", name: 'Django' },
          { icon: "/techstackicons/fastapi.svg", name: 'FastAPI' },
        ]}
      />
      <SkillCard
        title="Development and Tools"
        skills={[
          { icon: "/techstackicons/docker-icon.svg", name: 'Docker' },
          { icon: "/techstackicons/postgresql.svg", name: 'Postgresql' },
          { icon: "/techstackicons/git-icon.svg", name: 'Git (Code Version Control)' },
          { icon: "/techstackicons/github-actions.svg", name: 'Github Actions (CI/CD)' },
        ]}
      />
      <SkillCard
        title="Machine Learning / Data Science"
        skills={[
          { icon: "/techstackicons/tensorflow.svg", name: 'Tensorflow' },
          { icon: "/techstackicons/PyTorch.svg", name: 'Pytorch' },
          { icon: "/techstackicons/HuggingFaceIcon.svg", name: 'HuggingFace' },
          { icon: "/techstackicons/opencv.svg", name: 'OpenCV' },
          { icon: "/techstackicons/sklearn.png", name: 'Scikit-Learn' },
          { icon: "/techstackicons/pandas.png" },
          { icon: "/techstackicons/matplotlib.svg" },
          { icon: "/techstackicons/numpy.svg", name: 'Numpy' },
          { icon: "/techstackicons/seaborn.svg"},
          { icon: "/techstackicons/paperspace.svg" },
          { icon: "/techstackicons/dvc.svg" },
          { icon: "/techstackicons/evidentlylogo.png" },
          { icon: "/techstackicons/MLflow-Logo.svg" },
        ]}
      />
     
    </div>
  );
};
