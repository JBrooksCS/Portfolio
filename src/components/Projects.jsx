import React, { Component } from 'react';
import "../styles/style.css"
import "../styles/shake.css"
import Arrow from "../images/yellowArrow.png"
import FF_icon from "../images/FF_icon.png"


class Projects extends Component {
    render() {
        return (

            <div className="projects">
                <hr />
                <div className="projectsHeader">
                    <h1>My Projects</h1>
                </div>
                <div className="FF_content">

                    <div className="FF_icon_and_header">
                        <a href="http://www.faceflex5000.com" style={{ textDecoration: "none" }} target="_blank" className="faceflex">FACEFLEX-5000</a>
                        <div className="arrowDiv">
                            <img className="arrow shake-horizontal shake-constant" src={Arrow} alt="" />
                        </div>
                        <h3 className="playMe " >Play Now</h3>
                        <img className="FF_icon" src={FF_icon} alt="game_snapshot" />
                    </div>
                    <div className="rightSide">
                        <p>Faceflex is a web game that uses facial-recognition technology to let users match as many celebrity expressions as they can in under a minute. </p>
                        <ul className="techList">
                            <li>React</li>
                            <li>Firebase</li>
                            <li>Facial Recognition</li>
                            <li>Realtime Database</li>
                            <li>CSS</li>
                            <li>HTML</li>

                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}

export default Projects;
