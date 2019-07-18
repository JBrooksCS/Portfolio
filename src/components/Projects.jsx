import React, { Component } from 'react';
import "../styles/projects.css"
import FF_icon from "../images/FF_icon.png"


class Projects extends Component {
    render() {
        return (
            <div className="projects">
                <hr/>
                <div className="projectsHeader">
                    <h1>My Projects</h1>
                </div>
                <img className="FF_icon" src={FF_icon} alt="game_snapshot"/>

            </div>
        );
    }
}

export default Projects;
