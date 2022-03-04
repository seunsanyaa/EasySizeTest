import logo from './logo.svg';
import './App.css';
import FirstWidget from "./components/FirstWidget/firstwidget";
import Modal from "./components/modal";
import React, {useState,useEffect} from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import jsonData from './data.json';


import Page2 from "./pages/page2";
import Home from "./components/home";
import SecondWidget from "./components/SecondWidget/secondwidget";

function Demo({ _img, _data }) {

    const { imageurl, attributes } = jsonData;
    const usingSplit = attributes.split(',');

    let randomattribute = usingSplit[Math.floor(Math.random()*usingSplit.length)];
    const [firstScreen, setFirstScreen] = useState(<></>);
    const [secondScreen, setSecondScreen] = useState(<></>);
    const [isSecond, setIsSecond] = useState(false);

    const setAllToFalse = () => {


        setSecondScreen(<></>);
        setFirstScreen(<></>);

    }

    useEffect(() => {
        setFirstScreen(<FirstWidget img={imageurl} setIsSecond={setIsSecond} isSecond={isSecond} /> );
        setSecondScreen(<SecondWidget data={randomattribute} setAllToFalse={setAllToFalse}  /> );
    },[_img,_data])

    return (
    <div className="App">
        {isSecond ? secondScreen : firstScreen}


    </div>
  );
}

export default Demo;
