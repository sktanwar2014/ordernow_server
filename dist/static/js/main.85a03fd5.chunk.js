(this.webpackJsonpsa_supermart=this.webpackJsonpsa_supermart||[]).push([[7],{1:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return i}));var r=n(12),a="http://ordernow.a1abilities.co.nz/",o="http://ordernow.a1abilities.co.nz/",c={set:function(e){var t=e.user_id,n=e.name,r=e.token,a=(e.account_id,e.id),o=e.role_id;sessionStorage.setItem("userId",a),sessionStorage.setItem("token",r),sessionStorage.setItem("user_id",t),sessionStorage.setItem("role_id",o),sessionStorage.setItem("name",n)},get:function(){return{userId:sessionStorage.getItem("userId"),token:sessionStorage.getItem("token"),user_id:sessionStorage.getItem("user_id"),role_id:sessionStorage.getItem("role_id"),name:sessionStorage.getItem("name")}},remove:function(){sessionStorage.removeItem("userId"),sessionStorage.removeItem("token"),sessionStorage.removeItem("user_id"),sessionStorage.removeItem("role_id"),sessionStorage.removeItem("name"),sessionStorage.removeItem("account_id")},get notEmpty(){var e=null!==this.get().token,t=""!==this.get().token;return e&&t},get isAdmin(){var e="admin"==this.get().user_id,t=1==this.get().userId,n=1==this.get().role_id;return e&&t&&n}},i={set:function(e){var t=e.product,n=sessionStorage.getItem("cart");if(null!==n&&""!==n){var a=JSON.parse(n);if(a.filter((function(e){return Number(e.user_id)===Number(c.get().userId)}))){var o=a.findIndex((function(e){return e.id===t.id&&e.user_id==c.get().userId}));if(o>=0){var i=Object.assign([],a,Object(r.a)({},o,t));sessionStorage.setItem("cart",JSON.stringify(i))}else a.push(t),sessionStorage.setItem("cart",JSON.stringify(a))}else a.push(t),sessionStorage.setItem("cart",JSON.stringify(a))}else sessionStorage.setItem("cart",JSON.stringify([t]))},get:function(){return{cartTotal:null!==sessionStorage.getItem("cart")&&""!==sessionStorage.getItem("cart")?JSON.parse(sessionStorage.getItem("cart")).filter((function(e){return Number(e.user_id)===Number(c.get().userId)})).length:0,cart:null!==sessionStorage.getItem("cart")&&""!==sessionStorage.getItem("cart")?JSON.parse(sessionStorage.getItem("cart")).filter((function(e){return Number(e.user_id)===Number(c.get().userId)})):[]}},removeProduct:function(e){var t=e.productId,n=sessionStorage.getItem("cart");if(null!==n&&""!==n){var r=JSON.parse(n),a=r.findIndex((function(e){return e.id==t&&e.user_id==c.get().userId}));r.splice(a,1),sessionStorage.setItem("cart",JSON.stringify(r))}},removeCart:function(){var e=sessionStorage.getItem("cart");if(null!==e&&""!==e){var t=JSON.parse(e).filter((function(e){return e.user_id!=c.get().userId}));sessionStorage.setItem("cart",JSON.stringify(t))}}}},19:function(e,t,n){e.exports=n(30)},24:function(e,t,n){},25:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(14),c=n.n(o),i=(n(24),n(13)),l=n(2),s=(n(25),n(1));function u(){return a.a.createElement("div",{id:"ftco-loader",class:"show fullscreen"},a.a.createElement("svg",{class:"circular",width:"48px",height:"48px"},a.a.createElement("circle",{class:"path-bg",cx:"24",cy:"24",r:"22",fill:"none","stroke-width":"4",stroke:"#eeeeee"}),a.a.createElement("circle",{class:"path",cx:"24",cy:"24",r:"22",fill:"none","stroke-width":"4","stroke-miterlimit":"10",stroke:"#F96D00"})))}var m=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(19)]).then(n.bind(null,153))})),d=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(5),n.e(33)]).then(n.bind(null,173))})),E=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(5),n.e(34)]).then(n.bind(null,174))})),g=(Object(r.lazy)((function(){return n.e(32).then(n.bind(null,154))})),Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(23)]).then(n.bind(null,175))}))),f=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(6),n.e(17)]).then(n.bind(null,156))})),p=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(13)]).then(n.bind(null,157))})),b=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(6),n.e(26)]).then(n.bind(null,158))})),h=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(2),n.e(12)]).then(n.bind(null,168))})),y=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(2),n.e(11)]).then(n.bind(null,171))})),I=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(27)]).then(n.bind(null,159))})),v=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(3),n.e(20)]).then(n.bind(null,160))})),S=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(2),n.e(16)]).then(n.bind(null,169))})),O=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(2),n.e(14)]).then(n.bind(null,176))})),x=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(3),n.e(15)]).then(n.bind(null,161))})),w=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(3),n.e(21)]).then(n.bind(null,162))})),j=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(3),n.e(31),n.e(22)]).then(n.bind(null,170))})),z=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(24)]).then(n.bind(null,163))})),P=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(25)]).then(n.bind(null,164))})),_=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(30)]).then(n.bind(null,165))})),A=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(28)]).then(n.bind(null,166))})),k=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(18)]).then(n.bind(null,167))})),N=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(2),n.e(9)]).then(n.bind(null,172))})),J=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(29)]).then(n.bind(null,177))}));var B=function(){return a.a.createElement(i.a,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement(u,null)},a.a.createElement(l.d,null,a.a.createElement(l.b,{exact:!0,path:"/",render:function(e){return s.c.notEmpty?s.c.isAdmin?a.a.createElement(l.a,{to:"/view-added-product"}):a.a.createElement(g,e):a.a.createElement(l.a,{to:"/login"})}}),a.a.createElement(l.b,{exact:!0,path:"/cart-list",render:function(e){return s.c.notEmpty?s.c.isAdmin?a.a.createElement(l.a,{to:"/view-added-product"}):a.a.createElement(I,e):a.a.createElement(l.a,{to:"/login"})}}),a.a.createElement(l.b,{exact:!0,path:"/proceed-to-checkout",render:function(e){return s.c.notEmpty?s.c.isAdmin?a.a.createElement(l.a,{to:"/view-added-product"}):a.a.createElement(v,e):a.a.createElement(l.a,{to:"/login"})}}),a.a.createElement(l.b,{exact:!0,path:"/add-new-product",render:function(e){return s.c.notEmpty?s.c.isAdmin?a.a.createElement(f,e):a.a.createElement(l.a,{to:"/"}):a.a.createElement(l.a,{to:"/login"})}}),a.a.createElement(l.b,{exact:!0,path:"/view-user-order-list",render:function(e){return s.c.notEmpty?s.c.isAdmin?a.a.createElement(l.a,{to:"/view-added-product"}):a.a.createElement(j,e):a.a.createElement(l.a,{to:"/login"})}}),a.a.createElement(l.b,{exact:!0,path:"/view-added-product",render:function(e){return s.c.notEmpty?s.c.isAdmin?a.a.createElement(b,e):a.a.createElement(l.a,{to:"/"}):a.a.createElement(l.a,{to:"/login"})}}),a.a.createElement(l.b,{exact:!0,path:"/handle-clients",render:function(e){return s.c.notEmpty?s.c.isAdmin?a.a.createElement(N,e):a.a.createElement(l.a,{to:"/"}):a.a.createElement(l.a,{to:"/login"})}}),a.a.createElement(l.b,{exact:!0,path:"/view-order-list",render:function(e){return s.c.notEmpty?s.c.isAdmin?a.a.createElement(h,e):a.a.createElement(l.a,{to:"/"}):a.a.createElement(l.a,{to:"/login"})}}),a.a.createElement(l.b,{exact:!0,path:"/view-ordered-product",render:function(e){return s.c.notEmpty?s.c.isAdmin?a.a.createElement(y,e):a.a.createElement(l.a,{to:"/"}):a.a.createElement(l.a,{to:"/login"})}}),a.a.createElement(l.b,{exact:!0,path:"/view-order-report",render:function(e){return s.c.notEmpty?s.c.isAdmin?a.a.createElement(S,e):a.a.createElement(l.a,{to:"/"}):a.a.createElement(l.a,{to:"/login"})}}),a.a.createElement(l.b,{exact:!0,path:"/view-ordered-product-report",render:function(e){return s.c.notEmpty?s.c.isAdmin?a.a.createElement(O,e):a.a.createElement(l.a,{to:"/"}):a.a.createElement(l.a,{to:"/login"})}}),a.a.createElement(l.b,{exact:!0,path:"/delivery-form",render:function(e){return s.c.notEmpty?s.c.isAdmin?a.a.createElement(x,e):a.a.createElement(l.a,{to:"/"}):a.a.createElement(l.a,{to:"/login"})}}),a.a.createElement(l.b,{exact:!0,path:"/verify-delivered-product",render:function(e){return s.c.notEmpty?s.c.isAdmin?a.a.createElement(l.a,{to:"/view-added-product"}):a.a.createElement(w,e):a.a.createElement(l.a,{to:"/login"})}}),a.a.createElement(l.b,{exact:!0,path:"/alter-categories",render:function(e){return s.c.notEmpty?s.c.isAdmin?a.a.createElement(z,e):a.a.createElement(l.a,{to:"/"}):a.a.createElement(l.a,{to:"/login"})}}),a.a.createElement(l.b,{exact:!0,path:"/edit-product",render:function(e){return s.c.notEmpty?s.c.isAdmin?a.a.createElement(p,e):a.a.createElement(l.a,{to:"/"}):a.a.createElement(l.a,{to:"/login"})}}),a.a.createElement(l.b,{exact:!0,path:"/alter-categories/subcategory",render:function(e){return s.c.notEmpty?s.c.isAdmin?a.a.createElement(P,e):a.a.createElement(l.a,{to:"/"}):a.a.createElement(l.a,{to:"/login"})}}),a.a.createElement(l.b,{exact:!0,path:"/alter-units",render:function(e){return s.c.notEmpty?s.c.isAdmin?a.a.createElement(k,e):a.a.createElement(l.a,{to:"/"}):a.a.createElement(l.a,{to:"/login"})}}),a.a.createElement(l.b,{exact:!0,path:"/view-product-details",render:function(e){return s.c.notEmpty?a.a.createElement(_,e):a.a.createElement(l.a,{to:"/login"})}}),a.a.createElement(l.b,{exact:!0,path:"/product-details",render:function(e){return s.c.notEmpty?a.a.createElement(A,e):a.a.createElement(l.a,{to:"/login"})}}),a.a.createElement(l.b,{exact:!0,path:"/product-details",render:function(e){return s.c.notEmpty?a.a.createElement(A,e):a.a.createElement(l.a,{to:"/login"})}}),a.a.createElement(l.b,{exact:!0,path:"/change-password",render:function(e){return s.c.notEmpty&&a.a.createElement(d,e)}}),a.a.createElement(l.b,{exact:!0,path:"/auto-settings",render:function(e){return s.c.notEmpty?!s.c.isAdmin&&a.a.createElement(J,e):a.a.createElement(l.a,{to:"/login"})}}),a.a.createElement(l.b,{exact:!0,path:"/login",render:function(e){return a.a.createElement(m,e)}}),a.a.createElement(l.b,{exact:!0,path:"/sign-up",render:function(e){return a.a.createElement(E,e)}}),a.a.createElement(l.b,{exact:!0,path:"/logout",render:function(e){return a.a.createElement(l.a,{to:"/login"})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,8,10]]]);
//# sourceMappingURL=main.85a03fd5.chunk.js.map