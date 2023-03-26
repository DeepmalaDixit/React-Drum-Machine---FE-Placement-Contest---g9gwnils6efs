import React from "react";
import Pad from "./Pad";
import {bank1} from "./App"


function Pads() {
    const keypadCode = Object.keys(bank1);


    const playSound = e => {
    }


    return (
      <div id='div-pads'>
        {keypadCode.map((pad, idx) => {
          console.log(pad + idx)
          return (
            <Pad
              id={pad+idx}
              key={pad+idx}
              handleClick={playSound}
              element={pad} />
          );
        })}
        <div id='display'> Show the name of current audio here </div>  
      </div>
    )
  }

  export default Pads ; 