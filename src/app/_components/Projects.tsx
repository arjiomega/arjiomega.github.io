"use client";

import React from "react";
import Link from "next/link";

import "../../styles/header.css"
import "../../styles/mediaheader.css"

import Image from 'next/image';

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

const projects: ProjectGroup[] = projectsData as ProjectGroup[];


function slugify(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "") // remove non-alphanumeric except space & hyphen
    .replace(/\s+/g, "-"); // replace spaces with -
}


interface ProjectGeneratorProps {
    title: string;
    description: string;
    media: string;
}

const ProjectGenerator = ({
    title,
    description,
    media
}: ProjectGeneratorProps) => {

    return (
        <Link 
            href={`/projects/${slugify(title)}`}
            className="
                shadow-lg flex-grow w-full lg:w-1/2 lg:h-72 flex-col-reverse 
                lg:flex-row rounded flex justify-between overflow-hidden
                hover:cursor-pointer hover:shadow-xl transition-all duration-300
                hover:bg-gray-200
            "
        >
            <div className="flex w-full h-full flex-col gap-5 lg:w-1/2 p-5">
                <h2 className="font-bold text-l">{title}</h2>
                <p className="text-sm font-medium ">{description}</p>
            </div>
            <div className="flex w-full h-full justify-center items-center lg:w-1/2 p-5">
                <Image
                    src={media}
                    alt="Example"
                    className="max-h-full max-w-full object-contain rounded"
                    width={500}
                    height={500}
                />
            </div>
        </Link>
    )
}

function loadProjectPairs(list_of_project: Project[]): Project[][] {

    if (!list_of_project) {
        return [];
    }

    const chunkArray = <T,>(arr: T[], size: number): T[][] => {
        const result: T[][] = [];
        for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
        }
        return result;
    };

    return chunkArray(list_of_project, 2);
}

interface RenderProjectProps {
  group_title: string;
  list_of_project: Project[];
  extraClassName?: string;
}

const RenderProject: React.FC<RenderProjectProps> = ({
    group_title, 
    list_of_project, 
    extraClassName,
    }) =>  {

    const projectPairs = loadProjectPairs(list_of_project);

    return (
        <div 
            className={`main-projects-container ${extraClassName || ""}`}
        >
            <h1>{group_title}</h1>

            <div className="flex flex-col gap-5 mb-10">
                {projectPairs.map((pair, idx) => (
                    <div 
                        key={idx}
                        className="flex flex-col lg:flex-row gap-4 lg:h-80 pb-3"
                    >
                        {pair.map((project) => (
                            <ProjectGenerator
                                key={project.slug}
                                title={project.title}
                                description={project.description}
                                media={project.media}
                            />
                        ))}
                    </div>
                ))
                }
            </div>
        </div> 
    )
}

export const Projects: React.FC = () => {
    return (
        <div className="temporary" id="projects">
            <h1 className="title">Projects</h1>
            <div>
                {projects.map(group => (
                    <RenderProject key={slugify(group.group_title)} group_title={group.group_title} list_of_project={group.list_of_projects}/>
                ))}
            </div>
        </div>
    )
}
