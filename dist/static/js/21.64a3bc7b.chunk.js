(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[21],{162:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var r=a(31),n=a.n(r),c=a(32),s=a(35),o=a(0),l=a.n(o),i=(a(1),a(44)),d=a(45),u=a(37),p=a(38),m=a(36),v=a(41);function f(e){var t=e.location.state.data[0],a=Object(o.useState)(e.location.state.data),r=Object(s.a)(a,2),f=r[0],h=(r[1],Object(o.useState)([])),b=Object(s.a)(h,2),g=(b[0],b[1]),w=Object(o.useState)(!1),E=Object(s.a)(w,2),O=E[0],j=E[1],y=Object(o.useState)(!1),x=Object(s.a)(y,2),N=x[0],k=x[1];Object(o.useEffect)((function(){T()}),[]);var T=function(){var e=Object(c.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.getProductUnitList();case 3:t=e.sent,g(t.productUnitList),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error...",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(c.a)(n.a.mark((function e(a){var r,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),j(!0),k(!0),e.prev=3,r=[],f.map((function(e){r.push({delivered_id:e.delivered_id,product_id:e.product_id,quantity:document.getElementById("provideQuantity-"+e.product_id).value,unit_id:e.unit_id})})),e.next=8,d.a.orderVerificationByCustomer({productData:r,orderId:t.id});case 8:c=e.sent,j(!1),!0===c?window.location.pathname="/view-user-order-list":alert("Failed Insertion"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),console.log("Error...",e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement(o.Fragment,null,l.a.createElement(u.a,null),l.a.createElement("section",{class:"ftco-section"},l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row justify-content-center"},l.a.createElement("div",{class:"col-xl-12 ftco-animate fadeInUp ftco-animated"},l.a.createElement("h3",{class:"mb-4 billing-heading"},"Order verification Form"),l.a.createElement("form",{onSubmit:P,class:"p-5 bg-light b-top-dark"},l.a.createElement("div",{class:"row align-items-end"},l.a.createElement("div",{class:"col-md-3"},l.a.createElement("div",{class:"form-group"},l.a.createElement("label",null,"Order Id: "),l.a.createElement("div",{class:"d-flex"},l.a.createElement("h6",null,t.order_id)))),l.a.createElement("div",{class:"col-md-3"},l.a.createElement("div",{class:"form-group"},l.a.createElement("label",null,"Order Date: "),l.a.createElement("div",{class:"d-flex"},l.a.createElement("h6",null,Object(v.b)(t.order_date))))),l.a.createElement("div",{class:"col-md-3"},l.a.createElement("div",{class:"form-group"},l.a.createElement("label",null,"Mobile No.: "),l.a.createElement("div",{class:"d-flex"},l.a.createElement("h6",null,t.mobile)))),l.a.createElement("div",{class:"col-md-3"},l.a.createElement("div",{class:"form-group"},l.a.createElement("label",null,"Delivery Date: "),l.a.createElement("div",{class:"d-flex"},l.a.createElement("h6",null,Object(v.b)(t.delivery_date))))),l.a.createElement("div",{class:"col-md-3"},l.a.createElement("div",{class:"form-group"},l.a.createElement("label",null,"Customer Name: "),l.a.createElement("div",{class:"d-flex"},l.a.createElement("h6",null,t.full_name)))),l.a.createElement("div",{class:"col-md-9"},l.a.createElement("div",{class:"form-group"},l.a.createElement("label",null,"Address: "),l.a.createElement("div",{class:"d-flex"},l.a.createElement("h6",null,t.flat_add+", "+t.street_add+", "+t.city+", "+t.state+" - "+t.pincode)))),l.a.createElement("div",{class:"col-md-12"}," ",l.a.createElement("hr",null)," "),l.a.createElement("div",{class:"col-md-12"},l.a.createElement("h5",null,"Product List")),l.a.createElement("div",{class:"w-100 table-div"},l.a.createElement("table",{className:"table table-td"},l.a.createElement("thead",{class:"thead-primary"},l.a.createElement("tr",{class:"text-center"},l.a.createElement("th",{style:{minWidth:"200px"}},"Product"),l.a.createElement("th",{style:{minWidth:"15px"}}," Cost of Each"),l.a.createElement("th",{style:{minWidth:"150px"}}," Received Quantity"))),l.a.createElement("tbody",null,(f.length>0?f:[]).map((function(e,t){return l.a.createElement("tr",null,l.a.createElement("td",null,e.product_name),l.a.createElement("td",null,"$"+e.price/e.quantity),l.a.createElement("td",null,l.a.createElement("div",{class:"d-flex"},l.a.createElement("input",{type:"number",name:"provideQuantity-"+e.product_id,class:"cost-input",id:"provideQuantity-"+e.product_id,min:"0",step:"0.01",required:!0}),l.a.createElement("p",{class:"cost-input-adoptment"}," ",e.unit_name," "))))}))))),l.a.createElement("div",{class:"form-group p-4"},l.a.createElement("input",{type:"submit",value:"Submit",class:"btn  px-4 btn-primary",disabled:N})))))))),l.a.createElement(p.a,null),O?l.a.createElement(m.a,null):null)}},33:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(1);function n(e){(e||401===e.response.status)&&(r.c.remove(),document.location.reload())}},34:function(e,t,a){"use strict";function r(){return{Authorization:"Basic ".concat(sessionStorage.token),"content-type":"application/json"}}a.d(t,"a",(function(){return r}))},36:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(0),n=a.n(r);function c(){return n.a.createElement("div",{id:"ftco-loader",class:"show fullscreen",style:{visibility:"visible",opacity:".5"}},n.a.createElement("svg",{class:"circular",width:"48px",height:"48px"},n.a.createElement("circle",{class:"path-bg",cx:"24",cy:"24",r:"22",fill:"none","stroke-width":"4",stroke:"#eeeeee"}),n.a.createElement("circle",{class:"path",cx:"24",cy:"24",r:"22",fill:"none","stroke-width":"4","stroke-miterlimit":"10",stroke:"#F96D00"})))}},37:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a(35),n=a(0),c=a.n(n),s=a(1);function o(){var e=s.c.get().userId,t=s.c.get().role_id,a=Object(n.useState)(s.d.get().cartTotal),o=Object(r.a)(a,2),l=o[0],i=o[1];return Object(n.useEffect)((function(){i(s.d.get().cartTotal)})),c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"py-1 bg-primary"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row no-gutters d-flex align-items-start align-items-center px-md-0"},c.a.createElement("div",{className:"col-lg-12 d-block"},c.a.createElement("div",{className:"row d-flex",style:{padding:"10px"}}))))),c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light",id:"ftco-navbar"},c.a.createElement("div",{className:"container"},c.a.createElement("a",{className:"navbar-brand",href:"/"},"SA SUPERMART"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#ftco-nav","aria-controls":"ftco-nav","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"oi oi-menu"})," Menu"),c.a.createElement("div",{className:"collapse navbar-collapse",id:"ftco-nav"},1==e&&1==t?c.a.createElement("ul",{className:"navbar-nav ml-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"/",className:"nav-link"},"Home")),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Products"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdown04"},c.a.createElement("a",{className:"dropdown-item",href:"/add-new-product"},"Add New"),c.a.createElement("a",{className:"dropdown-item",href:"/view-added-product"},"View List"))),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Orders"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdown04"},c.a.createElement("a",{className:"dropdown-item",href:"/view-order-list"},"View Customer Wise"),c.a.createElement("a",{className:"dropdown-item",href:"/view-ordered-product"},"View Product Wise"))),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Reports"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdown04"},c.a.createElement("a",{className:"dropdown-item",href:"/view-order-report"},"Order Report"),c.a.createElement("a",{className:"dropdown-item",href:"/view-ordered-product-report"},"Ordered Product Report"))),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Settings"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdown04"},c.a.createElement("a",{className:"dropdown-item",href:"/change-password"},"Change Password"),c.a.createElement("hr",null),c.a.createElement("a",{className:"dropdown-item",href:"/alter-categories"},"Categories"),c.a.createElement("a",{className:"dropdown-item",href:"/alter-units"},"Units"),c.a.createElement("a",{className:"dropdown-item",href:"/handle-clients"},"Clients"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"/logout",className:"nav-link"},"Logout"))):c.a.createElement("ul",{className:"navbar-nav ml-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"/",className:"nav-link"},"Home")),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Orders"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdown04"},c.a.createElement("a",{className:"dropdown-item",href:"/view-user-order-list"},"View "))),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Settings"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdown04"},c.a.createElement("a",{className:"dropdown-item",href:"/change-password"},"Change Password"),c.a.createElement("a",{className:"dropdown-item",href:"/auto-settings"},"Automation Settings"))),c.a.createElement("li",{className:"nav-item cta cta-colored"},c.a.createElement("a",{href:"/cart-list",className:"nav-link"},c.a.createElement("span",{className:"icon-shopping_cart"}),"[",l,"]")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"/logout",className:"nav-link"},"Logout")))))))}},38:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(0),n=a.n(r);function c(){return n.a.createElement("footer",{style:{backgroundColor:"#82ae46"}},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row no-gutters d-flex align-items-start align-items-center px-md-0"},n.a.createElement("div",{className:"col-lg-12 d-block"},n.a.createElement("div",{className:"row "},n.a.createElement("div",{className:"col-md pr-4 d-flex topper align-items-center"},n.a.createElement("p",{className:"text"},"Copyright 2019 \xa9All rights reserved | A1abilities PTY TLD  ABN# 82631548224")))))))}},41:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return c}));var r=a(59);function n(e){return r(e).format("YYYY-MM-DD")}function c(e){return r(e).format("DD-MM-YYYY")}},44:function(e,t,a){"use strict";var r=a(31),n=a.n(r),c=a(32),s=a(39),o=a.n(s),l=a(1),i=a(33),d=a(34),u=function(e){var t=e.methodType;return{method:void 0===t?"GET":t,headers:Object(d.a)()}};t.a={getProductUnitList:function(){var e=Object(c.a)(n.a.mark((function e(){var t,a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(l.a,"/staticrecords/getProductUnitList"),e.prev=1,e.next=4,o()(t,Object.assign({},u({methodType:"GET"})));case 4:return a=e.sent,r=a.data,e.abrupt("return",r);case 9:throw e.prev=9,e.t0=e.catch(1),Object(i.a)(e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),getMainUnitRelateRecords:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/staticrecords/getMainUnitRelateRecords"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getMeasuredUnitofProduct:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/staticrecords/getMeasuredUnitofProduct"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getOrderStatusList:function(){var e=Object(c.a)(n.a.mark((function e(){var t,a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(l.a,"/staticrecords/getOrderStatusList"),e.prev=1,e.next=4,o()(t,Object.assign({},u({methodType:"GET"})));case 4:return a=e.sent,r=a.data,e.abrupt("return",r);case 9:throw e.prev=9,e.t0=e.catch(1),Object(i.a)(e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()}},45:function(e,t,a){"use strict";var r=a(31),n=a.n(r),c=a(32),s=a(39),o=a.n(s),l=a(1),i=a(33),d=a(34),u=function(e){var t=e.methodType;return{method:void 0===t?"GET":t,headers:Object(d.a)()}};t.a={handleOrderConfirmation:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/handleOrderConfirmation"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),generateInvoice:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/generateInvoice"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),submitDeliveryDetails:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/submitDeliveryDetails"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),orderVerificationByCustomer:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/orderVerificationByCustomer"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),fetchDeliveryFormData:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/fetchDeliveryFormData"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),handlePurchasedRecord:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/handlePurchasedRecord"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getOrderedProductList:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/getOrderedProductList"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),generatePDFOfOrderedProducts:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/generatePDFOfOrderedProducts"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getOrderedProductListSingleDay:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/getOrderedProductListSingleDay"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),fetchPreviousBillingAddresss:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/fetchPreviousBillingAddresss"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),removeSelectedAddress:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/removeSelectedAddress"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getOrderList:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/getOrderList"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getOrderListOfSingleDay:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/getOrderListOfSingleDay"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getCustomerOrderList:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/getCustomerOrderList"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),addNewOrder:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/addNewOrder"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=21.64a3bc7b.chunk.js.map