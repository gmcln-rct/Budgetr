(this.webpackJsonpbudgeter=this.webpackJsonpbudgeter||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),c=n.n(r),l=(n(10),n(11),n(12),function(){return o.a.createElement("div",null,o.a.createElement("h1",{className:"header-text"},"Bugetr App"))}),u=n(1),i=function(){var e=Object(a.useState)(15),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(0),l=Object(u.a)(c,2),i=l[0],s=l[1],m=Object(a.useState)(0),d=Object(u.a)(m,2),g=d[0],E=d[1],f=Object(a.useState)(0),h=Object(u.a)(f,2),p=h[0],b=h[1];return Object(a.useEffect)((function(){E(i/12*n*.01)}),[i,n]),Object(a.useEffect)((function(){b(i/12*(1-.01*n))}),[i,n]),o.a.createElement("div",null,o.a.createElement("form",{className:"budget-input"},o.a.createElement("label",{for:"range-slider"},"Your Percentage ",n,"%"),o.a.createElement("input",{type:"range",min:"0",max:"30",value:n,class:"slider",id:"range-slide",onChange:function(e){return r(e.target.value)}}),o.a.createElement("label",{for:"income-amount"},"Enter Income"),o.a.createElement("input",{type:"text",value:i,pattern:"\\\\$?(([1-9](\\\\d*|\\\\d{0,2}(,\\\\d{3})*))|0)(\\\\.\\\\d{1,2})?$",placeholder:"Income",id:"income-amount",onChange:function(e){return s(e.target.value)}}),o.a.createElement("h2",null,"Monthly Expense: $",g.toFixed(2)),o.a.createElement("h2",null,"Monthly Savings: $",p.toFixed(2))))},s=function(){return o.a.createElement("div",{className:"expense-savings"},o.a.createElement("h2",null,"Your Expense"),o.a.createElement("h2",null,"Your Savings"))};var m=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(l,null),o.a.createElement(i,null),o.a.createElement(s,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d=n(4),g=n.n(d),E=function(e){console.log(e)};c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m,null)),document.getElementById("root")),c.a.render(o.a.createElement(g.a,{clientId:"658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com",buttonText:"Login",onSuccess:E,onFailure:E,cookiePolicy:"single_host_origin"}),document.getElementById("googleButton")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.c4b0c3dd.chunk.js.map