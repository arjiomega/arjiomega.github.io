import React from "react";


import "../assets/css/header.css"
import "../assets/css/mediaheader.css"

import * as Image from '../assets/images/index'

const ProjectImage = ({img_url}) => {
    return (
        <div className="project-image">
            <img src={img_url}/>
        </div>
    )
}


const ProjectText = ({title,description, repo_url}) => {
    return (
        <div className="project-text">

            <div className="project-text-title">
                <h1>{title}</h1>

                {(repo_url) && (
                    <a href={repo_url}>
                        <img className="custom-button" src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"/>
                    </a>
                    
                )}
            </div>
            
            <p>{description}</p>
        </div>
    )
}


const Project = ({img_url,title,description,repo_url = false}) => {
    return (
        <div className="project cus-shadow">
            <ProjectImage img_url={img_url}/>
            <ProjectText title={title} description={description} repo_url={repo_url}/>
            
        </div>
    )
}

export const SoftwareAndMachineLearningEngineeringProjects = () => {
    return (


            <div className="main-projects-container SMLE">
                <h1>Software and Machine Learning Projects</h1>

                <div className="projects-container">

                <Project 
                    img_url = {Image.ParkingLotGif}
                    title = "Parking Lot Availability Counter using Pixel Count"
                    description = "This is a parking lot availability counter that counts white pixels in 
                                    the designated regions containing a lot. Number of pixels is manually set
                                    and noise in the region can affect the performance.
                                    "
                    repo_url = "https://github.com/arjiomega/CarPark_ComputerVision"
                />

                <Project 
                    img_url = {Image.ParkingLotMLImg}
                    title = "Parking Lot Availability using Image Classification"
                    description = "This uses a pretrained MobileNetv2 connected with fully connected layers.
                                    It performs better but can be more computationally expensive. Performance can still be
                                    improved in terms of accuracy by adding more data.
                                    "
                    repo_url = "https://github.com/arjiomega/Parking-Lot-Availability-CNN-Classification"
                />

                <Project 
                    img_url = {Image.PuzzleCvGif}
                    title = "Computer Vision Puzzle"
                    description = "A computer vision project using mediapipe to detect a user's hand through a camera. 
                                    Each puzzle pieces is compared with all puzzle slots and if it passes the condition
                                    where the puzzle piece 1 as an example is within the boundaries of puzzle slot 1, puzzle slot turns
                                    green.
                                    "
                    repo_url = "https://github.com/arjiomega/ComputerVision_Puzzle"
                />

                <Project 
                    img_url = {Image.StoreSalesForecastingGif}
                    title = "Store Sales Forecasting Model Decay Simulation"
                    description = "Simulate monthly incoming data every minute or as set in the cron schedule using 
                                    dagster for orchestration and snowflake. Model retraining will be triggered after 
                                    detecting data and/or model drift.
                                    "
                    repo_url = "https://github.com/arjiomega/Store-Sales-Forecasting-Model-Decay-Simulation"
                />

                <Project 
                    img_url = {Image.NumberPredictorImg}
                    title = "Number Predictor Web App"
                    description = "Predicts what the user writes in the Streamlit Web App using the trained model.
                                    "
                    repo_url = "https://github.com/arjiomega/number-predictor"
                />

                <Project 
                    img_url = {Image.CatDogGif}
                    title = "Cat and Dog Semantic Segmentation"
                    description = "Implementation of Debugging set introduced by Cassie Kozyrkov of Google to 
                                    get a better understanding of model performance in subclass level and 
                                    also to better understand data to model relationship for data preparation 
                                    phase. Implemented the model as mentioned on the paper. 
                                    "
                    repo_url = "https://github.com/arjiomega/cat-vs-dog-multiclass-semantic-segmentation"
                />

                <Project 
                    img_url = {Image.RecommenderImg}
                    title = "Django Web App and Movie Recommendation System"
                    description = "Get a list of recommended movies included the last ones based on the movies you have already
                                    watched. Content-based filtering was used to make it possible to include new movies in the system.
                                    "
                    repo_url = "https://github.com/arjiomega/django_project"
                />

                </div>

            </div>


        
    )
}

export const MechanicalEngineeringProjects = () => {
    return (
      
            <div className="main-projects-container ME">

                <h1>Mechanical Engineering Projects</h1>

                <div className="projects-container">

                    <Project 
                        img_url = {Image.FanOptimizationImg}
                        title = "Fan Optimization Study"
                        description = "Fan parametric optimization was done with the intention of maximizing 
                                        volume flow rate by comparing different variations of a generic fan such as
                                        its cross-sectional shape which is NACA airfoil, chord length, and angles.
                                        Computational domain was based on an experimental research paper.
                                        "
                    />

                    <Project 
                        img_url = {Image.DataCenterCoolingImg}
                        title = "Data Center Cooling"
                        description = "Data Center is a critical part in our society since it is where the servers
                                        are stored. Imagine if servers shutdown because of overheating, accessing different
                                        websites will be a problem. American Society of Heating, Refrigerating and Air-Conditioning Engineers
                                        or ASHRAE provided some standard such as the right temperature the data centers should be kept.
                                        In this Computational Fluid Dynamics Simulation, different setups of data center was done with the same
                                        cooling capacity. It was seen that heat was easily removed from the room by installing an enclosure which can
                                        be seen on the right side of the image.
                                        "
                    />

                    <Project 
                        img_url = {Image.WankelImg}
                        title = "Solidworks Wankel Engine"
                        description = ""
                    />

                    <Project 
                        img_url = {Image.ServoMotorImg}
                        title = "Solidworks Servo Motor"
                        description = ""
                    />

                    <Project 
                        img_url = {Image.FloorJackImg}
                        title = "Solidworks Floor Jack"
                        description = ""
                    />

                    <Project 
                        img_url = {Image.EngineGif}
                        title = "Solidworks V6 Engine"
                        description = ""
                    />

                    <Project 
                        img_url = {Image.DCMotorImg}
                        title = "Solidworks DC Motor"
                        description = ""
                    />


                </div>

            </div>


    )
}

export const Projects = () => {
    return (
        <div className="temporary">
            <h1 className="title">Projects</h1>
            <div>
                <SoftwareAndMachineLearningEngineeringProjects/>
                <MechanicalEngineeringProjects/>    
            </div>
        </div>
    )
}

export const AllTemp = () => {
    return (
        <div className="temporary">

            <section>
            <h1 className="title">Projects</h1>

            
            <div className="main-projects-container ME">

                <h1>Mechanical Engineering Projects</h1>

                <div className="projects-container">

                    <Project 
                        img_url = {Image.FanOptimizationImg}
                        title = "Fan Optimization Study"
                        description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Sed condimentum arcu erat, sed porta ipsum malesuada tristique. 
                                        Quisque interdum convallis ligula, sit amet tempor nisl tempor ut. 
                                        Etiam scelerisque mattis sem sed rhoncus. Maecenas ac molestie magna. 
                                        Mauris sodales, metus vitae egestas ullamcorper, ligula velit viverra
                                        est, id vestibulum elit est ut eros."
                    />

                    <Project 
                        img_url = {Image.DataCenterCoolingImg}
                        title = "Data Center Cooling"
                        description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Sed condimentum arcu erat, sed porta ipsum malesuada tristique. 
                                        Quisque interdum convallis ligula, sit amet tempor nisl tempor ut. 
                                        Etiam scelerisque mattis sem sed rhoncus. Maecenas ac molestie magna. 
                                        Mauris sodales, metus vitae egestas ullamcorper, ligula velit viverra
                                        est, id vestibulum elit est ut eros."
                    />

                    <Project 
                        img_url = {Image.EngineGif}
                        title = "Solidworks V6 Engine"
                        description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Sed condimentum arcu erat, sed porta ipsum malesuada tristique. 
                                        Quisque interdum convallis ligula, sit amet tempor nisl tempor ut. 
                                        Etiam scelerisque mattis sem sed rhoncus. Maecenas ac molestie magna. 
                                        Mauris sodales, metus vitae egestas ullamcorper, ligula velit viverra
                                        est, id vestibulum elit est ut eros."
                    />

                    <Project 
                        img_url = {Image.WankelImg}
                        title = "Solidworks Wankel Engine"
                        description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Sed condimentum arcu erat, sed porta ipsum malesuada tristique. 
                                        Quisque interdum convallis ligula, sit amet tempor nisl tempor ut. 
                                        Etiam scelerisque mattis sem sed rhoncus. Maecenas ac molestie magna. 
                                        Mauris sodales, metus vitae egestas ullamcorper, ligula velit viverra
                                        est, id vestibulum elit est ut eros."
                    />

                    <Project 
                        img_url = {Image.DCMotorImg}
                        title = "Solidworks DC Motor"
                        description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Sed condimentum arcu erat, sed porta ipsum malesuada tristique. 
                                        Quisque interdum convallis ligula, sit amet tempor nisl tempor ut. 
                                        Etiam scelerisque mattis sem sed rhoncus. Maecenas ac molestie magna. 
                                        Mauris sodales, metus vitae egestas ullamcorper, ligula velit viverra
                                        est, id vestibulum elit est ut eros."
                    />

                    <Project 
                        img_url = {Image.ServoMotorImg}
                        title = "Solidworks Servo Motor"
                        description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Sed condimentum arcu erat, sed porta ipsum malesuada tristique. 
                                        Quisque interdum convallis ligula, sit amet tempor nisl tempor ut. 
                                        Etiam scelerisque mattis sem sed rhoncus. Maecenas ac molestie magna. 
                                        Mauris sodales, metus vitae egestas ullamcorper, ligula velit viverra
                                        est, id vestibulum elit est ut eros."
                    />

                    <Project 
                        img_url = {Image.FloorJackImg}
                        title = "Solidworks Floor Jack"
                        description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Sed condimentum arcu erat, sed porta ipsum malesuada tristique. 
                                        Quisque interdum convallis ligula, sit amet tempor nisl tempor ut. 
                                        Etiam scelerisque mattis sem sed rhoncus. Maecenas ac molestie magna. 
                                        Mauris sodales, metus vitae egestas ullamcorper, ligula velit viverra
                                        est, id vestibulum elit est ut eros."
                    />

                </div>

            </div>

            <div className="main-projects-container SMLE">
                <h1>Software and Machine Learning Projects</h1>

                <div className="projects-container">

                <Project 
                    img_url = {Image.ParkingLotGif}
                    title = "Parking Lot Availability Counter using Pixel Count"
                    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed condimentum arcu erat, sed porta ipsum malesuada tristique. 
                                    Quisque interdum convallis ligula, sit amet tempor nisl tempor ut. 
                                    Etiam scelerisque mattis sem sed rhoncus. Maecenas ac molestie magna. 
                                    Mauris sodales, metus vitae egestas ullamcorper, ligula velit viverra
                                    est, id vestibulum elit est ut eros."
                    showRepo = {true}
                />

                <Project 
                    img_url = {Image.ParkingLotMLImg}
                    title = "Parking Lot Availability using Image Classification"
                    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed condimentum arcu erat, sed porta ipsum malesuada tristique. 
                                    Quisque interdum convallis ligula, sit amet tempor nisl tempor ut. 
                                    Etiam scelerisque mattis sem sed rhoncus. Maecenas ac molestie magna. 
                                    Mauris sodales, metus vitae egestas ullamcorper, ligula velit viverra
                                    est, id vestibulum elit est ut eros."
                    showRepo = {true}
                />

                <Project 
                    img_url = {Image.PuzzleCvGif}
                    title = "Computer Vision Puzzle"
                    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed condimentum arcu erat, sed porta ipsum malesuada tristique. 
                                    Quisque interdum convallis ligula, sit amet tempor nisl tempor ut. 
                                    Etiam scelerisque mattis sem sed rhoncus. Maecenas ac molestie magna. 
                                    Mauris sodales, metus vitae egestas ullamcorper, ligula velit viverra
                                    est, id vestibulum elit est ut eros."
                    showRepo = {true}
                />


                <Project 
                    img_url = {Image.RecommenderImg}
                    title = "Movie Recommendation System"
                    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed condimentum arcu erat, sed porta ipsum malesuada tristique. 
                                    Quisque interdum convallis ligula, sit amet tempor nisl tempor ut. 
                                    Etiam scelerisque mattis sem sed rhoncus. Maecenas ac molestie magna. 
                                    Mauris sodales, metus vitae egestas ullamcorper, ligula velit viverra
                                    est, id vestibulum elit est ut eros."
                    showRepo = {true}
                />

                </div>

            </div>




            <h1 className="title">Test</h1>
            </section>

        

        </div>
    )
}