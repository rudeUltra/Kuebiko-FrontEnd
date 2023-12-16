// import logo from './logo.svg';
import React from "react";
import Main from './components/main';
import './App.css';
import { HashRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
 

  return (
    <HashRouter>
        <Main />
    </HashRouter>
  )
}

export default App;
