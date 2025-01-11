import React from "react";
import '../assets/css/header.css'
import '../assets/css/mediaheader.css'
import * as Icons from '../assets/techstackicons/index.js';

const TechItem = ({src, text}) => {
    return (
        <div className="skill-content">
            <div>
                <img src={src} className="icon" alt={text}/>
            </div>
            {text !== '' && 
                (
                    <div>
                        <p>{text}</p>
                    </div>
                )
            }
        </div>
    )
}

export const Skills = () => {
    return(

    <div id="skills">
        <h1 className="title">Skills</h1>

        <div className="skills-container-custom">

            <div className="skills-custom cus-shadow">
                <div>
                    <h1>Languages</h1>
                    <div className="IconsContainer">
                        <TechItem src={Icons.PythonLogo} text={'Python'}/>
                        <TechItem src={Icons.HTMLIcon} text={'HTML and CSS'}/>
                        <TechItem src={Icons.JavascriptLogo} text={'Javascript'}/>
                    </div>
                </div>
            </div>

            <div className="skills-custom cus-shadow">
                <div>
                    <h1>Backend/API Development</h1>
                    <div className="IconsContainer">
                        <TechItem src={Icons.DjangoLogo} text={'Django'}/>
                        <TechItem src={Icons.FastAPILogo} text={'FastAPI'}/>
                    </div>
                    
                </div>
            </div>

            <div className="skills-custom cus-shadow">
                <div>
                    <h1>Cloud Computing</h1>
                    <div className="IconsContainer">
                        <TechItem src={Icons.PaperspaceIcon} text={'Paperspace'}/>
                        <TechItem src={Icons.AWSIcon} text={''}/>
                    </div>
                    
                </div>
            </div>


            <div className="skills-custom cus-shadow">

                <div>
                    <h1>Development and Tools</h1>
                    <div className="IconsContainer">
                        <TechItem src={Icons.DockerLogo} text={'Docker'}/>
                        <TechItem src={Icons.PSQLLogo} text={'PostgreSQL'}/>
                        <TechItem src={Icons.GitIcon} text={'Git (Code Version Control)'}/>
                        <TechItem src={Icons.GithubActionsLogo} text={'Github Actions (CI/CD)'}/>
                        <TechItem src={Icons.VSCodeIcon} text={'VS Code'}/>
                    </div>
                </div>

            </div>

            

            <div className="skills-custom cus-shadow">   
                <div>
                    <h1>Machine Learning / Data Science</h1>
                    <div className="IconsContainer">
                        <TechItem src={Icons.TensorflowLogo} text={'TensorFlow'}/>
                        <TechItem src={Icons.PythonLogo} text={'Python'}/>
                        <TechItem src={Icons.OpenCVIcon} text={'OpenCV'}/>
                        <TechItem src={Icons.SKLearnIcon} text={'Scikit-Learn'}/>
                        <TechItem src={Icons.NumpyIcon} text={'Numpy'}/>
                        <TechItem src={Icons.MatplotlibIcon} text={''}/>
                        <TechItem src={Icons.SeabornLogo} text={''}/>
                        <TechItem src={Icons.MLFlowLogo} text={''}/>
                        <TechItem src={Icons.DvcLogo} text={''}/>
                        <TechItem src={Icons.PandasLogo} text={''}/>
                        <TechItem src={Icons.DagshubLogo} text={''}/>
                    </div>
                </div>
            </div>
        </div>

    </div>

    

    )
};

export const temp = () => {
    return (
        <div className="test">
        
            


            <div>
                <h1>Development and Tools</h1>
                <div className="IconsContainer">
                    <TechItem src={Icons.DockerLogo} text={'Docker'}/>
                    <TechItem src={Icons.PSQLLogo} text={'PostgreSQL'}/>
                    <TechItem src={Icons.GitIcon} text={'Git (Code Version Control)'}/>
                    <TechItem src={Icons.GithubActionsLogo} text={'Github Actions (CI/CD)'}/>
                    <TechItem src={Icons.VSCodeIcon} text={'VS Code'}/>
                </div>
            </div>

            <div>
                <h1>Cloud Computing</h1>
                <div className="IconsContainer">
                    <TechItem src={Icons.PaperspaceIcon} text={'Paperspace'}/>
                    <TechItem src={Icons.AWSIcon} text={''}/>
                </div>
                
            </div>

            
        </div>
    )
}