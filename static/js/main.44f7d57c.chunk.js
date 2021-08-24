(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{23:function(t,e,n){t.exports={list:"ContactsList_list__2RiYd",text:"ContactsList_text__1O8Sh",contact:"ContactsList_contact__2MNvd",name:"ContactsList_name__1AS-g",phone:"ContactsList_phone__3QY12",removeBtn:"ContactsList_removeBtn__ApSAT"}},34:function(t,e,n){t.exports={section:"Section_section__Ap5Zy",title:"Section_title__2S6oE"}},51:function(t,e,n){t.exports={title:"Contacts_title__34Twh"}},52:function(t,e,n){t.exports={addBtn:"ButtonAdd_addBtn__BXYBD"}},53:function(t,e,n){t.exports={form:"Form_form__2TM1N"}},90:function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"registerUserOperation",(function(){return at})),n.d(r,"loginUserOperation",(function(){return ct})),n.d(r,"logoutUserOperation",(function(){return ot})),n.d(r,"getCurrentUserOperation",(function(){return st}));var a={};n.r(a),n.d(a,"fetchContacts",(function(){return Ft})),n.d(a,"addContactOperation",(function(){return Pt})),n.d(a,"removeContactOperation",(function(){return qt}));var c=n(0),o=n.n(c),s=n(27),i=n.n(s),u=n(7),l=n(13),b=n(25),d=n(4),p=n.n(d),j=n(10),f=n(5),O=n(18),h=n.n(O),m="https://connections-api.herokuapp.com/",x=function(t){h.a.defaults.headers.common.Authorization="Bearer ".concat(t)},g=function(){h.a.defaults.headers.common.Authorization=""};function v(){return w.apply(this,arguments)}function w(){return(w=Object(j.a)(p.a.mark((function t(){var e,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("".concat(m,"contacts"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return k.apply(this,arguments)}function k(){return(k=Object(j.a)(p.a.mark((function t(e){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.post("".concat(m,"contacts"),e);case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function C(t){return A.apply(this,arguments)}function A(){return(A=Object(j.a)(p.a.mark((function t(e){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.delete("".concat(m,"contacts/").concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function S(t){return _.apply(this,arguments)}function _(){return(_=Object(j.a)(p.a.mark((function t(e){var n,r,a,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.name,r=e.email,a=e.password,t.next=3,h.a.post("".concat(m,"users/signup"),{name:n,email:r,password:a});case 3:return c=t.sent,t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function N(t){return U.apply(this,arguments)}function U(){return(U=Object(j.a)(p.a.mark((function t(e){var n,r,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.email,r=e.password,t.next=3,h.a.post("".concat(m,"users/login"),{email:n,password:r});case 3:return a=t.sent,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function L(){return z.apply(this,arguments)}function z(){return(z=Object(j.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.post("".concat(m,"users/logout"));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function E(){return T.apply(this,arguments)}function T(){return(T=Object(j.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("".concat(m,"users/current"));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var B,R,I,F,P,q,Z,M,Y,D,J=n(3),W=Object(J.b)("auth/registerUserRequest"),$=Object(J.b)("auth/registerUserSuccess"),H=Object(J.b)("auth/registerUserError"),Q=Object(J.b)("auth/loginUserSuccess"),X=Object(J.b)("auth/loginUserRequest"),G=Object(J.b)("auth/loginUserError"),K=Object(J.b)("auth/logoutUserSuccess"),V=Object(J.b)("auth/logoutUserRequest"),tt=Object(J.b)("auth/logoutUserError"),et=Object(J.b)("auth/getCurrentUserRequest"),nt=Object(J.b)("auth/getCurrentUserSuccess"),rt=Object(J.b)("auth/getCurrentUserError"),at=function(t){return function(){var e=Object(j.a)(p.a.mark((function e(n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(W()),e.prev=1,e.next=4,S(t);case 4:r=e.sent,n($(r.data)),x(r.data.token),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(H(e.t0.response.status));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},ct=function(t){return function(){var e=Object(j.a)(p.a.mark((function e(n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(X()),e.prev=1,e.next=4,N(t);case 4:r=e.sent,n(Q(r.data)),x(r.data.token),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(G(e.t0.response.status));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},ot=function(){return function(){var t=Object(j.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(V()),t.prev=1,t.next=4,L();case 4:e(K()),g(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(tt(t.t0.response.status));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},st=function(){return function(){var t=Object(j.a)(p.a.mark((function t(e,n){var r,a,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n(),a=r.auth.token){t.next=3;break}return t.abrupt("return");case 3:return x(a),e(et()),t.prev=5,t.next=8,E();case 8:c=t.sent,e(nt(c.data)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),e(rt(t.t0.response.status));case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}()},it=n(8),ut=n(1),lt=function(){var t=Object(c.useState)(""),e=Object(l.a)(t,2),n=e[0],a=e[1],o=Object(c.useState)(""),s=Object(l.a)(o,2),i=s[0],u=s[1],b=Object(c.useState)(""),d=Object(l.a)(b,2),O=d[0],h=d[1],m=Object(f.b)(),x=function(t){switch(t.currentTarget.name){case"name":return void a(t.currentTarget.value);case"email":return void u(t.currentTarget.value);case"password":return void h(t.currentTarget.value);default:return}},g=function(){var t=Object(j.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),m(r.registerUserOperation({name:n,email:i,password:O})),a(""),u(""),h("");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(ut.jsxs)(bt,{onSubmit:g,children:[Object(ut.jsxs)(dt,{children:["Name:",Object(ut.jsx)(pt,{name:"name",type:"text",autoComplete:"off",value:n,onChange:x})]}),Object(ut.jsxs)(dt,{children:["Email:",Object(ut.jsx)(pt,{name:"email",type:"text",autoComplete:"off",value:i,onChange:x})]}),Object(ut.jsxs)(dt,{children:["Password:",Object(ut.jsx)(pt,{name:"password",type:"password",autoComplete:"off",value:O,onChange:x})]}),Object(ut.jsx)(jt,{type:"submit",children:"Sign up"})]})},bt=it.a.form(B||(B=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n\n  width: 40%;\n  margin: 0 auto;\n\n  border: 2px solid black;\n  padding: 15px;\n"]))),dt=it.a.label(R||(R=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  width: 100%;\n\n  font-weight: bold;\n\n  color: #94255d;\n"]))),pt=it.a.input(I||(I=Object(u.a)(["\n  width: 70%;\n  margin-left: 20px;\n  padding: 5px;\n\n  color: #94255d;\n\n  border: 2px solid #94255d;\n  border-radius: 5px;\n"]))),jt=it.a.button(F||(F=Object(u.a)(["\n  padding: 5px 15px;\n  width: 130px;\n  margin-top: 10px;\n\n  background-color: rgb(126, 50, 150);\n  color: aliceblue;\n\n  border: none;\n  border-radius: 5px;\n\n  transition: background-color 250ms ease, transform 250ms ease;\n\n  &:hover,\n  &:focus {\n    background-color: rgb(162, 63, 192);\n    transform: scale(1.1);\n  }\n"]))),ft=function(){var t=Object(c.useState)(""),e=Object(l.a)(t,2),n=e[0],a=e[1],o=Object(c.useState)(""),s=Object(l.a)(o,2),i=s[0],u=s[1],b=Object(f.b)(),d=function(t){switch(t.currentTarget.name){case"email":return void a(t.currentTarget.value);case"password":return void u(t.currentTarget.value);default:return}},O=function(){var t=Object(j.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),b(r.loginUserOperation({email:n,password:i})),a(""),u("");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(ut.jsxs)(Ot,{onSubmit:O,children:[Object(ut.jsxs)(ht,{children:["Email",Object(ut.jsx)(mt,{name:"email",type:"text",autoComplete:"off",value:n,onChange:d})]}),Object(ut.jsxs)(ht,{children:["Password",Object(ut.jsx)(mt,{name:"password",type:"password",autoComplete:"off",value:i,onChange:d})]}),Object(ut.jsx)(xt,{type:"submit",children:"Log in"})]})},Ot=it.a.form(P||(P=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n\n  width: 40%;\n  margin: 0 auto;\n\n  border: 2px solid black;\n  padding: 15px;\n"]))),ht=it.a.label(q||(q=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  width: 100%;\n\n  font-weight: bold;\n\n  color: #94255d;\n"]))),mt=it.a.input(Z||(Z=Object(u.a)(["\n  width: 70%;\n  margin-left: 20px;\n  padding: 5px;\n\n  color: #94255d;\n\n  border: 2px solid #94255d;\n  border-radius: 5px;\n"]))),xt=it.a.button(M||(M=Object(u.a)(["\n  padding: 5px 15px;\n  width: 130px;\n  margin-top: 10px;\n\n  background-color: rgb(126, 50, 150);\n  color: aliceblue;\n\n  border: none;\n  border-radius: 5px;\n\n  transition: background-color 250ms ease, transform 250ms ease;\n\n  &:hover,\n  &:focus {\n    background-color: rgb(162, 63, 192);\n    transform: scale(1.1);\n  }\n"]))),gt=n(21),vt=function(t){var e=t.style,n=t.type,r=t.name,a=t.pattern,c=t.title,o=t.value,s=t.handleInputChange,i=t.label;return Object(ut.jsxs)(kt,{children:[i,":",Object(ut.jsx)(Ct,{style:Object(gt.a)({},e),type:n,name:r,pattern:a,title:c,required:!0,value:o,onChange:s,autoComplete:"off"})]})};vt.defaultProps={type:"text",label:""};var wt,yt=vt,kt=it.a.label(Y||(Y=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  width: 100%;\n\n  font-weight: bold;\n\n  color: #94255d;\n"]))),Ct=it.a.input(D||(D=Object(u.a)(["\n  width: 60%;\n  margin-left: 20px;\n  padding: 5px;\n\n  color: #94255d;\n\n  border: 2px solid #94255d;\n  border-radius: 5px;\n"]))),At=n(23),St=n.n(At),_t={setUpFilter:Object(J.b)("phonebook/filter")},Nt=Object(J.b)("contacts/fetchContactsRequest"),Ut=Object(J.b)("contacts/fetchContactsSuccess"),Lt=Object(J.b)("contacts/fetchContactsError"),zt=Object(J.b)("contacts/addContactRequest"),Et=Object(J.b)("contacts/addContactSuccess"),Tt=Object(J.b)("contacts/addContactError"),Bt=Object(J.b)("contacts/removeContactRequest"),Rt=Object(J.b)("contacts/removeContactSuccess"),It=Object(J.b)("contacts/removeContactError"),Ft=function(){return function(){var t=Object(j.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Nt()),t.prev=1,t.next=4,v();case 4:n=t.sent,e(Ut(n)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(Lt(t.t0.response.status));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},Pt=function(t){return function(){var e=Object(j.a)(p.a.mark((function e(n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(zt()),e.prev=1,e.next=4,y(t);case 4:r=e.sent,n(Et(r)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n(Tt(e.t0.response.status));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},qt=function(t){return function(){var e=Object(j.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Bt()),e.prev=1,e.next=4,C(t);case 4:n(Rt(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(It(e.t0.response.status));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()},Zt=n(28),Mt=function(t){return t.contacts.items.entities},Yt=function(t){return t.contacts.filter},Dt={getItems:Mt,getFilter:Yt,getError:function(t){return t.contacts.items.error},getFilteredContacts:Object(Zt.a)([Mt,Yt],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},Jt=function(){var t=Object(f.c)(Dt.getFilteredContacts),e=Object(f.b)();return Object(ut.jsx)("ul",{className:St.a.list,children:t.map((function(t){var n=t.name,r=t.id,c=t.number;return Object(ut.jsxs)("li",{className:St.a.contact,children:[Object(ut.jsxs)(Wt,{className:St.a.text,children:[Object(ut.jsx)("p",{className:St.a.name,children:n}),Object(ut.jsx)("p",{className:St.a.phone,children:c})]}),Object(ut.jsx)("button",{className:St.a.removeBtn,type:"button",onClick:function(){return e(a.removeContactOperation(r))},children:"Remove contact"})]},r)}))})},Wt=it.a.div(wt||(wt=Object(u.a)([""]))),$t=n(51),Ht=n.n($t),Qt=function(t){var e=t.title,n=Object(f.c)(Dt.getFilter),r=Object(f.b)();return Object(ut.jsxs)(ut.Fragment,{children:[Object(ut.jsx)("h2",{className:Ht.a.title,children:e}),Object(ut.jsx)(yt,{style:{width:"45%"},label:"Find contacts by name",type:"text",name:"filter",value:n,handleInputChange:function(t){r(_t.setUpFilter(t.currentTarget.value))},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f."}),Object(ut.jsx)(Jt,{})]})};Qt.defaultProps={title:""};var Xt=Qt,Gt=n(52),Kt=n.n(Gt),Vt=function(){return Object(ut.jsx)("button",{className:Kt.a.addBtn,type:"submit",children:"Add contact"})},te=n(53),ee=n.n(te),ne=function(){var t=Object(c.useState)(""),e=Object(l.a)(t,2),n=e[0],r=e[1],o=Object(c.useState)(""),s=Object(l.a)(o,2),i=s[0],u=s[1],b=Object(f.c)(Dt.getItems),d=Object(f.b)(),p=function(t){switch(t.currentTarget.name){case"name":return void r(t.currentTarget.value);case"number":return void u(t.currentTarget.value);default:return}};return Object(ut.jsxs)("form",{className:ee.a.form,onSubmit:function(t){t.preventDefault(),b.find((function(t){return t.name===n}))?alert("Attempt to create existing contact!"):(d(a.addContactOperation({name:n,number:i})),r(""),u(""))},children:[Object(ut.jsx)(yt,{label:"Name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",handleInputChange:p,value:n}),Object(ut.jsx)(yt,{label:"Phone number",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",value:i,handleInputChange:p}),Object(ut.jsx)(Vt,{})]})},re=n(34),ae=n.n(re),ce=function(t){var e=t.title,n=t.children;return Object(ut.jsxs)("section",{className:ae.a.section,children:[Object(ut.jsx)("h1",{className:ae.a.title,children:e}),n]})};ce.defaultProps={title:"",children:[]};var oe,se,ie,ue=ce,le=function(){var t=Object(f.c)(Dt.getItems),e=Object(f.b)();return Object(c.useEffect)((function(){e(a.fetchContacts())}),[e]),Object(ut.jsxs)(ue,{title:"Phonebok",children:[Object(ut.jsx)(ne,{}),t.length>0&&Object(ut.jsx)(Xt,{title:"Contacts"})]})},be=function(t){return t.auth.user},de={getRefreshing:function(t){return t.auth.isRefreshing},getAuthStatus:function(t){return t.auth.userAuthorized},getUser:be,getToken:function(t){return t.auth.token},getUserName:Object(Zt.a)([be],(function(t){return t.name}))},pe=function(){var t=Object(f.c)(de.getAuthStatus);return Object(ut.jsxs)(ut.Fragment,{children:[Object(ut.jsx)(je,{children:"Best phonebook ever!"}),Object(ut.jsx)(fe,{children:t?"Welcome to your phonebook!":"Authorize now to start!"}),Object(ut.jsx)(Oe,{children:"Here you can keep your contacts and work with them"})]})},je=it.a.h1(oe||(oe=Object(u.a)(["\n  margin-top: 200px;\n  margin-bottom: 0;\n  color: #94255d;\n"]))),fe=it.a.h2(se||(se=Object(u.a)(["\n  width: 60%;\n  margin-left: auto;\n  margin-right: auto;\n\n  color: #94255d;\n"]))),Oe=it.a.p(ie||(ie=Object(u.a)(["\n  margin-top: 20px;\n  margin-bottom: 0;\n\n  color: #94255d;\n"]))),he=n(54),me=n.n(he),xe=n(55),ge=(n(84),n(85),n(31)),ve=n(9),we=["children"];function ye(t){var e=t.children,n=Object(ge.a)(t,we),r=Object(f.c)(de.getAuthStatus);return Object(ut.jsx)(ve.b,Object(gt.a)(Object(gt.a)({},n),{},{children:r?e:Object(ut.jsx)(ve.a,{to:"/login"})}))}var ke,Ce,Ae,Se,_e,Ne,Ue,Le=["children","restricted"];function ze(t){var e=t.children,n=t.restricted,r=void 0!==n&&n,a=Object(ge.a)(t,Le),c=Object(f.c)(de.getAuthStatus),o=r&&c;return Object(ut.jsx)(ve.b,Object(gt.a)(Object(gt.a)({},a),{},{children:o?Object(ut.jsx)(ve.a,{to:"/"}):e}))}var Ee,Te,Be,Re,Ie,Fe,Pe,qe,Ze=function(){var t=Object(f.b)();Object(c.useEffect)((function(){t(r.getCurrentUserOperation())}),[t]);var e=Object(c.useState)(!1),n=Object(l.a)(e,2),a=n[0],o=n[1],s=Object(c.useState)("authorization"),i=Object(l.a)(s,2),u=i[0],b=i[1],d=Object(c.useState)(!1),p=Object(l.a)(d,2),j=p[0],O=p[1],h=Object(f.c)(de.getAuthStatus),m=Object(f.c)(de.getUserName),x=Object(f.c)(Dt.getError),g=Object(f.c)(de.getRefreshing);Object(c.useEffect)((function(){x&&Object(xe.error)({text:x})}),[x]);return!g&&Object(ut.jsxs)("div",{style:{textAlign:"center"},className:"App",children:[Object(ut.jsx)("nav",{children:Object(ut.jsxs)(Me,{children:[Object(ut.jsx)(Ye,{className:"navItem",children:Object(ut.jsx)(De,{onClick:function(){O(!1)},exact:!0,className:"navLink",activeClassName:"navLinkActive",to:"/",children:"home"})}),h&&Object(ut.jsx)(Ye,{className:"navItem",children:Object(ut.jsx)(De,{onClick:function(){O(!1)},className:"navLink",activeClassName:"navLinkActive",to:"/contacts",children:"contacts"})}),h?Object(ut.jsxs)(We,{children:[Object(ut.jsxs)($e,{children:["Welcome, ",m,"!"]}),Object(ut.jsx)(He,{onClick:function(){t(r.logoutUserOperation())},children:"Log out"})]}):Object(ut.jsxs)(Ye,{onClick:function(){b("authorization"),o(!a),O(!j),(window.location.href.includes("register")||window.location.href.includes("login"))&&O(!0)},className:me()("navItem"," withList",{current:j}),style:{borderRadius:!a&&"20px"},children:[u,a&&Object(ut.jsxs)(Je,{children:[Object(ut.jsx)("li",{children:Object(ut.jsx)(De,{className:"navLink",activeClassName:"navLinkActive",exact:!0,to:"/register",onClick:function(){b("register")},children:"register"})}),Object(ut.jsx)("li",{children:Object(ut.jsx)(De,{onClick:function(){b("login")},className:"navLink",activeClassName:"navLinkActive",to:"/login",children:"login"})})]})]})]})}),Object(ut.jsx)(ze,{path:"/",exact:!0,children:Object(ut.jsx)(pe,{})}),Object(ut.jsx)(ze,{path:"/register",exact:!0,restricted:!0,children:Object(ut.jsx)(lt,{})}),Object(ut.jsx)(ze,{path:"/login",exact:!0,restricted:!0,children:Object(ut.jsx)(ft,{})}),Object(ut.jsx)(ye,{path:"/contacts",exact:!0,children:Object(ut.jsx)(le,{})})]})},Me=it.a.ul(ke||(ke=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0;\n  margin-bottom: 20px;\n  padding: 20px;\n  list-style: none;\n"]))),Ye=it.a.li(Ce||(Ce=Object(u.a)(["\n  position: relative;\n\n  width: calc(100% / 3 - 40px);\n  padding: 10px 0;\n\n  color: #94255d;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-size: 40px;\n  &:not(:last-child) {\n    margin-right: 20px;\n  }\n  &:hover,\n  &:focus,\n  &:active,\n  &.current {\n    background-color: #dc8db1;\n    color: white;\n\n    border-radius: 20px;\n\n    &.withList {\n      border-bottom-left-radius: 0;\n      border-bottom-right-radius: 0;\n    }\n  }\n"]))),De=Object(it.a)(b.b)(Ae||(Ae=Object(u.a)(["\n  display: inline-block;\n  width: 100%;\n\n  color: #94255d;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-size: 40px;\n\n  &:hover,\n  &:focus,\n  &.navLinkActive {\n    background-color: #dc8db1;\n    color: white;\n\n    border-radius: 20px;\n  }\n"]))),Je=it.a.ul(Se||(Se=Object(u.a)(["\n  position: absolute;\n  bottom: -140%;\n  left: 0;\n\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n\n  background-color: #dc8db1;\n  color: white;\n\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  & > li {\n  }\n"]))),We=it.a.li(_e||(_e=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n\n  width: calc(100% / 3 - 40px);\n  padding: 20px;\n\n  font-size: 20px;\n  color: #94255d;\n\n  border: 2px solid #94255d;\n  border-radius: 10px;\n"]))),$e=it.a.p(Ne||(Ne=Object(u.a)(["\n  margin: 0;\n\n  font-weight: bold;\n"]))),He=it.a.button(Ue||(Ue=Object(u.a)(["\n  padding: 5px 15px;\n  width: 130px;\n\n  background-color: rgb(126, 50, 150);\n  color: aliceblue;\n\n  border: none;\n  border-radius: 5px;\n\n  transition: background-color 250ms ease, transform 250ms ease;\n\n  &:hover,\n  &:focus {\n    background-color: rgb(162, 63, 192);\n    transform: scale(1.1);\n  }\n"]))),Qe=(n(87),n(56)),Xe=n(30),Ge=n(2),Ke=n(11),Ve={name:null,email:null},tn=Object(J.c)(Ve,(Ee={},Object(Ge.a)(Ee,$,(function(t,e){return e.payload.user})),Object(Ge.a)(Ee,Q,(function(t,e){return e.payload.user})),Object(Ge.a)(Ee,K,(function(){return Ve})),Object(Ge.a)(Ee,nt,(function(t,e){return e.payload})),Ee)),en=Object(J.c)(null,(Te={},Object(Ge.a)(Te,$,(function(t,e){return e.payload.token})),Object(Ge.a)(Te,Q,(function(t,e){return e.payload.token})),Object(Ge.a)(Te,K,(function(){return null})),Te)),nn=Object(J.c)(!1,(Be={},Object(Ge.a)(Be,$,(function(){return!0})),Object(Ge.a)(Be,Q,(function(){return!0})),Object(Ge.a)(Be,K,(function(){return!1})),Object(Ge.a)(Be,nt,(function(){return!0})),Be)),rn=Object(J.c)(!1,(Re={},Object(Ge.a)(Re,et,(function(){return!0})),Object(Ge.a)(Re,nt,(function(){return!1})),Object(Ge.a)(Re,rt,(function(){return!1})),Re)),an=function(t,e){switch(e.payload){case 400:return"Invalid data entered, please, change your inputs!";case 500:return"Oops, something went wrong :( Please, try again!";case 401:return"You shouls authorize to perform this operation!";default:return"Unknown error"}},cn=Object(J.c)(null,(Ie={},Object(Ge.a)(Ie,H,an),Object(Ge.a)(Ie,G,an),Object(Ge.a)(Ie,tt,an),Object(Ge.a)(Ie,rt,an),Ie)),on=Object(Ke.b)({user:tn,token:en,error:cn,userAuthorized:nn,isRefreshing:rn}),sn=Object(J.c)([],(Fe={},Object(Ge.a)(Fe,Ut,(function(t,e){return e.payload})),Object(Ge.a)(Fe,Et,(function(t,e){return[].concat(Object(Xe.a)(t),[e.payload])})),Object(Ge.a)(Fe,Rt,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),Fe)),un=Object(J.c)(!1,(Pe={},Object(Ge.a)(Pe,Nt,(function(){return!0})),Object(Ge.a)(Pe,Ut,(function(){return!1})),Object(Ge.a)(Pe,Lt,(function(){return!1})),Object(Ge.a)(Pe,zt,(function(){return!0})),Object(Ge.a)(Pe,Et,(function(){return!1})),Object(Ge.a)(Pe,Tt,(function(){return!1})),Object(Ge.a)(Pe,Bt,(function(){return!0})),Object(Ge.a)(Pe,Rt,(function(){return!1})),Object(Ge.a)(Pe,It,(function(){return!1})),Pe)),ln=function(t,e){switch(e.payload){case 400:return"Oops, something went wrong :( Please, try again!";case 401:return"You shouls authorize to perform this operation!";case 404:return"No data found for current user";case 500:return"Oops, something went wrong :( Please, try again!";default:return"Unknown error"}},bn=Object(J.c)("",(qe={},Object(Ge.a)(qe,Lt,ln),Object(Ge.a)(qe,Nt,(function(){return""})),Object(Ge.a)(qe,Tt,ln),Object(Ge.a)(qe,zt,(function(){return""})),Object(Ge.a)(qe,It,ln),Object(Ge.a)(qe,Bt,(function(){return""})),qe)),dn=Object(Ke.b)({entities:sn,isLoading:un,error:bn}),pn=Object(J.c)("",Object(Ge.a)({},_t.setUpFilter,(function(t,e){return e.payload}))),jn=Object(Ke.b)({items:dn,filter:pn}),fn=n(19),On=n(57),hn={key:"auth",storage:n.n(On).a,whitelist:["token"]},mn=Object(Xe.a)(Object(J.d)({serializableCheck:{ignoredActions:[fn.a,fn.f,fn.b,fn.c,fn.d,fn.e]}})),xn=Object(J.a)({reducer:{contacts:jn,auth:Object(fn.g)(hn,on)},middleware:mn,devTools:!1}),gn=Object(fn.h)(xn);i.a.render(Object(ut.jsx)(o.a.StrictMode,{children:Object(ut.jsx)(f.a,{store:xn,children:Object(ut.jsx)(Qe.a,{loading:null,persistor:gn,children:Object(ut.jsx)(b.a,{children:Object(ut.jsx)(Ze,{})})})})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.44f7d57c.chunk.js.map