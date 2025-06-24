import React from "react";
import '../assets/css/header.css'
import '../assets/css/mediaheader.css'

const Hs = () => {
    return (
        <div className="education cus-shadow">

            <div className="education-top">
                <div className="experience-top-left">
                    <h1 className="position">Highschool</h1>
                    <h1 className="company">Al Jazeera International School - Dammam, Saudi Arabia</h1>
                </div>
                
                <div className="experience-top-right">
                    <h1>July 2012 - April 2015</h1>
                </div>
            </div>
        </div>
    )
}



const College = () => {
    return (
        <div className="education cus-shadow">

            <div className="education-top">
                <div className="experience-top-left">
                    <h1 className="position">BS in Mechanical Engineering</h1>
                    <h1 className="company">Colegio de San Juan de Letran - Calamba</h1>
                </div>
                
                <div className="experience-top-right">
                    <h1>June 2015 - November 2020</h1>
                </div>
            </div>
        </div>
    )
}




export const Education = () => {
    return (
        <div className="education-container">
            <h1 className="title">
                Education
            </h1>
            <div className="flex flex-col lg:flex-row educ-sidebyside">
                <College/>
                <Hs/>
            </div>
            
        </div>
    )
}