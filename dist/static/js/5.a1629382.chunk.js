(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[5],{100:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a(1),n=a.n(r),c=a(4),l=a(8),o=a(0),u=a.n(o),s=a(29),d=a(38),i=a(35);function m(e){var t=e.open,a=e.setDialogOpen,r=e.props,m=e.setOrderList,E=e.setOrderedProductList,p=e.isUpdatable,f=Object(o.useState)(r.products),b=Object(l.a)(f,2),v=b[0],h=(b[1],Object(o.useState)(!1)),O=Object(l.a)(h,2),j=O[0],_=O[1],y=function(){var e=Object(c.a)(n.a.mark((function e(t){var c,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),_(!0),e.prev=2,c=[],v.map((function(e){var t=document.querySelector('input[name="action-'.concat(e.ordered_id,'"]:checked')),a="";null===t?a=5:""!==t&&(a=t.value),c.push({ordered_id:e.ordered_id,product_id:e.product_id,status:a})})),e.next=7,i.a.handleOrderConfirmation({orderId:r.order_id,productData:c,date:r.order_date,order_status:3});case 7:l=e.sent,m(l.orderList),E(l.orderedProducts),a(!1),_(!1),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),console.log("Error...",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}();return u.a.createElement(s.a,{show:t,onHide:function(){a(!1)},size:"lg",centered:!0},u.a.createElement(s.a.Header,{closeButton:!0},u.a.createElement(s.a.Title,{id:"contained-modal-title-vcenter"},"Product Verification")),u.a.createElement("form",{onSubmit:y},u.a.createElement(s.a.Body,null,u.a.createElement("div",{class:"w-100"},u.a.createElement("table",{className:"unit-array-table"},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"#"),u.a.createElement("th",null,"Products "),u.a.createElement("th",null,"Delivered Quantity"),u.a.createElement("th",null,"Price"),u.a.createElement("th",null,"Verified Quantity"),1===p&&u.a.createElement("th",null,"Action"))),u.a.createElement("tbody",null,(v.length>0?Object.values(v):[]).map((function(e,t){return u.a.createElement("tr",{class:"text-center"},u.a.createElement("td",null,t+1),u.a.createElement("td",null,e.product_name),u.a.createElement("td",null,e.quantity+" "+e.ordered_unit_name),u.a.createElement("td",null,e.price),u.a.createElement("td",null,e.verified_quantity+" "+e.verified_unit_name),1===p&&u.a.createElement("td",null,Number(e.quantity)===Number(e.verified_quantity)&&e.verified_unit_id===e.unit_id?"":u.a.createElement("div",{class:"radio"},u.a.createElement("label",{style:{paddingRight:"15px"}},u.a.createElement("input",{type:"radio",name:"action-"+e.ordered_id,value:"5",class:"mr-1",required:!0}),"Accept"),u.a.createElement("label",null,u.a.createElement("input",{type:"radio",name:"action-"+e.ordered_id,value:"6",class:"mr-1",required:!0})," Reject"))))})))))),u.a.createElement(s.a.Footer,null,0===p?u.a.createElement(d.a,{className:"br-none",onClick:function(){a(!1)}},"Close"):1===p?u.a.createElement(d.a,{type:"submit",className:"br-none",disabled:j},"Submit"):"")))}},110:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return O}));var r=a(1),n=a.n(r),c=a(4),l=a(32),o=a(43),u=a(8),s=a(0),d=a.n(s),i=a(24),m=a(25),E=a(44),p=a(35),f=a(100),b=a(23),v=a(21),h={toDate:new Date,fromDate:new Date,orderStatus:"1"};function O(){var e=Object(s.useState)(h),t=Object(u.a)(e,2),a=t[0],r=t[1],O=Object(s.useState)([]),j=Object(u.a)(O,2),_=j[0],y=j[1],g=Object(s.useState)([]),w=Object(u.a)(g,2),S=w[0],D=w[1],x=Object(s.useState)([]),k=Object(u.a)(x,2),C=k[0],L=k[1],P=Object(s.useState)(1),q=Object(u.a)(P,2),N=q[0],F=q[1],A=Object(s.useState)(!1),I=Object(u.a)(A,2),Q=I[0],U=I[1],V=Object(s.useState)({}),B=Object(u.a)(V,2),H=B[0],J=B[1],R=Object(s.useState)(!1),T=Object(u.a)(R,2),z=T[0],G=T[1];Object(s.useEffect)((function(){M(),W()}),[]);var K=function(e){r(Object(o.a)({},a,Object(l.a)({},e.target.name,e.target.value)))},M=function(){var e=Object(c.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return G(!0),F(a.orderStatus),e.prev=2,e.next=5,p.a.getOrderList({order_status:a.orderStatus,from_date:Object(b.a)(a.fromDate),to_date:Object(b.a)(a.toDate)});case 5:t=e.sent,y(t.orderList),D(t.orderedProducts),G(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log("Error...",e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(c.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.getOrderStatusList({});case 3:t=e.sent,L(t.orderStatusList),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error...",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(c.a)(n.a.mark((function e(t,r){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:J({order_id:t.id,order_date:Object(b.a)(a.date),products:r}),U(!0);case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return d.a.createElement(s.Fragment,null,d.a.createElement(i.a,null),d.a.createElement("section",{className:"ftco-section"},d.a.createElement("div",{class:"container"},d.a.createElement("h3",null,"View Order List"),d.a.createElement("div",{class:"row justify-content-center p-bottom-30"},d.a.createElement("div",{class:"col-xl-12 ftco-animate fadeInUp ftco-animated"},d.a.createElement("div",{class:"p-5 bg-light b-top-dark"},d.a.createElement("div",{class:"row align-items-end"},d.a.createElement("div",{class:"col-md-4"},d.a.createElement("div",{class:"form-group"},d.a.createElement("label",{for:"fromDate"},"From * "),d.a.createElement("input",{id:"fromDate",name:"fromDate",type:"date",value:Object(b.a)(a.fromDate),class:"form-control",onChange:K}))),d.a.createElement("div",{class:"col-md-4"},d.a.createElement("div",{class:"form-group"},d.a.createElement("label",{for:"toDate"},"To * "),d.a.createElement("input",{id:"toDate",name:"toDate",type:"date",value:Object(b.a)(a.toDate),class:"form-control",onChange:K}))),d.a.createElement("div",{class:"col-md-4"},d.a.createElement("div",{class:"form-group"},d.a.createElement("label",{for:"orderStatus"},"Status * "),d.a.createElement("select",{id:"orderStatus",name:"orderStatus",value:a.orderStatus,class:"form-control",onChange:K},(C.length>0?C:[]).map((function(e,t){return 4!==e.id?d.a.createElement("option",{id:e.id,value:e.id},e.order_status):null}))))),d.a.createElement("div",{class:"col-md-12 m-bottom-20"},d.a.createElement("div",{class:"form-group"},d.a.createElement("div",{class:"d-flex f-right"},d.a.createElement("button",{class:"btn btn-primary px-4",onClick:M}," Click to view")))),d.a.createElement("div",{class:"w-100"},d.a.createElement("table",{className:"unit-array-table"},d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",null,"#"),d.a.createElement("th",null,"Order Date"),d.a.createElement("th",null,"Order Id"),d.a.createElement("th",null,"Customer"),(2==N||1==N)&&d.a.createElement("th",null,"Product"),(2==N||1==N)&&d.a.createElement("th",null,"Quantity"),2==N&&d.a.createElement("th",null,"Price"),d.a.createElement("th",null,"Address"),1!=N&&d.a.createElement("th",null,"Delivery Date"),1!=N&&2!=N&&d.a.createElement("th",null,"Actions"))),d.a.createElement("tbody",null,(_.length>0?_:[]).map((function(e,t){var a=S.filter((function(t){return t.order_id===e.id})),r=a.length;return(a.length>0?a:[]).map((function(n){return d.a.createElement("tr",{class:"text-center"},0!==r&&d.a.createElement(s.Fragment,null,d.a.createElement("td",{rowspan:r},t+1),d.a.createElement("td",{rowspan:r},Object(b.b)(e.order_date)),d.a.createElement("td",{rowspan:r},e.order_id),d.a.createElement("td",{rowspan:r},e.full_name)),(2==N||1==N)&&d.a.createElement("td",null,n.product_name),(2==N||1==N)&&d.a.createElement("td",null,"".concat(n.quantity,"  ").concat(n.ordered_unit_name)),2==N&&d.a.createElement("td",null,"".concat(n.price)),0!==r&&d.a.createElement(s.Fragment,null,d.a.createElement("td",{rowspan:r},"".concat(e.flat_add,", ").concat(e.street_add,", ").concat(e.city)),1!=N&&d.a.createElement("td",{rowspan:r},Object(b.b)(e.delivery_date)),1!=N&&2!=N&&d.a.createElement("td",{rowspan:r},d.a.createElement("button",{class:"alter-purchase-record",type:"submit",onClick:function(){X(e,a)}}," See Info "))),d.a.createElement("div",{style:{display:"none"}},r=0))}))}))))))))))),d.a.createElement(m.a,null),Q?d.a.createElement(f.a,{open:Q,setDialogOpen:U,props:H,setOrderList:y,setOrderedProductList:D,isUpdatable:0}):null,z?d.a.createElement(v.a,null):null)}}}]);
//# sourceMappingURL=5.a1629382.chunk.js.map