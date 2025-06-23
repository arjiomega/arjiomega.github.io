import React from "react";
import "../assets/css/header.css";
import "../assets/css/mediaheader.css";

import EmailIcon from "../assets/email.png";
import LinkedinIcon from "../assets/linkedin.png";

export const Contacts = () => {
    return (
        <div id="contacts">
            <h1 className="title">Contact Me</h1>

            <div className="contacts-container">
                {/* Email */}
                <div className="contacts-content">
                    <img src={EmailIcon} className="icon" alt="Email Icon" />
                    <p>richardjoseph.omega@gmail.com</p>
                </div>

                {/* LinkedIn */}
                <div className="contacts-content">
                    <a 
                        href="https://www.linkedin.com/in/richardomega/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="contact-link"
                    >
                        <img src={LinkedinIcon} className="icon" alt="LinkedIn Icon" />
                        <p>LinkedIn</p>
                    </a>
                </div>
            </div>
        </div>
    );
};
