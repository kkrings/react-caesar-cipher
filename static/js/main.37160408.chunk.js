(this["webpackJsonpreact-caesar-cipher"]=this["webpackJsonpreact-caesar-cipher"]||[]).push([[0],{45:function(e,t,n){e.exports={cipherMessageInput:"CipherMessageInput_cipherMessageInput__2z2Lo"}},46:function(e,t,n){e.exports={column:"App_column__17gO4"}},52:function(e,t,n){e.exports={infoMenu:"CipherAppBarInfoMenu_infoMenu__1gLhm"}},57:function(e,t,n){e.exports={title:"CipherAppBar_title__TH8C9"}},59:function(e,t,n){e.exports={cipherOuterDisk:"CipherDisks_cipherOuterDisk__1-_lb"}},84:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(11),c=n(63),i=n(131),s=n(132),o=n(62),l=n(18),h=n(129),j=n(130),u=n(85),b=n(117),d=n(118),p=n(116),O=n(114),x=n(120),f=n(119),g=n(121),m=n(134),C=n(115),v=n(52),k=n.n(v),y=n(3);function A(e){return Object(y.jsxs)(u.a,{className:k.a.infoMenu,children:[Object(y.jsx)(m.a,{textAlign:"right",children:Object(y.jsx)(O.a,{role:"close",onClick:e.onCloseButtonClick,children:Object(y.jsx)(C.a,{})})}),Object(y.jsx)(p.a,{variant:"h6",children:"Datenschutzerkl\xe4rung"}),Object(y.jsx)(p.a,{variant:"body2",paragraph:!0,children:"Diese Applikation speichert keinerlei pers\xf6nliche Daten. Es werden weder Cookies noch Tools wie Google Analytics verwendet."})]})}var _=n(57),w=n.n(_);function D(){var e=r.useState(null),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(y.jsx)(b.a,{position:"static",children:Object(y.jsxs)(d.a,{children:[Object(y.jsx)(p.a,{variant:"h6",component:"h1",className:w.a.title,children:"Caesar-Verschl\xfcsselung"}),Object(y.jsx)(O.a,{"aria-label":"Datenschutzerkl\xe4rung","aria-controls":"info-popup","aria-haspopup":"true",color:"inherit",onClick:function(e){return a(null===n?e.currentTarget:null)},children:Object(y.jsx)(f.a,{})}),Object(y.jsx)(x.a,{id:"info-popup",anchorEl:n,open:null!==n,children:Object(y.jsx)(A,{onCloseButtonClick:function(){return a(null)}})}),Object(y.jsx)(O.a,{color:"inherit",href:"https://github.com/kkrings/react-caesar-cipher",children:Object(y.jsx)(g.a,{})})]})})}var N=n(122),L=n(123),M=n(124);function I(e){return Object(y.jsxs)(m.a,{textAlign:"center",children:[Object(y.jsx)(O.a,{onClick:e.onClockwiseRotation,"aria-label":"Im Uhrzeigersinn","aria-controls":"cipher-disk",children:Object(y.jsx)(N.a,{})}),Object(y.jsx)(O.a,{onClick:e.onCounterClockwiseRotation,"aria-label":"Gegen den Uhrzeigersinn","aria-controls":"cipher-disk",children:Object(y.jsx)(L.a,{})}),Object(y.jsx)(O.a,{onClick:e.onReset,"aria-label":"Auf Anfang","aria-controls":"cipher-disk",color:"secondary",children:Object(y.jsx)(M.a,{})})]})}var S=n(125),z=n(136),F=n.p+"static/media/CipherInnerDisk.bc459879.png",T=n(59),B=n.n(T),E=Object(S.a)((function(){return Object(z.a)({rotated:{transform:function(e){return"rotate(".concat(e.angleDeg,"deg)")}}})}));function R(e){var t=E(e);return Object(y.jsx)(m.a,{className:B.a.cipherOuterDisk,children:Object(y.jsx)("img",{id:"cipher-disk",src:F,alt:"Chiffrierscheibe",width:"100%",height:"auto",className:t.rotated})})}var G,V=n(135),H=n(126),J=n(127),P=n(128),U=n(133);!function(e){e[e.encrypt=0]="encrypt",e[e.decrypt=1]="decrypt"}(G||(G={}));var Z=n(60),W=n(61),q="Z".charCodeAt(0)-"A".charCodeAt(0)+1,K=function(){function e(t){Object(Z.a)(this,e),this.shift=t}return Object(W.a)(e,[{key:"transformMessage",value:function(e){var t=this;return Array.from(e).map((function(e){return t.tryTransformLetter(e)})).join("")}},{key:"tryTransformLetter",value:function(e){return/[A-Z]/.test(e)?this.transformLatinLetter(e,"A"):/[a-z]/.test(e)?this.transformLatinLetter(e,"a"):e}},{key:"transformLatinLetter",value:function(e,t){var n=t.charCodeAt(0),r=(e.charCodeAt(0)-n+this.shift)%q;return r=r>=0?r:q+r,String.fromCharCode(n+r)}}]),e}(),Q=n(45),X=n.n(Q);function Y(e){var t=r.useState(""),n=Object(l.a)(t,2),a=n[0],c=n[1],i=e.direction===G.encrypt,s=new K(i?e.shift:-e.shift);return Object(y.jsxs)(m.a,{role:"tabpanel",id:"".concat(i?"encrypt":"decrypt","-tabpanel"),"aria-labelledby":"".concat(i?"encrypt":"decrypt","-tab"),padding:"1rem 0",children:[Object(y.jsx)(m.a,{margin:"1rem 0",children:Object(y.jsx)(U.a,{id:"message",className:X.a.cipherMessageInput,value:a,onChange:function(e){return c(e.target.value)},label:"Geheime Nachricht",placeholder:"Hier kannst du deine geheime Nachricht eingeben.",variant:"outlined",rows:5,multiline:!0})}),Object(y.jsx)(m.a,{margin:"1rem 0",children:Object(y.jsx)(U.a,{id:"transformed-message",className:X.a.cipherMessageInput,value:s.transformMessage(a),variant:"outlined",label:i?"Verschl\xfcsselte Nachricht":"Entschl\xfcsselte Nachricht",rows:5,multiline:!0,disabled:!0})})]})}function $(e){var t=r.useState(G.encrypt),n=Object(l.a)(t,2),a=n[0],c=n[1];return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(V.a,{"aria-label":"Geheime Nachricht verschl\xfcsseln/entschl\xfcsseln",value:a,onChange:function(e,t){return c(t)},variant:"fullWidth",indicatorColor:"primary",children:[Object(y.jsx)(H.a,{id:"encrypt-tab","aria-controls":"encrypt-tabpanel",icon:Object(y.jsx)(J.a,{}),label:"Verschl\xfcsseln",value:G.encrypt}),Object(y.jsx)(H.a,{id:"decrypt-tab","aria-controls":"decrypt-tabpanel",icon:Object(y.jsx)(P.a,{}),label:"Entschl\xfcsseln",value:G.decrypt})]}),Object(y.jsx)(Y,{shift:e.shift,direction:a}),Object(y.jsxs)("div",{"data-testid":"shift",children:[Object(y.jsx)("strong",{children:"Anzahl Verschiebungen:"})," ",e.shift]})]})}var ee=n(46),te=n.n(ee);function ne(){var e=360/q,t=r.useState(0),n=Object(l.a)(t,2),a=n[0],c=n[1],i=r.useState(0),s=Object(l.a)(i,2),o=s[0],b=s[1];return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(D,{}),Object(y.jsx)(h.a,{children:Object(y.jsxs)(j.a,{container:!0,spacing:2,children:[Object(y.jsx)(j.a,{item:!0,xs:12,md:5,children:Object(y.jsx)(u.a,{className:te.a.column,children:Object(y.jsxs)(j.a,{container:!0,spacing:1,children:[Object(y.jsx)(j.a,{item:!0,xs:12,children:Object(y.jsx)(R,{angleDeg:o})}),Object(y.jsx)(j.a,{item:!0,xs:12,children:Object(y.jsx)(I,{onClockwiseRotation:function(){var t=(a-1)%q;c(t>=0?t:q+t),b((o+e)%360)},onCounterClockwiseRotation:function(){c((a+1)%q),b((o-e)%360)},onReset:function(){c(0),b(0)}})})]})})}),Object(y.jsx)(j.a,{item:!0,xs:12,md:7,children:Object(y.jsx)(u.a,{className:te.a.column,children:Object(y.jsx)($,{shift:a})})})]})})]})}var re,ae=Object(c.a)({},o.deDE);a.render(Object(y.jsx)(r.StrictMode,{children:Object(y.jsx)(i.a,{theme:ae,children:Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(s.a,{}),Object(y.jsx)(ne,{})]})})}),document.getElementById("root")),re&&re instanceof Function&&n.e(3).then(n.bind(null,138)).then((function(e){var t=e.getCLS,n=e.getFID,r=e.getFCP,a=e.getLCP,c=e.getTTFB;t(re),n(re),r(re),a(re),c(re)}))}},[[84,1,2]]]);
//# sourceMappingURL=main.37160408.chunk.js.map