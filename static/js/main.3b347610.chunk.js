(this.webpackJsonptuner=this.webpackJsonptuner||[]).push([[0],{22:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),s=n(10),r=n.n(s),c=n(5),o=n.n(c),u=n(11),l=n(3),d=(n(22),n.p+"static/media/GuitarHeadTuner.558f62e0.svg"),g=n(0),x=[];["E","A","D","G","B","E1"].forEach((function(t){x.push({id:t,text:t.charAt(0),className1:"strings",className2:"random"})}));var p=x,h=String=function(t){var e=t.id,n=t.text,a=t.className1,i=t.className2;return Object(g.jsx)("div",{className:a,id:e,children:Object(g.jsx)("div",{className:i,children:n})})},m={text:"Start Tuning!",style:{backgroundImage:"linear-gradient(to left, lightblue, lightgreen)",border:"transparent",height:"100px",width:"300px",fontFamily:'"Source Sans Pro", sans-serif',fontStyle:"normal",fontWeight:"300",fontSize:" 35px",lineHeight:" 35px",textAlign:" center",color:"#5a5a5f",padding:"20px",marginLeft:" 50px",marginRight:" 50px",borderRadius:" 10px",marginTop:"30px"}},f={text:"",style:{border:"0px",height:"0px",width:"0px",fontWeight:0,fontSize:0,lineHeight:0,paddingLeft:0,paddingRight:0,marginLeft:0,marginRight:0,borderRadius:0}},b={text:"Start Tuning!",style:{border:"transparent",height:"100px",width:"300px",fontFamily:'"Source Sans Pro", sans-serif',fontStyle:"normal",fontWeight:"300",fontSize:" 35px",lineHeight:" 35px",textAlign:" center",color:"#49494e",padding:"20px",marginLeft:" 50px",marginRight:" 50px",borderRadius:" 10px",cursor:"pointer",animationName:"buttons",animationDuration:".5s",animationIterationCount:"1",marginTop:"30px",backgroundColor:"#fcfcfc"}},j=new(window.AudioContext||window.webkitAudioContext);function N(){var t=Object(a.useState)(m),e=Object(l.a)(t,2),n=e[0],i=e[1],s=Object(a.useState)(""),r=Object(l.a)(s,2),c=(r[0],r[1]);return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("button",{className:"audioStartButton",onClick:function(){i(f),"suspended"===j.state?(j.resume(),console.log("Started reading audio")):console.log("not started"),c("Pluck a string!")},onMouseLeave:function(){n!==f&&i(m)},onMouseEnter:function(){i(b)},style:n.style,children:n.text})})}j.suspend();var v=n(12),O=[];[1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1].forEach((function(t){1===t?O.push({id:O.length,value:t,className:"bars".concat(t),style:{position:"absolute",width:" 6px",height:" 80px",top:" 205px",background:" #cecece",left:"".concat(21*O.length+18,"px")}}):O.push({id:O.length,value:t,className:"bars".concat(t),style:{position:"absolute",width:" 6px",height:" 40px",top:" 225px",background:" #cecece",left:"".concat(21*O.length+18,"px")}})}));var S=O,w=[82.41,110,146.83,196,246.94,329.63],y=["E","A","D","G","B","E1"],A=function(t,e){var n,a,i=w.reduce((function(e,n){return Math.abs(n-t)<Math.abs(e-t)?n:e})),s=w.indexOf(i),r=(n=i,a=t,1200*Math.log2(a/n)),c={},o=[],u=y[s];return e>.97&&t>50&&(p.map((function(t){t.id==u?o.push({id:u,text:u[0],className1:"outer",className2:"activeStrings"}):o.push(t)})),Math.abs(r)<7.5?c={instruction:"Congrats \ud83c\udf89",text:"You tuned the guitar!",className:"onAudioRight"}:r<-7.5?c={instruction:"Tighent the string a bit!",text:"Low",className:"onAudioWrong"}:r>7.5&&(c={instruction:"Loosen the string a bit!",text:"High",className:"onAudioWrong"})),{text:c,string:o}};j.suspend();var k=function(){var t=Object(a.useState)({instruction:"",text:"",className:"OnAudioInstruction"}),e=Object(l.a)(t,2),n=e[0],i=e[1],s=Object(a.useState)(p),r=Object(l.a)(s,2),c=r[0],x=r[1],m=Object(a.useState)(S),f=Object(l.a)(m,2),b=f[0],O=(f[1],j.createAnalyser());function w(){return(w=Object(u.a)(o.a.mark((function t(){var e,n,a,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=null,t.next=3,navigator.mediaDevices.getUserMedia({audio:!0});case 3:e=t.sent,j.createMediaStreamSource(e).connect(O),n=v.a.forFloat32Array(O.fftSize),a=new Float32Array(n.inputLength),s=function(){O.getFloatTimeDomainData(a);var t=n.findPitch(a,j.sampleRate),e=Object(l.a)(t,2),s=e[0],r=e[1],c=A(s,r);void 0!==c.text.instruction&&void 0!==c.text.text&&void 0!==c.text.className&&(i({className:c.text.className,text:c.text.text,instruction:c.text.instruction}),x(c.string))},window.setInterval((function(){return s()}),100);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){w.apply(this,arguments)}()}),[]),Object(g.jsxs)("div",{className:"Tuner",id:"tuner",children:[Object(g.jsx)("div",{className:"heading",children:"Guitar Tuner"}),Object(g.jsx)(N,{}),c.map((function(t){return Object(g.jsx)(h,{id:t.id,text:t.text,className1:t.className1,className2:t.className2},t.id)})),b.map((function(t){return Object(g.jsx)("div",{className:t.className,id:t.id,style:t.style})})),Object(g.jsx)("div",{className:n.className,children:n.text}),Object(g.jsx)("div",{className:"onAudioInstruction",children:n.instruction}),Object(g.jsx)("img",{className:"guitarImg",src:d,alt:"Guitar Icon"})]})};r.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(k,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.3b347610.chunk.js.map