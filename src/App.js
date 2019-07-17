import React , {Component}from 'react';
import logo from './logo.svg';
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import Home from "./Home"

class App extends Component {
  render(){
  return (
      <ParallaxProvider>
    <Home />
      </ParallaxProvider>
  );
  }
}

export default App;
