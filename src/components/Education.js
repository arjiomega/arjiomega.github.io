import React from "react";
import '../assets/css/header.css';
import '../assets/css/mediaheader.css';
import PropTypes from 'prop-types';

const EducationCard = ({ title, institution, duration }) => {
    return (
        <div className="education cus-shadow">
            <div className="education-top">
                <div className="experience-top-left">
                    <h1 className="position">{title}</h1>
                    <h2 className="company">{institution}</h2>
                </div>
                <div className="experience-top-right">
                    <p>{duration}</p>
                </div>
            </div>
        </div>
    );
};

EducationCard.propTypes = {
    title: PropTypes.string.isRequired,
    institution: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
};

const educationData = [
    { title: "Highschool", institution: "Al Jazeera International School - Dammam, Saudi Arabia", duration: "July 2012 - April 2015" },
    { title: "BS in Mechanical Engineering", institution: "Colegio de San Juan de Letran - Calamba", duration: "June 2015 - November 2020" },
];

export const Education = () => {
    return (
        <div className="education-container">
            <h1 className="title">Education</h1>
            <div className="educ-sidebyside">
                {educationData.map((edu, index) => (
                    <EducationCard
                        key={index}
                        title={edu.title}
                        institution={edu.institution}
                        duration={edu.duration}
                    />
                ))}
            </div>
        </div>
    );
};
