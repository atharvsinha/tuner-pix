import barObject from "../components/barsObject";
import { stringObject } from "../components/strings";

const tunerChart = [82.41, 110, 146.83, 196, 246.94, 329.63];

const cents = (f1, f2) => 1200 * Math.log2(f2 / f1);

const notes = ["E", "A", "D", "G", "B", "E1"];

const barStructure = [
  {
    cent: 7.5,
    id: [8, 9],
    colorID: "#E58A8A",
    color: "D7D3D3;",
  },
  {
    cent: 12,
    id: [7, 8, 9],
    colorID: "#E58A8A",
    color: "D7D3D3;",
  },
  {
    cent: 18,
    id: [6, 7, 8, 9],
    colorID: "#E58A8A",
    color: "D7D3D3;",
  },
  {
    cent: 28,
    id: [5, 6, 7, 8, 9],
    colorID: "#E58A8A",
    color: "D7D3D3;",
  },
  {
    cent: 43,
    id: [4, 5, 6, 7, 8, 9],
    colorID: "#E58A8A",
    color: "D7D3D3;",
  },
  {
    cent: 67,
    id: [3, 4, 5, 6, 7, 8, 9],
    colorID: "#E58A8A",
    color: "D7D3D3;",
  },
  {
    cent: 104,
    id: [2, 3, 4, 5, 6, 7, 8, 9],
    colorID: "#E58A8A",
    color: "D7D3D3;",
  },
  {
    cent: 161,
    id: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    colorID: "#E58A8A",
    color: "D7D3D3;",
  },
  {
    cent: 247,
    id: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    colorID: "#E58A8A",
    color: "D7D3D3;",
  },
];

export const setValues = (pitch, clarity) => {
  const closest = tunerChart.reduce((prev, curr) =>
    Math.abs(curr - pitch) < Math.abs(prev - pitch) ? curr : prev
  );

  const noteIndex = tunerChart.indexOf(closest);
  const centVal = cents(closest, pitch);
  let textReturn = {};
  let stringReturn = [];
  const note = notes[noteIndex];

  if (clarity > 0.98 && pitch > 50) {
    stringObject.map((item) => {
      if (item.id == note) {
        stringReturn.push({
          id: note,
          text: note[0],
          className1: "outer",
          className2: "activeStrings",
        });
      } else stringReturn.push(item);
    });
    if (Math.abs(centVal) < 5) {
      textReturn = {
        instruction: "Congrats 🎉",
        text: "You tuned the guitar!",
        className: "onAudioRight",
        cents: centVal,
      };
    } else if (centVal < -5) {
      textReturn = {
        instruction: "Tighent the string a bit!",
        text: "Low",
        className: "onAudioWrong",
        cents: centVal,
      };
    } else if (centVal > 5) {
      textReturn = {
        instruction: "Loosen the string a bit!",
        text: "High",
        className: "onAudioWrong",
        cents: centVal,
      };
    }
  }
  //   barStructure.map((item)=>{

  //   })
  return { text: textReturn, string: stringReturn, cents: centVal };
};
