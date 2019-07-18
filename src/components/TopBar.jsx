import React, { Component } from 'react';
import "../styles/style.css"
import Me_Eclipse from "../images/Me_Eclipse.jpg"
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import Name from "./Name"
import Title from "./Title"

class TopBar extends Component {
    render() {
        return (
            <div className="TopBar">

                <div className="header_div">
                    <Name />
                    <Title />


                </div>
            </div>
        );
    }
}

export default TopBar;
