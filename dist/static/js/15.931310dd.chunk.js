(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[15],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return g}));var r=a(30),n=a.n(r),c=a(31),s=a(39),o=a(40),l=a(34),i=a(0),d=a.n(i),u=a(42),m=a(1),p=a(37),f=a(36),v=a(35),h=a(44),b={firstName:"",lastName:"",state:"",streetAddress:"",flatAdd:"",city:"",postCode:"",phone:"",email:"",order_date:""};function g(e){var t=Object(i.useState)([]),a=Object(l.a)(t,2),r=a[0],g=a[1],E=Object(i.useState)(b),w=Object(l.a)(E,2),O=w[0],y=w[1],j=Object(i.useState)(!1),N=Object(l.a)(j,2),x=N[0],k=N[1],P=new Date;P.setDate(P.getDate()+1),Object(i.useEffect)((function(){S()}),[]);var T=function(e){y(Object(o.a)(Object(o.a)({},O),{},Object(s.a)({},e.target.name,e.target.value)))},C=function(){var e=Object(c.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),e.next=4,u.a.removeSelectedAddress({id:t,userId:m.c.get().userId});case 4:a=e.sent,g(a.billingAddresses),y(b),k(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(c.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),e.next=4,u.a.fetchPreviousBillingAddresss({userId:m.c.get().userId});case 4:t=e.sent,g(t.billingAddresses),k(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var t=Object(c.a)(n.a.mark((function t(a){var r,c;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),k(!0),t.prev=2,r={shipping_id:O.shipping_id,firstName:O.firstName,lastName:O.lastName,state:O.state,streetAddress:O.streetAddress,flatAdd:O.flatAdd,city:O.city,postCode:O.postCode,phone:O.phone,email:O.email,order_date:O.order_date,createdBy:m.c.get().userId,cartItems:m.d.get().cart},t.next=6,u.a.addNewOrder(r);case 6:c=t.sent,k(!1),!0===c&&m.d.removeCart(),e.history.push("/"),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),console.log("Error...",t.t0);case 15:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(e){return t.apply(this,arguments)}}();return d.a.createElement(i.Fragment,null,d.a.createElement(f.a,null),d.a.createElement("div",{class:"hero-wrap hero-bread",style:{backgroundImage:"url('images/category-2.jpg')"}},d.a.createElement("div",{class:"container"},d.a.createElement("div",{class:"row no-gutters slider-text align-items-center justify-content-center"},d.a.createElement("div",{class:"col-md-9 ftco-animate text-center fadeInUp ftco-animated"},d.a.createElement("h1",{class:"mb-0 bread"},"Proceed to Checkout"))))),d.a.createElement("section",{class:"ftco-section"},d.a.createElement("div",{class:"container"},d.a.createElement("div",{id:"addressList",class:"row"},d.a.createElement("h3",null,"Your Addresses")),d.a.createElement("div",{class:"row"},(r.length>0?r:[]).map((function(e,t){return d.a.createElement("div",{class:"col-12 col-md-4"},d.a.createElement("div",{class:"single-special pre-address wow fadeInUp"},d.a.createElement("h4",null,e.full_name),d.a.createElement("ul",null,d.a.createElement("li",null,e.flat_add),d.a.createElement("li",null,e.street_add),d.a.createElement("li",null,e.city+" - "+e.pincode),d.a.createElement("li",null,e.state),d.a.createElement("li",null,e.mobile)),d.a.createElement("a",{href:"#billing-detail-form",onClick:function(){!function(e){var t=e.full_name?e.full_name.split(" ")[0]:"",a=e.full_name?e.full_name.split(" ")[1]:"";y({shipping_id:e.id,firstName:t,lastName:a,state:e.state,streetAddress:e.street_add,flatAdd:e.flat_add,city:e.city,postCode:e.pincode,phone:e.mobile,email:e.email})}(e)}},"Choose as billing address"),d.a.createElement("a",{href:"#addressList",onClick:function(){C(e.id)}},"Remove")))}))),d.a.createElement("hr",null),d.a.createElement("div",{className:"row"},d.a.createElement("form",{onSubmit:A,class:"billing-form"},d.a.createElement("div",{class:"row justify-content-center"},d.a.createElement("div",{class:"col-xl-7 ftco-animate fadeInUp ftco-animated"},d.a.createElement("div",{class:"row align-items-end"},d.a.createElement("div",{class:"col-md-6"},d.a.createElement("div",{class:"form-group"},d.a.createElement("label",{for:"firstname"},"First Name"),d.a.createElement("input",{type:"text",id:"firstName",name:"firstName",value:O.firstName,onChange:T,class:"form-control",placeholder:"",required:!0}))),d.a.createElement("div",{class:"col-md-6"},d.a.createElement("div",{class:"form-group"},d.a.createElement("label",{for:"lastname"},"Last Name"),d.a.createElement("input",{type:"text",id:"lastName",name:"lastName",value:O.lastName,onChange:T,class:"form-control",placeholder:"",required:!0}))),d.a.createElement("div",{class:"col-md-12"},d.a.createElement("div",{class:"form-group"},d.a.createElement("label",{for:"country"},"State / Country"),d.a.createElement("input",{type:"text",id:"state",name:"state",value:O.state,onChange:T,class:"form-control",placeholder:"",required:!0}))),d.a.createElement("div",{class:"col-md-6"},d.a.createElement("div",{class:"form-group"},d.a.createElement("label",{for:"streetaddress"},"Street Address"),d.a.createElement("input",{type:"text",id:"streetAddress",name:"streetAddress",value:O.streetAddress,onChange:T,class:"form-control",placeholder:"House number and street name",required:!0}))),d.a.createElement("div",{class:"col-md-6"},d.a.createElement("div",{class:"form-group"},d.a.createElement("input",{type:"text",id:"flatAdd",name:"flatAdd",class:"form-control",value:O.flatAdd,onChange:T,placeholder:"Appartment, suite, unit etc.",required:!0}))),d.a.createElement("div",{class:"col-md-6"},d.a.createElement("div",{class:"form-group"},d.a.createElement("label",{for:"towncity"},"Town / City"),d.a.createElement("input",{type:"text",id:"city",name:"city",class:"form-control",onChange:T,value:O.city,placeholder:"",required:!0}))),d.a.createElement("div",{class:"col-md-6"},d.a.createElement("div",{class:"form-group"},d.a.createElement("label",{for:"postcodezip"},"Postcode / ZIP *"),d.a.createElement("input",{type:"number",id:"postCode",name:"postCode",class:"form-control",onChange:T,value:O.postCode,placeholder:"",required:!0}))),d.a.createElement("div",{class:"col-md-6"},d.a.createElement("div",{class:"form-group"},d.a.createElement("label",{for:"phone"},"Phone"),d.a.createElement("input",{type:"number",id:"phone",name:"phone",value:O.phone,onChange:T,class:"form-control",placeholder:"",required:!0}))),d.a.createElement("div",{class:"col-md-6"},d.a.createElement("div",{class:"form-group"},d.a.createElement("label",{for:"emailaddress"},"Email Address"),d.a.createElement("input",{type:"email",id:"email",name:"email",value:O.email,onChange:T,class:"form-control",placeholder:"",required:!0}))))),d.a.createElement("div",{class:"col-xl-5"},d.a.createElement("div",{class:"row mt-5 pt-3"},d.a.createElement("div",{class:"col-md-12",style:{marginTop:"230px"}},d.a.createElement("div",{class:"cart-detail p-3 p-md-4"},d.a.createElement("div",{class:"form-group"},d.a.createElement("label",{for:"date"},"Order for (Date) * "),d.a.createElement("input",{id:"order_date",name:"order_date",type:"date",class:"form-control",min:Object(h.a)(P),value:Object(h.a)(O.order_date),onChange:T,required:!0})),d.a.createElement("p",null,d.a.createElement("input",{type:"submit",value:"Place an order",class:"btn btn-primary py-3 px-4"}))))))))))),d.a.createElement(p.a,null),x?d.a.createElement(v.a,null):null)}},32:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(1);function n(e){(e||401===e.response.status)&&(r.c.remove(),document.location.reload())}},33:function(e,t,a){"use strict";function r(){return{Authorization:"Basic ".concat(sessionStorage.token),"content-type":"application/json"}}a.d(t,"a",(function(){return r}))},35:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(0),n=a.n(r);function c(){return n.a.createElement("div",{id:"ftco-loader",class:"show fullscreen",style:{visibility:"visible",opacity:".5"}},n.a.createElement("svg",{class:"circular",width:"48px",height:"48px"},n.a.createElement("circle",{class:"path-bg",cx:"24",cy:"24",r:"22",fill:"none","stroke-width":"4",stroke:"#eeeeee"}),n.a.createElement("circle",{class:"path",cx:"24",cy:"24",r:"22",fill:"none","stroke-width":"4","stroke-miterlimit":"10",stroke:"#F96D00"})))}},36:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a(34),n=a(0),c=a.n(n),s=a(1);function o(){var e=s.c.get().userId,t=s.c.get().role_id,a=Object(n.useState)(s.d.get().cartTotal),o=Object(r.a)(a,2),l=o[0],i=o[1];return Object(n.useEffect)((function(){i(s.d.get().cartTotal)})),c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"py-1 bg-primary"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row no-gutters d-flex align-items-start align-items-center px-md-0"},c.a.createElement("div",{className:"col-lg-12 d-block"},c.a.createElement("div",{className:"row d-flex",style:{padding:"10px"}}))))),c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light",id:"ftco-navbar"},c.a.createElement("div",{className:"container"},c.a.createElement("a",{className:"navbar-brand",href:"/"},"SA SUPERMART"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#ftco-nav","aria-controls":"ftco-nav","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"oi oi-menu"})," Menu"),c.a.createElement("div",{className:"collapse navbar-collapse",id:"ftco-nav"},1==e&&1==t?c.a.createElement("ul",{className:"navbar-nav ml-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"/",className:"nav-link"},"Home")),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Products"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdown04"},c.a.createElement("a",{className:"dropdown-item",href:"/add-new-product"},"Add New"),c.a.createElement("a",{className:"dropdown-item",href:"/view-added-product"},"View List"))),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Orders"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdown04"},c.a.createElement("a",{className:"dropdown-item",href:"/view-order-list"},"View Customer Wise"),c.a.createElement("a",{className:"dropdown-item",href:"/view-ordered-product"},"View Product Wise"))),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Reports"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdown04"},c.a.createElement("a",{className:"dropdown-item",href:"/view-order-report"},"Order Report"),c.a.createElement("a",{className:"dropdown-item",href:"/view-ordered-product-report"},"Ordered Product Report"))),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Settings"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdown04"},c.a.createElement("a",{className:"dropdown-item",href:"/alter-categories"},"Categories"),c.a.createElement("a",{className:"dropdown-item",href:"/alter-units"},"Units"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"/logout",className:"nav-link"},"Logout"))):c.a.createElement("ul",{className:"navbar-nav ml-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"/",className:"nav-link"},"Home")),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Orders"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdown04"},c.a.createElement("a",{className:"dropdown-item",href:"/view-user-order-list"},"View "))),c.a.createElement("li",{className:"nav-item cta cta-colored"},c.a.createElement("a",{href:"/cart-list",className:"nav-link"},c.a.createElement("span",{className:"icon-shopping_cart"}),"[",l,"]")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"/logout",className:"nav-link"},"Logout")))))))}},37:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(0),n=a.n(r);function c(){return n.a.createElement("footer",{style:{backgroundColor:"#82ae46"}},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row no-gutters d-flex align-items-start align-items-center px-md-0"},n.a.createElement("div",{className:"col-lg-12 d-block"},n.a.createElement("div",{className:"row "},n.a.createElement("div",{className:"col-md pr-4 d-flex topper align-items-center"},n.a.createElement("p",{className:"text"},"Copyright 2019 \xa9All rights reserved | A1abilities PTY TLD  ABN# 82631548224")))))))}},39:function(e,t,a){"use strict";function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return r}))},40:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(39);function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},42:function(e,t,a){"use strict";var r=a(30),n=a.n(r),c=a(31),s=a(38),o=a.n(s),l=a(1),i=a(32),d=a(33),u=function(e){var t=e.methodType;return{method:void 0===t?"GET":t,headers:Object(d.a)()}};t.a={handleOrderConfirmation:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/handleOrderConfirmation"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),generateInvoice:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/generateInvoice"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),submitDeliveryDetails:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/submitDeliveryDetails"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),orderVerificationByCustomer:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/orderVerificationByCustomer"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),fetchDeliveryFormData:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/fetchDeliveryFormData"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),handlePurchasedRecord:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/handlePurchasedRecord"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getOrderedProductList:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/getOrderedProductList"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getOrderedProductListSingleDay:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/getOrderedProductListSingleDay"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),fetchPreviousBillingAddresss:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/fetchPreviousBillingAddresss"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),removeSelectedAddress:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/removeSelectedAddress"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getOrderList:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/getOrderList"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getOrderListOfSingleDay:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/getOrderListOfSingleDay"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getCustomerOrderList:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/getCustomerOrderList"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),addNewOrder:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(l.a,"/order/addNewOrder"),e.prev=2,e.next=5,o()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()}},44:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return c}));var r=a(51);function n(e){return r(e).format("YYYY-MM-DD")}function c(e){return r(e).format("DD-MM-YYYY")}}}]);
//# sourceMappingURL=15.931310dd.chunk.js.map