(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[19],{140:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var r=a(31),n=a.n(r),c=a(32),s=a(35),l=a(0),i=a.n(l),o=a(1),d=a(42),u=a(36),m=a(37),p=a(44),v=a(38);function f(e){var t=o.c.get().userId,a=Object(l.useState)(e.location.state.order),r=Object(s.a)(a,2),f=r[0],b=(r[1],Object(l.useState)([])),h=Object(s.a)(b,2),g=h[0],E=h[1],w=Object(l.useState)([]),O=Object(s.a)(w,2),y=(O[0],O[1],Object(l.useState)(!1)),j=Object(s.a)(y,2),x=j[0],N=j[1],_=Object(l.useState)(!1),k=Object(s.a)(_,2),T=k[0],P=k[1];Object(l.useEffect)((function(){S()}),[]);var S=function(){var e=Object(c.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.prev=1,e.next=4,d.a.fetchDeliveryFormData({orderId:f.id,order_date:Object(p.a)(f.order_date)});case 4:(t=e.sent).deliveryFormData.length>0?E(t.deliveryFormData):0===t.deliveryFormData.length&&(alert("Product not available in stock !"),window.location.pathname="/view-ordered-product"),N(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("Error...",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),D=function(e){var t=e.target.name.split("-")[1],a=e.target.value,r=g.find((function(e){return e.id==t})),n=null!==r.paid_quantity&&void 0!==r.paid_quantity&&""!==r.paid_quantity?Number(r.purchased_quantity-r.paid_quantity).toFixed(3):Number(r.purchased_quantity).toFixed(3);if(Number(n)<Number(a))document.getElementById("provideQuantity-"+t).value="",alert("input quantity is out of stock");else{var c=r.cost/r.purchased_quantity*a;document.getElementById("productPrice-"+t).textContent=Number(c).toFixed(2)}},q=function(){var e=Object(c.a)(n.a.mark((function e(a){var r,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),N(!0),P(!0),e.prev=3,r=[],g.map((function(e,a){null!==e.purchased_quantity&&""!==e.purchased_quantity&&0!=e.purchased_quantity&&r.push({ordered_id:e.id,product_id:e.product_id,delivery_date:Object(p.a)(new Date),order_date:Object(p.a)(f.order_date),paid_quantity:document.getElementById("provideQuantity-"+e.id).value,unit_id:e.purchased_unit_id,price:document.getElementById("productPrice-"+e.id).textContent,created_by:t})})),e.next=8,d.a.submitDeliveryDetails({productData:r,orderId:f.id});case 8:c=e.sent,N(!1),!0===c?window.location.pathname="/view-order-list":(P(!1),alert("Failed Insertion")),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),console.log("Error...",e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}();return i.a.createElement(l.Fragment,null,i.a.createElement(u.a,null),i.a.createElement("section",{class:"ftco-section"},i.a.createElement("div",{class:"container"},i.a.createElement("div",{class:"row justify-content-center"},i.a.createElement("div",{class:"col-xl-12 ftco-animate fadeInUp ftco-animated"},i.a.createElement("h3",{class:"mb-4 billing-heading"},"Delivery Form"),i.a.createElement("form",{onSubmit:q,class:"p-5 bg-light b-top-dark"},i.a.createElement("div",{class:"row align-items-end"},i.a.createElement("div",{class:"col-md-4"},i.a.createElement("div",{class:"form-group"},i.a.createElement("label",null,"Order Id: "),i.a.createElement("div",{class:"d-flex"},i.a.createElement("h6",null,f.order_id)))),i.a.createElement("div",{class:"col-md-4"},i.a.createElement("div",{class:"form-group"},i.a.createElement("label",null,"Order Date: "),i.a.createElement("div",{class:"d-flex"},i.a.createElement("h6",null,Object(p.b)(f.order_date))))),i.a.createElement("div",{class:"col-md-4"},i.a.createElement("div",{class:"form-group"},i.a.createElement("label",null,"Mobile No.: "),i.a.createElement("div",{class:"d-flex"},i.a.createElement("h6",null,f.mobile)))),i.a.createElement("div",{class:"col-md-4"},i.a.createElement("div",{class:"form-group"},i.a.createElement("label",null,"Customer Name: "),i.a.createElement("div",{class:"d-flex"},i.a.createElement("h6",null,f.full_name)))),i.a.createElement("div",{class:"col-md-8"},i.a.createElement("div",{class:"form-group"},i.a.createElement("label",null,"Address: "),i.a.createElement("div",{class:"d-flex"},i.a.createElement("h6",null,f.flat_add+", "+f.street_add+", "+f.city+", "+f.state+" - "+f.pincode)))),i.a.createElement("div",{class:"col-md-12"}," ",i.a.createElement("hr",null)," "),i.a.createElement("div",{class:"col-md-12"},i.a.createElement("h5",null,"Product List")),i.a.createElement("table",{className:"unit-array-table table-min-width"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Product"),i.a.createElement("th",null,"Demand"),i.a.createElement("th",null,"Available in Stock"),i.a.createElement("th",null,"Given Quantity"),i.a.createElement("th",null,"Price"))),i.a.createElement("tbody",null,(g.length>0?g:[]).map((function(e,t){var a=null===e.purchased_quantity?0:null!==e.paid_quantity&&void 0!==e.paid_quantity&&""!==e.paid_quantity?Number(e.purchased_quantity-e.paid_quantity).toFixed(3):Number(e.purchased_quantity).toFixed(3);return i.a.createElement("tr",null,i.a.createElement("td",null,e.product_name),i.a.createElement("td",null,e.quantity+" "+e.ordered_unit_name),i.a.createElement("td",null,a>0?a+" "+e.purchased_unit_name:"Not available"),i.a.createElement("td",null,i.a.createElement("div",{class:"d-flex justify-content-center"},i.a.createElement("input",{type:"number",name:"provideQuantity-"+e.id,class:"cost-input",id:"provideQuantity-"+e.id,min:"0",step:"0.01",onChange:D,required:!0,disabled:a<=0}),a>0?i.a.createElement("p",{class:"cost-input-adoptment"}," ",e.purchased_unit_name," "):"")),i.a.createElement("td",null,i.a.createElement("p",{id:"productPrice-"+e.id})))})))),i.a.createElement("div",{class:"form-group p-4"},void 0===g.find((function(e){return null!==e.purchased_quantity&&e.purchased_quantity-e.paid_quantity>0}))?i.a.createElement("input",{type:"button",value:"Go Back",class:"btn  px-4 btn-primary",onClick:function(e){window.location.pathname="/view-order-list"}}):i.a.createElement("input",{type:"submit",value:"Submit",class:"btn  px-4 btn-primary",disabled:T})))))))),i.a.createElement(m.a,null),x?i.a.createElement(v.a,null):null)}},33:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(1);function n(e){(e||401===e.response.status)&&(r.c.remove(),document.location.reload())}},34:function(e,t,a){"use strict";function r(){return{Authorization:"Basic ".concat(sessionStorage.token),"content-type":"application/json"}}a.d(t,"a",(function(){return r}))},36:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(35),n=a(0),c=a.n(n),s=a(1);function l(){var e=s.c.get().userId,t=s.c.get().role_id,a=Object(n.useState)(s.d.get().cartTotal),l=Object(r.a)(a,2),i=l[0],o=l[1];return Object(n.useEffect)((function(){o(s.d.get().cartTotal)})),c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"py-1 bg-primary"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row no-gutters d-flex align-items-start align-items-center px-md-0"},c.a.createElement("div",{className:"col-lg-12 d-block"},c.a.createElement("div",{className:"row d-flex",style:{padding:"10px"}}))))),c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light",id:"ftco-navbar"},c.a.createElement("div",{className:"container"},c.a.createElement("a",{className:"navbar-brand",href:"/"},"SA SUPERMART"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#ftco-nav","aria-controls":"ftco-nav","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"oi oi-menu"})," Menu"),c.a.createElement("div",{className:"collapse navbar-collapse",id:"ftco-nav"},1==e&&1==t?c.a.createElement("ul",{className:"navbar-nav ml-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"/",className:"nav-link"},"Home")),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Products"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdown04"},c.a.createElement("a",{className:"dropdown-item",href:"/add-new-product"},"Add New"),c.a.createElement("a",{className:"dropdown-item",href:"/view-added-product"},"View List"),c.a.createElement("a",{className:"dropdown-item",href:"/alter-categories"},"Alter Categories"))),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Orders"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdown04"},c.a.createElement("a",{className:"dropdown-item",href:"/view-order-list"},"View Customer Wise"),c.a.createElement("a",{className:"dropdown-item",href:"/view-ordered-product"},"View Product Wise"))),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Reports"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdown04"},c.a.createElement("a",{className:"dropdown-item",href:"/view-order-report"},"Order Report"),c.a.createElement("a",{className:"dropdown-item",href:"/view-ordered-product-report"},"Ordered Product Report"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"/logout",className:"nav-link"},"Logout"))):c.a.createElement("ul",{className:"navbar-nav ml-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"/",className:"nav-link"},"Home")),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Orders"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdown04"},c.a.createElement("a",{className:"dropdown-item",href:"/view-user-order-list"},"View "))),c.a.createElement("li",{className:"nav-item cta cta-colored"},c.a.createElement("a",{href:"/cart-list",className:"nav-link"},c.a.createElement("span",{className:"icon-shopping_cart"}),"[",i,"]")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"/logout",className:"nav-link"},"Logout")))))))}},37:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(0),n=a.n(r);function c(){return n.a.createElement("footer",{style:{backgroundColor:"#82ae46"}},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row no-gutters d-flex align-items-start align-items-center px-md-0"},n.a.createElement("div",{className:"col-lg-12 d-block"},n.a.createElement("div",{className:"row "},n.a.createElement("div",{className:"col-md pr-4 d-flex topper align-items-center"},n.a.createElement("p",{className:"text"},"Copyright 2019 \xa9All rights reserved | A1abilities PTY TLD  ABN# 82631548224")))))))}},38:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(0),n=a.n(r);function c(){return n.a.createElement("div",{id:"ftco-loader",class:"show fullscreen",style:{visibility:"visible",opacity:".5"}},n.a.createElement("svg",{class:"circular",width:"48px",height:"48px"},n.a.createElement("circle",{class:"path-bg",cx:"24",cy:"24",r:"22",fill:"none","stroke-width":"4",stroke:"#eeeeee"}),n.a.createElement("circle",{class:"path",cx:"24",cy:"24",r:"22",fill:"none","stroke-width":"4","stroke-miterlimit":"10",stroke:"#F96D00"})))}},42:function(e,t,a){"use strict";var r=a(31),n=a.n(r),c=a(32),s=a(39),l=a.n(s),i=a(1),o=a(33),d=a(34),u=function(e){var t=e.methodType;return{method:void 0===t?"GET":t,headers:Object(d.a)()}};t.a={handleOrderConfirmation:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(i.a,"/order/handleOrderConfirmation"),e.prev=2,e.next=5,l()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(o.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),generateInvoice:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(i.a,"/order/generateInvoice"),e.prev=2,e.next=5,l()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(o.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),submitDeliveryDetails:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(i.a,"/order/submitDeliveryDetails"),e.prev=2,e.next=5,l()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(o.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),orderVerificationByCustomer:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(i.a,"/order/orderVerificationByCustomer"),e.prev=2,e.next=5,l()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(o.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),fetchDeliveryFormData:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(i.a,"/order/fetchDeliveryFormData"),e.prev=2,e.next=5,l()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(o.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),handlePurchasedRecord:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(i.a,"/order/handlePurchasedRecord"),e.prev=2,e.next=5,l()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(o.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getOrderedProductList:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(i.a,"/order/getOrderedProductList"),e.prev=2,e.next=5,l()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(o.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getOrderedProductListSingleDay:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(i.a,"/order/getOrderedProductListSingleDay"),e.prev=2,e.next=5,l()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(o.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),fetchPreviousBillingAddresss:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(i.a,"/order/fetchPreviousBillingAddresss"),e.prev=2,e.next=5,l()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(o.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),removeSelectedAddress:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(i.a,"/order/removeSelectedAddress"),e.prev=2,e.next=5,l()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(o.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getOrderList:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(i.a,"/order/getOrderList"),e.prev=2,e.next=5,l()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(o.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getOrderListOfSingleDay:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(i.a,"/order/getOrderListOfSingleDay"),e.prev=2,e.next=5,l()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(o.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getCustomerOrderList:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(i.a,"/order/getCustomerOrderList"),e.prev=2,e.next=5,l()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(o.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),addNewOrder:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(i.a,"/order/addNewOrder"),e.prev=2,e.next=5,l()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(o.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()}},44:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return c}));var r=a(50);function n(e){return r(e).format("YYYY-MM-DD")}function c(e){return r(e).format("DD-MM-YYYY")}}}]);
//# sourceMappingURL=19.1921356e.chunk.js.map