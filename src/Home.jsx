import React, { Component } from 'react';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import TopBar from "./components/TopBar"
import FirstBlock from "./components/FirstBlock"
import "./styles/style.css"
import JS from "./images/JS.svg"
import RCT from "./images/react.svg"
import CSHARP from "./images/Csharp.svg"
import DOTNET from "./images/dotnet.svg"
import HTML5 from "./images/html-5.svg"
import CSS3 from "./images/css-3.svg"

class Home extends Component {
    render() {

        return (
            <>
            
                <TopBar />
                

                <div className="techImages">
                    <img src={JS} alt=""/>
                    <img src={RCT} alt=""/>
                    <img src={CSHARP} alt=""/>
                    <img src={DOTNET} alt=""/>
                    <img src={HTML5} alt=""/>
                    <img src={CSS3} alt=""/>
                </div>

                <FirstBlock />


            </>
        )
    }
}
export default Home