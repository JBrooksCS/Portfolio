import React, { Component } from 'react';
import "../styles/aboutMe.css"
import resume_icon from "../images/resume.png"
import Me_Eclipse from "../images/Me_Eclipse.jpg"
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';

class AboutMe extends Component {
    render() {
        return (<>

            <div className="aboutMe">
            <div>
                <div className="bio">
                    <div className="meHeader">
                        <h1>Me</h1>
                    </div>
                </div>
                </div>
                <div className="resume">
                    <img className="resumeIcon" src={resume_icon} alt="image_of_resume" />
                </div>
            </div>
        </>
        );
    }
}

export default AboutMe;
