(this.webpackJsonpsouthparkpops=this.webpackJsonpsouthparkpops||[]).push([[0],{31:function(A,D){A.exports=["babyfarkmcgeezax","bono","butters","cartman","chef","clyde","craig","mrgarrison","gerald","ike","jesus","jimbo","jimmy","kenny","kyle","leslie","liane","mrmackey","michael","mimsy","mrslave","nathan","pcprincipal","phillip","randy","saddam","satan","santa","scott","michaeljackson","sheila","shelly","stan","stephen","stuart","timmy","token","tomcruise","tuonglukim","tweek","pcvictoria","wendy"]},51:function(A,D,M){"use strict";M.r(D);var g=M(0),I=M.n(g),w=M(12),E=M.n(w),Q=M(21),e=M(76),x=M(88),a=M(79),t=M(80),y=M(78),c=M(30),n=M.n(c),i=M(3),C=Object(e.a)({play:{color:"black",fontSize:"40px",display:"relative",position:"absolute"},stop:{color:"black",fontSize:"35px",display:"relative",position:"absolute"},button:{textAlign:"center",alignContent:"center",display:"inline",marginLeft:"40%"}});function B(A){var D=C(),M=Object(g.useRef)();return Object(i.jsxs)("div",{className:D.button,children:[Object(i.jsx)("audio",{ref:M,src:A.audio}),Object(i.jsx)(y.a,{children:Object(i.jsx)(n.a,{className:D.play,onClick:function(){for(var A=document.querySelectorAll("audio"),D=0;D<A.length;D++)A[D].paused||A[D].load();M.current.play()}})})]})}var r=Object(e.a)({root:{maxWidth:200,border:"black",borderStyle:"solid"},media:{height:10,border:"blue"},input:{borderColor:"black",borderRadius:5,width:"130px",display:"inline",margin:"10px 0px 10px 10px",textAlign:"center",opacity:"10"},image:{position:"relative",backgroundColor:"white",textAlign:"center",display:"inline-block",margin:"10px",border:"solid"},number:{display:"inline",border:"solid",borderRadius:"50%",margin:"0px 0px 0px 10px",padding:"3px 5px 3px 5px",fontSize:"24px"},player:{}});function l(A){var D=r(),M=Object(g.useState)("white"),I=Object(Q.a)(M,2),w=I[0],E=I[1],e=Object(g.useState)(0),y=Object(Q.a)(e,2),c=y[0],n=y[1];return Object(g.useEffect)((function(){E(0===c?"white":1===c?"green":"red")}),[c]),Object(i.jsx)(x.a,{className:D.root,children:Object(i.jsxs)(a.a,{style:{backgroundColor:w},children:[Object(i.jsx)(t.a,{className:D.media,style:{backgroundColor:w}}),Object(i.jsx)("span",{className:D.number,children:1===A.number.toString().length?"0".concat(A.number.toString()):A.number}),Object(i.jsx)("div",{className:D.image,children:1===c?Object(i.jsx)("img",{src:"".concat("/southparkpops","/assets/images/").concat(A.image),alt:"corretImage",width:"130px",height:"auto"}):Object(i.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA8gAAAN7CAYAAACZDLPZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADZmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjEgNjQuMTQwOTQ5LCAyMDEwLzEyLzA3LTEwOjU3OjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjAxODAxMTc0MDcyMDY4MTE5NUZFQzU4MjZDQkQ2MzMxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkUwODNCREEyNTU0RjExRTNBMDM3OThBQ0IzRDZEMDUzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkUwODNCREExNTU0RjExRTNBMDM3OThBQ0IzRDZEMDUzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgTWFjaW50b3NoIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjFFQkQ1NzUxMTIwNjgxMTg4QzY4ODA3NjY4MTlBNjMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTk1RkVDNTgyNkNCRDYzMzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4V37KCAAAAIXRFWHRDcmVhdGlvbiBUaW1lADIwMTc6MDc6MTkgMTY6NTI6NDFVbPzrAAATQklEQVR4Xu3XMQEAIAzAsIF/z9ADFyRPNXSdDAAAAHxuvwIAAMDXDDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADEIAMAAEAMMgAAAMQgAwAAQAwyAAAAxCADAABADDIAAADMzAWuFgryKNdiAwAAAABJRU5ErkJggg==",alt:"blankImage",width:"130px",height:"auto"})}),Object(i.jsx)("div",{children:Object(i.jsx)(B,{className:D.player,audio:"".concat("/southparkpops","/assets/audio/").concat(A.audio)})}),Object(i.jsx)("input",{className:D.input,onChange:function(D){return function(A,D){var M=A.target.value.toUpperCase();n(""===M?0:M===D?1:-1)}(D,A.answer)}})]})})}var s=M(31);var o=[];M.n(s).a.forEach((function(A){var D=A.toUpperCase();o.push({image:"".concat(A,".png"),audio:"".concat(A,".mp3"),answer:D})}));var b=function(A){for(var D=A.length,M=[];D>0;){var g=A[Math.floor(Math.random()*(D-1))];M.push(g),A.splice(A.indexOf(g),1),D--}return M}(o),p=M(82),d=M(84),u=M(86),m=M(81),j=M(83),h=M(85),O=Object(e.a)({container:{alignContent:"center",width:"960px"},table:{width:""},td:{width:"0px",margin:"0px",padding:0}});function N(){for(var A=O(),D=b.length/6,M=[],g=[0,1,2,3,4,5],I=0;I<D;I++)M.push(I);return console.log(M),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(m.a,{className:A.container,children:Object(i.jsxs)(p.a,{children:[Object(i.jsx)(j.a,{}),Object(i.jsx)(d.a,{children:M.map((function(D){return Object(i.jsx)(h.a,{children:g.map((function(M){return Object(i.jsx)(u.a,{className:A.td,children:Object(i.jsx)(l,{answer:b[6*D+M].answer,image:b[6*D+M].image,audio:b[6*D+M].audio,number:6*D+M+1})})}))})}))})]})})})}var k=Object(e.a)({app:{},header:{alignContent:"center",textAlign:"center",margin:"20px 50px 0px 0px"},body:{alignContent:"center",margin:"20px 0px 0px 250px"},title:{fontSize:36},text:{fontSize:16}});var v=function(){var A=k();return Object(i.jsxs)("div",{className:A.app,children:[Object(i.jsxs)("header",{className:A.header,children:[Object(i.jsx)("h1",{className:A.title,children:" South Park Pops "}),Object(i.jsx)("h3",{className:A.text,children:" Descubra a qual personagem pertence cada uma das falas a seguir"})]}),Object(i.jsx)("body",{className:A.body,children:Object(i.jsx)(N,{})})]})};E.a.render(Object(i.jsx)(I.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.ff260c86.chunk.js.map