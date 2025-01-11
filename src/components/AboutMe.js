import React from "react";
import '../assets/css/header.css'
import '../assets/css/mediaheader.css'

import ExperienceIcon from '../assets/experience.png';
import EducationIcon from '../assets/education.png';

export const AboutMe = () => {
    return (

    <div id="about">

        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>

        <div className="section-container">
            <div className="about-details-container">
                <div className="about-containers">
                    
                    <div className="details-container">
                        <div className="about-me-icon">
                            <img
                                src={ExperienceIcon}
                                alt="Experience icon"
                                className="icon"
                            />
                        </div>
                        
                        <h3>Experience</h3>

                        <div className="jobs">
                            <ul>
                                <li>
                                    <p>(July 2023 - Present) Omdena - Junior Machine Learning Engineer</p>
                                </li>
                                <li>
                                    <p>Freelance - Computational Fluid Dynamics Engineer</p>
                                </li>
                                <li>
                                    <p>Freelance - Mechanical Design Engineer</p>
                                </li>
                                <li>
                                <p>Nidec - Mechanical Design Intern</p>
                                </li>
                            </ul> 
                        </div>
                        

                        
                        
                        
                        


                    </div>

                    <div className="details-container">
                        <img
                            src={EducationIcon}
                            alt="Education icon"
                            className="icon"
                        />
                        <h3>Education</h3>
                        <p>BS Mechanical Engineering Degree</p>
                    </div>
                </div>
                <div className="text-container">
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
                    reprehenderit et laborum, rem, dolore eum quod voluptate
                    exercitationem nobis, nihil esse debitis maxime facere minus sint
                    delectus velit in eos quo officiis explicabo deleniti dignissimos.
                    Eligendi illum libero dolorum cum laboriosam corrupti quidem,
                    reiciendis ea magnam? Nulla, impedit fuga!
                    </p>
                </div>
            </div>


        </div>

    </div>
    )
};