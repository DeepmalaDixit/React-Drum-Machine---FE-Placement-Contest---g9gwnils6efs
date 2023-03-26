import React, { useState } from "react";
import "../styles/App.css";
import Pads from "./Pads";

export const bank1 = {
  Q: {
    name: "Heater 1",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  W: {
    name: "Heater 2",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  E: {
    name: "Heater 4",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  A: {
    name: "Heater 3",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  S: {
    name: "Clap",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  D: {
    name: "Open Hi-Hat",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  Z: {
    name: "Kick n Hat",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  X: {
    name: "Kick",
    source: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  C: {
    name: "Closed Hi-Hat",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
};

function ControlScreen({ power, togglePower, volume, setVolume }) {
  const handlePowerToggle = () => {
    togglePower(!power);
    setVolume(1);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  return (
    <div id="control-screen">
      <label id="label-power">
        <input
          type="checkbox"
          id="power"
          checked={power}
          onChange={handlePowerToggle}
        />
        <span className="checkmark">
          {power ? "Power ON" : "Power OFF"}
        </span>
      </label>
      <label id="label-volume">
        <input
          type="range"
          id="volume"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          disabled={!power}
        />
        <span id="volume-display">
          Volume: {Math.round(volume * 100)}%
        </span>
      </label>
    </div>
  );
}

function App() {
  const [power, setPower] = useState(false);
  const [volume, setVolume] = useState(1);

  const togglePower = (value) => {
    setPower(value);
  };

  return (
    <div id="drum-machine">
      <Pads power={power} volume={volume} />
      <ControlScreen
        power={power}
        togglePower={togglePower}
        volume={volume}
        setVolume={setVolume}
      />
    </div>
  );
}

export default App;
