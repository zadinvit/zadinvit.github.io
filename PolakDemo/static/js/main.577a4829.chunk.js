(this["webpackJsonpmaterial-ui-react-demo"]=this["webpackJsonpmaterial-ui-react-demo"]||[]).push([[0],{82:function(e,t,c){},83:function(e,t,c){},94:function(e,t,c){"use strict";c.r(t);var r=c(0),a=c.n(r),n=c(11),o=c.n(n),i=(c(82),c(40)),l=c(21),s=c(28),u=(c.p,c(83),c(136)),j=c(67),b=c(152),h=c(50),O=c(51),d=(c(84),c(143)),g=c(151),p=c(146),f=c(141),x=c(144),y=c(145),k=c(142),m=c(153),I=c(154),v=c(139),D=c(65),C=c.n(D),Z=c(148),w=c(150),A=c(156),S=c(155),E=c(7),F=Object(u.a)({table:{minWidth:650}}),K=[{category:"korpus",ID:"ZA2090"},{category:"korpus",ID:"ZA2039"},{category:"korpus",ID:"ZA2019"},{category:"korpus",ID:"ZA2059"},{category:"korpus",ID:"ZA2089"},{category:"korpus",ID:"ZA20100"},{category:"kolecka",ID:"MK01"},{category:"kolecka",ID:"MK02"},{category:"kolecka",ID:"MK03"},{category:"kolecka",ID:"MK04"},{category:"Z\xe1suvka",ID:"ZAK50"},{category:"Z\xe1suvka",ID:"ZAK51"},{category:"Z\xe1suvka",ID:"ZAK52"},{category:"Z\xe1suvka",ID:"ZAK53"}];function L(){var e=F(),t=Object(r.useState)([]),c=Object(s.a)(t,2),n=c[0],o=c[1],u=Object(r.useState)(""),j=Object(s.a)(u,2),b=j[0],h=j[1],O=Object(r.useState)([]),D=Object(s.a)(O,2),L=D[0],B=D[1],M=Object(r.useState)(!1),P=Object(s.a)(M,2),z=P[0],J=P[1],R=Object(r.useState)(!1),T=Object(s.a)(R,2),N=T[0],U=T[1],V=Object(r.useState)(!1),W=Object(s.a)(V,2),q=W[0],G=W[1],H=function(e){return function(t,c){var r=Object(l.a)(n);r[e].parents=Object(l.a)(c),o(r)}};a.a.useEffect((function(){var e=new Array;b?(n.forEach((function(t){var c=!1;t.forEach((function(r){r.ID.toLowerCase().includes(b.toLowerCase())&&(c||(e.push(t),c=!0))}))})),B(e)):B(Object(l.a)(n))}),[b,n]),a.a.useEffect((function(){var e=Object(l.a)(n);e.forEach((function(e){e.checked=q})),o(e)}),[q]);function Q(){for(var e=Object(l.a)(n),t=e.length-1;t>=0;t--)e[t].checked&&e.splice(t,1);o(e)}function X(e){return e.length?K.filter((function(t){return t.category===e[0].category})):e.parents.length?K.filter((function(t){var c=!0;return e.parents.forEach((function(e){t.category===e.category&&(c=!1)})),c})):K}return Object(E.jsx)(f.a,{component:k.a,children:Object(E.jsxs)(d.a,{className:e.table,"aria-label":"simple table",children:[Object(E.jsx)(x.a,{style:{backgroundColor:"#ececec"},children:Object(E.jsxs)(y.a,{children:[N?Object(E.jsxs)(p.a,{width:"30px",children:[" ",Object(E.jsx)(S.a,{color:"primary",checked:q,onChange:function(){return G(!q)}})]}):Object(E.jsx)(E.Fragment,{}),Object(E.jsxs)(p.a,{children:[Object(E.jsx)(v.a,{endIcon:z?Object(E.jsx)(Z.a,{}):Object(E.jsx)(C.a,{}),onClick:function(){var e=Object(l.a)(n);z?(e.sort((function(e,t){var c="",r="";return e[0]&&(c=e[0].ID),t[0]&&(r=t[0].ID),c.localeCompare(r.localeCompare)})),J(!1)):(e.sort((function(e,t){var c="",r="";return e[0]&&(c=e[0].ID),t[0]&&(r=t[0].ID),r.localeCompare(c.localeCompare)})),J(!0)),o(e)},children:" ID "}),Object(E.jsx)(m.a,{onChange:function(e){h(e.target.value)},placeholder:"Vyhledat ID",InputProps:{endAdornment:Object(E.jsx)(A.a,{position:"start",children:Object(E.jsx)(w.a,{})})}})]}),Object(E.jsxs)(p.a,{children:["Um\xedst\u011bn\xed",N?function(){var e=!1;return L.forEach((function(t){t.checked&&(e=!0)})),e?Object(E.jsx)(v.a,{style:{float:"right",backgroundColor:"red",color:"white"},onClick:Q,children:" Smazat "}):Object(E.jsx)(E.Fragment,{})}():Object(E.jsx)(E.Fragment,{}),Object(E.jsx)(v.a,{style:{float:"right",backgroundColor:"green",color:"white",marginRight:"20px"},onClick:function(){var e=Object(l.a)(n),t=[];t.parents=[],t.checked=!1,e.unshift(t),o(e)},children:" P\u0159idat "}),Object(E.jsx)(v.a,{style:{float:"right",backgroundColor:"orange",color:"white",marginRight:"20px"},onClick:function(){U(!N)},children:" Editovat"})]})]})}),Object(E.jsx)(g.a,{children:L.map((function(e,t){return Object(E.jsxs)(y.a,{children:[N?Object(E.jsxs)(p.a,{width:"30px",children:[" ",Object(E.jsx)(S.a,{checked:e.checked,onChange:(r=t,function(){var e=Object(l.a)(L);e[r].checked=!e[r].checked,B(e)}),color:"primary"})]}):Object(E.jsx)(E.Fragment,{}),Object(E.jsx)(p.a,{children:Object(E.jsx)(I.a,{multiple:!0,options:X(e),groupBy:function(e){return e.category},getOptionLabel:function(e){return e.ID},value:e,onChange:(c=t,function(e,t){var r=Object(l.a)(n);r[c]=t.sort((function(e,t){return t.ID.localeCompare(e.localeCompare)})),r[c].parents=n[c].parents,r[c].checked=n[c].checked,o(r)}),style:{width:"300px",color:"#000000"},renderInput:function(e){return Object(E.jsx)(m.a,Object(i.a)(Object(i.a)({},e),{},{label:"ID polo\u017eky",color:"primary"}))}})}),Object(E.jsx)(p.a,{children:Object(E.jsx)(I.a,{multiple:!0,options:e.length?K.filter((function(t){return t.category!==e[0].category})):K,groupBy:function(e){return e.category},getOptionLabel:function(e){return e.ID},style:{width:"650px",color:"#000000"},renderInput:function(e){return Object(E.jsx)(m.a,Object(i.a)(Object(i.a)({},e),{},{label:"ID polo\u017eky",color:"primary"}))},onChange:H(t),value:e.parents?e.parents:[]})})]},function(e,t){var c=String(t);return e.forEach((function(e){c+=e.ID})),c}(e,t));var c,r}))})]})})}var B=Object(j.a)({typography:{h2:{fontSize:36,marginBottom:0}},palette:{primary:{main:h.a[400]},secondary:{main:O.a[400]},text:{primary:"#000000"}}});var M=function(){return Object(E.jsx)(b.a,{theme:B,children:Object(E.jsx)("div",{children:Object(E.jsx)("header",{children:Object(E.jsx)(L,{})})})})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,157)).then((function(t){var c=t.getCLS,r=t.getFID,a=t.getFCP,n=t.getLCP,o=t.getTTFB;c(e),r(e),a(e),n(e),o(e)}))};o.a.render(Object(E.jsx)(a.a.StrictMode,{children:Object(E.jsx)(M,{})}),document.getElementById("root")),P()}},[[94,1,2]]]);
//# sourceMappingURL=main.577a4829.chunk.js.map