(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[16],{169:function(e,t,a){"use strict";a.r(t);var r=a(31),n=a.n(r),c=a(46),s=a(32),o=a(12),l=a(42),i=a(35),d=a(0),u=a.n(d),m=a(37),p=a(38),f=a(44),v=a(45),h=a(91),b=a(41),E=a(36);function O(e){var t=e.orderIdsArray,a=e.orderList;return u.a.createElement("table",{className:"table table-td"},u.a.createElement("thead",{class:"thead-primary"},u.a.createElement("tr",{class:"text-center"},u.a.createElement("th",{style:{minWidth:"50px"}},"#"),u.a.createElement("th",{style:{minWidth:"100px"}},"Order Date"),u.a.createElement("th",{style:{minWidth:"80px"}},"Order Id"),u.a.createElement("th",{style:{minWidth:"180px"}},"Customer"),u.a.createElement("th",{style:{minWidth:"200px"}},"Product"),u.a.createElement("th",{style:{minWidth:"120px"}},"Quantity"),u.a.createElement("th",{style:{minWidth:"125px"}},"Price"),u.a.createElement("th",{style:{minWidth:"250px"}},"Address"),u.a.createElement("th",{style:{minWidth:"120px"}},"Delivery Date"))),u.a.createElement("tbody",null,(t.length>0?t:[]).map((function(e,t){var r=a.filter((function(t){return t.id===e})),n=r.length;return(r.length>0?r:[]).map((function(e){return u.a.createElement("tr",{class:"text-center"},0!==n&&u.a.createElement(d.Fragment,null,u.a.createElement("td",{rowspan:n},t+1),u.a.createElement("td",{rowspan:n},Object(b.b)(e.order_date)),u.a.createElement("td",{rowspan:n},e.order_id),u.a.createElement("td",{rowspan:n},e.full_name)),u.a.createElement("td",null,e.product_name),u.a.createElement("td",null,"".concat(e.quantity,"  ").concat(e.unit_name)),u.a.createElement("td",null,"".concat(e.price)),0!==n&&u.a.createElement(d.Fragment,null,u.a.createElement("td",{rowspan:n},"".concat(e.flat_add,", ").concat(e.street_add,", ").concat(e.city)),u.a.createElement("td",{rowspan:n},Object(b.b)(e.delivery_date))),u.a.createElement("div",{style:{display:"none"}},n=0))}))}))))}function g(e){var t=e.orderIdsArray,a=e.orderList;return u.a.createElement("table",{className:"table table-td"},u.a.createElement("thead",{class:"thead-primary"},u.a.createElement("tr",{class:"text-center"},u.a.createElement("th",{style:{minWidth:"50px"}},"#"),u.a.createElement("th",{style:{minWidth:"100px"}},"Order Date"),u.a.createElement("th",{style:{minWidth:"80px"}},"Order Id"),u.a.createElement("th",{style:{minWidth:"180px"}},"Customer"),u.a.createElement("th",{style:{minWidth:"200px"}},"Product"),u.a.createElement("th",{style:{minWidth:"120px"}},"Quantity"),u.a.createElement("th",{style:{minWidth:"250px"}},"Address"))),u.a.createElement("tbody",null,(t.length>0?t:[]).map((function(e,t){var r=a.filter((function(t){return t.id===e})),n=r.length;return(r.length>0?r:[]).map((function(e){return u.a.createElement("tr",{class:"text-center"},0!==n&&u.a.createElement(d.Fragment,null,u.a.createElement("td",{rowspan:n},t+1),u.a.createElement("td",{rowspan:n},Object(b.b)(e.order_date)),u.a.createElement("td",{rowspan:n},e.order_id),u.a.createElement("td",{rowspan:n},e.full_name)),u.a.createElement("td",null,e.product_name),u.a.createElement("td",null,"".concat(e.quantity,"  ").concat(e.unit_name)),0!==n&&u.a.createElement(d.Fragment,null,u.a.createElement("td",{rowspan:n},"".concat(e.flat_add,", ").concat(e.street_add,", ").concat(e.city))),u.a.createElement("div",{style:{display:"none"}},n=0))}))}))))}function w(e){var t=e.orderIdsArray,a=e.orderList,r=e.handleOrderConfirmation;return u.a.createElement("table",{className:"table table-td"},u.a.createElement("thead",{class:"thead-primary"},u.a.createElement("tr",{class:"text-center"},u.a.createElement("th",{style:{minWidth:"50px"}},"#"),u.a.createElement("th",{style:{minWidth:"100px"}},"Order Date"),u.a.createElement("th",{style:{minWidth:"80px"}},"Order Id"),u.a.createElement("th",{style:{minWidth:"180px"}},"Customer"),u.a.createElement("th",{style:{minWidth:"250px"}},"Address"),u.a.createElement("th",{style:{minWidth:"120px"}},"Delivery Date"),u.a.createElement("th",{style:{minWidth:"150px"}},"Action"))),u.a.createElement("tbody",null,(t.length>0?t:[]).map((function(e,t){var n=a.filter((function(t){return t.id===e})),c=n.length;return(n.length>0?n:[]).map((function(e){return u.a.createElement("tr",{class:"text-center"},0!==c&&u.a.createElement(d.Fragment,null,u.a.createElement("td",{rowspan:c},t+1),u.a.createElement("td",{rowspan:c},Object(b.b)(e.order_date)),u.a.createElement("td",{rowspan:c},e.order_id),u.a.createElement("td",{rowspan:c},e.full_name)),0!==c&&u.a.createElement(d.Fragment,null,u.a.createElement("td",{rowspan:c},"".concat(e.flat_add,", ").concat(e.street_add,", ").concat(e.city)),u.a.createElement("td",{rowspan:c},Object(b.b)(e.delivery_date)),u.a.createElement("td",{rowspan:c},u.a.createElement("button",{class:"alter-purchase-record",type:"submit",onClick:function(){r(n)}}," See Info "))),u.a.createElement("div",{style:{display:"none"}},c=0))}))}))))}a.d(t,"default",(function(){return j}));var y={toDate:new Date,fromDate:new Date,orderStatus:"1"};function j(){var e=Object(d.useState)(y),t=Object(i.a)(e,2),a=t[0],r=t[1],j=Object(d.useState)([]),x=Object(i.a)(j,2),N=x[0],S=x[1],k=Object(d.useState)([]),P=Object(i.a)(k,2),D=P[0],T=P[1],_=Object(d.useState)([]),L=Object(i.a)(_,2),A=L[0],C=L[1],W=Object(d.useState)(1),I=Object(i.a)(W,2),F=I[0],R=I[1],U=Object(d.useState)(!1),M=Object(i.a)(U,2),q=M[0],V=M[1],Y=Object(d.useState)({}),B=Object(i.a)(Y,2),G=B[0],H=B[1],Q=Object(d.useState)(!1),z=Object(i.a)(Q,2),J=z[0],K=z[1];Object(d.useEffect)((function(){Z(),$()}),[]);var X=function(e){r(Object(l.a)(Object(l.a)({},a),{},Object(o.a)({},e.target.name,e.target.value)))},Z=function(){var e=Object(s.a)(n.a.mark((function e(){var t,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return K(!0),R(a.orderStatus),e.prev=2,e.next=5,v.a.getOrderList({order_status:Number(a.orderStatus),from_date:Object(b.a)(a.fromDate),to_date:Object(b.a)(a.toDate)});case 5:t=e.sent,r=Object(c.a)(new Set(t.orderList.map((function(e){return e.id})))),S(t.orderList),T(r),K(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log("Error...",e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(s.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.getOrderStatusList({});case 3:t=e.sent,C(t.orderStatusList),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error...",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(s.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:H({order_id:t[0].id,products:t}),V(!0);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return u.a.createElement(d.Fragment,null,u.a.createElement(m.a,null),u.a.createElement("section",{className:"ftco-section"},u.a.createElement("div",{class:"container"},u.a.createElement("h3",null,"View Order List"),u.a.createElement("div",{class:"row justify-content-center p-bottom-30"},u.a.createElement("div",{class:"col-xl-12 ftco-animate fadeInUp ftco-animated"},u.a.createElement("div",{class:"p-5 bg-light b-top-dark"},u.a.createElement("div",{class:"row align-items-end"},u.a.createElement("div",{class:"col-md-4"},u.a.createElement("div",{class:"form-group"},u.a.createElement("label",{for:"fromDate"},"From * "),u.a.createElement("input",{id:"fromDate",name:"fromDate",type:"date",value:Object(b.a)(a.fromDate),class:"form-control",onChange:X}))),u.a.createElement("div",{class:"col-md-4"},u.a.createElement("div",{class:"form-group"},u.a.createElement("label",{for:"toDate"},"To * "),u.a.createElement("input",{id:"toDate",name:"toDate",type:"date",value:Object(b.a)(a.toDate),class:"form-control",onChange:X}))),u.a.createElement("div",{class:"col-md-4"},u.a.createElement("div",{class:"form-group"},u.a.createElement("label",{for:"orderStatus"},"Status * "),u.a.createElement("select",{id:"orderStatus",name:"orderStatus",value:a.orderStatus,class:"form-control",onChange:X},(A.length>0?A:[]).map((function(e,t){return 4!==e.id?u.a.createElement("option",{id:e.id,value:e.id},e.order_status):null}))))),u.a.createElement("div",{class:"col-md-12 m-bottom-20"},u.a.createElement("div",{class:"form-group"},u.a.createElement("div",{class:"d-flex f-right"},u.a.createElement("button",{class:"btn btn-primary px-4",onClick:Z}," Click to view")))),u.a.createElement("div",{class:"w-100 table-div"},1==F&&u.a.createElement(g,{orderIdsArray:D,orderList:N}),2==F&&u.a.createElement(O,{orderIdsArray:D,orderList:N}),3==F&&u.a.createElement(w,{orderIdsArray:D,orderList:N,handleOrderConfirmation:ee})))))))),u.a.createElement(p.a,null),q?u.a.createElement(h.a,{open:q,setDialogOpen:V,props:G,isUpdatable:0}):null,J?u.a.createElement(E.a,null):null)}},33:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(1);function n(e){(e||401===e.response.status)&&(r.c.remove(),document.location.reload())}},34:function(e,t,a){"use strict";function r(){return{Authorization:"Basic ".concat(sessionStorage.token),"content-type":"application/json"}}a.d(t,"a",(function(){return r}))},36:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(0),n=a.n(r);function c(){return n.a.createElement("div",{id:"ftco-loader",class:"show fullscreen",style:{visibility:"visible",opacity:".5"}},n.a.createElement("svg",{class:"circular",width:"48px",height:"48px"},n.a.createElement("circle",{class:"path-bg",cx:"24",cy:"24",r:"22",fill:"none","stroke-width":"4",stroke:"#eeeeee"}),n.a.createElement("circle",{class:"path",cx:"24",cy:"24",r:"22",fill:"none","stroke-width":"4","stroke-miterlimit":"10",stroke:"#F96D00"})))}},37:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a(35),n=a(0),c=a.n(n),s=a(1);function o(){var e=s.c.get().userId,t=s.c.get().role_id,a=Object(n.useState)(s.d.get().cartTotal),o=Object(r.a)(a,2),l=o[0],i=o[1];return Object(n.useEffect)((function(){i(s.d.get().cartTotal)})),c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"py-1 bg-primary"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row no-gutters d-flex align-items-start align-items-center px-md-0"},c.a.createElement("div",{className:"col-lg-12 d-block"},c.a.createElement("div",{className:"row d-flex",style:{padding:"10px"}}))))),c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light",id:"ftco-navbar"},c.a.createElement("div",{className:"container"},c.a.createElement("a",{className:"navbar-brand",href:"/"},"SA SUPERMART"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#ftco-nav","aria-controls":"ftco-nav","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"oi oi-menu"})," Menu"),c.a.createElement("div",{className:"collapse navbar-collapse",id:"ftco-nav"},1==e&&1==t?c.a.createElement("ul",{className:"navbar-nav ml-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"/",className:"nav-link"},"Home")),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Products"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdown04"},c.a.createElement("a",{className:"dropdown-item",href:"/add-new-product"},"Add New"),c.a.createElement("a",{className:"dropdown-item",href:"/view-added-product"},"View List"))),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Orders"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdown04"},c.a.createElement("a",{className:"dropdown-item",href:"/view-order-list"},"View Customer Wise"),c.a.createElement("a",{className:"dropdown-item",href:"/view-ordered-product"},"View Product Wise"))),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Reports"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdown04"},c.a.createElement("a",{className:"dropdown-item",href:"/view-order-report"},"Order Report"),c.a.createElement("a",{className:"dropdown-item",href:"/view-ordered-product-report"},"Ordered Product Report"))),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Settings"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdown04"},c.a.createElement("a",{className:"dropdown-item",href:"/change-password"},"Change Password"),c.a.createElement("hr",null),c.a.createElement("a",{className:"dropdown-item",href:"/alter-categories"},"Categories"),c.a.createElement("a",{className:"dropdown-item",href:"/alter-units"},"Units"),c.a.createElement("a",{className:"dropdown-item",href:"/handle-clients"},"Clients"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"/logout",className:"nav-link"},"Logout"))):c.a.createElement("ul",{className:"navbar-nav ml-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"/",className:"nav-link"},"Home")),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Orders"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdown04"},c.a.createElement("a",{className:"dropdown-item",href:"/view-user-order-list"},"View "))),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Settings"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdown04"},c.a.createElement("a",{className:"dropdown-item",href:"/change-password"},"Change Password"),c.a.createElement("a",{className:"dropdown-item",href:"/auto-settings"},"Automation Settings"))),c.a.createElement("li",{className:"nav-item cta cta-colored"},c.a.createElement("a",{href:"/cart-list",className:"nav-link"},c.a.createElement("span",{className:"icon-shopping_cart"}),"[",l,"]")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"/logout",className:"nav-link"},"Logout")))))))}},38:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(0),n=a.n(r);function c(){return n.a.createElement("footer",{style:{backgroundColor:"#82ae46"}},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row no-gutters d-flex align-items-start align-items-center px-md-0"},n.a.createElement("div",{className:"col-lg-12 d-block"},n.a.createElement("div",{className:"row "},n.a.createElement("div",{className:"col-md pr-4 d-flex topper align-items-center"},n.a.createElement("p",{className:"text"},"Copyright 2019 \xa9All rights reserved | A1abilities PTY TLD  ABN# 82631548224")))))))}},41:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return c}));var r=a(59);function n(e){return r(e).format("YYYY-MM-DD")}function c(e){return r(e).format("DD-MM-YYYY")}},42:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(12);function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},44:function(e,t,a){"use strict";var r=a(31),n=a.n(r),c=a(32),s=a(39),o=a.n(s),l=a(1),i=a(33),d=a(34),u=function(e){var t=e.methodType;return{method:void 0===t?"GET":t,headers:Object(d.a)()}};t.a={getProductUnitList:function(){var e=Object(c.a)(n.a.mark((function e(){var t,a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(l.a,"/staticrecords/getProductUnitList"),e.prev=1,e.next=4,o()(t,Object.assign({},u({methodType:"GET"})));case 4:return a=e.sent,r=a.data,e.abrupt("return",r);case 9:throw e.prev=9,e.t0=e.catch(1),Object(i.a)(e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),getMainUnitRelateRecords:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/staticrecords/getMainUnitRelateRecords"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getMeasuredUnitofProduct:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/staticrecords/getMeasuredUnitofProduct"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getOrderStatusList:function(){var e=Object(c.a)(n.a.mark((function e(){var t,a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(l.a,"/staticrecords/getOrderStatusList"),e.prev=1,e.next=4,o()(t,Object.assign({},u({methodType:"GET"})));case 4:return a=e.sent,r=a.data,e.abrupt("return",r);case 9:throw e.prev=9,e.t0=e.catch(1),Object(i.a)(e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()}},45:function(e,t,a){"use strict";var r=a(31),n=a.n(r),c=a(32),s=a(39),o=a.n(s),l=a(1),i=a(33),d=a(34),u=function(e){var t=e.methodType;return{method:void 0===t?"GET":t,headers:Object(d.a)()}};t.a={handleOrderConfirmation:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/handleOrderConfirmation"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),generateInvoice:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/generateInvoice"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),submitDeliveryDetails:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/submitDeliveryDetails"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),orderVerificationByCustomer:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/orderVerificationByCustomer"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),fetchDeliveryFormData:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/fetchDeliveryFormData"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),handlePurchasedRecord:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/handlePurchasedRecord"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getOrderedProductList:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/getOrderedProductList"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),generatePDFOfOrderedProducts:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/generatePDFOfOrderedProducts"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getOrderedProductListSingleDay:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/getOrderedProductListSingleDay"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),fetchPreviousBillingAddresss:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/fetchPreviousBillingAddresss"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),removeSelectedAddress:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/removeSelectedAddress"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getOrderList:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/getOrderList"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getOrderListOfSingleDay:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/getOrderListOfSingleDay"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getCustomerOrderList:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/getCustomerOrderList"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),addNewOrder:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/addNewOrder"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()}},46:function(e,t,a){"use strict";var r=a(54);var n=a(53);function c(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(n.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.d(t,"a",(function(){return c}))},91:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a(31),n=a.n(r),c=a(32),s=a(35),o=a(0),l=a.n(o),i=a(60),d=a(58),u=a(45);function m(e){var t=e.open,a=e.setDialogOpen,r=e.props,m=e.isUpdatable,p=e.getOrderListOfSingleDay,f=Object(o.useState)(r.products),v=Object(s.a)(f,2),h=v[0],b=(v[1],Object(o.useState)(!1)),E=Object(s.a)(b,2),O=E[0],g=E[1],w=function(){var e=Object(c.a)(n.a.mark((function e(t){var c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),g(!0),e.prev=2,c=[],h.map((function(e){var t=document.querySelector('input[name="action-'.concat(e.delivered_id,'"]:checked')),a="";null===t?a=5:""!==t&&(a=t.value),c.push({delivered_id:e.delivered_id,product_id:e.product_id,status:a})})),e.next=7,u.a.handleOrderConfirmation({orderId:r.order_id,productData:c});case 7:e.sent,p(),a(!1),g(!1),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.log("Error...",e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement(i.a,{show:t,onHide:function(){a(!1)},size:"lg",centered:!0},l.a.createElement(i.a.Header,{closeButton:!0},l.a.createElement(i.a.Title,{id:"contained-modal-title-vcenter"},"Product Verification")),l.a.createElement("form",{onSubmit:w},l.a.createElement(i.a.Body,null,l.a.createElement("div",{class:"w-100"},l.a.createElement("table",{className:"unit-array-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"Products "),l.a.createElement("th",null,"Delivered Quantity"),l.a.createElement("th",null,"Price"),l.a.createElement("th",null,"Verified Quantity"),1===m&&l.a.createElement("th",null,"Action"))),l.a.createElement("tbody",null,(h.length>0?Object.values(h):[]).map((function(e,t){return l.a.createElement("tr",{class:"text-center"},l.a.createElement("td",null,t+1),l.a.createElement("td",null,e.product_name),l.a.createElement("td",null,e.quantity+" "+e.unit_name),l.a.createElement("td",null,e.price),l.a.createElement("td",null,e.verified_quantity+" "+e.verified_unit_name),1===m&&l.a.createElement("td",null,Number(e.quantity)===Number(e.verified_quantity)&&e.verified_unit_id===e.unit_id?"":l.a.createElement("div",{class:"radio"},l.a.createElement("label",{style:{paddingRight:"15px"}},l.a.createElement("input",{type:"radio",name:"action-"+e.delivered_id,value:"5",class:"mr-1",required:!0}),"Accept"),l.a.createElement("label",null,l.a.createElement("input",{type:"radio",name:"action-"+e.delivered_id,value:"6",class:"mr-1",required:!0})," Reject"))))})))))),l.a.createElement(i.a.Footer,null,0===m?l.a.createElement(d.a,{className:"br-none",onClick:function(){a(!1)}},"Close"):1===m?l.a.createElement(d.a,{type:"submit",className:"br-none",disabled:O},"Submit"):"")))}}}]);
//# sourceMappingURL=16.1c986aa9.chunk.js.map