import React from "react";
import "../assets/css/header.css"
import "../assets/css/mediaheader.css"

import EmailIcon from "../assets/email.png"
import LinkedinIcon from "../assets/linkedin.png"

export const Contacts = () => {
    return (

        <div id="contacts">
            <h1 className="title">Contact Me</h1>

            <div className="contacts-container">
                <div className="contacts-content">
                    <img src={EmailIcon} className="icon" />
                    <p>richardjoseph.omega@gmail.com</p>
                </div>


                <div className="contacts-content">
                    <img src={LinkedinIcon} className="icon" />
                    <p>Linkedin</p>
                </div>
                
               
            </div>

        </div>

        
    )
}