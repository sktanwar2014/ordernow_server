(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[21],{133:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h}));var r=a(31),n=a.n(r),c=a(32),o=a(35),s=a(0),l=a.n(s),i=(a(87),a(131)),u=a(147),d=a(36),m=a(37),p=a(43),v=a(38),g=a(1),f=a(12),b=Object(i.a)((function(e){return{root:{"& > *":{marginTop:e.spacing(2)}}}}));function h(){b();var e=Object(s.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],i=Object(s.useState)([]),h=Object(o.a)(i,2),w=h[0],E=h[1],y=Object(s.useState)([]),O=Object(o.a)(y,2),j=O[0],N=O[1],x=Object(s.useState)(0),k=Object(o.a)(x,2),C=k[0],T=k[1],S=Object(s.useState)(1),P=Object(o.a)(S,2),A=P[0],D=P[1],L=Object(s.useState)(!1),I=Object(o.a)(L,2),B=I[0],_=I[1];Object(s.useEffect)((function(){M(),U()}),[]);var M=function(){var e=Object(c.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.getCategoryList();case 3:t=e.sent,r(t.categoryList),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error...",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(c.a)(n.a.mark((function e(){var t,a,r,c,o=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:0,a=o.length>1&&void 0!==o[1]?o[1]:0,r=o.length>2&&void 0!==o[2]?o[2]:1,_(!0),e.prev=4,e.next=7,p.a.getProductList({categoryId:t,subCategoryId:a,pageNo:r});case 7:c=e.sent,N(c.productList),T(c.productListCount),_(!1),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log("Error...",e.t0);case 16:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(c.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_(!0),D(1),""===(t=document.getElementById("categoryDropDown").value)||void 0===t||null===t){e.next=18;break}return e.prev=4,e.next=7,p.a.getSubCategoryList({categoryId:t});case 7:a=e.sent,E(a.subCategoriesList),_(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),console.log("Error...",e.t0);case 15:U(t,0),e.next=20;break;case 18:E([]),U();case 20:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=document.getElementById("categoryDropDown").value,""!==(r=document.getElementById("subCategoryDropDown").value)&&void 0!==r&&null!==r&&(D(1),U(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement(s.Fragment,null,l.a.createElement(d.a,null),l.a.createElement("div",{class:"hero-wrap hero-bread",style:{backgroundImage:"url('images/bg_1.jpg')"}},l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row no-gutters slider-text align-items-center justify-content-center"},l.a.createElement("div",{class:"col-md-9 ftco-animate text-center fadeInUp ftco-animated"},l.a.createElement("p",{class:"breadcrumbs"},l.a.createElement("span",{class:"mr-2"},l.a.createElement("a",{href:"index.html"},"Home"))," ",l.a.createElement("span",null,"Product")),l.a.createElement("h1",{class:"mb-0 bread"},"Products"))))),l.a.createElement("section",{className:"ftco-section"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{class:"row justify-content-center p-bottom-30"},l.a.createElement("div",{class:"col-xl-12 ftco-animate fadeInUp ftco-animated"},l.a.createElement("div",{class:"p-5 bg-light b-top-dark"},l.a.createElement("div",{class:"row align-items-end"},l.a.createElement("div",{class:"col-md-6"},l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"country"},"Category * "),l.a.createElement("div",{class:"d-flex"},l.a.createElement("select",{id:"categoryDropDown",class:"form-control",onChange:R},l.a.createElement("option",{value:""},"All"),void 0!==a&&null!==a&&""!==a&&(a.length>0?a:[]).map((function(e,t){return l.a.createElement("option",{id:e.id,value:e.id},e.category_name)})))))),l.a.createElement("div",{class:"col-md-6"},l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"country"},"Sub Category * "),l.a.createElement("div",{class:"d-flex"},l.a.createElement("select",{id:"subCategoryDropDown",class:"form-control",onChange:V},l.a.createElement("option",{value:""},"Select Any One"),void 0!==w&&null!==w&&""!==w&&(w.length>0?w:[]).map((function(e,t){return l.a.createElement("option",{id:e.id,value:e.id},e.category_name)})))))))))),l.a.createElement("div",{className:"row"},(j.length>0?j:[]).map((function(e,t){return l.a.createElement("div",{className:"col-md-6 col-lg-3 ftco-animate fadeInUp ftco-animated"},l.a.createElement("div",{className:"product"},l.a.createElement("a",{className:"img-prod"},l.a.createElement("img",{className:"product-img-fluid",src:g.b+"/api/images?path=productImages/"+e.image_name,alt:e.image_name}),l.a.createElement("div",{className:"overlay"})),l.a.createElement("div",{className:"text py-3 pb-4 px-3 text-center"},l.a.createElement("h3",null,l.a.createElement("a",null,e.product_name)),l.a.createElement("hr",null),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-md-12 col-lg-6 b-right-light"},l.a.createElement("div",{class:"category-menu"},l.a.createElement("button",{type:"button"},"Edit"))),l.a.createElement("div",{class:"col-md-12 col-lg-6"},l.a.createElement("div",{class:"category-menu"},l.a.createElement("button",{type:"button"},l.a.createElement(f.b,{to:{pathname:"/view-product-details",state:{productDetails:e}}},"View Details"))))))))}))),l.a.createElement("div",{className:"row",style:{justifyContent:"center"}},l.a.createElement(u.a,{count:Math.ceil(C/20),page:A,showFirstButton:!0,showLastButton:!0,onChange:function(e,t){var a=document.getElementById("categoryDropDown").value,r=document.getElementById("subCategoryDropDown").value;D(t),U(a,r,t)}})))),l.a.createElement(m.a,null),B?l.a.createElement(v.a,null):null)}},33:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(1);function n(e){(e||401===e.response.status)&&(r.c.remove(),document.location.reload())}},34:function(e,t,a){"use strict";function r(){return{Authorization:"Basic ".concat(sessionStorage.token),"content-type":"application/json"}}a.d(t,"a",(function(){return r}))},36:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(35),n=a(0),c=a.n(n),o=a(1);function s(){var e=o.c.get().userId,t=o.c.get().role_id,a=Object(n.useState)(o.d.get().cartTotal),s=Object(r.a)(a,2),l=s[0],i=s[1];return Object(n.useEffect)((function(){i(o.d.get().cartTotal)})),c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"py-1 bg-primary"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row no-gutters d-flex align-items-start align-items-center px-md-0"},c.a.createElement("div",{className:"col-lg-12 d-block"},c.a.createElement("div",{className:"row d-flex",style:{padding:"10px"}}))))),c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light",id:"ftco-navbar"},c.a.createElement("div",{className:"container"},c.a.createElement("a",{className:"navbar-brand",href:"/"},"SA SUPERMART"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#ftco-nav","aria-controls":"ftco-nav","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"oi oi-menu"})," Menu"),c.a.createElement("div",{className:"collapse navbar-collapse",id:"ftco-nav"},1==e&&1==t?c.a.createElement("ul",{className:"navbar-nav ml-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"/",className:"nav-link"},"Home")),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Products"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdown04"},c.a.createElement("a",{className:"dropdown-item",href:"/add-new-product"},"Add New"),c.a.createElement("a",{className:"dropdown-item",href:"/view-added-product"},"View List"),c.a.createElement("a",{className:"dropdown-item",href:"/alter-categories"},"Alter Categories"))),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Orders"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdown04"},c.a.createElement("a",{className:"dropdown-item",href:"/view-order-list"},"View Customer Wise"),c.a.createElement("a",{className:"dropdown-item",href:"/view-ordered-product"},"View Product Wise"))),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Reports"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdown04"},c.a.createElement("a",{className:"dropdown-item",href:"/view-order-report"},"Order Report"),c.a.createElement("a",{className:"dropdown-item",href:"/view-ordered-product-report"},"Ordered Product Report"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"/logout",className:"nav-link"},"Logout"))):c.a.createElement("ul",{className:"navbar-nav ml-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"/",className:"nav-link"},"Home")),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Orders"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdown04"},c.a.createElement("a",{className:"dropdown-item",href:"/view-user-order-list"},"View "))),c.a.createElement("li",{className:"nav-item cta cta-colored"},c.a.createElement("a",{href:"/cart-list",className:"nav-link"},c.a.createElement("span",{className:"icon-shopping_cart"}),"[",l,"]")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"/logout",className:"nav-link"},"Logout")))))))}},37:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(0),n=a.n(r);function c(){return n.a.createElement("footer",{style:{backgroundColor:"#82ae46"}},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row no-gutters d-flex align-items-start align-items-center px-md-0"},n.a.createElement("div",{className:"col-lg-12 d-block"},n.a.createElement("div",{className:"row "},n.a.createElement("div",{className:"col-md pr-4 d-flex topper align-items-center"},n.a.createElement("p",{className:"text"},"Copyright 2019 \xa9All rights reserved | A1abilities PTY TLD  ABN# 82631548224")))))))}},38:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(0),n=a.n(r);function c(){return n.a.createElement("div",{id:"ftco-loader",class:"show fullscreen",style:{visibility:"visible",opacity:".5"}},n.a.createElement("svg",{class:"circular",width:"48px",height:"48px"},n.a.createElement("circle",{class:"path-bg",cx:"24",cy:"24",r:"22",fill:"none","stroke-width":"4",stroke:"#eeeeee"}),n.a.createElement("circle",{class:"path",cx:"24",cy:"24",r:"22",fill:"none","stroke-width":"4","stroke-miterlimit":"10",stroke:"#F96D00"})))}},43:function(e,t,a){"use strict";var r=a(31),n=a.n(r),c=a(32),o=a(39),s=a.n(o),l=a(1),i=a(33),u=a(34),d=function(e){var t=e.methodType;return{method:void 0===t?"GET":t,headers:Object(u.a)()}};t.a={getProductPacketInfo:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/categories/getProductPacketInfo"),e.prev=2,e.next=5,s()(r,Object.assign({},d({methodType:"POST"}),{data:a}));case 5:return c=e.sent,o=c.data,e.abrupt("return",o);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getCategoryList:function(){var e=Object(c.a)(n.a.mark((function e(){var t,a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(l.a,"/categories/getCategoryList"),e.prev=1,e.next=4,s()(t,Object.assign({},d({methodType:"GET"})));case 4:return a=e.sent,r=a.data,e.abrupt("return",r);case 9:throw e.prev=9,e.t0=e.catch(1),Object(i.a)(e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),getAllMainCategories:function(){var e=Object(c.a)(n.a.mark((function e(){var t,a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(l.a,"/categories/getAllMainCategories"),e.prev=1,e.next=4,s()(t,Object.assign({},d({methodType:"GET"})));case 4:return a=e.sent,r=a.data,e.abrupt("return",r);case 9:throw e.prev=9,e.t0=e.catch(1),Object(i.a)(e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),getAllSubCategories:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/categories/getAllSubCategories"),e.prev=2,e.next=5,s()(r,Object.assign({},d({methodType:"POST"}),{data:a}));case 5:return c=e.sent,o=c.data,e.abrupt("return",o);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),handleCategoryActivation:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/categories/handleCategoryActivation"),e.prev=2,e.next=5,s()(r,Object.assign({},d({methodType:"POST"}),{data:a}));case 5:return c=e.sent,o=c.data,e.abrupt("return",o);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),handleSubCategoryActivation:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/categories/handleSubCategoryActivation"),e.prev=2,e.next=5,s()(r,Object.assign({},d({methodType:"POST"}),{data:a}));case 5:return c=e.sent,o=c.data,e.abrupt("return",o);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getProductList:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/categories/getProductList"),e.prev=2,e.next=5,s()(r,Object.assign({},d({methodType:"POST"}),{data:a}));case 5:return c=e.sent,o=c.data,e.abrupt("return",o);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),addNewCategory:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/categories/addNewCategory"),e.prev=2,e.next=5,s()(r,Object.assign({},d({methodType:"POST"}),{data:a}));case 5:return c=e.sent,o=c.data,e.abrupt("return",o);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),updateCategory:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/categories/updateCategory"),e.prev=2,e.next=5,s()(r,Object.assign({},d({methodType:"POST"}),{data:a}));case 5:return c=e.sent,o=c.data,e.abrupt("return",o);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),addNewSubCategory:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/categories/addNewSubCategory"),e.prev=2,e.next=5,s()(r,Object.assign({},d({methodType:"POST"}),{data:a}));case 5:return c=e.sent,o=c.data,e.abrupt("return",o);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),updateSubCategory:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/categories/updateSubCategory"),e.prev=2,e.next=5,s()(r,Object.assign({},d({methodType:"POST"}),{data:a}));case 5:return c=e.sent,o=c.data,e.abrupt("return",o);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getProductUnderMainCategory:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/categories/getProductUnderMainCategory"),e.prev=2,e.next=5,s()(r,Object.assign({},d({methodType:"POST"}),{data:a}));case 5:return c=e.sent,o=c.data,e.abrupt("return",o);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getSubCategoryList:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/categories/getSubCategoryList"),e.prev=2,e.next=5,s()(r,Object.assign({},d({methodType:"POST"}),{data:a}));case 5:return c=e.sent,o=c.data,e.abrupt("return",o);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),insertNewProduct:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/categories/insertNewProduct"),e.prev=2,e.next=5,s()(r,Object.assign({},d({methodType:"POST"}),{data:a}));case 5:return c=e.sent,o=c.data,e.abrupt("return",o);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=21.c5ee837a.chunk.js.map