"use client"
import Image from 'next/image';
import React from "react";
import "../../styles/header.css"
import "../../styles/mediaheader.css"

// import LinkedinLogo from 'arjiomega.github.io/linkedin.png';


export const Contacts = () => {
    return (

        <div id="contacts">
            <h1 className="title">Contact Me</h1>

            <div className="contacts-container">
                <div className="contacts-content">
                    <Image
                        src={"/email.png"} className="icon"
                        alt="Email Icon"
                        width={20} height={20}
                    />
                    <p>richardjoseph.omega@gmail.com</p>
                </div>


                <div className="contacts-content">
                    <Image
                        src={"/linkedin.png"}
                        alt="My LinkedIn profile"
                        width={20}
                        height={20}
                        className="icon"
                        onClick={() => window.open("https://www.linkedin.com/in/richardomega/", "_blank")}
                        style={{ cursor: "pointer" }}
                    />
                    <p>Linkedin</p>
                </div>
                
               
            </div>

        </div>

        
    )
}