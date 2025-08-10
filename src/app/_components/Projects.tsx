import React from "react";


import "../../styles/header.css"
import "../../styles/mediaheader.css"

import Image from 'next/image';

export const SoftwareAndMachineLearningEngineeringProjects = () => {
    return (


            <div className="main-projects-container SMLE">
                <h1>Software and Machine Learning Projects</h1>

                <div className="flex flex-col gap-5 mb-10">
                    <div className="flex flex-col lg:flex-row gap-4 h-80">
                        {/* Left Box */}
                        <ProjectGenerator 
                            title="Vision-Based Parking Lot Occupancy Detection with Classical and Deep Learning Approaches" 
                            description="Built a computer vision system to detect parking space occupancy using OpenCV, with two distinct approaches: a rule-based pixel counting method and a fine-tuned MobileNetV2 deep learning model. The project highlights that effective solutions don't always require machine learning—simple heuristics can be sufficient in controlled conditions. However, in this case, the AI-powered approach achieved near-perfect accuracy, especially under variable lighting and environmental noise, underscoring the power of deep learning when precision and adaptability are critical." 
                            media={"/arjiomega.github.io/images/weld_gif.gif"}
                        />
                        {/* Right Box */}
                        <ProjectGenerator 
                            title="Interactive Puzzle Solving Using Hand Tracking and Spatial Analysis in OpenCV" 
                            description="Developed an interactive computer vision puzzle application using MediaPipe Hand Tracking and OpenCV. The system detects a user's hand via webcam and enables real-time manipulation of puzzle pieces. Each piece is continuously compared against all potential slots, and visual feedback is provided—turning a slot green when a piece is correctly positioned within its boundary. This project demonstrates spatial reasoning, gesture-based interaction, and efficient use of classic computer vision techniques to build intuitive, camera-driven experiences without reliance on heavy machine learning models." 
                            media={"/arjiomega.github.io/images/weld_gif.gif"}
                        />
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4 h-80">
                        {/* Left Box */}
                        <ProjectGenerator 
                            title="Simulated Model Decay and Retraining Pipeline for Store Sales Forecasting" 
                            description="Developed a simulation pipeline to model the effects of data and model drift on a store sales forecasting system. Historical sales data in CSV format was incrementally released at configurable intervals using Dagster for orchestration and ingested into Snowflake as the data warehouse. A model monitoring mechanism detects performance degradation or distributional drift, automatically triggering model retraining. This project demonstrates a robust, production-ready MLOps workflow to maintain model accuracy over time in a streaming data environment." 
                            media={"/arjiomega.github.io/images/weld_gif.gif"}
                        />
                        {/* Right Box */}
                        <ProjectGenerator 
                            title="Real-Time Driving Assistant with Distance Estimation and Localized Object Detection" 
                            description="This project showcases an intelligent driving assistant that leverages computer vision for real-time distance estimation between vehicles. A fine-tuned object detection model—trained on a custom Philippine driving dataset—detects cars under local lighting and weather conditions. Using OpenCV and geometric interpolation techniques, the system estimates vehicle distances by assuming calibrated bounding box dimensions at a known reference point. This assists in collision avoidance and enhances driver awareness in urban expressway settings." 
                            media={"/arjiomega.github.io/images/weld_gif.gif"}
                        />
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4 h-80">
                        {/* Left Box */}
                        <ProjectGenerator 
                            title="End-to-End Movie Management and Recommendation Platform" 
                            description="A full-stack web application built with Django for frontend and backend CRUD operations, containerized using Docker for portability and scalability. The platform integrates a robust data engineering pipeline powered by Apache Airflow to ingest and update movie data daily. PostgreSQL serves as the core database, validated with DBT and custom tests. A FastAPI-based microservice delivers real-time movie recommendations. This project highlights a modular, production-ready architecture combining web development, MLOps, and data engineering best practices." 
                            media={"/arjiomega.github.io/images/weld_gif.gif"}
                        />
                        {/* Right Box */}
                        <ProjectGenerator 
                            title="Robust Digit Classification via Classical ML and Data-Centric Optimization" 
                            description="This project explores digit classification using classical machine learning models (e.g., SVM, k-NN, Decision Trees), prioritizing interpretability and efficient training over deep learning complexity. Emphasis was placed on data-centric strategies, including the application of various image augmentation techniques to evaluate and enhance model generalization. A systematic grid search was conducted to optimize hyperparameters for each algorithm. This approach highlights how thoughtful preprocessing and tuning can drive significant performance gains, even without deep neural networks." 
                            media={"/arjiomega.github.io/images/weld_gif.gif"}
                        />
                    </div>

                </div>

            </div>


        
    )
}

export const MechanicalEngineeringProjects = () => {
    return (
      
            <div className="main-projects-container ME">

                <h1>Mechanical Engineering Projects</h1>

                <div className="flex flex-col gap-5 mb-10">
                    <div className="flex flex-col lg:flex-row gap-4 h-80">
                        {/* Left Box */}
                        <ProjectGenerator 
                            title=" Computational Fluid Dynamics-Based Parametric Optimization of Axial Fan Performance" 
                            description="This project explores the aerodynamic optimization of an axial fan using OpenFOAM to enhance volumetric flow rate. A parametric study was conducted by varying blade cross-sections—using NACA airfoil profiles—along with chord lengths and pitch angles. The computational domain replicates an experimentally validated setup to ensure realism. Simulations were designed to compare fan configurations and their effects on airflow characteristics, demonstrating how CFD can support data-driven design decisions in rotating machinery." 
                            media={"/arjiomega.github.io/images/weld_gif.gif"}
                        />
                        {/* Right Box */}
                        <ProjectGenerator 
                            title="Thermal Efficiency Optimization of Data Center Cooling Systems Using CFD" 
                            description="This project applies Computational Fluid Dynamics (CFD) to evaluate the impact of enclosure design on thermal management in data centers. Following ASHRAE thermal guidelines, two cooling configurations—one with containment and one without—were simulated under identical cooling capacities. The study revealed that enclosing hot and cold aisles significantly improved heat extraction, minimizing thermal recirculation and maintaining equipment within the optimal temperature range. The results underscore the critical role of architectural layout in enhancing cooling efficiency and ensuring uninterrupted server performance." 
                            media={"/arjiomega.github.io/images/weld_gif.gif"}
                        />
                    </div>


                    <div className="flex flex-col lg:flex-row gap-4 h-80">
                        {/* Left Box */}
                        <ProjectGenerator 
                            title="SolidWorks 3D Modeling of a Wankel Rotary Engine" 
                            description="" 
                            media={"/arjiomega.github.io/images/weld_gif.gif"}
                        />
                        {/* Right Box */}
                        <ProjectGenerator 
                            title="SolidWorks 3D Modeling of a Servo Motor" 
                            description="" 
                            media={"/arjiomega.github.io/images/weld_gif.gif"}
                        />
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4 h-80">
                        {/* Left Box */}
                        <ProjectGenerator 
                            title="Solidworks Floor Jack" 
                            description="" 
                            media={"/arjiomega.github.io/images/weld_gif.gif"}
                        />
                        {/* Right Box */}
                        <ProjectGenerator 
                            title="Solidworks DC Motor" 
                            description="" 
                            media={"/arjiomega.github.io/images/weld_gif.gif"}
                        />
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4 h-80">
                        {/* Left Box */}
                        <ProjectGenerator 
                            title="Solidworks V6 Engine" 
                            description="" 
                            media={"/arjiomega.github.io/images/weld_gif.gif"}
                        />
                    </div>

                </div>

            </div>


    )
}

export const Projects = () => {
    return (
        <div className="temporary" id="projects">
            <h1 className="title">Projects</h1>
            <div>
                <SoftwareAndMachineLearningEngineeringProjects/>
                <MechanicalEngineeringProjects/>    
            </div>
        </div>
    )
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
        <div className="border flex-grow w-full lg:w-1/2 h-60 flex-col-reverse lg:flex-row rounded flex justify-between overflow-hidden">
            <div className="flex w-full h-full flex-col gap-5 lg:w-1/2 p-5">
                <h2 className="font-bold text-xl">{title}</h2>
                <p className="text-sm font-medium ">{description}</p>
            </div>
            <div className="flex w-full h-full justify-center items-center lg:w-1/2 p-5">
                <Image
                    src={media}
                    alt="Example"
                    className="max-h-full max-w-full object-contain rounded"
                    width={20}
                    height={20}
                />
            </div>
        </div>
    )
}

export const ProjectsTemp = () => {
    return (
        <div className="flex flex-col gap-5 mb-10">
            <div className="flex flex-col lg:flex-row gap-4 h-80">
                {/* Left Box */}
                <ProjectGenerator 
                    title="Vision-Based Parking Lot Occupancy Detection with Classical and Deep Learning Approaches" 
                    description="Built a computer vision system to detect parking space occupancy using OpenCV, with two distinct approaches: a rule-based pixel counting method and a fine-tuned MobileNetV2 deep learning model. The project highlights that effective solutions don't always require machine learning—simple heuristics can be sufficient in controlled conditions. However, in this case, the AI-powered approach achieved near-perfect accuracy, especially under variable lighting and environmental noise, underscoring the power of deep learning when precision and adaptability are critical." 
                    media={"/images/weld_gif.gif"}
                />
                {/* Right Box */}
                <ProjectGenerator 
                    title="Interactive Puzzle Solving Using Hand Tracking and Spatial Analysis in OpenCV" 
                    description="Developed an interactive computer vision puzzle application using MediaPipe Hand Tracking and OpenCV. The system detects a user's hand via webcam and enables real-time manipulation of puzzle pieces. Each piece is continuously compared against all potential slots, and visual feedback is provided—turning a slot green when a piece is correctly positioned within its boundary. This project demonstrates spatial reasoning, gesture-based interaction, and efficient use of classic computer vision techniques to build intuitive, camera-driven experiences without reliance on heavy machine learning models." 
                    media={"/images/weld_gif.gif"}
                />
            </div>

            <div className="flex flex-col lg:flex-row gap-4 h-80">
                {/* Left Box */}
                <ProjectGenerator 
                    title="Simulated Model Decay and Retraining Pipeline for Store Sales Forecasting" 
                    description="Developed a simulation pipeline to model the effects of data and model drift on a store sales forecasting system. Historical sales data in CSV format was incrementally released at configurable intervals using Dagster for orchestration and ingested into Snowflake as the data warehouse. A model monitoring mechanism detects performance degradation or distributional drift, automatically triggering model retraining. This project demonstrates a robust, production-ready MLOps workflow to maintain model accuracy over time in a streaming data environment." 
                    media={"/images/weld_gif.gif"}
                />
                {/* Right Box */}
                <ProjectGenerator 
                    title="Real-Time Driving Assistant with Distance Estimation and Localized Object Detection" 
                    description="This project showcases an intelligent driving assistant that leverages computer vision for real-time distance estimation between vehicles. A fine-tuned object detection model—trained on a custom Philippine driving dataset—detects cars under local lighting and weather conditions. Using OpenCV and geometric interpolation techniques, the system estimates vehicle distances by assuming calibrated bounding box dimensions at a known reference point. This assists in collision avoidance and enhances driver awareness in urban expressway settings." 
                    media={"/images/weld_gif.gif"}
                />
            </div>

            <div className="flex flex-col lg:flex-row gap-4 h-80">
                {/* Left Box */}
                <ProjectGenerator 
                    title="End-to-End Movie Management and Recommendation Platform" 
                    description="A full-stack web application built with Django for frontend and backend CRUD operations, containerized using Docker for portability and scalability. The platform integrates a robust data engineering pipeline powered by Apache Airflow to ingest and update movie data daily. PostgreSQL serves as the core database, validated with DBT and custom tests. A FastAPI-based microservice delivers real-time movie recommendations. This project highlights a modular, production-ready architecture combining web development, MLOps, and data engineering best practices." 
                    media={"/images/weld_gif.gif"}
                />
                {/* Right Box */}
                <ProjectGenerator 
                    title="Robust Digit Classification via Classical ML and Data-Centric Optimization" 
                    description="This project explores digit classification using classical machine learning models (e.g., SVM, k-NN, Decision Trees), prioritizing interpretability and efficient training over deep learning complexity. Emphasis was placed on data-centric strategies, including the application of various image augmentation techniques to evaluate and enhance model generalization. A systematic grid search was conducted to optimize hyperparameters for each algorithm. This approach highlights how thoughtful preprocessing and tuning can drive significant performance gains, even without deep neural networks." 
                    media={"/images/weld_gif.gif"}
                />
            </div>

        </div>
        
    )
}