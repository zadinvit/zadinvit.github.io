(this["webpackJsonpmaterial-ui-react-demo"]=this["webpackJsonpmaterial-ui-react-demo"]||[]).push([[0],{82:function(e,t,c){},83:function(e,t,c){},94:function(e,t,c){"use strict";c.r(t);var a=c(0),r=c.n(a),n=c(11),o=c.n(n),i=(c(82),c(40)),l=c(21),s=c(28),j=(c.p,c(83),c(136)),u=c(67),b=c(152),h=c(50),O=c(51),d=(c(84),c(142)),p=c(151),g=c(145),f=c(139),x=c(143),y=c(144),k=c(141),m=c(153),I=c(154),D=c(147),v=c(65),C=c.n(v),w=c(148),Z=c(150),A=c(156),S=c(155),E=c(7),K=Object(j.a)({table:{minWidth:650}}),F=[{category:"korpus",ID:"ZA2090"},{category:"korpus",ID:"ZA2039"},{category:"korpus",ID:"ZA2019"},{category:"korpus",ID:"ZA2059"},{category:"korpus",ID:"ZA2089"},{category:"korpus",ID:"ZA20100"},{category:"kolecka",ID:"MK01"},{category:"kolecka",ID:"MK02"},{category:"kolecka",ID:"MK03"},{category:"kolecka",ID:"MK04"},{category:"Z\xe1suvka",ID:"ZAK50"},{category:"Z\xe1suvka",ID:"ZAK51"},{category:"Z\xe1suvka",ID:"ZAK52"},{category:"Z\xe1suvka",ID:"ZAK53"}];function L(){var e=K(),t=Object(a.useState)([]),c=Object(s.a)(t,2),n=c[0],o=c[1],j=Object(a.useState)(""),u=Object(s.a)(j,2),b=u[0],h=u[1],O=Object(a.useState)([]),v=Object(s.a)(O,2),L=v[0],B=v[1],M=Object(a.useState)(!1),P=Object(s.a)(M,2),R=P[0],J=P[1],T=Object(a.useState)(!1),z=Object(s.a)(T,2),N=z[0],U=z[1],V=Object(a.useState)(!1),W=Object(s.a)(V,2),q=W[0],G=W[1],H=function(e){return function(t,c){var a=Object(l.a)(n);a[e].parents=c,o(a)}};r.a.useEffect((function(){var e=new Array;b?(n.forEach((function(t){var c=!1;t.forEach((function(a){a.ID.toLowerCase().includes(b.toLowerCase())&&(c||(e.push(t),c=!0))}))})),B(e)):B(Object(l.a)(n))}),[b,n]),r.a.useEffect((function(){var e=Object(l.a)(n);e.forEach((function(e){e.checked=q})),o(e)}),[q]);return Object(E.jsx)(f.a,{component:k.a,children:Object(E.jsxs)(d.a,{className:e.table,"aria-label":"simple table",children:[Object(E.jsx)(x.a,{children:Object(E.jsxs)(y.a,{children:[N?Object(E.jsxs)(g.a,{width:"30px",children:[" ",Object(E.jsx)(S.a,{color:"primary",checked:q,onChange:function(){return G(!q)}})]}):Object(E.jsx)(E.Fragment,{}),Object(E.jsxs)(g.a,{children:[Object(E.jsx)(D.a,{endIcon:R?Object(E.jsx)(w.a,{}):Object(E.jsx)(C.a,{}),onClick:function(){var e=Object(l.a)(n);R?(e.sort((function(e,t){return e[0].ID.localeCompare(t[0].localeCompare)})),J(!1)):(e.sort((function(e,t){return t[0].ID.localeCompare(e[0].localeCompare)})),J(!0)),o(e)},children:" ID "}),Object(E.jsx)(m.a,{onChange:function(e){h(e.target.value)},placeholder:"Vyhledat ID",InputProps:{endAdornment:Object(E.jsx)(A.a,{position:"start",children:Object(E.jsx)(Z.a,{})})}})]}),Object(E.jsxs)(g.a,{children:["Um\xedst\u011bn\xed",N?Object(E.jsx)(D.a,{style:{float:"right",backgroundColor:"red",color:"white"},onClick:function(){for(var e=Object(l.a)(n),t=e.length-1;t>=0;t--)e[t].checked&&e.splice(t,1);o(e)},children:" Delete selected rows "}):Object(E.jsx)(E.Fragment,{}),Object(E.jsx)(D.a,{style:{float:"right",backgroundColor:"green",color:"white",marginRight:"20px"},onClick:function(){var e=Object(l.a)(n),t=[];t.parents=[],t.checked=!1,e.unshift(t),o(e)},children:" Add Row"}),Object(E.jsx)(D.a,{style:{float:"right",backgroundColor:"orange",color:"white",marginRight:"20px"},onClick:function(){U(!N)},children:" Edit"})]})]})}),Object(E.jsx)(p.a,{children:L.map((function(e,t){return Object(E.jsxs)(y.a,{children:[N?Object(E.jsxs)(g.a,{width:"30px",children:[" ",Object(E.jsx)(S.a,{checked:e.checked,onChange:(a=t,function(){var e=Object(l.a)(n);e[a].checked=!e[a].checked,o(e)}),color:"primary"})]}):Object(E.jsx)(E.Fragment,{}),Object(E.jsx)(g.a,{children:Object(E.jsx)(I.a,{multiple:!0,options:e.length?F.filter((function(t){return t.category===e[0].category})):F,groupBy:function(e){return e.category},getOptionLabel:function(e){return e.ID},value:e,onChange:(c=t,function(e,t){var a=Object(l.a)(n);a[c]=t.sort((function(e,t){return t.ID.localeCompare(e.localeCompare)})),a[c].parents=n[c].parents,o(a)}),style:{width:"300px",color:"#000000"},renderInput:function(e){return Object(E.jsx)(m.a,Object(i.a)(Object(i.a)({},e),{},{label:"ID polo\u017eky",color:"primary"}))}})}),Object(E.jsx)(g.a,{children:Object(E.jsx)(I.a,{multiple:!0,options:e.length?F.filter((function(t){return t.category!==e[0].category})):F,groupBy:function(e){return e.category},getOptionLabel:function(e){return e.ID},style:{width:"650px",color:"#000000"},renderInput:function(e){return Object(E.jsx)(m.a,Object(i.a)(Object(i.a)({},e),{},{label:"ID polo\u017eky",color:"primary"}))},onChange:H(t),value:e.parents?e.parents:[]})})]},function(e,t){var c=String(t);return e.forEach((function(e){c+=e.ID})),c}(e,t));var c,a}))})]})})}var B=Object(u.a)({typography:{h2:{fontSize:36,marginBottom:0}},palette:{primary:{main:h.a[400]},secondary:{main:O.a[400]},text:{primary:"#000000"}}});var M=function(){return Object(E.jsx)(b.a,{theme:B,children:Object(E.jsx)("div",{children:Object(E.jsx)("header",{children:Object(E.jsx)(L,{})})})})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,157)).then((function(t){var c=t.getCLS,a=t.getFID,r=t.getFCP,n=t.getLCP,o=t.getTTFB;c(e),a(e),r(e),n(e),o(e)}))};o.a.render(Object(E.jsx)(r.a.StrictMode,{children:Object(E.jsx)(M,{})}),document.getElementById("root")),P()}},[[94,1,2]]]);
//# sourceMappingURL=main.4ecc4003.chunk.js.map