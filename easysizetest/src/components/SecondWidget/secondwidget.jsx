import React, {useEffect, useState,useRef} from "react";


function SecondWidget({ setAllToFalse , data }) {



  setInterval(() => {
    const details = document.getElementById('details')
    details.style.display='flex'
  }, 2002);


  setTimeout(() => {
    const box = document.getElementById('hidden');
    box.style.display = 'none';

  }, 2000);


    return (
      <div className="overlayDivSecond" >
        <div className="secondPageDiv">

          <div id="details">

            {/*<form action="/demo.js" method="post">*/}

            <h1> {data} </h1>






            <button  onClick={setAllToFalse}>

              Select me
            </button>

            {/*</form>*/}


          </div>
          <div id="hidden">
            <img src="https://c.tenor.com/zP8THQcabS8AAAAM/gordon-ramsay-choice.gif" />
          </div>

        </div>
      </div>
    );
}

export default SecondWidget;
