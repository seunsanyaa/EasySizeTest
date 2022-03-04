import { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom'
import { SpinnerCircular } from 'spinners-react';
function FirstWidget({ img, setIsSecond, isSecond }) {

    return (
        <div className="overlayDiv" >
            <div className="firstImageDiv">

                <img className="productImage" src={`${img}`} />


                <button onClick={()=> setIsSecond(!isSecond)} >
                    Surprise me
                </button>




            </div>
        </div>
    );
}

export default FirstWidget;
