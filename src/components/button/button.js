import { initialState, onClickState, onEnterHover } from "./buttonData";
import { useState } from "react";

export const AudioContext = window.AudioContext || window.webkitAudioContext;
export const audioContext = new AudioContext();

export default function Button() {
  const [startButton, setStartButton] = useState(initialState);
  const handleClick = () => {
    setStartButton(onClickState);
    if (audioContext.state === "suspended") {
      audioContext.resume();
      console.log("Started reading audio");
    } else console.log("not started");
  };
  const handleEnterHover = () => {
    setStartButton(onEnterHover);
  };
  const handleLeaveHover = () => {
    if (startButton !== onClickState) {
      setStartButton(initialState);
    }
  };

  return (
    <>
      <button
        className="audioStartButton"
        onClick={handleClick}
        onMouseLeave={handleLeaveHover}
        onMouseEnter={handleEnterHover}
        style={startButton.style}
      >
        {startButton.text}
      </button>
    </>
  );
}
