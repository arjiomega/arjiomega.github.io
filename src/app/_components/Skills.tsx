import React from "react";
import "../../styles/header.css"
import "../../styles/mediaheader.css"
// import * as Icons from '/arjiomega.github.io/techstackicons/index.js';
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
          { icon: "/arjiomega.github.io/techstackicons/python.svg", name: 'Python' },
          { icon: "/arjiomega.github.io/techstackicons/html-5.svg", name: 'HTML/CSS' },
          { icon: "/arjiomega.github.io/techstackicons/javascript.svg", name: 'JavaScript' },
        ]}
      />
      <SkillCard
        title="Backend / APIs"
        skills={[
          { icon: "/arjiomega.github.io/techstackicons/django-icon.svg", name: 'Django' },
          { icon: "/arjiomega.github.io/techstackicons/fastapi.svg", name: 'FastAPI' },
        ]}
      />
      <SkillCard
        title="Development and Tools"
        skills={[
          { icon: "/arjiomega.github.io/techstackicons/docker-icon.svg", name: 'Docker' },
          { icon: "/arjiomega.github.io/techstackicons/postgresql.svg", name: 'Postgresql' },
          { icon: "/arjiomega.github.io/techstackicons/git-icon.svg", name: 'Git (Code Version Control)' },
          { icon: "/arjiomega.github.io/techstackicons/github-actions.svg", name: 'Github Actions (CI/CD)' },
        ]}
      />
      <SkillCard
        title="Machine Learning / Data Science"
        skills={[
          { icon: "/arjiomega.github.io/techstackicons/tensorflow.svg", name: 'Tensorflow' },
          { icon: "/arjiomega.github.io/techstackicons/PyTorch.svg", name: 'Pytorch' },
          { icon: "/arjiomega.github.io/techstackicons/HuggingFaceIcon.svg", name: 'HuggingFace' },
          { icon: "/arjiomega.github.io/techstackicons/opencv.svg", name: 'OpenCV' },
          { icon: "/arjiomega.github.io/techstackicons/sklearn.png", name: 'Scikit-Learn' },
          { icon: "/arjiomega.github.io/techstackicons/pandas.png" },
          { icon: "/arjiomega.github.io/techstackicons/matplotlib.svg" },
          { icon: "/arjiomega.github.io/techstackicons/numpy.svg", name: 'Numpy' },
          { icon: "/arjiomega.github.io/techstackicons/seaborn.svg"},
          { icon: "/arjiomega.github.io/techstackicons/paperspace.svg" },
          { icon: "/arjiomega.github.io/techstackicons/dvc.svg" },
          { icon: "/arjiomega.github.io/techstackicons/evidentlylogo.png" },
          { icon: "/arjiomega.github.io/techstackicons/MLflow-Logo.svg" },
        ]}
      />
     
    </div>
  );
};
