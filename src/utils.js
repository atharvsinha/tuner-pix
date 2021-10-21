import {Frequency} from "music-math";

const tunerChart = {
    'E': 82.41, 
    'A':110,
    'D':146.83,
    'G':196,
    'B':246.94,
    'E1':329.63
}

const cents = (f1, f2) =>{
    return 1200*Math.log2(f2/f1)
}

export default function updatePitch(analyserNode, detector, input, sampleRate) {
    analyserNode.getFloatTimeDomainData(input);
    const [pitch, clarity] = detector.findPitch(input, sampleRate);
    const notes = Frequency(pitch).note
    
    let centObj = [
        {note:'E', value:cents(tunerChart.E, pitch)},        
        {note:'A', value:cents(tunerChart.A, pitch)},        
        {note:'D', value:cents(tunerChart.D, pitch)},        
        {note:'G', value:cents(tunerChart.G, pitch)},        
        {note:'B', value:cents(tunerChart.B, pitch)},        
        {note:'E1', value:cents(tunerChart.E1, pitch)}          
    ]  
    let minV=99999;
    let val;
    centObj.map((item)=>{
        if (item.value < minV && item.value>0){
            val = item;
            minV = item.value
        } else if (item.value<0 && item.value> (minV*-1)){
            val = item;
            minV = item.value
        }
    })
    try{
        if (clarity>.95 && pitch>50 && val.value>5 ){
        document.querySelector('div.onAudioText').textContent = `High! Loosen the string a bit, Note-${val.note}`
        document.querySelector('div.onAudioText').style.color = 'red'
    } else if (clarity>.95 && pitch>50 && val.value<-5 ){
        document.querySelector('div.onAudioText').textContent = `Low! Tighten the string a bit, Note-${val.note}`
        document.querySelector('div.onAudioText').style.color = 'red'
    }else if (clarity>.95){
        document.querySelector('div.onAudioText').textContent = `Congrats 🎉, Note-${val.note}`
        document.querySelector('div.onAudioText').style.color = 'Green'
    }} catch{
        console.warn("Coudln't read audio // Audio not active yet")
    }
    

    window.setTimeout( () => updatePitch(analyserNode, detector, input, sampleRate), 100);
};

