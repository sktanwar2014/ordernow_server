(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[11],{79:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));var l=a(5),r=a.n(l),c=a(9),n=a(11),s=a(0),m=a.n(s),o=a(21),d=a(1),i=a(20),u=a(19);function p(e){var t=Object(s.useState)(),a=Object(n.a)(t,2),l=a[0],p=a[1];Object(s.useEffect)((function(){var e=0;d.c.get().cart.map((function(t){e+=Number(t.total)})),p(e)}),[]);var E=function(){var t=Object(c.a)(r.a.mark((function t(a){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,c={firstName:document.getElementById("firstName").value,lastName:document.getElementById("lastName").value,state:document.getElementById("state").value,streetAddress:document.getElementById("streetAddress").value,flatAdd:document.getElementById("flatAdd").value,city:document.getElementById("city").value,postCode:document.getElementById("postCode").value,phone:document.getElementById("phone").value,email:document.getElementById("email").value,createdBy:d.b.get().userId,itemsTotal:l,cartItems:d.c.get().cart},t.next=5,o.a.addNewOrder(c);case 5:!0===t.sent&&d.c.removeCart(),e.history.push("/"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),console.log("Error...",t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}();return m.a.createElement(s.Fragment,null,m.a.createElement(u.a,null),m.a.createElement("section",{class:"ftco-section"},m.a.createElement("div",{class:"container"},m.a.createElement("form",{onSubmit:E,class:"billing-form"},m.a.createElement("div",{class:"row justify-content-center"},m.a.createElement("div",{class:"col-xl-7 ftco-animate fadeInUp ftco-animated"},m.a.createElement("h3",{class:"mb-4 billing-heading"},"Billing Details"),m.a.createElement("div",{class:"row align-items-end"},m.a.createElement("div",{class:"col-md-6"},m.a.createElement("div",{class:"form-group"},m.a.createElement("label",{for:"firstname"},"First Name"),m.a.createElement("input",{type:"text",id:"firstName",class:"form-control",placeholder:"",required:!0}))),m.a.createElement("div",{class:"col-md-6"},m.a.createElement("div",{class:"form-group"},m.a.createElement("label",{for:"lastname"},"Last Name"),m.a.createElement("input",{type:"text",id:"lastName",class:"form-control",placeholder:"",required:!0}))),m.a.createElement("div",{class:"w-100"}),m.a.createElement("div",{class:"col-md-12"},m.a.createElement("div",{class:"form-group"},m.a.createElement("label",{for:"country"},"State / Country"),m.a.createElement("input",{type:"text",id:"state",class:"form-control",placeholder:"",required:!0}))),m.a.createElement("div",{class:"w-100"}),m.a.createElement("div",{class:"col-md-6"},m.a.createElement("div",{class:"form-group"},m.a.createElement("label",{for:"streetaddress"},"Street Address"),m.a.createElement("input",{type:"text",id:"streetAddress",class:"form-control",placeholder:"House number and street name",required:!0}))),m.a.createElement("div",{class:"col-md-6"},m.a.createElement("div",{class:"form-group"},m.a.createElement("input",{type:"text",id:"flatAdd",class:"form-control",placeholder:"Appartment, suite, unit etc.",required:!0}))),m.a.createElement("div",{class:"w-100"}),m.a.createElement("div",{class:"col-md-6"},m.a.createElement("div",{class:"form-group"},m.a.createElement("label",{for:"towncity"},"Town / City"),m.a.createElement("input",{type:"text",id:"city",class:"form-control",placeholder:"",required:!0}))),m.a.createElement("div",{class:"col-md-6"},m.a.createElement("div",{class:"form-group"},m.a.createElement("label",{for:"postcodezip"},"Postcode / ZIP *"),m.a.createElement("input",{type:"number",id:"postCode",class:"form-control",placeholder:"",required:!0}))),m.a.createElement("div",{class:"w-100"}),m.a.createElement("div",{class:"col-md-6"},m.a.createElement("div",{class:"form-group"},m.a.createElement("label",{for:"phone"},"Phone"),m.a.createElement("input",{type:"number",id:"phone",class:"form-control",placeholder:"",required:!0}))),m.a.createElement("div",{class:"col-md-6"},m.a.createElement("div",{class:"form-group"},m.a.createElement("label",{for:"emailaddress"},"Email Address"),m.a.createElement("input",{type:"email",id:"email",class:"form-control",placeholder:"",required:!0}))),m.a.createElement("div",{class:"w-100"}))),m.a.createElement("div",{class:"col-xl-5"},m.a.createElement("div",{class:"row mt-5 pt-3"},m.a.createElement("div",{class:"col-md-12 d-flex mb-5"},m.a.createElement("div",{class:"cart-detail cart-total p-3 p-md-4"},m.a.createElement("h3",{class:"billing-heading mb-4"},"Cart Total"),m.a.createElement("hr",null),m.a.createElement("p",{class:"d-flex total-price"},m.a.createElement("span",null,"Total"),m.a.createElement("span",null,l)))),m.a.createElement("div",{class:"col-md-12"},m.a.createElement("div",{class:"cart-detail p-3 p-md-4"},m.a.createElement("p",null,m.a.createElement("input",{type:"submit",value:"Place an order",class:"btn btn-primary py-3 px-4"})))))))))),m.a.createElement(i.a,null))}}}]);
//# sourceMappingURL=11.8a4fb2ca.chunk.js.map