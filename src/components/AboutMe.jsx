import React, { Component } from 'react';
import "../styles/style.css"
import resume_icon from "../images/resume.png"
import Me_Eclipse from "../images/Me_Eclipse.jpg"
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import github_icon from "../images/github_icon.svg"
import linkedin_icon from "../images/LinkedIn.svg"


class AboutMe extends Component {
    render() {
        return (<>

            <div className="aboutMe">

                <div className="bio">
                    <div className="meHeader">
                        <h1>Me</h1>
                    </div>
                </div>
                <div className="icon_row">
                    <div>
                        <img className="github_icon" src={github_icon} alt="" />
                    </div>
                    <div>
                        <img className="linkedin_icon" src={linkedin_icon} alt="" />
                    </div>
                    <div>
                        <img className="resumeIcon" src={resume_icon} alt="image_of_resume" />
                    </div>
                </div>

            </div>
        </>
        );
    }
}

export default AboutMe;
