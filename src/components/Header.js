import React from "react";
import { ReactTyped } from "react-typed";

import "../assets/css/header.css"
import "../assets/css/mediaheader.css"
import PortfolioImage from '../assets/profile-pic.png';
import LinkedinLogo from '../assets/linkedin.png';
import GithubLogo from '../assets/github.png';

import ResumeDoc from '../assets/RichardOmegaCV.pdf';

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
                <a href="docs.google.com/document/d/1DvjtjVf0adb5hN2vPMXTN6pvqKrzBZQicTSaz6_-uoU/export?format=pdf" download="RichardOmegaCV" target="_blank">
                    <button
                        className="btn btn-color-2"
                        >
                        Download CV
                    </button>
                </a>
                
                {/* <button className="btn btn-color-1" onClick="location.href='./#contact'">
                Contact Info
                </button> */}
            </div>

            <div id="socials-container">
                <img
                    src={GithubLogo}
                    alt="My GitHub profile"
                    className="icon"
                    onClick={() => window.open("https://github.com/arjiomega", "_blank")}
                    style={{ cursor: "pointer" }}
                />
                <img
                    src={LinkedinLogo}
                    alt="My LinkedIn profile"
                    className="icon"
                    onClick={() => window.open("https://www.linkedin.com/in/richardomega/", "_blank")}
                    style={{ cursor: "pointer" }}
                />
            </div>

        </div>
    </div>

    )
};