(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(39)},20:function(e,n,t){},38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(14),u=t.n(c),o=(t(20),t(4)),i=t(2),l=function(e){var n=e.newItem,t=e.handleChange,a=e.text;return r.a.createElement("div",null,a," ",r.a.createElement("input",{value:n,onChange:t}))},m=function(e){var n=e.item,t=e.clickDeleteHandler;return r.a.createElement("div",null,n.map((function(e){return r.a.createElement("div",{key:e.name},r.a.createElement("form",null,e.name," ",e.number,r.a.createElement("button",{id:e.id,type:"submit",onClick:t},"delete")))})))},d=function(e){var n=e.newSearch,t=e.handleChange;return r.a.createElement("div",null,"filter shown with: ",r.a.createElement("input",{value:n,onChange:t}))},f=t(3),s=t.n(f),h="/api/persons",v=function(){return s.a.get(h).then((function(e){return e.data}))},b=function(e){return s.a.post(h,e).then((function(e){return e.data}))},E=function(e,n){return s.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},g=function(e){return s.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))};t(38);var p=function(e){var n=e.message;return null===n?null:n.includes("Added")?r.a.createElement("div",{className:"message__success"},n):r.a.createElement("div",{className:"message__error"},n)},w=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],c=n[1],u=Object(a.useState)(""),f=Object(i.a)(u,2),s=f[0],h=f[1],w=Object(a.useState)(""),j=Object(i.a)(w,2),O=j[0],S=j[1],k=Object(a.useState)(""),C=Object(i.a)(k,2),y=C[0],x=C[1],D=Object(a.useState)(null),I=Object(i.a)(D,2),_=I[0],N=I[1];Object(a.useEffect)((function(){v().then((function(e){c(e)}))}),[]);var T=function(e){return b(e).then((function(e){N("Added ".concat(e.name)),setTimeout((function(){return N(null)}),5e3),c(t.concat(e)),h(""),S("")})).catch((function(e){console.log(e.response.data.error),N(e.response.data.error),setTimeout((function(){return N(null)}),5e3),h(""),S("")}))},A=y.length>1?t.filter((function(e){return e.name.toLowerCase().includes(y.toLowerCase())})):t,H=function(){return{name:s,number:O}},J=function(){return t.filter((function(e){return e.name===s}))},L=function(){return 0!==J().length},B=function(e){if(e)return window.confirm("".concat(s," is already added to phonebook,\n      replace the old number with a new one?"));window.alert("".concat(s," already exist in the list"));return!1},M=function(e){if(e){var n=Object(o.a)(Object(o.a)({},J()[0]),{},{number:O});E(J()[0].id,n).then((function(e){c(t.map((function(n){return n.id!==J()[0].id?n:e})))}))}};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(p,{message:_}),r.a.createElement(d,{newSearch:y,handleChange:function(e){x(e.target.value)}}),r.a.createElement("h2",null,"add a new"),r.a.createElement(l,{newItem:s,handleChange:function(e){h(e.target.value)},text:"name:"}),r.a.createElement(l,{newItem:O,handleChange:function(e){S(e.target.value)},text:"number:"}),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n=H(),t=""!==O,a=""===s;if(L()){var r=B(t);M(r)}else a||T(n)}},r.a.createElement("button",{type:"submit"},"add")),r.a.createElement("h2",null,"Numbers"),r.a.createElement(m,{item:A,clickDeleteHandler:function(e){var n;e.preventDefault();var a,r=A.filter((function(n){return n.id.toString()===e.target.id}));window.confirm("Delete ".concat(null===(n=r[0])||void 0===n?void 0:n.name," "))&&(a=e.target.id,c(t.filter((function(e){return e.id.toString()!==a}))),g(e.target.id).then((function(e){var n;N("Information of ".concat(null===(n=r[0])||void 0===n?void 0:n.name," has already been removed from server")),setTimeout((function(){N(null)}),5e3)})))}}))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.89298ecb.chunk.js.map