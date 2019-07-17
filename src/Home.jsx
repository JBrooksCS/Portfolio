import React , {Component}from 'react';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import TopBar from "./components/TopBar"
import FirstBlock from "./components/FirstBlock"

class Home extends Component {



    render(){

        return(
            <>
            <TopBar />
            <FirstBlock />

            </>
        )
    }
}
export default Home