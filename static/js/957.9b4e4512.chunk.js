"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[957],{3957:function(e,a,t){t.r(a),t.d(a,{default:function(){return _}});var n=t(885),r=t(2791),i=t(9434),s=t(1473),l=t(1413),o=t(4925),u=t(1694),c=t.n(u),d=t(184),f=["as","disabled"];function v(e){var a=e.tagName,t=e.disabled,n=e.href,r=e.target,i=e.rel,s=e.role,l=e.onClick,o=e.tabIndex,u=void 0===o?0:o,c=e.type;a||(a=null!=n||null!=r||null!=i?"a":"button");var d={tagName:a};if("button"===a)return[{type:c||"button",disabled:t},d];var f=function(e){(t||"a"===a&&function(e){return!e||"#"===e.trim()}(n))&&e.preventDefault(),t?e.stopPropagation():null==l||l(e)};return"a"===a&&(n||(n="#"),t&&(n=void 0)),[{role:null!=s?s:"button",disabled:void 0,tabIndex:t?void 0:u,href:n,target:"a"===a?r:void 0,"aria-disabled":t||void 0,rel:"a"===a?i:void 0,onClick:f,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),f(e))}},d]}var m=r.forwardRef((function(e,a){var t=e.as,r=e.disabled,i=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,f),s=v(Object.assign({tagName:t,disabled:r},i)),l=(0,n.Z)(s,2),o=l[0],u=l[1].tagName;return(0,d.jsx)(u,Object.assign({},i,o,{ref:a}))}));m.displayName="Button";var p=t(162),b=["as","bsPrefix","variant","size","active","className"],g=r.forwardRef((function(e,a){var t=e.as,r=e.bsPrefix,i=e.variant,s=e.size,u=e.active,f=e.className,m=(0,o.Z)(e,b),g=(0,p.vE)(r,"btn"),h=v((0,l.Z)({tagName:t},m)),w=(0,n.Z)(h,2),x=w[0],N=w[1].tagName;return(0,d.jsx)(N,(0,l.Z)((0,l.Z)((0,l.Z)({},x),m),{},{ref:a,className:c()(f,g,u&&"active",i&&"".concat(g,"-").concat(i),s&&"".concat(g,"-").concat(s),m.href&&m.disabled&&"disabled")}))}));g.displayName="Button",g.defaultProps={variant:"primary",active:!1,disabled:!1};var h=g,w="LoginView_container__8qtjw",x="LoginView_text__cZI17",N="LoginView_input__HlwjX",j="LoginView_button__BTYpA";function _(){var e=(0,i.I0)(),a=(0,r.useState)(""),t=(0,n.Z)(a,2),l=t[0],o=t[1],u=(0,r.useState)(""),c=(0,n.Z)(u,2),f=c[0],v=c[1],m=(0,i.v9)((function(e){return e.auth.loginError}));(0,r.useEffect)((function(){m&&alert("Please check your email and password!")}),[m]);var p=function(e){var a=e.target,t=a.name,n=a.value;switch(t){case"email":return o(n);case"password":return v(n);default:return}};return(0,d.jsxs)("div",{className:w,children:[(0,d.jsx)("h1",{className:x,children:"Login Page"}),(0,d.jsxs)("form",{onSubmit:function(a){a.preventDefault(),e(s.r.login({email:l,password:f}))},autoComplete:"off",children:[(0,d.jsx)("div",{children:(0,d.jsxs)("label",{className:x,children:["email",(0,d.jsx)("input",{type:"email",name:"email",value:l,onChange:p,className:N})]})}),(0,d.jsx)("div",{children:(0,d.jsxs)("label",{className:x,children:["password",(0,d.jsx)("input",{type:"password",name:"password",value:f,onChange:p,className:N})]})}),(0,d.jsx)(h,{variant:"primary",type:"submit",className:j,children:"Log In"})]})]})}}}]);
//# sourceMappingURL=957.9b4e4512.chunk.js.map