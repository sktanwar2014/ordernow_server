(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[5],{70:function(e,t,a){"use strict";function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return r}))},71:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(70);function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},72:function(e,t,a){"use strict";var r=a(2),n=a.n(r),c=a(6),o=a(8),l=a.n(o),s=a(1),u=a(9),i=a(18),d=function(e){var t=e.methodType;return{method:void 0===t?"GET":t,headers:Object(i.a)()}};t.a={getProductUnitList:function(){var e=Object(c.a)(n.a.mark((function e(){var t,a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(s.a,"/staticrecords/getProductUnitList"),e.prev=1,e.next=4,l()(t,Object.assign({},d({methodType:"GET"})));case 4:return a=e.sent,r=a.data,e.abrupt("return",r);case 9:throw e.prev=9,e.t0=e.catch(1),Object(u.a)(e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),getMainUnitRelateRecords:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(s.a,"/staticrecords/getMainUnitRelateRecords"),e.prev=2,e.next=5,l()(r,Object.assign({},d({methodType:"POST"}),{data:a}));case 5:return c=e.sent,o=c.data,e.abrupt("return",o);case 10:throw e.prev=10,e.t0=e.catch(2),Object(u.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getOrderStatusList:function(){var e=Object(c.a)(n.a.mark((function e(){var t,a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(s.a,"/staticrecords/getOrderStatusList"),e.prev=1,e.next=4,l()(t,Object.assign({},d({methodType:"GET"})));case 4:return a=e.sent,r=a.data,e.abrupt("return",r);case 9:throw e.prev=9,e.t0=e.catch(1),Object(u.a)(e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()}},90:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return E}));var r=a(2),n=a.n(r),c=a(6),o=a(70),l=a(71),s=a(13),u=a(0),i=a.n(u),d=a(19),m=a(20),p=a(72),f=a(21),b=a(22),v={toDate:new Date,fromDate:new Date,orderStatus:"1"};function E(){var e=Object(u.useState)(v),t=Object(s.a)(e,2),a=t[0],r=t[1],E=Object(u.useState)([]),O=Object(s.a)(E,2),h=O[0],j=O[1],g=Object(u.useState)([]),w=Object(s.a)(g,2),y=w[0],D=w[1],S=Object(u.useState)([]),x=Object(s.a)(S,2),P=x[0],_=x[1];Object(u.useEffect)((function(){L(),T()}),[]);var k=function(e){r(Object(l.a)({},a,Object(o.a)({},e.target.name,e.target.value)))},L=function(){var e=Object(c.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.getOrderList({order_status:a.orderStatus,from_date:Object(b.a)(a.fromDate),to_date:Object(b.a)(a.toDate)});case 3:t=e.sent,j(t.orderList),D(t.orderedProducts),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error...",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(c.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.getOrderStatusList({});case 3:t=e.sent,_(t.orderStatusList),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error...",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return i.a.createElement(u.Fragment,null,i.a.createElement(d.a,null),i.a.createElement("section",{className:"ftco-section"},i.a.createElement("div",{class:"container"},i.a.createElement("h3",null,"View Order List"),i.a.createElement("div",{class:"row justify-content-center p-bottom-30"},i.a.createElement("div",{class:"col-xl-12 ftco-animate fadeInUp ftco-animated"},i.a.createElement("div",{class:"p-5 bg-light b-top-dark"},i.a.createElement("div",{class:"row align-items-end"},i.a.createElement("div",{class:"col-md-4"},i.a.createElement("div",{class:"form-group"},i.a.createElement("label",{for:"fromDate"},"From * "),i.a.createElement("input",{id:"fromDate",name:"fromDate",type:"date",value:Object(b.a)(a.fromDate),class:"form-control",onChange:k}))),i.a.createElement("div",{class:"col-md-4"},i.a.createElement("div",{class:"form-group"},i.a.createElement("label",{for:"toDate"},"To * "),i.a.createElement("input",{id:"toDate",name:"toDate",type:"date",value:Object(b.a)(a.toDate),class:"form-control",onChange:k}))),i.a.createElement("div",{class:"col-md-4"},i.a.createElement("div",{class:"form-group"},i.a.createElement("label",{for:"orderStatus"},"Status * "),i.a.createElement("select",{id:"orderStatus",name:"orderStatus",value:a.orderStatus,class:"form-control",onChange:k},(P.length>0?P:[]).map((function(e,t){return i.a.createElement("option",{id:e.id,value:e.id},e.order_status)}))))),i.a.createElement("div",{class:"col-md-12 m-bottom-20"},i.a.createElement("div",{class:"form-group"},i.a.createElement("div",{class:"d-flex f-right"},i.a.createElement("button",{class:"btn btn-primary px-4",onClick:L}," Click to view")))),i.a.createElement("div",{class:"w-100"},i.a.createElement("table",{className:"unit-array-table"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"#"),i.a.createElement("th",null,"Order Date"),i.a.createElement("th",null,"Order Id"),i.a.createElement("th",null,"Customer"),i.a.createElement("th",null,"Product"),i.a.createElement("th",null,"Quantity"),i.a.createElement("th",null,"Address"))),i.a.createElement("tbody",null,(h.length>0?h:[]).map((function(e,t){var a=y.filter((function(t){return t.order_id===e.id})).length;return(y.length>0?y:[]).map((function(r){if(r.order_id===e.id)return i.a.createElement("tr",{class:"text-center"},0!==a&&i.a.createElement(u.Fragment,null,i.a.createElement("td",{rowspan:a},t+1),i.a.createElement("td",{rowspan:a},Object(b.b)(e.order_date)),i.a.createElement("td",{rowspan:a},e.order_id),i.a.createElement("td",{rowspan:a},e.full_name)),i.a.createElement("td",null,r.product_name),i.a.createElement("td",null,"".concat(r.quantity,"  ").concat(r.ordered_unit_name)),0!==a&&i.a.createElement(u.Fragment,null,i.a.createElement("td",{rowspan:a},"".concat(e.flat_add,", ").concat(e.street_add,", ").concat(e.city))),i.a.createElement("div",{style:{display:"none"}},a=0))}))}))))))))))),i.a.createElement(m.a,null))}}}]);
//# sourceMappingURL=5.286594f9.chunk.js.map