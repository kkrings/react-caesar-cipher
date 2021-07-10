(this["webpackJsonpreact-caesar-cipher"]=this["webpackJsonpreact-caesar-cipher"]||[]).push([[0],{37:function(e,t,n){e.exports={title:"CipherAppBar_title__TH8C9",infoMenu:"CipherAppBar_infoMenu__gEnxW"}},46:function(e,t,n){e.exports={cipherMessageInput:"CipherMessageInput_cipherMessageInput__1XQ5S"}},47:function(e,t,n){e.exports={column:"App_column__17gO4"}},58:function(e,t,n){e.exports={cipherOuterDisk:"CipherDisks_cipherOuterDisk__1-_lb"}},83:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(11),a=n(62),i=n(130),s=n(131),o=n(61),l=n(18),j=n(128),h=n(129),u=n(84),b=n(116),d=n(117),O=n(115),p=n(113),x=n(119),f=n(118),g=n(120),m=n(133),C=n(114),v=n(37),k=n.n(v),y=n(3);function A(e){return Object(y.jsxs)(u.a,{className:k.a.infoMenu,children:[Object(y.jsx)(m.a,{textAlign:"right",children:Object(y.jsx)(p.a,{onClick:e.onCloseButtonClick,children:Object(y.jsx)(C.a,{})})}),Object(y.jsx)(O.a,{variant:"h6",children:"Datenschutzerkl\xe4rung"}),Object(y.jsx)(O.a,{variant:"body2",paragraph:!0,children:"Diese Applikation speichert keinerlei pers\xf6nliche Daten. Es werden weder Cookies und noch Tools wie Google Analytics verwendet."})]})}function _(){var e=r.useState(null),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(y.jsx)(b.a,{position:"static",children:Object(y.jsxs)(d.a,{children:[Object(y.jsx)(O.a,{variant:"h6",component:"h1",className:k.a.title,children:"Caesar-Verschl\xfcsselung"}),Object(y.jsx)(p.a,{"aria-label":"Datenschutzerkl\xe4rung","aria-controls":"info-popup","aria-haspopup":"true",color:"inherit",onClick:function(e){return c(null===n?e.currentTarget:null)},children:Object(y.jsx)(f.a,{})}),Object(y.jsx)(x.a,{id:"info-popup",anchorEl:n,open:null!==n,children:Object(y.jsx)(A,{onCloseButtonClick:function(){return c(null)}})}),Object(y.jsx)(p.a,{color:"inherit",href:"https://github.com/kkrings/react-caesar-cipher",children:Object(y.jsx)(g.a,{})})]})})}var w=n(121),D=n(122),N=n(123);function M(e){return Object(y.jsxs)(m.a,{textAlign:"center",children:[Object(y.jsx)(p.a,{onClick:e.onClockwiseRotation,"aria-label":"Im Uhrzeigersinn",children:Object(y.jsx)(w.a,{})}),Object(y.jsx)(p.a,{onClick:e.onCounterClockwiseRotation,"aria-label":"Gegen den Uhrzeigersinn",children:Object(y.jsx)(D.a,{})}),Object(y.jsx)(p.a,{onClick:e.onReset,"aria-label":"Auf Anfang",color:"secondary",children:Object(y.jsx)(N.a,{})})]})}var L=n(124),I=n(135),S=n.p+"static/media/CipherInnerDisk.bc459879.png",E=n(58),F=n.n(E),T=Object(L.a)((function(){return Object(I.a)({rotated:{transform:function(e){return"rotate(".concat(e.angleDeg,"deg)")}}})}));function z(e){var t=T(e);return Object(y.jsx)(m.a,{className:F.a.cipherOuterDisk,children:Object(y.jsx)("img",{src:S,alt:"Chiffrierscheibe",width:"100%",height:"auto",className:t.rotated})})}var B,R=n(134),V=n(125),G=n(126),H=n(127),J=n(132);!function(e){e[e.encrypt=0]="encrypt",e[e.decrypt=1]="decrypt"}(B||(B={}));var P=n(59),U=n(60),W="Z".charCodeAt(0)-"A".charCodeAt(0)+1,Z=function(){function e(t){Object(P.a)(this,e),this.shift=t}return Object(U.a)(e,[{key:"transformMessage",value:function(e){var t=this;return Array.from(e).map((function(e){return t.tryTransformLetter(e)})).join("")}},{key:"tryTransformLetter",value:function(e){return/[A-Z]/.test(e)?this.transformLatinLetter(e,"A"):/[a-z]/.test(e)?this.transformLatinLetter(e,"a"):e}},{key:"transformLatinLetter",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"A",n=t.charCodeAt(0),r=(e.charCodeAt(0)-n+this.shift)%W;return r=r>=0?r:W+r,String.fromCharCode(n+r)}}]),e}(),Q=n(46),X=n.n(Q);function q(e){var t=r.useState(""),n=Object(l.a)(t,2),c=n[0],a=n[1],i=e.direction===B.encrypt,s=new Z(i?e.shift:-e.shift);return Object(y.jsxs)(m.a,{padding:"1rem 0",children:[Object(y.jsx)(m.a,{margin:"1rem 0",children:Object(y.jsx)(J.a,{id:"message",className:X.a.cipherMessageInput,value:c,onChange:function(e){return a(e.target.value)},label:"Geheime Nachricht",placeholder:"Hier kannst du deine geheime Nachricht eingeben.",variant:"outlined",rows:5,multiline:!0})}),Object(y.jsx)(m.a,{margin:"1rem 0",children:Object(y.jsx)(J.a,{id:"transformed-message",className:X.a.cipherMessageInput,value:s.transformMessage(c),variant:"outlined",label:i?"Verschl\xfcsselte Nachricht":"Entschl\xfcsselte Nachricht",rows:5,multiline:!0,disabled:!0})})]})}function K(e){var t=r.useState(B.encrypt),n=Object(l.a)(t,2),c=n[0],a=n[1];return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(R.a,{value:c,onChange:function(e,t){return a(t)},variant:"fullWidth",indicatorColor:"primary",children:[Object(y.jsx)(V.a,{icon:Object(y.jsx)(G.a,{}),label:"Verschl\xfcsseln",value:B.encrypt}),Object(y.jsx)(V.a,{icon:Object(y.jsx)(H.a,{}),label:"Entschl\xfcsseln",value:B.decrypt})]}),Object(y.jsx)(q,{shift:e.shift,direction:c}),Object(y.jsxs)("div",{children:[Object(y.jsx)("strong",{children:"Anzahl Verschiebungen:"})," ",e.shift]})]})}var Y=n(47),$=n.n(Y);function ee(){var e=360/W,t=r.useState(0),n=Object(l.a)(t,2),c=n[0],a=n[1],i=r.useState(0),s=Object(l.a)(i,2),o=s[0],b=s[1];return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(_,{}),Object(y.jsx)(j.a,{children:Object(y.jsxs)(h.a,{container:!0,spacing:2,children:[Object(y.jsx)(h.a,{item:!0,xs:12,md:5,children:Object(y.jsx)(u.a,{className:$.a.column,children:Object(y.jsxs)(h.a,{container:!0,spacing:1,children:[Object(y.jsx)(h.a,{item:!0,xs:12,children:Object(y.jsx)(z,{angleDeg:o})}),Object(y.jsx)(h.a,{item:!0,xs:12,children:Object(y.jsx)(M,{onClockwiseRotation:function(){var t=(c-1)%W;a(t>=0?t:W+t),b((o+e)%360)},onCounterClockwiseRotation:function(){a((c+1)%W),b((o-e)%360)},onReset:function(){a(0),b(0)}})})]})})}),Object(y.jsx)(h.a,{item:!0,xs:12,md:7,children:Object(y.jsx)(u.a,{className:$.a.column,children:Object(y.jsx)(K,{shift:c})})})]})})]})}var te,ne=Object(a.a)({},o.deDE);c.render(Object(y.jsx)(r.StrictMode,{children:Object(y.jsx)(i.a,{theme:ne,children:Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(s.a,{}),Object(y.jsx)(ee,{})]})})}),document.getElementById("root")),te&&te instanceof Function&&n.e(3).then(n.bind(null,137)).then((function(e){var t=e.getCLS,n=e.getFID,r=e.getFCP,c=e.getLCP,a=e.getTTFB;t(te),n(te),r(te),c(te),a(te)}))}},[[83,1,2]]]);
//# sourceMappingURL=main.deacca34.chunk.js.map