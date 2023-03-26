import React from "react";
import {bank1} from "./App"

function Pad({handleClick, power, backgroundStyle, element, id }) {
    return (
      <button 
        data-tag={id}
        type='button'
        className='drum-pad' 
        onClick={handleClick} 
        id={bank1[element]} 
        disabled={!power} 
        style={{background: `${backgroundStyle}`}}>
        {element}
        <audio id={element} src={bank1[element].source} className='clip'></audio>
      </button>
    );
  }
  
  export default Pad ; 