(this["webpackJsonpreact-caesar-cipher"]=this["webpackJsonpreact-caesar-cipher"]||[]).push([[0],{42:function(e,t,n){e.exports={title:"App_title__-GfWs",leftColumn:"App_leftColumn__4grSf",rightColumn:"App_rightColumn__3zBPS"}},44:function(e,t,n){e.exports={cipherMessageInput:"CipherMessageInput_cipherMessageInput__1XQ5S"}},53:function(e,t,n){e.exports={cipherOuterDisk:"CipherDisks_cipherOuterDisk__1-_lb"}},77:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(10),c=n(57),i=n(120),s=n(121),o=n(56),l=n(25),h=n(118),j=n(105),u=n(119),d=n(123),b=n(113),f=n(108),O=n(109),m=n(110),x=n(111),p=n(4);function g(e){return Object(p.jsxs)(j.a,{container:!0,spacing:1,justify:"center",children:[Object(p.jsx)(j.a,{item:!0,children:Object(p.jsx)(f.a,{variant:"contained",color:"primary",startIcon:Object(p.jsx)(O.a,{}),onClick:e.onClockwiseRotation,children:"Im Uhrzeigersinn"})}),Object(p.jsx)(j.a,{item:!0,children:Object(p.jsx)(f.a,{variant:"contained",color:"primary",startIcon:Object(p.jsx)(m.a,{}),onClick:e.onCounterClockwiseRotation,children:"Gegen den Uhrzeigersinn"})}),Object(p.jsx)(j.a,{item:!0,children:Object(p.jsx)(f.a,{variant:"contained",color:"secondary",startIcon:Object(p.jsx)(x.a,{}),onClick:e.onReset,children:"Auf Anfang"})})]})}var C=n(112),v=n(125),y=n.p+"static/media/CipherInnerDisk.bc459879.png",k=n(53),_=n.n(k),A=Object(C.a)((function(){return Object(v.a)({rotated:{transform:function(e){return"rotate(".concat(e.angleDeg,"deg)")}}})}));function I(e){var t=A(e);return Object(p.jsx)(d.a,{className:_.a.cipherOuterDisk,children:Object(p.jsx)("img",{src:y,alt:"Chiffrierscheibe",width:"100%",height:"auto",className:t.rotated})})}var w,N=n(124),L=n(114),S=n(117),D=n(115),M=n(116),F=n(122);!function(e){e[e.encrypt=0]="encrypt",e[e.decrypt=1]="decrypt"}(w||(w={}));var R=n(54),z=n(55),E="Z".charCodeAt(0)-"A".charCodeAt(0)+1,T=function(){function e(t){Object(R.a)(this,e),this.shift=t}return Object(z.a)(e,[{key:"transformMessage",value:function(e){var t=this;return Array.from(e).map((function(e){return t.tryTransformLetter(e)})).join("")}},{key:"tryTransformLetter",value:function(e){return/[A-Z]/.test(e)?this.transformLatinLetter(e,"A"):/[a-z]/.test(e)?this.transformLatinLetter(e,"a"):e}},{key:"transformLatinLetter",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"A",n=t.charCodeAt(0),r=(e.charCodeAt(0)-n+this.shift)%E;return r=r>=0?r:E+r,String.fromCharCode(n+r)}}]),e}(),V=n(44),B=n.n(V);function G(e){var t=r.useState(""),n=Object(l.a)(t,2),a=n[0],c=n[1],i=e.direction===w.encrypt,s=new T(i?e.shift:-e.shift);return Object(p.jsxs)(d.a,{padding:"1rem 0",children:[Object(p.jsx)(d.a,{margin:"1rem 0",children:Object(p.jsx)(F.a,{className:B.a.cipherMessageInput,value:a,onChange:function(e){return c(e.target.value)},label:"Geheime Nachricht",placeholder:"Hier kannst du deine geheime Nachricht eingeben.",variant:"outlined",rows:5,multiline:!0})}),Object(p.jsx)(d.a,{margin:"1rem 0",children:Object(p.jsx)(F.a,{className:B.a.cipherMessageInput,value:s.transformMessage(a),variant:"outlined",label:i?"Verschl\xfcsselte Nachricht":"Entschl\xfcsselte Nachricht",rows:5,multiline:!0,disabled:!0})})]})}function P(e){var t=r.useState(w.encrypt),n=Object(l.a)(t,2),a=n[0],c=n[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(N.a,{value:a,onChange:function(e,t){return c(t)},variant:"fullWidth",indicatorColor:"primary",children:[Object(p.jsx)(L.a,{icon:Object(p.jsx)(D.a,{}),label:"Verschl\xfcsseln",value:w.encrypt}),Object(p.jsx)(L.a,{icon:Object(p.jsx)(M.a,{}),label:"Entschl\xfcsseln",value:w.decrypt})]}),Object(p.jsx)(G,{shift:e.shift,direction:a}),Object(p.jsx)(S.a,{badgeContent:e.shift,color:"secondary",showZero:!0,children:Object(p.jsx)(d.a,{fontWeight:"bold",children:"Anzahl Verschiebungen"})})]})}var W=n(42),Z=n.n(W);function J(){var e=360/E,t=r.useState(0),n=Object(l.a)(t,2),a=n[0],c=n[1],i=r.useState(0),s=Object(l.a)(i,2),o=s[0],f=s[1];return Object(p.jsx)(h.a,{fixed:!0,children:Object(p.jsxs)(j.a,{container:!0,spacing:2,children:[Object(p.jsx)(j.a,{item:!0,xs:12,children:Object(p.jsx)(u.a,{variant:"h4",component:"h1",children:Object(p.jsx)(d.a,{className:Z.a.title,children:"Caesar-Verschl\xfcsselung"})})}),Object(p.jsx)(j.a,{item:!0,xs:12,children:Object(p.jsx)(g,{onClockwiseRotation:function(){var t=(a-1)%E;c(t>=0?t:E+t),f((o+e)%360)},onCounterClockwiseRotation:function(){c((a+1)%E),f((o-e)%360)},onReset:function(){c(0),f(0)}})}),Object(p.jsx)(j.a,{item:!0,xs:12,md:6,children:Object(p.jsx)(b.a,{className:Z.a.leftColumn,children:Object(p.jsx)(I,{angleDeg:o})})}),Object(p.jsx)(j.a,{item:!0,xs:12,md:6,children:Object(p.jsx)(b.a,{className:Z.a.rightColumn,children:Object(p.jsx)(P,{shift:a})})})]})})}var U,H=Object(c.a)({},o.deDE);a.render(Object(p.jsx)(r.StrictMode,{children:Object(p.jsx)(i.a,{theme:H,children:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(s.a,{}),Object(p.jsx)(J,{})]})})}),document.getElementById("root")),U&&U instanceof Function&&n.e(3).then(n.bind(null,127)).then((function(e){var t=e.getCLS,n=e.getFID,r=e.getFCP,a=e.getLCP,c=e.getTTFB;t(U),n(U),r(U),a(U),c(U)}))}},[[77,1,2]]]);
//# sourceMappingURL=main.ca72c5b2.chunk.js.map