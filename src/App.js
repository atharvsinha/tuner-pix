import "./App.css";
import guitarImg from "./img/GuitarHeadTuner.svg";
import String from "./components/strings";
import Button from "./components/button/button";
import { PitchDetector } from "pitchy";
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
    className: "onNull",
  });
  const [stringData, setStringData] = useState(stringObject);

  useEffect(() => {
    getMedia();
  }, []);
  const analyserNode = audioContext.createAnalyser();
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
          cents: temp.text.cents,
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

      {stringData.map((items) => {
        return (
          <String
            key={items.id}
            id={items.id}
            text={items.text}
            className1={items.className1}
            className2={items.className2}
          />
        );
      })}
      {barObject.map((item) => {
        if (Math.abs(text.cents) <= 5)
          return (
            <div
              className={item.className}
              style={{ backgroundColor: "#64B936" }}
            ></div>
          );
        else if (text.cents < -5) {
          if (text.cents > -7) {
            if (Number(item.id) === 8 || Number(item.id) === 9)
              return (
                <div
                  className={item.className}
                  style={{ backgroundColor: "#E58A8A" }}
                ></div>
              );
            else
              return (
                <div
                  className={item.className}
                  style={{ backgroundColor: "#D7D3D3" }}
                ></div>
              );
          } else if (text.cents > -37) {
            if (item.id >= 7 && item.id <= 9)
              return (
                <div
                  className={item.className}
                  style={{ backgroundColor: "#E58A8A" }}
                ></div>
              );
            else
              return (
                <div
                  className={item.className}
                  style={{ backgroundColor: "#D7D3D3" }}
                ></div>
              );
          } else if (text.cents > -67) {
            if (Number(item.id) <= 9 && Number(item.id) >= 6)
              return (
                <div
                  className={item.className}
                  style={{ backgroundColor: "#E58A8A" }}
                ></div>
              );
            else
              return (
                <div
                  className={item.className}
                  style={{ backgroundColor: "#D7D3D3" }}
                ></div>
              );
          } else if (text.cents > -97) {
            if (Number(item.id) <= 9 && Number(item.id) >= 5)
              return (
                <div
                  className={item.className}
                  style={{ backgroundColor: "#E58A8A" }}
                ></div>
              );
            else
              return (
                <div
                  className={item.className}
                  style={{ backgroundColor: "#D7D3D3" }}
                ></div>
              );
          } else if (text.cents > -127) {
            if (Number(item.id) <= 9 && Number(item.id) >= 4)
              return (
                <div
                  className={item.className}
                  style={{ backgroundColor: "#E58A8A" }}
                ></div>
              );
            else
              return (
                <div
                  className={item.className}
                  style={{ backgroundColor: "#D7D3D3" }}
                ></div>
              );
          } else if (text.cents > -157) {
            if (Number(item.id) <= 9 && Number(item.id) >= 3)
              return (
                <div
                  className={item.className}
                  style={{ backgroundColor: "#E58A8A" }}
                ></div>
              );
            else
              return (
                <div
                  className={item.className}
                  style={{ backgroundColor: "#D7D3D3" }}
                ></div>
              );
          } else if (text.cents > -187) {
            if (Number(item.id) <= 9 && Number(item.id) >= 2)
              return (
                <div
                  className={item.className}
                  style={{ backgroundColor: "#E58A8A" }}
                ></div>
              );
            else
              return (
                <div
                  className={item.className}
                  style={{ backgroundColor: "#D7D3D3" }}
                ></div>
              );
          } else if (text.cents > -217) {
            if (Number(item.id) <= 9 && Number(item.id) >= 1)
              return (
                <div
                  className={item.className}
                  style={{ backgroundColor: "#E58A8A" }}
                ></div>
              );
            else
              return (
                <div
                  className={item.className}
                  style={{ backgroundColor: "#D7D3D3" }}
                ></div>
              );
          } else if (text.cents < -217) {
            if (Number(item.id) <= 9 && Number(item.id) >= 0)
              return (
                <div
                  className={item.className}
                  style={{ backgroundColor: "#E58A8A" }}
                ></div>
              );
            else
              return (
                <div
                  className={item.className}
                  style={{ backgroundColor: "#D7D3D3" }}
                ></div>
              );
          }
        } else if (text.cents > 5) {
          if (text.cents < 7) {
            if (Number(item.id) <= 10 && Number(item.id) >= 9)
              return (
                <div
                  className={item.className}
                  style={{ backgroundColor: "#E58A8A" }}
                ></div>
              );
            else
              return (
                <div
                  className={item.className}
                  style={{ backgroundColor: "#D7D3D3" }}
                ></div>
              );
          } else if (text.cents < 37) {
            if (item.id >= 9 && item.id <= 11)
              return (
                <div
                  className={item.className}
                  style={{ backgroundColor: "#E58A8A" }}
                ></div>
              );
            else
              return (
                <div
                  className={item.className}
                  style={{ backgroundColor: "#D7D3D3" }}
                ></div>
              );
          } else if (text.cents < 67) {
            if (Number(item.id) <= 12 && Number(item.id) >= 9)
              return (
                <div
                  className={item.className}
                  style={{ backgroundColor: "#E58A8A" }}
                ></div>
              );
            else
              return (
                <div
                  className={item.className}
                  style={{ backgroundColor: "#D7D3D3" }}
                ></div>
              );
          } else if (text.cents < 97) {
            if (Number(item.id) <= 13 && Number(item.id) >= 9)
              return (
                <div
                  className={item.className}
                  style={{ backgroundColor: "#E58A8A" }}
                ></div>
              );
            else
              return (
                <div
                  className={item.className}
                  style={{ backgroundColor: "#D7D3D3" }}
                ></div>
              );
          } else if (text.cents < 127) {
            if (Number(item.id) <= 14 && Number(item.id) >= 9)
              return (
                <div
                  className={item.className}
                  style={{ backgroundColor: "#E58A8A" }}
                ></div>
              );
            else
              return (
                <div
                  className={item.className}
                  style={{ backgroundColor: "#D7D3D3" }}
                ></div>
              );
          } else if (text.cents < 157) {
            if (Number(item.id) <= 15 && Number(item.id) >= 9)
              return (
                <div
                  className={item.className}
                  style={{ backgroundColor: "#E58A8A" }}
                ></div>
              );
            else
              return (
                <div
                  className={item.className}
                  style={{ backgroundColor: "#D7D3D3" }}
                ></div>
              );
          } else if (text.cents < 187) {
            if (Number(item.id) <= 16 && Number(item.id) >= 9)
              return (
                <div
                  className={item.className}
                  style={{ backgroundColor: "#E58A8A" }}
                ></div>
              );
            else
              return (
                <div
                  className={item.className}
                  style={{ backgroundColor: "#D7D3D3" }}
                ></div>
              );
          } else if (text.cents < 217) {
            if (Number(item.id) <= 17 && Number(item.id) >= 9)
              return (
                <div
                  className={item.className}
                  style={{ backgroundColor: "#E58A8A" }}
                ></div>
              );
            else
              return (
                <div
                  className={item.className}
                  style={{ backgroundColor: "#D7D3D3" }}
                ></div>
              );
          } else if (text.cents > 217) {
            if (Number(item.id) <= 18 && Number(item.id) >= 9)
              return (
                <div
                  className={item.className}
                  style={{ backgroundColor: "#E58A8A" }}
                ></div>
              );
            else
              return (
                <div
                  className={item.className}
                  style={{ backgroundColor: "#D7D3D3" }}
                ></div>
              );
          }
        }
        return <div className={item.className}></div>;
      })}
      <div className={text.className}>{text.text}</div>
      <div className="onAudioInstruction">{text.instruction}</div>

      <img className="guitarImg" src={guitarImg} alt="Guitar Icon" />
    </div>
  );
}

export default App;
