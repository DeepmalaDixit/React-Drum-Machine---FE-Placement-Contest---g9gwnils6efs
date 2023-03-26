import React from "react";
import Pad from "./Pad";
import { bank1 } from "./App";

function Pads({ power, volume }) {
  const keypadCode = Object.keys(bank1);

  const playSound = (e) => {
    const audio = document.getElementById(e.target.innerText);
    audio.volume = volume;
    audio.currentTime = 0;
    audio.play();
    document.getElementById("display").innerText = bank1[e.target.innerText].name;
  };

  return (
    <div id="div-pads">
      {keypadCode.map((pad, idx) => {
        return (
          <Pad
            id={pad + idx}
            key={pad + idx}
            handleClick={playSound}
            element={pad}
            power={power}
          />
        );
      })}
      <div id="display">Play a sound!</div>
    </div>
  );
}

export default Pads;
