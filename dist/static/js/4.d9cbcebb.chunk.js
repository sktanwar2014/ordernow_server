(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[4],{102:function(e,t){e.exports={toBase64:function(e){return new Promise((function(t,n){var a=new FileReader;a.readAsDataURL(e),a.onload=function(){return t({data:a.result,name:e.name})},a.onerror=function(e){return n(e)}}))}}},115:function(e,t,n){"use strict";function a(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.r(t);var r=n(1),c=n.n(r),l=n(4),o=n(8),u=n(0),i=n.n(u),d=(n(98),n(16)),m=n(2),s=n(44),p=n(24),f=n(25),g=n(33),E=n(21),v=n(102),b=n.n(v);function y(e){var t=Object(u.useState)([]),n=Object(o.a)(t,2),r=n[0],v=n[1],y=Object(u.useState)([]),I=Object(o.a)(y,2),h=I[0],w=I[1],k=Object(u.useState)([]),j=Object(o.a)(k,2),x=j[0],O=j[1],U=Object(u.useState)([]),B=Object(o.a)(U,2),S=B[0],D=B[1],C=Object(u.useState)([]),A=Object(o.a)(C,2),N=A[0],_=A[1],F=Object(u.useState)(!1),L=Object(o.a)(F,2),P=L[0],q=L[1],V=Object(u.useState)({}),R=Object(o.a)(V,2),W=R[0],M=R[1],T=Object(u.useState)(""),J=Object(o.a)(T,2),Y=J[0],$=J[1],z=Object(u.useState)(""),G=Object(o.a)(z,2),H=G[0],K=G[1],Q=Object(u.useState)(0),X=Object(o.a)(Q,2),Z=X[0],ee=X[1],te=Object(u.useState)([]),ne=Object(o.a)(te,2),ae=ne[0],re=ne[1],ce=Object(u.useState)(!1),le=Object(o.a)(ce,2),oe=le[0],ue=le[1];Object(u.useEffect)((function(){de(),ie()}),[]);var ie=function(){var e=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.getProductUnitList();case 3:t=e.sent,O(t.productUnitList),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error...",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),de=function(){var e=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.getCategoryList();case 3:t=e.sent,w(t.categoryList),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error...",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),me=function(e){2===e&&""===document.getElementById("categoryDropDown").value?alert("Select Category !"):(M({type:e,operation:"add",id:document.getElementById("categoryDropDown").value,value:"",get:"activated"}),q(!0))},se=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ue(!0),""===(t=document.getElementById("categoryDropDown").value)||void 0===t||null===t){e.next=14;break}return e.prev=3,e.next=6,d.a.getSubCategoryList({categoryId:t});case 6:n=e.sent,v(n.subCategoriesList),ue(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("Error...",e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}(),pe=function(){var e=Object(l.a)(c.a.mark((function e(t){var n,a,r,l,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.target.value){e.next=5;break}D([]),_([]),e.next=22;break;case 5:return ue(!0),n=t.target.value,a=x.find((function(e){return e.id==t.target.value})),r=a.is_bundle,e.prev=9,e.next=12,s.a.getMainUnitRelateRecords({id:n,is_bundle:r});case 12:l=e.sent,D(l.productUnitList),o=l.productUnitList.filter((function(e){return 0==e.is_bundle})),_(o),ue(!1),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(9),console.log(e.t0);case 22:re([]);case 23:case"end":return e.stop()}}),e,null,[[9,19]])})));return function(t){return e.apply(this,arguments)}}(),fe=function(){var t=Object(l.a)(c.a.mark((function t(n){var a,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),t.prev=1,"mainForm"!==n.target.name){t.next=24;break}if(!(ae.length>0)){t.next=23;break}return ue(!0),t.t0=document.getElementById("categoryDropDown").value,t.t1=document.getElementById("subCategoryDropDown").value,t.t2=document.getElementById("productName").value,t.t3=document.getElementById("productDescription").value,t.t4=m.b.get().userId,t.t5=ae,t.t6=document.getElementById("productMainUnit").value,t.next=14,b.a.toBase64(document.getElementById("productImage").files[0]);case 14:return t.t7=t.sent,a={categoryId:t.t0,subCategoryId:t.t1,productName:t.t2,description:t.t3,createdBy:t.t4,productUnits:t.t5,mainUnitId:t.t6,document:t.t7},t.next=18,d.a.insertNewProduct(a);case 18:r=t.sent,ue(!1),!0===r?e.history.push("/"):alert("Failed Insertion"),t.next=24;break;case 23:alert("Add atleast one unit for product..");case 24:t.next=29;break;case 26:t.prev=26,t.t8=t.catch(1),console.log("Error...",t.t8);case 29:case"end":return t.stop()}}),t,null,[[1,26]])})));return function(e){return t.apply(this,arguments)}}();return i.a.createElement(u.Fragment,null,i.a.createElement(p.a,null),i.a.createElement("section",{class:"ftco-section"},i.a.createElement("div",{class:"container"},i.a.createElement("div",{class:"row justify-content-center"},i.a.createElement("div",{class:"col-xl-12 ftco-animate fadeInUp ftco-animated"},i.a.createElement("h3",{class:"mb-4 billing-heading"},"Add New Product"),i.a.createElement("form",{onSubmit:fe,name:"mainForm",class:"p-5 bg-light b-top-dark"},i.a.createElement("div",{class:"row align-items-end"},i.a.createElement("div",{class:"col-md-6"},i.a.createElement("div",{class:"form-group"},i.a.createElement("label",{for:"country"},"Category * "),i.a.createElement("div",{class:"d-flex"},i.a.createElement("select",{id:"categoryDropDown",class:"form-control",defaultValue:Y,onChange:se,required:!0},i.a.createElement("option",{value:""},"Select any one"),void 0!==h&&null!==h&&""!==h&&(h.length>0?h:[]).map((function(e,t){return i.a.createElement("option",{id:e.id,value:e.id},e.category_name)}))),i.a.createElement("input",{type:"button",class:"btn btn-primary br-none",onClick:function(){me(1)},value:"Add New"})))),i.a.createElement("div",{class:"col-md-6"},i.a.createElement("div",{class:"form-group"},i.a.createElement("label",{for:"country"},"Sub Category * "),i.a.createElement("div",{class:"d-flex"},i.a.createElement("select",{id:"subCategoryDropDown",class:"form-control",defaultValue:H,required:!0},i.a.createElement("option",{value:""},"Select any one"),void 0!==r&&null!==r&&""!==r&&(r.length>0?r:[]).map((function(e,t){return i.a.createElement("option",{id:e.id,value:e.id},e.category_name)}))),i.a.createElement("input",{type:"button",class:"btn btn-primary br-none",onClick:function(){me(2)},value:"Add New"})))),i.a.createElement("div",{class:"w-100"}),i.a.createElement("div",{class:"col-md-8"},i.a.createElement("div",{class:"form-group"},i.a.createElement("label",{for:"productName"},"Product Name *"),i.a.createElement("input",{id:"productName",type:"text",class:"form-control",placeholder:"",required:!0}))),i.a.createElement("div",{class:"col-md-4"},i.a.createElement("div",{class:"form-group"},i.a.createElement("label",{for:"productMainUnit"},"Measure Main Unit *"),i.a.createElement("select",{id:"productMainUnit",class:"form-control",required:!0,onChange:pe},i.a.createElement("option",{value:""},"Select any one"),void 0!==x&&null!==x&&""!==x&&(x.length>0?x:[]).map((function(e,t){return 0===e.is_bundle?i.a.createElement("option",{id:e.id,value:e.id},e.unit_name):null}))))),S.length>0&&i.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),"innerForm"===e.target.name){var t=a(ae),n=document.getElementById("packetWeight")?document.getElementById("packetWeight").value:"",r=document.getElementById("packetUnitId")?document.getElementById("packetUnitId").value:"",c=x.find((function(e){return e.id==document.getElementById("productUnitIn").value})),l=x.find((function(e){return e.id==r})),o={unitValue:document.getElementById("productUnitValue").value,unitIn:document.getElementById("productUnitIn").value,price:document.getElementById("productPrice").value,isPacket:r?1:0,packetWeight:n,packetUnitId:r,unitInName:c.unit_name,packetUnitIdName:l?l.unit_name:""};t.push(o),re(t),a(S).map((function(e,t){e.id==o.unitIn&&S.splice(t,1)})),document.getElementById("productUnitIn").value=""}},name:"innerForm",class:"inner-form"},i.a.createElement("div",{class:"col-md-6"},i.a.createElement("div",{class:"form-group"},i.a.createElement("label",{for:"productUnitIn"},"Unit/Measurement *"),i.a.createElement("div",{class:"d-flex"},i.a.createElement("input",{id:"productUnitValue",type:"text",class:"form-control",defaultValue:"1",disabled:!0,required:!0}),i.a.createElement("select",{id:"productUnitIn",class:"form-control",required:!0,defaultValue:"",onChange:function(e){var t=x.find((function(t){return t.id==e.target.value}));t?(ee(t.is_bundle),document.getElementById("productUnitValue").value=t.default_weight):(ee(0),document.getElementById("productUnitValue").value=1)}},i.a.createElement("option",{value:""},"Select any one"),void 0!==S&&null!==S&&""!==S&&(S.length>0?S:[]).map((function(e,t){return i.a.createElement("option",{id:e.id,value:e.id},e.unit_name)})))))),1===Z&&i.a.createElement("div",{class:"col-md-4"},i.a.createElement("div",{class:"form-group"},i.a.createElement("label",{for:"productWeight"},"Weight *"),i.a.createElement("div",{class:"d-flex"},i.a.createElement("input",{id:"packetWeight",type:"text",class:"form-control",placeholder:"",required:!0}),i.a.createElement("select",{id:"packetUnitId",class:"form-control",required:!0},i.a.createElement("option",{value:""},"Select any one"),void 0!==N&&null!==N&&""!==N&&(N.length>0?N:[]).map((function(e,t){return i.a.createElement("option",{id:e.id,value:e.id},e.unit_name)})))))),i.a.createElement("div",{class:0===Z?"col-md-6":"col-md-2"},i.a.createElement("div",{class:"form-group"},i.a.createElement("label",{for:"productPrice"},"Price (In $)"),i.a.createElement("input",{id:"productPrice",type:"number",step:"0.00",min:"0",class:"form-control",placeholder:""}))),i.a.createElement("div",{class:"add-unit"},i.a.createElement("button",{type:"submit"}," Add"))),i.a.createElement("div",{class:"w-100"},ae.length>0&&i.a.createElement("table",{className:"unit-array-table"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"#"),i.a.createElement("th",null,"Units"),i.a.createElement("th",null,"Price"),i.a.createElement("th",null,"Action"))),i.a.createElement("tbody",null,(ae.length>0?ae:[]).map((function(e,t){return i.a.createElement("tr",null,i.a.createElement("td",null,t+1),i.a.createElement("td",null,e.unitValue+" "+e.unitInName,e.packetWeight&&e.packetUnitId?"(".concat(e.packetWeight," ").concat(e.packetUnitIdName," per  ").concat(e.unitInName,")"):""),i.a.createElement("td",null,e.price),i.a.createElement("td",null,i.a.createElement("button",{type:"button",className:"delete-button",onClick:function(){!function(e){var t=a(ae),n=a(S),r=t[e].unitIn,c=x.find((function(e){return e.id==r}));n.push(c),D(n),t.splice(e,1),re(t)}(t)}},"Delete")))}))))),i.a.createElement("div",{class:"col-md-6"},i.a.createElement("div",{class:"form-group"},i.a.createElement("label",{for:"description"},"Description *"),i.a.createElement("textarea",{name:"",id:"productDescription",cols:"30",rows:"10",class:"form-control",required:!0}))),i.a.createElement("div",{class:"col-md-6"},i.a.createElement("div",{class:"form-group"},i.a.createElement("div",{class:"field",align:"left"},i.a.createElement("label",{for:"productImage"},"Upload product image *"),i.a.createElement("input",{type:"file",class:"form-control",id:"productImage",name:"productImage",accept:".png, .jpg, .jpeg",onChange:function(e){if(window.File&&window.FileList&&window.FileReader){var t=e.target.files[0];if(null!==t&&void 0!==t&&""!==t){var n=new FileReader;n.onload=function(e){document.getElementById("productImageThumb").setAttribute("src",e.target.result),document.getElementById("productImageThumb").setAttribute("title","Selected image")},n.readAsDataURL(t)}}else alert("Your browser doesn't support to File API")},required:!0}))),i.a.createElement("span",null,i.a.createElement("img",{class:"imageThumb",id:"productImageThumb"}),i.a.createElement("br",null),i.a.createElement("span",{class:"remove",onClick:function(e){document.getElementById("productImageThumb").removeAttribute("src"),document.getElementById("productImageThumb").removeAttribute("title"),document.getElementById("productImage").value=""}},"Remove image"))),i.a.createElement("div",{class:"form-group p-4"},i.a.createElement("input",{type:"submit",value:"Submit",class:"btn  px-4 btn-primary"})))))))),i.a.createElement(f.a,null),P?i.a.createElement(g.a,{open:P,setCategoryDialogOpen:q,props:W,setCategoryList:w,setSubCategory:v,setDefaultCategoryId:$,setDefaultSubCategoryId:K}):null,oe?i.a.createElement(E.a,null):null)}n.d(t,"default",(function(){return y}))}}]);
//# sourceMappingURL=4.d9cbcebb.chunk.js.map