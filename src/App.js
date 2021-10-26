import "./App.css";
import guitarImg from "./img/GuitarHeadTuner.svg";
import String from "./components/strings";
import Button from "./components/button/button";
import { PitchDetector, Autocorrelator } from "pitchy";
import { audioContext } from "./components/button/button";
import { useState, useEffect } from "react";
import { setValues } from "./utils/utils";
import { stringObject } from "./components/strings";
import barObject from "./components/barsObject";

audioContext.suspend();

function App() {
  const [text, setText] = useState({
    instruction: "",
    text: "",
    className: "OnAudioInstruction",
  });
  const [stringData, setStringData] = useState(stringObject);
  const [bar, setBar] = useState(barObject);
  const analyserNode = audioContext.createAnalyser();

  useEffect(() => {
    getMedia();
  }, []);

  async function getMedia() {
    let stream = null;
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    audioContext.createMediaStreamSource(stream).connect(analyserNode);
    const detector = PitchDetector.forFloat32Array(analyserNode.fftSize);
    const input = new Float32Array(detector.inputLength);

    const getPitch = () => {
      analyserNode.getFloatTimeDomainData(input);
      const [pitch, clarity] = detector.findPitch(
        input,
        audioContext.sampleRate
      );
      const temp = setValues(pitch, clarity);
      if (
        temp.text.instruction !== undefined &&
        temp.text.text !== undefined &&
        temp.text.className !== undefined
      ) {
        setText({
          className: temp.text.className,
          text: temp.text.text,
          instruction: temp.text.instruction,
        });
        setStringData(temp.string);
      }
    };

    window.setInterval(() => getPitch(), 100);
  }

  // getMedia();

  return (
    <div className="Tuner" id="tuner">
      <div className="heading">Guitar Tuner</div>
      <Button />

      {stringData.map((item) => {
        return (
          <String
            key={item.id}
            id={item.id}
            text={item.text}
            className1={item.className1}
            className2={item.className2}
          />
        );
      })}
      {bar.map((item) => {
        return (
          <div className={item.className} id={item.id} style={item.style}></div>
        );
      })}
      <div className={text.className}>{text.text}</div>
      <div className="onAudioInstruction">{text.instruction}</div>
      <img className="guitarImg" src={guitarImg} alt="Guitar Icon" />
    </div>
  );
}

export default App;
