import React from "react";
import '../assets/css/header.css'
import '../assets/css/mediaheader.css'
import * as Icons from '../assets/techstackicons/index.js';


const SkillCard = ({ title, skills }) => (
  <div className="bg-white rounded-2xl shadow-lg p-6 w-full">
    <h2 className="text-xl font-semibold text-center mb-4">{title}</h2>
    <div className="flex flex-wrap gap-4 justify-center">
      {skills.map(({ icon, name }, idx) => (
        <div
          key={idx}
          className={`flex items-center justify-center gap-2`}
        >
          <img
            src={icon}
            alt={name || 'Tech icon'}
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
    <div className="bg-green-100 py-10 px-4 flex flex-col flex-wrap justify-center gap-6 mb-10" id="skills">
    <h1 className="title">Skills</h1>
      <SkillCard
        title="Languages"
        skills={[
          { icon: Icons.PythonLogo, name: 'Python' },
          { icon: Icons.HTMLIcon, name: 'HTML/CSS' },
          { icon: Icons.JavascriptLogo, name: 'JavaScript' },
        ]}
      />
      <SkillCard
        title="Backend / APIs"
        skills={[
          { icon: Icons.DjangoLogo, name: 'Django' },
          { icon: Icons.FastAPILogo, name: 'FastAPI' },
        ]}
      />
      <SkillCard
        title="Development and Tools"
        skills={[
          { icon: Icons.DockerLogo, name: 'Docker' },
          { icon: Icons.PSQLLogo, name: 'Postgresql' },
          { icon: Icons.GitIcon, name: 'Git (Code Version Control)' },
          { icon: Icons.GithubActionsLogo, name: 'Github Actions (CI/CD)' },
        ]}
      />
      <SkillCard
        title="Machine Learning / Data Science"
        skills={[
          { icon: Icons.TensorflowLogo, name: 'Tensorflow' },
          { icon: Icons.PytorchLogo, name: 'Pytorch' },
          { icon: Icons.OpenCVIcon, name: 'OpenCV' },
          { icon: Icons.SKLearnIcon, name: 'Scikit-Learn' },
          { icon: Icons.EvidentlyLogo },
          { icon: Icons.MLFlowLogo },
          { icon: Icons.NumpyIcon, name: 'Numpy' },
          { icon: Icons.MatplotlibIcon},
          { icon: Icons.SeabornLogo },
          { icon: Icons.DvcLogo },
          { icon: Icons.PandasLogo },
          { icon: Icons.DagshubLogo },
        ]}
      />
     
    </div>
  );
};
