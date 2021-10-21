import './App.css';
import guitarImg from './img/GuitarHeadTuner.svg'
import Strings from './components/strings';
import OnAudioText from './components/onAudioText';
import Bars from './components/bars';
import updatePitch from './utils';
import { PitchDetector} from 'pitchy';

function App() {

  navigator.mediaDevices.getUserMedia({audio:true})
  document.addEventListener("DOMContentLoaded", () => {
    
    
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();
    const analyserNode = audioContext.createAnalyser();
    
    document.querySelector('div.Tuner').addEventListener('click', function() {
    if (audioContext.state === 'suspended') {
        audioContext.resume();
        console.log('Started reading audio')
    } }, false);

    

    

    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        let sourceNode = audioContext.createMediaStreamSource(stream);
        sourceNode.connect(analyserNode);
        const detector = PitchDetector.forFloat32Array(analyserNode.fftSize);
        const input = new Float32Array(detector.inputLength);
        updatePitch(analyserNode, detector, input, audioContext.sampleRate);
    });
});

  return (
    <div className="Tuner" id="tuner">
      <h3 className="tuner-heading">Guitar Tuner</h3>
      <OnAudioText />
      <Strings/>
      <Bars/>
      <img className="guitarImg" src={guitarImg} alt="Guitar Icon"/>
               
    </div>

  );
}

export default App;
 