import React from "react";
import { ReactTyped } from "react-typed";

import "../assets/css/header.css"
import "../assets/css/mediaheader.css"
import PortfolioImage from '../assets/profile-pic.png';
import LinkedinLogo from '../assets/linkedin.png';
import GithubLogo from '../assets/github.png';



export const Header = () => {
    return (

    <div id="profile" className="mb-20">
        <div className="section__pic-container">
            <img src={PortfolioImage}
            alt="Richard Joseph Omega profile picture"
            style={{borderRadius: '50%'}}
            />
        </div>
        
        <div className="section__text">
            <p className="section__text__p1">Hello, I'm</p>
            <h1 className="title">Richard Joseph Omega</h1>
            <p className="section__text__p2">{" "}
                <ReactTyped
                    strings={["Mechanical","Computational Fluid Dynamics", "Machine Learning"]}
                    typeSpeed={20}
                    loop
                    backSpeed={10}
                />
            </p>
            <p className="section__text__p2 p2_bottom">Engineer</p>
            <div className="btn-container">
                <button
                className="btn btn-color-2"
                onClick="window.open('./assets/resume-example.pdf')"
                >
                Download CV
                </button>
                <button className="btn btn-color-1" onClick="location.href='./#contact'">
                Contact Info
                </button>
            </div>

            <div id="socials-container">
                <img
                src={GithubLogo}
                alt="My LinkedIn profile"
                className="icon"
                onClick="location.href='https://www.linkedin.com/in/richardomega/'"
                />
                <img
                src={LinkedinLogo}
                alt="My Github profile"
                className="icon"
                onClick="location.href='https://github.com/arjiomega'"
                />
            </div>

        </div>
    </div>

    )
};