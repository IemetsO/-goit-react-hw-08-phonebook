"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[561],{9561:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r=t(2791),a=t(184),s=function(e){var n=e.name,t=e.number,r=e.children;return(0,a.jsxs)("li",{children:[n," : ",t,r]})},c=t(9434),u=t(5492),i="ContactList_button__7kL4l",o=function(){var e=(0,c.I0)(),n=(0,c.v9)((function(e){return e.contacts.items})),t=(0,c.v9)((function(e){return e.contacts.filter})),o=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));(0,r.useEffect)((function(){e((0,u.NJ)())}),[e]);var l=function(n){e((0,u.zY)(n))};return(0,a.jsx)("section",{children:(0,a.jsxs)("ul",{children:[n&&!t&&n.map((function(e){return(0,a.jsx)(s,{name:e.name,number:e.number,children:(0,a.jsx)("button",{className:i,onClick:function(){return l(e.id)},children:" Delete "})},e.id)})),t&&o.map((function(e){return(0,a.jsx)(s,{name:e.name,number:e.number,children:(0,a.jsx)("button",{className:i,onClick:function(){return l(e.id)},children:" Delete "})},e.id)}))]})})},l=t(885),m="Form_container__WXj-7",d="Form_text__c5Sr+",f="Form_input__FTtTw",h="Form_button__8NOIT";function b(){var e=(0,c.I0)(),n=(0,c.v9)((function(e){return e.contacts.items})),t=(0,r.useState)(""),s=(0,l.Z)(t,2),i=s[0],o=s[1],b=(0,r.useState)(""),x=(0,l.Z)(b,2),_=x[0],j=x[1],p=(0,r.useCallback)((function(e){var n=e.target,t=n.name,r=n.value;switch(t){case"name":o(r);break;case"number":j(r);break;default:return}}),[o,j]),v=function(){o(""),j("")};return(0,a.jsx)("div",{className:m,children:(0,a.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),n.find((function(e){return e.name.toLowerCase()===i.toLowerCase()})))return alert("".concat(i,", is already in your contacts"));e((0,u.uK)({name:i,number:_})),v()},children:[(0,a.jsx)("div",{children:(0,a.jsxs)("label",{className:d,children:["Name",(0,a.jsx)("input",{className:f,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:i,onChange:p})]})}),(0,a.jsx)("div",{children:(0,a.jsxs)("label",{className:d,children:["Number",(0,a.jsx)("input",{className:f,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:_,onChange:p})]})}),(0,a.jsx)("button",{type:"button",className:h,children:"Add Contact"})]})})}var x=t(8134),_="Filter_container__L5eml",j="Filter_text__uqQRu",p=function(){var e=(0,c.v9)((function(e){return e.contacts.filter})),n=(0,c.I0)();return(0,a.jsx)("div",{className:_,children:(0,a.jsxs)("label",{className:j,children:[" Find contacts by name ",(0,a.jsx)("input",{type:"text",value:e,onChange:function(e){return n((0,x.W)(e.currentTarget.value))}})]})})};function v(){return(0,a.jsxs)("div",{children:[(0,a.jsx)(b,{}),(0,a.jsx)(p,{}),(0,a.jsx)(o,{})]})}}}]);
//# sourceMappingURL=561.0a5d755b.chunk.js.map