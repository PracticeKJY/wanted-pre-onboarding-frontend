"use strict";(self.webpackChunkwanted_pre_onboarding_frontend=self.webpackChunkwanted_pre_onboarding_frontend||[]).push([[502],{454:function(e,n,t){t.d(n,{Z:function(){return s}});var a="SignButton_SignButton__MvlO5",r=t(184),s=function(e){var n=e.children,t=e.id,s=e.disabled;return(0,r.jsx)("button",{className:a,"data-testid":t,disabled:s,children:n})}},926:function(e,n,t){t.d(n,{Z:function(){return i}});var a="SignForm_emailInput__NWT79",r="SignForm_inputTitle__fTr+d",s=t(184),i=function(e){var n=e.id,t=e.type,i=e.value,o=e.placeholder,l=e.onChange;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("label",{htmlFor:n,children:(0,s.jsxs)("span",{className:r,children:[t," :"]})}),(0,s.jsx)("input",{className:a,"data-testid":n,id:n,type:t,name:t,value:i,placeholder:o,onChange:l,required:!0})]})}},502:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var a=t(165),r=t(861),s=t(439),i=t(791),o=t(689),l=t(243),u={headers:{"Content-Type":"application/json"}},d=function(){var e=(0,o.s0)(),n=(0,i.useState)(""),t=(0,s.Z)(n,2),d=t[0],c=t[1],p=(0,i.useState)(""),h=(0,s.Z)(p,2),f=h[0],m=h[1],g={email:d,password:f},v=(0,i.useState)(!0),_=(0,s.Z)(v,2),x=_[0],b=_[1],Z=(0,i.useState)(!1),S=(0,s.Z)(Z,2),C=S[0],j=S[1],w=function(){var n=(0,r.Z)((0,a.Z)().mark((function n(t){var r;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.prev=1,j(!0),n.next=5,l.Z.post("https://www.pre-onboarding-selection-task.shop/auth/signin",g,u);case 5:return r=n.sent,alert("\ub85c\uadf8\uc778\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ud83d\ude0e"),localStorage.setItem("access_token",r.data.access_token),e("/todo"),n.abrupt("return",r.data.access_token);case 12:n.prev=12,n.t0=n.catch(1),alert("\uc774\uba54\uc77c \ud639\uc740 \ube44\ubc00\ubc88\ud638\uac00 \ud2c0\ub9b0\uac70..\uac19\uc740\ub370\uc694?\ud83d\ude13");case 15:return n.prev=15,j(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[1,12,15,18]])})));return function(e){return n.apply(this,arguments)}}();return(0,i.useEffect)((function(){localStorage.getItem("access_token")&&(alert("\uc774\ubbf8 \ub85c\uadf8\uc778\uc774 \ub418\uc788\uc73c\uc2dc\ub124\uc694?\ud83e\udd14"),e("/todo"))}),[e]),(0,i.useEffect)((function(){d.includes("@")&&f.length>=8?b(!1):b(!0)}),[d,f]),{emailAddress:d,passWord:f,submit:C,disable:x,handleChangeEmailAddress:function(e){e.preventDefault();var n=e.target.value;c(n)},handleChangePassword:function(e){e.preventDefault();var n=e.target.value;m(n)},onSubmit:w}},c=t(926),p=t(454),h=t(893),f=t(184);var m=function(){var e=d(),n=e.emailAddress,t=e.passWord,a=e.submit,r=e.disable,s=e.handleChangeEmailAddress,i=e.handleChangePassword,o=e.onSubmit;return(0,f.jsx)(f.Fragment,{children:a?(0,f.jsx)("div",{children:"\ub85c\uadf8\uc778 \uc911\ud83d\ude00"}):(0,f.jsxs)("div",{children:[(0,f.jsx)("div",{className:h.Z.signTitle,children:"Signin"}),(0,f.jsx)("div",{className:h.Z.signFormContainer,children:(0,f.jsxs)("form",{onSubmit:o,className:h.Z.form,children:[(0,f.jsxs)("div",{className:h.Z.inputContainer,children:[(0,f.jsx)(c.Z,{id:"email-input",type:"email",value:n,placeholder:"Iwant@pass.com",onChange:s}),(0,f.jsx)(c.Z,{id:"password-input",type:"password",value:t,placeholder:"********",onChange:i})]}),(0,f.jsx)(p.Z,{id:"signin-button",disabled:r,children:"\ub85c\uadf8\uc778"})]})})]})})}},893:function(e,n){n.Z={signTitle:"Signup_signTitle__f3ZxJ",signFormContainer:"Signup_signFormContainer__8snxO",form:"Signup_form__x3txl",inputContainer:"Signup_inputContainer__68lI6"}}}]);
//# sourceMappingURL=502.c3928e66.chunk.js.map