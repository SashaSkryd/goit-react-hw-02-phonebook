(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={title:"ContactForm_title__2QzPd",btn:"ContactForm_btn__1D5Nw",btnText:"ContactForm_btnText__2elyr",input:"ContactForm_input__pdgdX"}},127:function(t,e){},129:function(t,e){},140:function(t,e){},142:function(t,e){},169:function(t,e){},171:function(t,e){},172:function(t,e){},177:function(t,e){},179:function(t,e){},19:function(t,e,n){t.exports={deskription:"ContactList_deskription__1I7JZ",list:"ContactList_list__3KKK1",btn:"ContactList_btn__2ykUS",btnText:"ContactList_btnText__2cbGK"}},198:function(t,e){},210:function(t,e){},213:function(t,e){},217:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n(9),i=n.n(c),r=n(113),s=n.n(r),o=n(40),l=n(33),u=n(34),b=n(38),h=n(37),j=n(35),d=n(27),f=n(12),m=n.n(f),p=n(36),O=n.n(p),x={name:"",number:""},_=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state=Object(d.a)({},x),t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(j.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.addContact(Object(d.a)(Object(d.a)({},t.state),{},{id:O.a.generate()})),t.reset()},t.reset=function(){t.setState(Object(d.a)({},x))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:m.a.form,children:[Object(a.jsxs)("label",{children:[Object(a.jsx)("h2",{className:m.a.title,children:"Your Name"}),Object(a.jsx)("input",{type:"text",name:"name",placeholder:"Enter name",value:e,onChange:this.handleChange,className:m.a.input})]}),Object(a.jsxs)("label",{children:[Object(a.jsx)("h2",{className:m.a.title,children:"Your Phone"}),Object(a.jsx)("input",{type:"text",name:"number",placeholder:"Enter phone",value:n,onChange:this.handleChange,className:m.a.input})]}),Object(a.jsxs)("button",{type:"submit",className:m.a.btn,children:[" ",Object(a.jsx)("span",{className:m.a.btnText,children:"Submit"})]})]})}}]),n}(c.Component),C=n(63),v=n.n(C);function g(t){var e=t.filter,n=t.filterRender;return Object(a.jsxs)("label",{children:[Object(a.jsx)("h2",{className:v.a.title,children:"Filter"}),Object(a.jsx)("input",{type:"text",name:"filter",placeholder:"Finder",value:e,onChange:function(t){return n(t.target.value)},className:v.a.input})]})}var N=n(19),y=n.n(N);function k(t){var e=t.array,n=t.deleteItem;return Object(a.jsx)("ul",{className:y.a.list,children:e.map((function(t){return Object(a.jsxs)("li",{className:y.a.listItem,children:[Object(a.jsxs)("span",{className:y.a.deskription,children:["name:",t.name,", phone:",t.number]}),Object(a.jsx)("button",{type:"button",onClick:function(){return n(t.id)},className:y.a.btn,children:Object(a.jsx)("span",{className:y.a.btnText,children:"Delete"})})]},O.a.generate())}))})}var S=n(39),w=n.n(S),F=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(e){t.state.contacts.find((function(t){return t.name===e.name}))?alert("".concat(e.name," is already in contacts.")):t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts),[e])}}))},t.getVisibleContact=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.handleDelete=function(e){var n=t.state.contacts,a=n.find((function(t){return t.id===e})),c=n.indexOf(a);t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts.slice(0,c)),Object(o.a)(t.contacts.slice(c+1)))}}))},t.filterRender=function(e){t.setState({filter:e})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.filter,n=t.contacts,c=this.getVisibleContact();return Object(a.jsxs)("div",{className:w.a.container,children:[Object(a.jsx)("h1",{className:w.a.title,children:"Phonebook"}),Object(a.jsx)(_,{addContact:this.addContact}),Object(a.jsx)("h2",{className:w.a.title,children:"Contacts"}),n.length>1&&Object(a.jsx)(g,{filter:e,filterRender:this.filterRender}),Object(a.jsx)(k,{array:c,deleteItem:this.handleDelete})]})}}]),n}(c.Component);s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(F,{})}),document.getElementById("root"))},39:function(t,e,n){t.exports={container:"App_container__1hREA",title:"App_title__2Zo9Y"}},63:function(t,e,n){t.exports={title:"Filter_title__Bfqqk",input:"Filter_input__PAR5R"}}},[[217,1,2]]]);
//# sourceMappingURL=main.94963dc9.chunk.js.map