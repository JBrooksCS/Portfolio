import React, { Component } from 'react';
import "../styles/style.css"
import Me_Eclipse from "../images/Me_Eclipse.jpg"
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import Name from "./Name"

class TopBar extends Component {
    render() {
        return (
            <div className="TopBar">
                {/* <div> */}
                <Parallax className="profile_photo" y={[-80, 80]} >
                    <img src={Me_Eclipse} className="profile_photo" alt="" />
                    </ Parallax>
                {/* </div> */}
                <div className="header_div">
                    <Name />
                    <h3 className="title">Full-Stack Software Developer</h3>
                </div>
            </div>
        );
    }
}

export default TopBar;
