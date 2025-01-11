import React from "react";
import '../assets/css/header.css'
import '../assets/css/mediaheader.css'

const MLE_Job = () => {
    return (
        <div className="experience cus-shadow">

            <div className="experience-top">
                <div className="experience-top-left">
                    <h1 className="position">Machine Learning Engineer</h1>
                    <h1 className="company">Omdena</h1>
                </div>
                
                <div className="experience-top-right">
                    <h1>July 2023 - Present</h1>
                </div>
            </div>
            
            <div className="experience-description">
                <p>
                - Contribute mechanical engineering knowledge in welding <br/>
                - Help further team's knowledge in different ML techniques done in weld
                defect detection by researching scientific papers regarding the problem<br/>
                - Introduced the importance of preparing subclasses of target data 
                (data-driven machine learning model debugging) <br/>
                - Contibute in data annotation and shared the dangers of mishandling labeled data online <br/>
                </p>
            </div>

        </div>
    )
}



const CFD_Job = () => {
    return (
        <div className="experience cus-shadow">

            <div className="experience-top">
                <div className="experience-top-left">
                    <h1 className="position">Computational Fluid Dynamics Engineer</h1>
                    <h1 className="company">Freelance</h1>
                </div>
                
                <div className="experience-top-right">
                    <h1>November 2020 - July 2023</h1>
                </div>
            </div>
            
            <div className="experience-description">
                <p>
                - Provides assistance in computational fluid dynamics simulation models 
                (numerical solver, turbulence models, wall functions, mesh fineness,
                    verification, and validation of results) <br/>
                - Specializes in vehicle drag reduction system, fan optimization, thermodynamics related problems <br/>
                - Solve the cost related issue in CFD since it is known as one of the most 
                    computationally expensive solution by doing mesh refinement study to find minimum 
                    possible cell count that produces reasonable results before doing further optimization.
                </p>
            </div>

        </div>
    )
}

const MD_Job = () => {
    return (
        <div className="experience cus-shadow">

            <div className="experience-top">
                <div className="experience-top-left">
                    <h1 className="position">Mechanical Design Engineer</h1>
                    <h1 className="company">Freelance</h1>
                </div>
                
                <div className="experience-top-right">
                    <h1>March 2018 - July 2023</h1>
                </div>
            </div>
            
            <div className="experience-description">
                <p>
                - Design 3D mechanical models (outsourced jigs / machine parts) <br/>
                - Prepare and clean up models for engineering simulation purposes <br/>
                </p>
            </div>

        </div>
    )
}



export const Experience = () => {
    return (
        <div className="experience-container">
            <h1 className="title">
                Experience
            </h1>
            <MLE_Job/>
            <CFD_Job/>
            <MD_Job/>
        </div>
    )
}