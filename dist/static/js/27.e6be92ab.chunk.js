(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[27],{152:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return p}));var r=t(30),n=t.n(r),c=t(31),l=t(34),s=t(0),o=t.n(s),i=t(36),d=t(37),m=t(1),u=t(41);function p(e){var a=Object(s.useState)({}),t=Object(l.a)(a,2),r=t[0],p=t[1],v=Object(s.useState)([]),f=Object(l.a)(v,2),E=f[0],g=f[1];console.log(e.location.state),Object(s.useEffect)((function(){var a=e.location.state;null!==a&&void 0!==a&&""!==a&&p(a.productDetails),w()}),[]);var w=function(){var e=Object(c.a)(n.a.mark((function e(){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.getProductUnitList();case 3:a=e.sent,g(a.productUnitList),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error...",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return o.a.createElement(s.Fragment,null,o.a.createElement(i.a,null),o.a.createElement("div",{class:"hero-wrap hero-bread",style:{backgroundImage:"url('images/bg_1.jpg')"}},o.a.createElement("div",{class:"container"},o.a.createElement("div",{class:"row no-gutters slider-text align-items-center justify-content-center"},o.a.createElement("div",{class:"col-md-9 ftco-animate text-center fadeInUp ftco-animated"},o.a.createElement("p",{class:"breadcrumbs"},o.a.createElement("span",{class:"mr-2"},o.a.createElement("a",{href:"index.html"},"Home"))," ",o.a.createElement("span",{class:"mr-2"},o.a.createElement("a",{href:"index.html"},"Product"))," ",o.a.createElement("span",null,"Single Product")),o.a.createElement("h1",{class:"mb-0 bread"},"Product Details"))))),o.a.createElement("section",{class:"ftco-section"},o.a.createElement("div",{class:"container"},o.a.createElement("div",{class:"row"},o.a.createElement("div",{class:"col-lg-6 mb-5 ftco-animate fadeInUp ftco-animated"},o.a.createElement("img",{src:m.b+"/api/images?path=productImages/"+r.image_name,class:"img-fluid",alt:"product image"})),o.a.createElement("div",{class:"col-lg-6 product-details pl-md-5 ftco-animate fadeInUp ftco-animated"},o.a.createElement("h3",null,r.product_name),o.a.createElement("p",null," ",r.description," "),o.a.createElement("div",{class:"row mt-4"},o.a.createElement("div",{class:"col-md-6"},o.a.createElement("label",{for:"description"},"Available Units"),o.a.createElement("div",{class:"form-group d-flex"},o.a.createElement("div",{class:"select-wrap"},o.a.createElement("div",{class:"icon"},o.a.createElement("span",{class:"ion-ios-arrow-down"})),o.a.createElement("select",{name:"",id:"",class:"form-control"},(E.length>0?E:[]).map((function(e){return Object.values(r.unit_id.split(",")).map((function(a){return a==e.id?o.a.createElement("option",{id:e.id,value:e.id},e.unit_name):null}))}))))))),o.a.createElement("p",null,o.a.createElement("a",{href:"#",class:"btn btn-black py-3 px-5"},"Edit")))))),o.a.createElement(d.a,null))}},32:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var r=t(1);function n(e){(e||401===e.response.status)&&(r.c.remove(),document.location.reload())}},33:function(e,a,t){"use strict";function r(){return{Authorization:"Basic ".concat(sessionStorage.token),"content-type":"application/json"}}t.d(a,"a",(function(){return r}))},36:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var r=t(34),n=t(0),c=t.n(n),l=t(1);function s(){var e=l.c.get().userId,a=l.c.get().role_id,t=Object(n.useState)(l.d.get().cartTotal),s=Object(r.a)(t,2),o=s[0],i=s[1];return Object(n.useEffect)((function(){i(l.d.get().cartTotal)})),c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"py-1 bg-primary"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row no-gutters d-flex align-items-start align-items-center px-md-0"},c.a.createElement("div",{className:"col-lg-12 d-block"},c.a.createElement("div",{className:"row d-flex",style:{padding:"10px"}}))))),c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light",id:"ftco-navbar"},c.a.createElement("div",{className:"container"},c.a.createElement("a",{className:"navbar-brand",href:"/"},"SA SUPERMART"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#ftco-nav","aria-controls":"ftco-nav","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"oi oi-menu"})," Menu"),c.a.createElement("div",{className:"collapse navbar-collapse",id:"ftco-nav"},1==e&&1==a?c.a.createElement("ul",{className:"navbar-nav ml-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"/",className:"nav-link"},"Home")),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Products"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdown04"},c.a.createElement("a",{className:"dropdown-item",href:"/add-new-product"},"Add New"),c.a.createElement("a",{className:"dropdown-item",href:"/view-added-product"},"View List"))),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Orders"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdown04"},c.a.createElement("a",{className:"dropdown-item",href:"/view-order-list"},"View Customer Wise"),c.a.createElement("a",{className:"dropdown-item",href:"/view-ordered-product"},"View Product Wise"))),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Reports"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdown04"},c.a.createElement("a",{className:"dropdown-item",href:"/view-order-report"},"Order Report"),c.a.createElement("a",{className:"dropdown-item",href:"/view-ordered-product-report"},"Ordered Product Report"))),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Settings"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdown04"},c.a.createElement("a",{className:"dropdown-item",href:"/alter-categories"},"Categories"),c.a.createElement("a",{className:"dropdown-item",href:"/alter-units"},"Units"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"/logout",className:"nav-link"},"Logout"))):c.a.createElement("ul",{className:"navbar-nav ml-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"/",className:"nav-link"},"Home")),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Orders"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdown04"},c.a.createElement("a",{className:"dropdown-item",href:"/view-user-order-list"},"View "))),c.a.createElement("li",{className:"nav-item cta cta-colored"},c.a.createElement("a",{href:"/cart-list",className:"nav-link"},c.a.createElement("span",{className:"icon-shopping_cart"}),"[",o,"]")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"/logout",className:"nav-link"},"Logout")))))))}},37:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var r=t(0),n=t.n(r);function c(){return n.a.createElement("footer",{style:{backgroundColor:"#82ae46"}},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row no-gutters d-flex align-items-start align-items-center px-md-0"},n.a.createElement("div",{className:"col-lg-12 d-block"},n.a.createElement("div",{className:"row "},n.a.createElement("div",{className:"col-md pr-4 d-flex topper align-items-center"},n.a.createElement("p",{className:"text"},"Copyright 2019 \xa9All rights reserved | A1abilities PTY TLD  ABN# 82631548224")))))))}},41:function(e,a,t){"use strict";var r=t(30),n=t.n(r),c=t(31),l=t(38),s=t.n(l),o=t(1),i=t(32),d=t(33),m=function(e){var a=e.methodType;return{method:void 0===a?"GET":a,headers:Object(d.a)()}};a.a={getProductUnitList:function(){var e=Object(c.a)(n.a.mark((function e(){var a,t,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(o.a,"/staticrecords/getProductUnitList"),e.prev=1,e.next=4,s()(a,Object.assign({},m({methodType:"GET"})));case 4:return t=e.sent,r=t.data,e.abrupt("return",r);case 9:throw e.prev=9,e.t0=e.catch(1),Object(i.a)(e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),getMainUnitRelateRecords:function(){var e=Object(c.a)(n.a.mark((function e(a){var t,r,c,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object.assign({},a),r="".concat(o.a,"/staticrecords/getMainUnitRelateRecords"),e.prev=2,e.next=5,s()(r,Object.assign({},m({methodType:"POST"}),{data:t}));case 5:return c=e.sent,l=c.data,e.abrupt("return",l);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}(),getOrderStatusList:function(){var e=Object(c.a)(n.a.mark((function e(){var a,t,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(o.a,"/staticrecords/getOrderStatusList"),e.prev=1,e.next=4,s()(a,Object.assign({},m({methodType:"GET"})));case 4:return t=e.sent,r=t.data,e.abrupt("return",r);case 9:throw e.prev=9,e.t0=e.catch(1),Object(i.a)(e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=27.e6be92ab.chunk.js.map