(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[19],{149:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return x}));var r=a(30),n=a.n(r),c=a(31),s=a(39),o=a(40),l=a(34),i=a(0),u=a.n(i),d=a(12),m=a(74),p=a.n(m),f=a(77),v=a.n(f),b=a(36),h=a(37),g=a(41),O=a(42),w=a(1),E=a(44),j=a(35),y={toDate:new Date,fromDate:new Date,orderStatus:"1"};function x(){var e=Object(i.useState)(y),t=Object(l.a)(e,2),a=t[0],r=t[1],m=Object(i.useState)([]),f=Object(l.a)(m,2),x=f[0],N=f[1],k=Object(i.useState)([]),S=Object(l.a)(k,2),T=S[0],D=S[1],P=Object(i.useState)([]),L=Object(l.a)(P,2),C=L[0],_=L[1],A=Object(i.useState)(1),R=Object(l.a)(A,2),M=R[0],I=R[1],Y=Object(i.useState)(!1),F=Object(l.a)(Y,2),B=F[0],U=F[1];Object(i.useEffect)((function(){G(),H()}),[]);var V=function(e){r(Object(o.a)(Object(o.a)({},a),{},Object(s.a)({},e.target.name,e.target.value)))},G=function(){var e=Object(c.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return U(!0),I(a.orderStatus),e.prev=2,e.next=5,O.a.getCustomerOrderList({order_status:a.orderStatus,from_date:Object(E.a)(a.fromDate),to_date:Object(E.a)(a.toDate),createdBy:w.c.get().userId});case 5:t=e.sent,N(t.orderList),D(t.orderedProducts),U(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log("Error...",e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(c.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.getOrderStatusList({});case 3:t=e.sent,_(t.orderStatusList),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error...",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(c.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return U(!0),p.a.vfs=v.a.pdfMake.vfs,e.prev=2,e.next=5,O.a.generateInvoice({orderId:t.id});case 5:a=e.sent,p.a.createPdf(a).open(),U(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log("Error...",e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return u.a.createElement(i.Fragment,null,u.a.createElement(b.a,null),u.a.createElement("section",{className:"ftco-section"},u.a.createElement("div",{class:"container"},u.a.createElement("h3",null,"My Orders"),u.a.createElement("div",{class:"row justify-content-center p-bottom-30"},u.a.createElement("div",{class:"col-xl-12 ftco-animate fadeInUp ftco-animated"},u.a.createElement("div",{class:"p-5 bg-light b-top-dark"},u.a.createElement("div",{class:"row align-items-end"},u.a.createElement("div",{class:"col-md-4"},u.a.createElement("div",{class:"form-group"},u.a.createElement("label",{for:"fromDate"},"From * "),u.a.createElement("input",{id:"fromDate",name:"fromDate",type:"date",value:Object(E.a)(a.fromDate),class:"form-control",onChange:V}))),u.a.createElement("div",{class:"col-md-4"},u.a.createElement("div",{class:"form-group"},u.a.createElement("label",{for:"toDate"},"To * "),u.a.createElement("input",{id:"toDate",name:"toDate",type:"date",value:Object(E.a)(a.toDate),class:"form-control",onChange:V}))),u.a.createElement("div",{class:"col-md-4"},u.a.createElement("div",{class:"form-group"},u.a.createElement("label",{for:"orderStatus"},"Status * "),u.a.createElement("select",{id:"orderStatus",name:"orderStatus",value:a.orderStatus,class:"form-control",onChange:V},(C.length>0?C:[]).map((function(e,t){return 4!==e.id?u.a.createElement("option",{id:e.id,value:e.id},e.order_status):null}))))),u.a.createElement("div",{class:"col-md-12 m-bottom-20"},u.a.createElement("div",{class:"form-group"},u.a.createElement("div",{class:"d-flex f-right"},u.a.createElement("button",{class:"btn btn-primary px-4",onClick:G}," Click to view")))),u.a.createElement("div",{class:"w-100"},u.a.createElement("table",{className:"unit-array-table"},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"#"),u.a.createElement("th",null,"Order Date"),u.a.createElement("th",null,"Order Id"),u.a.createElement("th",null,"Customer"),u.a.createElement("th",null,"Product"),1==M&&u.a.createElement("th",null,"Quantity"),u.a.createElement("th",null,"Address"),1!=M&&u.a.createElement("th",null,"Delivery Date"),(2==M||3==M)&&u.a.createElement("th",null,"Action"))),u.a.createElement("tbody",null,(x.length>0?x:[]).map((function(e,t){var a=T.filter((function(t){return t.order_id===e.id})),r=a.length;return(a.length>0?a:[]).map((function(n){return u.a.createElement("tr",{class:"text-center"},0!==r&&u.a.createElement(i.Fragment,null,u.a.createElement("td",{rowspan:r},t+1),u.a.createElement("td",{rowspan:r},Object(E.b)(e.order_date)),u.a.createElement("td",{rowspan:r},e.order_id),u.a.createElement("td",{rowspan:r},e.full_name)),u.a.createElement("td",null,n.product_name),1==M&&u.a.createElement("td",null,"".concat(n.quantity,"  ").concat(n.ordered_unit_name)),0!==r&&u.a.createElement(i.Fragment,null,u.a.createElement("td",{rowspan:r},"".concat(e.flat_add,", ").concat(e.street_add,", ").concat(e.city)),1!=M&&u.a.createElement("td",{rowspan:r},Object(E.b)(e.delivery_date)),(2==M||3==M)&&u.a.createElement("td",{rowspan:r},2==M&&u.a.createElement(d.b,{to:{pathname:"/verify-delivered-product",state:{order:e,product:a}}},"Click to verify"),3==M&&4==e.status&&u.a.createElement("button",{class:"alter-purchase-record",type:"submit",onClick:function(){J(e)}}," See Invoice "))),u.a.createElement("div",{style:{display:"none"}},r=0))}))}))))))))))),u.a.createElement(h.a,null),B?u.a.createElement(j.a,null):null)}},32:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(1);function n(e){(e||401===e.response.status)&&(r.c.remove(),document.location.reload())}},33:function(e,t,a){"use strict";function r(){return{Authorization:"Basic ".concat(sessionStorage.token),"content-type":"application/json"}}a.d(t,"a",(function(){return r}))},35:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(0),n=a.n(r);function c(){return n.a.createElement("div",{id:"ftco-loader",class:"show fullscreen",style:{visibility:"visible",opacity:".5"}},n.a.createElement("svg",{class:"circular",width:"48px",height:"48px"},n.a.createElement("circle",{class:"path-bg",cx:"24",cy:"24",r:"22",fill:"none","stroke-width":"4",stroke:"#eeeeee"}),n.a.createElement("circle",{class:"path",cx:"24",cy:"24",r:"22",fill:"none","stroke-width":"4","stroke-miterlimit":"10",stroke:"#F96D00"})))}},36:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a(34),n=a(0),c=a.n(n),s=a(1);function o(){var e=s.c.get().userId,t=s.c.get().role_id,a=Object(n.useState)(s.d.get().cartTotal),o=Object(r.a)(a,2),l=o[0],i=o[1];return Object(n.useEffect)((function(){i(s.d.get().cartTotal)})),c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"py-1 bg-primary"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row no-gutters d-flex align-items-start align-items-center px-md-0"},c.a.createElement("div",{className:"col-lg-12 d-block"},c.a.createElement("div",{className:"row d-flex",style:{padding:"10px"}}))))),c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light",id:"ftco-navbar"},c.a.createElement("div",{className:"container"},c.a.createElement("a",{className:"navbar-brand",href:"/"},"SA SUPERMART"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#ftco-nav","aria-controls":"ftco-nav","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"oi oi-menu"})," Menu"),c.a.createElement("div",{className:"collapse navbar-collapse",id:"ftco-nav"},1==e&&1==t?c.a.createElement("ul",{className:"navbar-nav ml-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"/",className:"nav-link"},"Home")),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Products"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdown04"},c.a.createElement("a",{className:"dropdown-item",href:"/add-new-product"},"Add New"),c.a.createElement("a",{className:"dropdown-item",href:"/view-added-product"},"View List"))),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Orders"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdown04"},c.a.createElement("a",{className:"dropdown-item",href:"/view-order-list"},"View Customer Wise"),c.a.createElement("a",{className:"dropdown-item",href:"/view-ordered-product"},"View Product Wise"))),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Reports"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdown04"},c.a.createElement("a",{className:"dropdown-item",href:"/view-order-report"},"Order Report"),c.a.createElement("a",{className:"dropdown-item",href:"/view-ordered-product-report"},"Ordered Product Report"))),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Settings"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdown04"},c.a.createElement("a",{className:"dropdown-item",href:"/alter-categories"},"Categories"),c.a.createElement("a",{className:"dropdown-item",href:"/alter-units"},"Units"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"/logout",className:"nav-link"},"Logout"))):c.a.createElement("ul",{className:"navbar-nav ml-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"/",className:"nav-link"},"Home")),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Orders"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdown04"},c.a.createElement("a",{className:"dropdown-item",href:"/view-user-order-list"},"View "))),c.a.createElement("li",{className:"nav-item cta cta-colored"},c.a.createElement("a",{href:"/cart-list",className:"nav-link"},c.a.createElement("span",{className:"icon-shopping_cart"}),"[",l,"]")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"/logout",className:"nav-link"},"Logout")))))))}},37:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(0),n=a.n(r);function c(){return n.a.createElement("footer",{style:{backgroundColor:"#82ae46"}},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row no-gutters d-flex align-items-start align-items-center px-md-0"},n.a.createElement("div",{className:"col-lg-12 d-block"},n.a.createElement("div",{className:"row "},n.a.createElement("div",{className:"col-md pr-4 d-flex topper align-items-center"},n.a.createElement("p",{className:"text"},"Copyright 2019 \xa9All rights reserved | A1abilities PTY TLD  ABN# 82631548224")))))))}},41:function(e,t,a){"use strict";var r=a(30),n=a.n(r),c=a(31),s=a(38),o=a.n(s),l=a(1),i=a(32),u=a(33),d=function(e){var t=e.methodType;return{method:void 0===t?"GET":t,headers:Object(u.a)()}};t.a={getProductUnitList:function(){var e=Object(c.a)(n.a.mark((function e(){var t,a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(l.a,"/staticrecords/getProductUnitList"),e.prev=1,e.next=4,o()(t,Object.assign({},d({methodType:"GET"})));case 4:return a=e.sent,r=a.data,e.abrupt("return",r);case 9:throw e.prev=9,e.t0=e.catch(1),Object(i.a)(e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),getMainUnitRelateRecords:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/staticrecords/getMainUnitRelateRecords"),e.prev=2,e.next=5,o()(r,Object.assign({},d({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getOrderStatusList:function(){var e=Object(c.a)(n.a.mark((function e(){var t,a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(l.a,"/staticrecords/getOrderStatusList"),e.prev=1,e.next=4,o()(t,Object.assign({},d({methodType:"GET"})));case 4:return a=e.sent,r=a.data,e.abrupt("return",r);case 9:throw e.prev=9,e.t0=e.catch(1),Object(i.a)(e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()}},42:function(e,t,a){"use strict";var r=a(30),n=a.n(r),c=a(31),s=a(38),o=a.n(s),l=a(1),i=a(32),u=a(33),d=function(e){var t=e.methodType;return{method:void 0===t?"GET":t,headers:Object(u.a)()}};t.a={handleOrderConfirmation:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/handleOrderConfirmation"),e.prev=2,e.next=5,o()(r,Object.assign({},d({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),generateInvoice:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/generateInvoice"),e.prev=2,e.next=5,o()(r,Object.assign({},d({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),submitDeliveryDetails:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/submitDeliveryDetails"),e.prev=2,e.next=5,o()(r,Object.assign({},d({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),orderVerificationByCustomer:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/orderVerificationByCustomer"),e.prev=2,e.next=5,o()(r,Object.assign({},d({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),fetchDeliveryFormData:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/fetchDeliveryFormData"),e.prev=2,e.next=5,o()(r,Object.assign({},d({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),handlePurchasedRecord:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/handlePurchasedRecord"),e.prev=2,e.next=5,o()(r,Object.assign({},d({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getOrderedProductList:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/getOrderedProductList"),e.prev=2,e.next=5,o()(r,Object.assign({},d({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getOrderedProductListSingleDay:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/getOrderedProductListSingleDay"),e.prev=2,e.next=5,o()(r,Object.assign({},d({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),fetchPreviousBillingAddresss:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/fetchPreviousBillingAddresss"),e.prev=2,e.next=5,o()(r,Object.assign({},d({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),removeSelectedAddress:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/removeSelectedAddress"),e.prev=2,e.next=5,o()(r,Object.assign({},d({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getOrderList:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/getOrderList"),e.prev=2,e.next=5,o()(r,Object.assign({},d({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getOrderListOfSingleDay:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/getOrderListOfSingleDay"),e.prev=2,e.next=5,o()(r,Object.assign({},d({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getCustomerOrderList:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/getCustomerOrderList"),e.prev=2,e.next=5,o()(r,Object.assign({},d({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),addNewOrder:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/addNewOrder"),e.prev=2,e.next=5,o()(r,Object.assign({},d({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()}},44:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return c}));var r=a(51);function n(e){return r(e).format("YYYY-MM-DD")}function c(e){return r(e).format("DD-MM-YYYY")}}}]);
//# sourceMappingURL=19.95078391.chunk.js.map