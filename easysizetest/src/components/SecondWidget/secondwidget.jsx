import {useEffect, useState,useRef} from "react";

import { SpinnerCircular } from 'spinners-react';
function SecondWidget({ setAllToFalse , data }) {
  //
  // let attributes
  // let randomattribute = attributes[Math.floor(Math.random()*attributes.length)];


  setInterval(() => {
    const details = document.getElementById('details')
    details.style.display='flex'
  }, 2002);


  setTimeout(() => {
    const box = document.getElementById('hidden');
    box.style.display = 'none';

  }, 2000);
  //
  // function selectMe(){
  //
  // }




  // document.getElementById("_1234").checked = true;
    return (
      <div className="overlayDivSecond" >
        <div className="secondPageDiv">

          <div id="details">



            <h1>{data}</h1>



            {/*<img   className="attribute" src="https://c.tenor.com/zP8THQcabS8AAAAM/gordon-ramsay-choice.gif"/>*/}
            {/*/!**attribute/}*/}


            <button onClick={setAllToFalse} >

              Select me
            </button>


          </div>
          <div id="hidden">
            <img src="https://c.tenor.com/zP8THQcabS8AAAAM/gordon-ramsay-choice.gif" />
          </div>

        </div>
      </div>
    );
}

export default SecondWidget;
