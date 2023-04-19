"use strict";(self.webpackChunkwanted_pre_onboarding_frontend=self.webpackChunkwanted_pre_onboarding_frontend||[]).push([[992],{992:function(t,n,e){e.r(n),e.d(n,{ModifyInput:function(){return k},NewTodo:function(){return C},SubmitInput:function(){return T},default:function(){return w}});var o=e(142);function r(t,n,e){return(n=(0,o.Z)(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function c(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var u=e(433),a=e(165),d=e(861),s=e(439),l=e(243),p=e(791),f=e(689),m="https://www.pre-onboarding-selection-task.shop/todos",h={headers:{Authorization:"Bearer ".concat(localStorage.access_token),"Content-Type":"application/json"}},b=function(){var t=(0,p.useState)({addTodo:""}),n=(0,s.Z)(t,2),e=n[0],o=n[1],r=(0,p.useState)([]),i=(0,s.Z)(r,2),b=i[0],v=i[1],x=(0,p.useState)(!1),w=(0,s.Z)(x,2),C=w[0],T=w[1],k=(0,p.useState)(""),y=(0,s.Z)(k,2),g=y[0],j=y[1],_=(0,p.useState)(null),O=(0,s.Z)(_,2),Z=O[0],S=O[1],N=(0,f.s0)(),I=function(){var t=(0,d.Z)((0,a.Z)().mark((function t(){var n,e;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.Z.get(m,h);case 3:n=t.sent,e=n.data,v(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error("Error in getTodos: ".concat(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),E=function(){var t=(0,d.Z)((0,a.Z)().mark((function t(n){var e,o;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={todo:n.addTodo},t.prev=1,t.next=4,l.Z.post(m,e,h);case 4:o=t.sent,v((function(t){return[].concat((0,u.Z)(t),[o.data])})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.error("Error in onSubmitPostTodo: ".concat(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(n){return t.apply(this,arguments)}}(),B=function(){var t=(0,d.Z)((0,a.Z)().mark((function t(n,e,o){var r,i,c;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r={id:n,todo:e,isCompleted:o},t.next=4,l.Z.put("https://www.pre-onboarding-selection-task.shop/todos/".concat(n),r,h);case 4:return i=t.sent,c=i.data,t.abrupt("return",c);case 9:t.prev=9,t.t0=t.catch(0),console.error("Error in updateTodos: ".concat(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(n,e,o){return t.apply(this,arguments)}}(),D=function(){var t=(0,d.Z)((0,a.Z)().mark((function t(n){var e,o;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.Z.delete("https://www.pre-onboarding-selection-task.shop/todos/".concat(n),h);case 3:e=t.sent,o=b.filter((function(t){return t.id!==n})),v(o),console.log(e.status),alert("\uc0ad\uc81c \ub418\uc5c8\uc2b5\ub2c8\ub2e4"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error("Error in onClickDeleteTodo: ".concat(t.t0.message));case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(n){return t.apply(this,arguments)}}(),L=function(){var t=(0,d.Z)((0,a.Z)().mark((function t(n,e,o){var r;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=b.find((function(t){return t.id===n})),t.next=3,B(r.id,e,o);case 3:v((function(t){return t.map((function(t){return t.id===r.id?c(c({},t),{},{todo:e,isCompleted:o}):t}))})),S(null);case 5:case"end":return t.stop()}}),t)})));return function(n,e,o){return t.apply(this,arguments)}}(),P=function(){var t=(0,d.Z)((0,a.Z)().mark((function t(n){var e;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),e=b.find((function(t){return t.id===Z})),t.next=4,B(e.id,g,e.isCompleted);case 4:v((function(t){return t.map((function(t){return t.id===e.id?c(c({},t),{},{todo:g}):t}))})),S(null);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return(0,p.useEffect)((function(){(0,d.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()}),[]),(0,p.useEffect)((function(){localStorage.access_token?I():(alert("\ub85c\uadf8\uc778 \ud55c \ud68c\uc6d0\ub9cc \uc811\uadfc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4\ud83d\ude13"),N("/signin"))}),[N]),{todo:e,todos:b,isEdit:C,newTodo:g,editTodoId:Z,setNewTodo:j,navigate:N,getTodos:I,onSubmitPostTodo:E,updateTodos:B,onClickDeleteTodo:D,onChangeIsCompleted:L,onClickAddTodoList:function(t){var n=t.target.value;o(c(c({},e),{},{addTodo:n}))},onClickEditTodoList:function(t){S(t);var n=b.find((function(n){return n.id===t}));j(n.todo),T(!C)},onSubmitEditTodoList:P,onClickCancelEdit:function(){S(null)},resetInputValue:function(){o(c(c({},e),{},{addTodo:""}))}}},v={container:"Todo_container__y+uhA",NewTodoContainer:"Todo_NewTodoContainer__qDQD9",title:"Todo_title__5afsc",newTodoInput:"Todo_newTodoInput__T8R1o",newTodoButton:"Todo_newTodoButton__rmcaJ",modifyInputList:"Todo_modifyInputList__k8eN+",modifyButton:"Todo_modifyButton__r1B9z",deleteButton:"Todo_deleteButton__1D4La",modifyInput:"Todo_modifyInput__D5Ke0"},x=e(184);var w=function(){var t=b(),n=t.todo,e=t.todos,o=t.newTodo,r=t.editTodoId,i=t.setNewTodo,c=t.onSubmitPostTodo,u=t.onClickDeleteTodo,a=t.onChangeIsCompleted,d=t.onClickAddTodoList,s=t.onClickEditTodoList,l=t.onSubmitEditTodoList,p=t.onClickCancelEdit,f=t.resetInputValue;return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{className:v.container,children:[(0,x.jsxs)("div",{className:v.NewTodoContainer,children:[(0,x.jsx)("div",{className:v.title,children:"TodoList"}),(0,x.jsx)(C,{onSubmit:function(t){t.preventDefault(),c(n),f()},todo:n,onChange:function(t){return d(t)}})]}),(0,x.jsx)("div",{children:(0,x.jsx)("ul",{children:null===e||void 0===e?void 0:e.map((function(t){return r===t.id?(0,x.jsx)(T,{todo:t,newTodo:o,onSubmit:l,checkboxOnChange:function(){return a(t.id,t.todo,!t.isCompleted)},textOnChange:function(t){return i(t.target.value)},submitOnClick:l,cancelOnClick:p}):(0,x.jsx)(k,{todo:t,onSubmit:function(){return a(t.id,t.todo,!t.isCompleted)},checkboxOnChange:function(){return a(t.id,t.todo,!t.isCompleted)},modifyOnClick:function(){return s(t.id)},deleteOnClick:function(){return u(t.id)}})}))},n.id)})]})})},C=function(t){var n=t.onSubmit,e=t.onChange,o=t.todo;return(0,x.jsxs)("form",{onSubmit:n,children:[(0,x.jsx)("label",{children:(0,x.jsx)("input",{className:v.newTodoInput,id:"new-todo-input","data-testid":"new-todo-input",type:"text",value:o.addTodo,onChange:e})}),(0,x.jsx)("button",{className:v.newTodoButton,"data-testid":"new-todo-add-button",children:"\ucd94\uac00\ud558\uae30"})]})},T=function(t){var n=t.todo,e=t.newTodo,o=t.onSubmit,r=t.checkboxOnChange,i=t.textOnChange,c=t.submitOnClick,u=t.cancelOnClick;return(0,x.jsx)("li",{className:v.modifyInputList,children:(0,x.jsxs)("form",{onSubmit:o,children:[(0,x.jsxs)("label",{children:[(0,x.jsx)("input",{type:"checkbox",checked:n.isCompleted,onChange:r}),(0,x.jsx)("input",{className:v.modifyInput,"data-testid":"modify-input",type:"text",value:e,onChange:i})]}),(0,x.jsx)("button",{className:v.modifyButton,"data-testid":"submit-button",type:"button",onClick:c,children:"\uc81c\ucd9c"}),(0,x.jsx)("button",{className:v.deleteButton,"data-testid":"cancel-button",type:"button",onClick:u,children:"\ucde8\uc18c"})]})})},k=function(t){var n=t.todo,e=t.onSubmit,o=t.checkboxOnChange,r=t.modifyOnClick,i=t.deleteOnClick;return(0,x.jsx)("li",{className:v.modifyInputList,children:(0,x.jsxs)("form",{onSubmit:e,children:[(0,x.jsxs)("label",{children:[(0,x.jsx)("input",{type:"checkbox",checked:n.isCompleted,onChange:o}),(0,x.jsx)("span",{children:n.todo})]}),(0,x.jsx)("button",{className:v.modifyButton,"data-testid":"modify-button",type:"button",onClick:r,children:"\uc218\uc815"}),(0,x.jsx)("button",{className:v.deleteButton,"data-testid":"delete-button",type:"button",onClick:i,children:"\uc0ad\uc81c"})]})})}}}]);
//# sourceMappingURL=992.4d3e8a5c.chunk.js.map