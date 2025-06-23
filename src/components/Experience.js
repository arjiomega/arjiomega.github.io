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
                - Enhanced models for defect detection in the Welding Defect Detection Project and soil nutrient prediction 
                in the Soil Nutrient Prediction for Enhanced Fertilizer Recommendations Project through cross-disciplinary expertise. <br/>
                - Conducted research and data analysis to integrate advanced ML techniques and key features in both projects.<br/>
                - Improved data preparation and model debugging through data-driven strategies and optimized workflows.<br/>
                - Led data gathering and annotation, ensuring data integrity and addressing mislabeling risks. <br/>
                - Developed and refined models, enhancing accuracy and efficiency in detection and nutrient recommendations. <br/>
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
                - Delivered advanced CFD simulations, specializing in vehicle drag reduction, turbomachinery optimization, 
                and complex thermodynamic challenges. <br/>
                - Optimized simulation efficiency through mesh refinement studies, reducing computational costs by identifying 
                the minimal cell count required for accurate results without compromising data fidelity. <br/>
                - Provided expertise in numerical solvers, turbulence models, wall functions, and result verification and validation, 
                ensuring high-quality and reliable simulations.  
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
                - Designed and developed 3D mechanical models for outsourced jigs and machine parts, ensuring alignment with client specifications. <br/>
                - Prepared and refined mechanical models for use in engineering simulations, enhancing accuracy and performance in CFD and other analytical processes. <br/>
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