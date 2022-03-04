import logo from './logo.svg';
import './App.css';
import FirstWidget from "./components/FirstWidget/firstwidget";
import Modal from "./components/modal";
import {useState,useEffect} from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import jsonData from './data.json';


import Page2 from "./pages/page2";
import Home from "./components/home";
import SecondWidget from "./components/SecondWidget/secondwidget";

function Demo({ _img, _data }) {

    const { imageurl, attributes } = jsonData;

    const [firstScreen, setFirstScreen] = useState(<></>);
    const [secondScreen, setSecondScreen] = useState(<></>);
    const [isSecond, setIsSecond] = useState(false);

    const setAllToFalse = () => {
        setSecondScreen(<></>);
        setFirstScreen(<></>);
    }

    useEffect(() => {
        setFirstScreen(<FirstWidget img={imageurl} setIsSecond={setIsSecond} isSecond={isSecond} /> );
        setSecondScreen(<SecondWidget data={attributes} setAllToFalse={setAllToFalse}  /> );
    },[_img,_data])

    return (
    <div className="App">
        {isSecond ? secondScreen : firstScreen}

        {/* <Router>

            <Routes>
                <Route exact path='/' exact element={<Home image="http://localhost:63342/fe_test_task-master/public/images/red.png"/>} />

                <Route path='/page2' element={<SecondWidget data="seun"/>} />
            </Routes>
        </Router> */}





        {/*<FirstWidget/>*/}
    </div>
  );
}

export default Demo;
