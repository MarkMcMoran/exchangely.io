(this["webpackJsonpexchangely.io"]=this["webpackJsonpexchangely.io"]||[]).push([[0],{27:function(e,t,n){},40:function(e,t,n){e.exports=n(52)},45:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),l=n.n(c),i=(n(45),n(15)),u=n(16),o=n(20),s=n(19),m=(n(27),n(24)),d=n.n(m),p=n(28),h=n(25),b=n(17),f=n(57),v=n(60),y=n(59),E=n(58),g=n(29),C=n(36),j=(n(47),"".concat("Convertly.io"," a React application using exchangeratesapi.io API to convert currencies")),S=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).clearFields=function(){a.setState({selectedCurr:"",currVal:""}),document.getElementById("currencyCalcForm").reset()},a.handleSubmission=function(e){e.preventDefault(),a.setState({currVal:e.target.value})},a.state={selectedCurr:-1,currVal:""},a.handleSubmission=a.handleSubmission.bind(Object(b.a)(a)),a}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props.currencySymbols,n=t.find((function(t){return t.id===e.state.selectedCurr}));return r.a.createElement(f.a,{id:"wrapper"},r.a.createElement(v.a,{variant:"primary"},r.a.createElement(v.a.Body,null,r.a.createElement(v.a.Title,null,"Convertly.io"),r.a.createElement(v.a.Text,null,j),r.a.createElement(y.a,{id:"currencyCalcForm",onSubmit:this.handleSubmission},r.a.createElement(E.a,null,r.a.createElement(E.a.Toggle,{variant:"danger"},"Select Currency"),r.a.createElement(E.a.Menu,null,t.map((function(t){return r.a.createElement(E.a.Item,{id:"currencySymb0l",key:"c"+t.id,eventKey:t.id,onSelect:function(t){e.setState({selectedCurr:t})}},r.a.createElement("p",null," ",t.id," "))}))),n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Today's rate: ",n.id," ",n.rate," per \u20ac1"),r.a.createElement("p",null,n.rate*this.state.currVal>0&&r.a.createElement("span",null,"\u20ac",this.state.currVal," will get you ",this.state.selectedCurr," ",n.rate*this.state.currVal)))),r.a.createElement(y.a.Label,null,"Currency "),r.a.createElement(g.a,{id:"inputCurr",placeholder:"Enter value to convert",as:"input",onChange:this.handleSubmission,type:"number",min:"1"}),r.a.createElement(C.a,{variant:"danger",size:"md",id:"convertClick",type:"submit",onClick:this.clearFields},"Clear")))))}}]),n}(r.a.Component),O=function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){l()}),[]);var l=function(){var e=Object(p.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.exchangeratesapi.io/latest");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=n.rates?Object.entries(n.rates).map((function(e){var t=Object(h.a)(e,2);return{id:t[0],rate:t[1]}})):[];return r.a.createElement(S,{currencySymbols:i})},w=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O,null))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.0579b15f.chunk.js.map