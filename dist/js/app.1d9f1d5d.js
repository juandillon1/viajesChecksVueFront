(function(t){function e(e){for(var r,c,i=e[0],u=e[1],s=e[2],p=0,b=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&b.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(b.length)b.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},a=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1b81":function(t,e,n){"use strict";n("f8ac")},"1d9c":function(t,e,n){},"21fe":function(t,e,n){"use strict";n("cf70")},"2d2a":function(t,e,n){"use strict";n("aab4")},"56d7":function(t,e,n){"use strict";n.r(e);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("7a23"),o={id:"wraper"},a=Object(r["g"])("div",{id:"bg"},null,-1);function c(t,e,n,c,i,u){var s=Object(r["y"])("Nav"),l=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["f"])("div",o,[Object(r["i"])(s),Object(r["i"])(l),a])}var i={align:"center"},u=Object(r["h"])("Home"),s=Object(r["h"])("Bariloche"),l=Object(r["h"])("Estados Unidos"),p=Object(r["h"])("Otros..."),b={align:"center"},f=Object(r["h"])("Volver");function d(t,e,n,o,a,c){var d=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])(r["a"],null,[Object(r["g"])("nav",i,[Object(r["g"])("ul",null,[Object(r["g"])("li",null,[(Object(r["r"])(),Object(r["d"])(d,{to:"/",class:"travelLink",key:t.$route.fullPath},{default:Object(r["G"])((function(){return[u]})),_:1}))]),Object(r["g"])("li",null,[(Object(r["r"])(),Object(r["d"])(d,{to:"/viaje/brc",class:"travelLink",key:t.$route.fullPath},{default:Object(r["G"])((function(){return[s]})),_:1}))]),Object(r["g"])("li",null,[(Object(r["r"])(),Object(r["d"])(d,{to:"/viaje/eeuu",class:"travelLink",key:t.$route.fullPath},{default:Object(r["G"])((function(){return[l]})),_:1}))]),Object(r["g"])("li",null,[(Object(r["r"])(),Object(r["d"])(d,{to:"/viaje/otros",class:"travelLink",key:t.$route.fullPath},{default:Object(r["G"])((function(){return[p]})),_:1}))])])]),Object(r["g"])("div",b,[Object(r["g"])("button",null,[Object(r["i"])(d,{to:"/",class:"travelLink"},{default:Object(r["G"])((function(){return[f]})),_:1})])])],64)}var m={name:"Vue"},j=(n("7f96"),n("6b0d")),O=n.n(j);const g=O()(m,[["render",d],["__scopeId","data-v-4968ced8"]]);var h=g,v=(n("845f"),{components:{Nav:h}});n("21fe");const w=O()(v,[["render",c]]);var x=w,y=n("6c02"),k=function(t){return Object(r["u"])("data-v-202385ca"),t=t(),Object(r["s"])(),t},R={key:0,id:"header"},A=k((function(){return Object(r["g"])("div",{class:"logo"},[Object(r["g"])("span",{class:"icon fa fa-map"})],-1)})),I=k((function(){return Object(r["g"])("div",{class:"content"},[Object(r["g"])("div",{class:"inner"},[Object(r["g"])("h1",null,"Viajes 2022")])],-1)})),V={id:"menuViajes"},E=Object(r["h"])("Bariloche"),S=Object(r["h"])("Estados Unidos"),_=Object(r["h"])("Otros...");function P(t,e,n,o,a,c){var i=Object(r["y"])("router-link"),u=Object(r["y"])("Modal");return a.showTravel?Object(r["e"])("",!0):(Object(r["r"])(),Object(r["f"])("div",R,[A,I,Object(r["g"])("div",V,[Object(r["g"])("ul",null,[Object(r["g"])("li",null,[(Object(r["r"])(),Object(r["d"])(i,{to:"/viaje/brc",class:"travelLink",key:t.$route.fullPath},{default:Object(r["G"])((function(){return[E]})),_:1}))]),Object(r["g"])("li",null,[(Object(r["r"])(),Object(r["d"])(i,{to:"/viaje/eeuu",class:"travelLink",key:t.$route.fullPath},{default:Object(r["G"])((function(){return[S]})),_:1}))]),Object(r["g"])("li",null,[(Object(r["r"])(),Object(r["d"])(i,{to:"/viaje/otros",class:"travelLink",key:t.$route.fullPath},{default:Object(r["G"])((function(){return[_]})),_:1}))])])]),Object(r["i"])(u)]))}var C=n("1da1"),U=(n("96cf"),function(t){return Object(r["u"])("data-v-17d2e8ba"),t=t(),Object(r["s"])(),t}),T={id:"myModal",class:"modal"},D={class:"modal-content"},H=U((function(){return Object(r["g"])("div",{class:"modal-header"},[Object(r["g"])("span",{class:"close"},"×"),Object(r["g"])("h2",null,"Se necesita contraseña ver todos los viajes")],-1)})),L={class:"modal-body"},$={class:"mb-3"},B=U((function(){return Object(r["g"])("label",{for:"exampleInputPassword1",class:"form-label"},"Contraseña",-1)})),M=U((function(){return Object(r["g"])("button",{type:"submit",class:"btn btn-success"},"Comprobar",-1)})),G=U((function(){return Object(r["g"])("div",{class:"modal-footer"},[Object(r["g"])("h3",null,"Sin la contraseña no se pueden ver algunos viajes")],-1)}));function z(t,e,n,o,a,c){return Object(r["r"])(),Object(r["f"])("div",T,[Object(r["g"])("div",D,[H,Object(r["g"])("div",L,[Object(r["g"])("form",{onSubmit:e[1]||(e[1]=Object(r["I"])((function(){return c.comprobarPass&&c.comprobarPass.apply(c,arguments)}),["prevent"]))},[Object(r["g"])("div",$,[B,Object(r["H"])(Object(r["g"])("input",{type:"password",class:"form-control",id:"exampleInputPassword1","onUpdate:modelValue":e[0]||(e[0]=function(t){return a.pass=t}),placeholder:"Ingrese la contraseña"},null,512),[[r["D"],a.pass]])]),M],32)]),G])])}n("ac1f"),n("5319");var N=n("3d20"),J=n.n(N),F={name:"Modal",data:function(){return{pass:"",lastRoute:localStorage.getItem("lastRoute"),mostrarModal:!1}},mounted:function(){this.lastRoute&&(this.mostrarModal=!0);var t=document.getElementById("myModal"),e=document.getElementsByClassName("close")[0];this.mostrarModal?t.style.display="block":t.style.display="none",e.onclick=function(){t.style.display="none"},window.onclick=function(e){e.target==t&&(t.style.display="none")}},methods:{comprobarPass:function(){123321==this.pass?(localStorage.removeItem("lastRoute"),localStorage.setItem("at",!0),setTimeout((function(){localStorage.removeItem("at")}),36e5),this.$router.replace(this.lastRoute)):(localStorage.setItem("at",!1),J.a.fire({title:"Contraseña incorrecta!",text:"Verifique y vuelva a intentarlo",icon:"error",confirmButtonText:"Ok"}))}}};n("2d2a");const q=O()(F,[["render",z],["__scopeId","data-v-17d2e8ba"]]);var K=q,Q=(n("d3b7"),n("99af"),{URL_API:"https://viajesback.herokuapp.com"}),W=function(){var t=Object(C["a"])(regeneratorRuntime.mark((function t(){var e,n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=Q.URL_API,n="".concat(e,"/"),t.next=4,fetch(n);case 4:return r=t.sent,t.next=7,r.json();case 7:return o=t.sent,t.abrupt("return",o);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),X=function(){var t=Object(C["a"])(regeneratorRuntime.mark((function t(e){var n,r,o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=Q.URL_API,r="".concat(n,"/").concat(e),t.next=4,fetch(r);case 4:return o=t.sent,t.next=7,o.json();case 7:return a=t.sent,t.abrupt("return",a);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Y=function(){var t=Object(C["a"])(regeneratorRuntime.mark((function t(e,n){var r,o,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=Q.URL_API,o="".concat(r,"/subtipo/").concat(e,"/").concat(n),t.next=4,fetch(o);case 4:return a=t.sent,t.next=7,a.json();case 7:return c=t.sent,t.abrupt("return",c);case 9:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),Z=function(){var t=Object(C["a"])(regeneratorRuntime.mark((function t(e,n){var r,o,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=Q.URL_API,o="".concat(r,"/").concat(e,"/").concat(n),t.next=4,fetch(o);case 4:return a=t.sent,t.next=7,a.json();case 7:return c=t.sent,t.abrupt("return",c);case 9:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),tt=function(){var t=Object(C["a"])(regeneratorRuntime.mark((function t(e){var n,r,o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=Q.URL_API,r="".concat(n,"/buscar/actualizar/").concat(e),t.next=4,fetch(r);case 4:return o=t.sent,t.next=7,o.json();case 7:return a=t.sent,t.abrupt("return",a);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),et={components:{Modal:K},name:"Home",data:function(){return{showTravel:!1,prevRoute:null}},mounted:function(){return Object(C["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,W();case 2:localStorage.setItem("home",1),1!==+localStorage.getItem("home")||localStorage.getItem("at")||localStorage.setItem("at",!1);case 4:case"end":return t.stop()}}),t)})))()},beforeRouteEnter:function(t,e,n){n((function(e){e.prevRoute=t}))},beforeUnmount:function(){var t=this.$route.fullPath,e=localStorage.getItem("at");"/viaje/eeuu"!==t&&"/viaje/otros"!==t||"/"!==this.prevRoute.fullPath||"false"!==e?localStorage.removeItem("lastRoute"):("/viaje/eeuu"===t?localStorage.setItem("lastRoute","/viaje/eeuu"):"/viaje/otros"===t&&localStorage.setItem("lastRoute","/viaje/otros"),this.$router.go(-1))},created:function(){},methods:{}};n("ebac");const nt=O()(et,[["render",P],["__scopeId","data-v-202385ca"]]);var rt=nt,ot={align:"center"},at={class:"row row-cols-1 row-cols-md-3 container"},ct={class:"m-5"},it=Object(r["h"])("Cargar Imperdibles/Excursiones");function ut(t,e,n,o,a,c){var i=Object(r["y"])("ViajeCard"),u=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("div",ot,[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(a.tipos,(function(t){return Object(r["r"])(),Object(r["f"])("div",{key:t},[Object(r["g"])("h1",null,Object(r["A"])(t),1),Object(r["g"])("div",at,[Object(r["i"])(i,{tipo:t,idViaje:a.id,getViajes:c.getViajes},null,8,["tipo","idViaje","getViajes"])])])})),128)),Object(r["g"])("button",ct,[(Object(r["r"])(),Object(r["d"])(u,{to:"/carga/"+a.id,class:"travelLink",key:t.$route.fullPath},{default:Object(r["G"])((function(){return[it]})),_:1},8,["to"]))])])}var st=function(t){return Object(r["u"])("data-v-e8f91a1e"),t=t(),Object(r["s"])(),t},lt={class:"card h-100"},pt={key:0},bt=["src"],ft={class:"badge bg-success"},dt=["href"],mt=st((function(){return Object(r["g"])("span",{class:"badge bg-primary"},"Link",-1)})),jt=[mt],Ot=["href"],gt=st((function(){return Object(r["g"])("span",{class:"badge bg-info"},"¿Cómo llego?",-1)})),ht=[gt],vt={class:"card-body"},wt={class:"card-title"},xt={class:"card-text"},yt=["onClick"],kt=["onClick"];function Rt(t,e,n,o,a,c){return Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(a.viajesData,(function(t){return Object(r["r"])(),Object(r["f"])("div",{class:"col mb-3",key:t.id},[Object(r["g"])("div",lt,[t.subtipo?(Object(r["r"])(),Object(r["f"])("h5",pt,Object(r["A"])(t.subtipo),1)):Object(r["e"])("",!0),Object(r["g"])("img",{src:t.img||"https://www.emsevilla.es/wp-content/uploads/2020/10/no-image-1.png",class:"card-img-top",alt:"..."},null,8,bt),Object(r["g"])("span",ft,"PRECIO $"+Object(r["A"])(t.precio),1),t.url?(Object(r["r"])(),Object(r["f"])("a",{key:1,href:t.url,target:"_blank"},jt,8,dt)):Object(r["e"])("",!0),t.comollego?(Object(r["r"])(),Object(r["f"])("a",{key:2,href:t.comollego,target:"_blank"},ht,8,Ot)):Object(r["e"])("",!0),Object(r["g"])("div",vt,[Object(r["g"])("h5",wt,Object(r["A"])(t.titulo),1),Object(r["g"])("p",xt,Object(r["A"])(t.descripcion),1),Object(r["g"])("button",{class:"btn btn-danger ml-5",onClick:function(e){return c.handleDelete(t._id)}},"Eliminar",8,yt),Object(r["g"])("button",{class:"btn btn-primary m-1",onClick:function(e){return c.updateRoute(t.idViaje,t._id)}},"Modificar",8,kt)])])])})),128)}n("159b");var At=function(){var t=Object(C["a"])(regeneratorRuntime.mark((function t(e){var n,r,o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=Q.URL_API,r="".concat(n,"/").concat(e),t.next=4,fetch(r,{method:"DELETE"});case 4:return o=t.sent,t.next=7,o.json();case 7:return a=t.sent,t.abrupt("return",a);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),It={name:"ViajeCard",props:["tipo","idViaje","getViajes","subtipoCheck","subtipoData"],data:function(){return{viajesData:[]}},mounted:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Z(t.idViaje,t.tipo);case 2:n=e.sent,r=n.viajes,r.forEach((function(t){t.comollego="https://www.google.com.ar/maps/place/".concat(t.titulo)})),t.viajesData=r;case 6:case"end":return e.stop()}}),e)})))()},methods:{handleDelete:function(t){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,At(t);case 2:r=n.sent,J.a.fire({title:"Item borrado!",text:"Se borró el item ".concat(r.viaje.titulo),icon:"success",confirmButtonText:"Ok"}),e.getViajes();case 5:case"end":return n.stop()}}),n)})))()},updateRoute:function(t,e){this.$router.replace("/actualizar/".concat(t,"/").concat(e))}}};n("ad71");const Vt=O()(It,[["render",Rt],["__scopeId","data-v-e8f91a1e"]]);var Et=Vt,St={components:{ViajeCard:Et},name:"Viaje",data:function(){return{id:this.$route.params.id,viajes:[],tipos:[],prevRoute:null}},mounted:function(){this.getViajes()},beforeRouteUpdate:function(t,e,n){var r=localStorage.getItem("at");"/viaje/eeuu"!==t.path&&"/viaje/otros"!==t.path||"false"!==r?localStorage.removeItem("lastRoute"):"/viaje/eeuu"===t.path?(localStorage.setItem("home",2),localStorage.setItem("lastRoute","/viaje/eeuu"),this.$router.replace("/")):"/viaje/otros"===t.path&&(localStorage.setItem("home",2),localStorage.setItem("lastRoute","/viaje/otros"),this.$router.replace("/")),this.id=t.params.id,this.viajes=[],this.tipos=[],this.getViajes(),n()},methods:{getViajes:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,X(t.id);case 2:n=e.sent,r=n.tipos,t.tipos=r;case 5:case"end":return e.stop()}}),e)})))()}}};const _t=O()(St,[["render",ut]]);var Pt=_t,Ct=function(t){return Object(r["u"])("data-v-70ea2eaa"),t=t(),Object(r["s"])(),t},Ut={class:"container"},Tt={align:"center"},Dt={class:"form-outline mb-4"},Ht=Ct((function(){return Object(r["g"])("label",{class:"form-label",for:"form4Example1"},"Titulo",-1)})),Lt={class:"form-outline mb-4"},$t=Ct((function(){return Object(r["g"])("label",{class:"form-label",for:"form4Example1"},"Tipo",-1)})),Bt=Ct((function(){return Object(r["g"])("option",{selected:""},"Selecciona una opción",-1)})),Mt=["value"],Gt=Ct((function(){return Object(r["g"])("option",{value:"add"},"Agregue una opción...",-1)})),zt=Ct((function(){return Object(r["g"])("button",{type:"submit",class:"btn btn-info btn-block mt-3",style:{"background-color":"'transparent' !important"}},"Cargar",-1)})),Nt={class:"form-outline mb-4"},Jt=Ct((function(){return Object(r["g"])("label",{class:"form-label",for:"form4Example1"},"Sub Tipo",-1)})),Ft=Ct((function(){return Object(r["g"])("option",{selected:""},"Selecciona una opción",-1)})),qt=["value"],Kt=Ct((function(){return Object(r["g"])("option",{value:"add"},"Agregue una opción...",-1)})),Qt=Ct((function(){return Object(r["g"])("button",{type:"submit",class:"btn btn-info btn-block mt-3",style:{"background-color":"'transparent' !important"}},"Cargar",-1)})),Wt={class:"form-outline mb-4"},Xt=Ct((function(){return Object(r["g"])("label",{class:"form-label",for:"form4Example1"},"Precio",-1)})),Yt={class:"form-outline mb-4"},Zt=Ct((function(){return Object(r["g"])("label",{class:"form-label",for:"form4Example1"},"Link",-1)})),te={class:"form-outline mb-4"},ee=Ct((function(){return Object(r["g"])("label",{for:"formFile",class:"form-label"},"Imagen",-1)})),ne={class:"form-outline mb-4"},re=Ct((function(){return Object(r["g"])("label",{class:"form-label",for:"form4Example3"},"Descripción",-1)})),oe=Ct((function(){return Object(r["g"])("button",{type:"submit",class:"btn btn-primary btn-block mb-4"},"Guardar",-1)}));function ae(t,e,n,o,a,c){return Object(r["r"])(),Object(r["f"])("div",Ut,[Object(r["g"])("div",Tt,[Object(r["g"])("h1",null,"Carga Info Viajes "+Object(r["A"])(a.id),1),Object(r["g"])("form",{onSubmit:e[14]||(e[14]=Object(r["I"])((function(){return c.cargarData&&c.cargarData.apply(c,arguments)}),["prevent"]))},[Object(r["g"])("div",Dt,[Ht,Object(r["H"])(Object(r["g"])("input",{type:"text",id:"form4Example1","onUpdate:modelValue":e[0]||(e[0]=function(t){return a.titulo=t}),class:"form-control",autocomplete:"off"},null,512),[[r["D"],a.titulo]])]),Object(r["g"])("div",Lt,[$t,Object(r["H"])(Object(r["g"])("select",{class:"form-select","aria-label":"seleccionar","onUpdate:modelValue":e[1]||(e[1]=function(t){return a.tipo=t}),onClick:e[2]||(e[2]=Object(r["I"])((function(t){return c.changeArea(t,"tipo")}),["prevent"]))},[Bt,(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(a.tipos,(function(t){return Object(r["r"])(),Object(r["f"])("option",{value:t,key:t},Object(r["A"])(t),9,Mt)})),128)),Gt],512),[[r["C"],a.tipo]]),Object(r["H"])(Object(r["g"])("form",{onSubmit:e[4]||(e[4]=Object(r["I"])((function(){return c.addOption&&c.addOption.apply(c,arguments)}),["prevent"]))},[Object(r["H"])(Object(r["g"])("input",{type:"text",id:"form4Example1","onUpdate:modelValue":e[3]||(e[3]=function(t){return a.newOption=t}),class:"form-control mt-3",placeholder:"Ingresá acá el nuevo tipo...",autocomplete:"off"},null,512),[[r["D"],a.newOption]]),zt],544),[[r["E"],a.showAddOption]])]),Object(r["g"])("div",Nt,[Jt,Object(r["H"])(Object(r["g"])("select",{class:"form-select","aria-label":"seleccionar","onUpdate:modelValue":e[5]||(e[5]=function(t){return a.subtipo=t}),onClick:e[6]||(e[6]=Object(r["I"])((function(t){return c.changeArea(t,"subtipo")}),["prevent"]))},[Ft,(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(a.subtipos,(function(t){return Object(r["r"])(),Object(r["f"])("option",{value:t,key:t},Object(r["A"])(t),9,qt)})),128)),Kt],512),[[r["C"],a.subtipo]]),Object(r["H"])(Object(r["g"])("form",{onSubmit:e[8]||(e[8]=Object(r["I"])((function(){return c.addOption2&&c.addOption2.apply(c,arguments)}),["prevent"]))},[Object(r["H"])(Object(r["g"])("input",{type:"text",id:"form4Example1","onUpdate:modelValue":e[7]||(e[7]=function(t){return a.newOption=t}),class:"form-control mt-3",placeholder:"Ingresá acá el nuevo sub tipo...",autocomplete:"off"},null,512),[[r["D"],a.newOption]]),Qt],544),[[r["E"],a.showAddOption2]])]),Object(r["g"])("div",Wt,[Xt,Object(r["H"])(Object(r["g"])("input",{type:"number",id:"form4Example1","onUpdate:modelValue":e[9]||(e[9]=function(t){return a.precio=t}),class:"form-control"},null,512),[[r["D"],a.precio]])]),Object(r["g"])("div",Yt,[Zt,Object(r["H"])(Object(r["g"])("input",{type:"text",id:"form4Example1","onUpdate:modelValue":e[10]||(e[10]=function(t){return a.url=t}),class:"form-control",autocomplete:"off"},null,512),[[r["D"],a.url]])]),Object(r["g"])("div",te,[ee,Object(r["H"])(Object(r["g"])("input",{type:"text",id:"form4Example1","onUpdate:modelValue":e[11]||(e[11]=function(t){return a.img=t}),class:"form-control",autocomplete:"off"},null,512),[[r["D"],a.img]])]),Object(r["g"])("div",ne,[re,Object(r["H"])(Object(r["g"])("textarea",{class:"form-control",id:"form4Example3",rows:"4","onUpdate:modelValue":e[12]||(e[12]=function(t){return a.descripcion=t}),onClick:e[13]||(e[13]=function(){return c.changeArea&&c.changeArea.apply(c,arguments)}),autocomplete:"off"},null,512),[[r["D"],a.descripcion]])]),oe],32)])])}var ce=n("2909"),ie=(n("6062"),n("3ca3"),n("ddb0"),n("e9c4"),function(){var t=Object(C["a"])(regeneratorRuntime.mark((function t(e){var n,r,o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=Q.URL_API,r="".concat(n,"/"),t.next=4,fetch(r,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)});case 4:return o=t.sent,t.next=7,o.json();case 7:return a=t.sent,t.abrupt("return",a);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),ue={name:"Carga",data:function(){return{id:this.$route.params.id,titulo:"",descripcion:"",tipo:"",subtipo:"",precio:0,url:"",img:"",tipos:[],subtipos:[],newOption:"",showAddOption:!1,showAddOption2:!1}},mounted:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=[],e.next=3,t.types();case 3:t.tipos.forEach((function(t){n.push(t)})),n.forEach((function(e){t.subTypes(e)})),0===t.tipos.length&&t.subTypes("empty");case 6:case"end":return e.stop()}}),e)})))()},methods:{types:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,X(t.id);case 2:n=e.sent,r=n.tipos,t.tipos=r;case 5:case"end":return e.stop()}}),e)})))()},subTypes:function(t){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Y(e.id,t);case 2:r=n.sent,o=r.subtipos,"empty"===t?e.subtipos.push([]):o.forEach((function(t){e.subtipos.push(t)})),e.subtipos=Object(ce["a"])(new Set(e.subtipos)),console.log(e.subtipos);case 7:case"end":return n.stop()}}),n)})))()},cargarData:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.tipo){e.next=3;break}return J.a.fire({title:"Revisa bien!",text:"El tipo es obligatorio",icon:"error",confirmButtonText:"Ok"}),e.abrupt("return");case 3:if(t.descripcion){e.next=6;break}return J.a.fire({title:"Revisa bien!",text:"La descripción es obligatoria",icon:"error",confirmButtonText:"Ok"}),e.abrupt("return");case 6:if(t.titulo){e.next=9;break}return J.a.fire({title:"Revisa bien!",text:"El titulo es obligatorio",icon:"error",confirmButtonText:"Ok"}),e.abrupt("return");case 9:return n={idViaje:t.id,titulo:t.titulo,descripcion:t.descripcion,tipo:t.tipo,subtipo:t.subtipo,precio:t.precio,url:t.url,img:t.img},e.next=12,ie(n);case 12:r=e.sent,J.a.fire({title:"Item cargado!",text:"Se cargó el item ".concat(r.viaje.titulo),icon:"success",confirmButtonText:"Ok"}),t.$router.replace("/viaje/".concat(r.viaje.idViaje));case 15:case"end":return e.stop()}}),e)})))()},changeArea:function(t,e){var n=t.target;n.setAttribute("style","background-color: transparent"),"add"===n.value?"tipo"===e?(this.showAddOption=!0,this.showAddOption2=!1):(this.showAddOption2=!0,this.showAddOption=!1):(this.showAddOption=!1,this.showAddOption2=!1)},addOption:function(){this.tipos.push(this.newOption),this.tipo=this.newOption,this.newOption="",this.showAddOption=!1},addOption2:function(){this.subtipos.push(this.newOption),this.subtipo=this.newOption,this.newOption="",this.showAddOption=!1}}};n("7b46");const se=O()(ue,[["render",ae],["__scopeId","data-v-70ea2eaa"]]);var le=se,pe=function(t){return Object(r["u"])("data-v-b88bd28e"),t=t(),Object(r["s"])(),t},be={class:"container"},fe={align:"center"},de={class:"form-outline mb-4"},me=pe((function(){return Object(r["g"])("label",{class:"form-label",for:"form4Example1"},"Titulo",-1)})),je={class:"form-outline mb-4"},Oe=pe((function(){return Object(r["g"])("label",{class:"form-label",for:"form4Example1"},"Tipo",-1)})),ge=pe((function(){return Object(r["g"])("option",{selected:""},"Selecciona una opción",-1)})),he=["value"],ve=pe((function(){return Object(r["g"])("option",{value:"add"},"Agregue una opción...",-1)})),we=pe((function(){return Object(r["g"])("button",{type:"submit",class:"btn btn-info btn-block mt-3",style:{"background-color":"'transparent' !important"}},"Cargar",-1)})),xe={class:"form-outline mb-4"},ye=pe((function(){return Object(r["g"])("label",{class:"form-label",for:"form4Example1"},"Sub Tipo",-1)})),ke=pe((function(){return Object(r["g"])("option",{selected:""},"Selecciona una opción",-1)})),Re=["value"],Ae=pe((function(){return Object(r["g"])("option",{value:"add"},"Agregue una opción...",-1)})),Ie=pe((function(){return Object(r["g"])("button",{type:"submit",class:"btn btn-info btn-block mt-3",style:{"background-color":"'transparent' !important"}},"Cargar",-1)})),Ve={class:"form-outline mb-4"},Ee=pe((function(){return Object(r["g"])("label",{class:"form-label",for:"form4Example1"},"Precio",-1)})),Se={class:"form-outline mb-4"},_e=pe((function(){return Object(r["g"])("label",{class:"form-label",for:"form4Example1"},"Link",-1)})),Pe={class:"form-outline mb-4"},Ce=pe((function(){return Object(r["g"])("label",{for:"formFile",class:"form-label"},"Imagen",-1)})),Ue={class:"form-outline mb-4"},Te=pe((function(){return Object(r["g"])("label",{class:"form-label",for:"form4Example3"},"Descripción",-1)})),De=pe((function(){return Object(r["g"])("button",{type:"submit",class:"btn btn-primary btn-block mb-4"},"Guardar",-1)}));function He(t,e,n,o,a,c){return Object(r["r"])(),Object(r["f"])("div",be,[Object(r["g"])("div",fe,[Object(r["g"])("h1",null,"Info Viaje "+Object(r["A"])(a.idViaje)+" | "+Object(r["A"])(a.titulo),1),Object(r["g"])("form",{onSubmit:e[14]||(e[14]=Object(r["I"])((function(){return c.updateData&&c.updateData.apply(c,arguments)}),["prevent"]))},[Object(r["g"])("div",de,[me,Object(r["H"])(Object(r["g"])("input",{type:"text",id:"form4Example1","onUpdate:modelValue":e[0]||(e[0]=function(t){return a.titulo=t}),class:"form-control",autocomplete:"off"},null,512),[[r["D"],a.titulo]])]),Object(r["g"])("div",je,[Oe,Object(r["H"])(Object(r["g"])("select",{class:"form-select","aria-label":"seleccionar","onUpdate:modelValue":e[1]||(e[1]=function(t){return a.tipo=t}),onClick:e[2]||(e[2]=function(t){return c.changeArea(t,"tipo")})},[ge,(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(a.tipos,(function(t){return Object(r["r"])(),Object(r["f"])("option",{value:t,key:t},Object(r["A"])(t),9,he)})),128)),ve],512),[[r["C"],a.tipo]]),Object(r["H"])(Object(r["g"])("form",{onSubmit:e[4]||(e[4]=Object(r["I"])((function(){return c.addOption&&c.addOption.apply(c,arguments)}),["prevent"]))},[Object(r["H"])(Object(r["g"])("input",{type:"text",id:"form4Example1","onUpdate:modelValue":e[3]||(e[3]=function(t){return a.newOption=t}),class:"form-control mt-3",placeholder:"Ingresá acá el nuevo tipo...",autocomplete:"off"},null,512),[[r["D"],a.newOption]]),we],544),[[r["E"],a.showAddOption]])]),Object(r["g"])("div",xe,[ye,Object(r["H"])(Object(r["g"])("select",{class:"form-select","aria-label":"seleccionar","onUpdate:modelValue":e[5]||(e[5]=function(t){return a.subtipo=t}),onClick:e[6]||(e[6]=Object(r["I"])((function(t){return c.changeArea(t,"subtipo")}),["prevent"]))},[ke,(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(a.subtipos,(function(t){return Object(r["r"])(),Object(r["f"])("option",{value:t,key:t},Object(r["A"])(t),9,Re)})),128)),Ae],512),[[r["C"],a.subtipo]]),Object(r["H"])(Object(r["g"])("form",{onSubmit:e[8]||(e[8]=Object(r["I"])((function(){return c.addOption2&&c.addOption2.apply(c,arguments)}),["prevent"]))},[Object(r["H"])(Object(r["g"])("input",{type:"text",id:"form4Example1","onUpdate:modelValue":e[7]||(e[7]=function(t){return a.newOption=t}),class:"form-control mt-3",placeholder:"Ingresá acá el nuevo sub tipo...",autocomplete:"off"},null,512),[[r["D"],a.newOption]]),Ie],544),[[r["E"],a.showAddOption2]])]),Object(r["g"])("div",Ve,[Ee,Object(r["H"])(Object(r["g"])("input",{type:"number",id:"form4Example1","onUpdate:modelValue":e[9]||(e[9]=function(t){return a.precio=t}),class:"form-control"},null,512),[[r["D"],a.precio]])]),Object(r["g"])("div",Se,[_e,Object(r["H"])(Object(r["g"])("input",{type:"text",id:"form4Example1","onUpdate:modelValue":e[10]||(e[10]=function(t){return a.url=t}),class:"form-control",autocomplete:"off"},null,512),[[r["D"],a.url]])]),Object(r["g"])("div",Pe,[Ce,Object(r["H"])(Object(r["g"])("input",{type:"text",id:"form4Example1","onUpdate:modelValue":e[11]||(e[11]=function(t){return a.img=t}),class:"form-control",autocomplete:"off"},null,512),[[r["D"],a.img]])]),Object(r["g"])("div",Ue,[Te,Object(r["H"])(Object(r["g"])("textarea",{class:"form-control",id:"form4Example3",rows:"4","onUpdate:modelValue":e[12]||(e[12]=function(t){return a.descripcion=t}),onClick:e[13]||(e[13]=function(){return c.changeArea&&c.changeArea.apply(c,arguments)}),autocomplete:"off"},null,512),[[r["D"],a.descripcion]])]),De],32)])])}var Le=function(){var t=Object(C["a"])(regeneratorRuntime.mark((function t(e,n){var r,o,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=Q.URL_API,o="".concat(r,"/").concat(n),t.next=4,fetch(o,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)});case 4:return a=t.sent,t.next=7,a.json();case 7:return c=t.sent,t.abrupt("return",c);case 9:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),$e={name:"Actualizar",data:function(){return{id:this.$route.params.id,idViaje:this.$route.params.idViaje,titulo:"",descripcion:"",tipo:"",precio:0,url:"",img:"",viaje:{},subtipo:"",subtipos:[],newOption:"",showAddOption:!1,showAddOption2:!1,tipos:[]}},mounted:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,tt(t.id);case 2:return n=e.sent,r=n.viaje,o=[],t.viaje=r[0],e.next=8,t.types();case 8:t.setValues(),t.tipos.forEach((function(t){o.push(t)})),o.forEach((function(e){t.subTypes(e)})),0===t.tipos.length&&t.subTypes("empty");case 12:case"end":return e.stop()}}),e)})))()},methods:{types:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,X(t.idViaje);case 2:n=e.sent,r=n.tipos,t.tipos=r;case 5:case"end":return e.stop()}}),e)})))()},subTypes:function(t){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Y(e.idViaje,t);case 2:r=n.sent,o=r.subtipos,"empty"===t?e.subtipos.push([]):o.forEach((function(t){e.subtipos.push(t)})),e.subtipos=Object(ce["a"])(new Set(e.subtipos));case 6:case"end":return n.stop()}}),n)})))()},setValues:function(){this.titulo=this.viaje.titulo,this.descripcion=this.viaje.descripcion,this.tipo=this.viaje.tipo,this.subtipo=this.viaje.subtipo,this.precio=this.viaje.precio,this.url=this.viaje.url,this.img=this.viaje.img},updateData:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.tipo){e.next=3;break}return J.a.fire({title:"Revisa bien!",text:"El tipo es obligatorio",icon:"error",confirmButtonText:"Ok"}),e.abrupt("return");case 3:if(t.descripcion){e.next=6;break}return J.a.fire({title:"Revisa bien!",text:"La descripción es obligatoria",icon:"error",confirmButtonText:"Ok"}),e.abrupt("return");case 6:if(t.titulo){e.next=9;break}return J.a.fire({title:"Revisa bien!",text:"El titulo es obligatorio",icon:"error",confirmButtonText:"Ok"}),e.abrupt("return");case 9:return n={titulo:t.titulo,descripcion:t.descripcion,tipo:t.tipo,subtipo:t.subtipo,precio:t.precio,url:t.url,img:t.img},e.next=12,Le(n,t.id);case 12:r=e.sent,J.a.fire({title:"Item actualizado!",text:"Se actualizó el item ".concat(r.viaje.titulo),icon:"success",confirmButtonText:"Ok"}),t.$router.replace("/viaje/".concat(r.viaje.idViaje));case 15:case"end":return e.stop()}}),e)})))()},changeArea:function(t,e){var n=t.target;n.setAttribute("style","background-color: transparent"),"add"===n.value?"tipo"===e?(this.showAddOption=!0,this.showAddOption2=!1):(this.showAddOption2=!0,this.showAddOption=!1):(this.showAddOption=!1,this.showAddOption2=!1)},addOption:function(){this.tipos.push(this.newOption),this.tipo=this.newOption,this.newOption="",this.showAddOption=!1},addOption2:function(){this.subtipos.push(this.newOption),this.subtipo=this.newOption,this.newOption="",this.showAddOption=!1}}};n("1b81");const Be=O()($e,[["render",He],["__scopeId","data-v-b88bd28e"]]);var Me=Be,Ge=[{path:"/",name:"Home",component:rt},{path:"/viaje/:id",name:"Viaje",component:Pt},{path:"/carga/:id",name:"Carga",component:le},{path:"/actualizar/:idViaje/:id",name:"Actualizar",component:Me}],ze=Object(y["a"])({history:Object(y["b"])(),routes:Ge}),Ne=ze;Object(r["c"])(x).use(Ne).mount("#app")},"7b46":function(t,e,n){"use strict";n("dd4f")},"7f96":function(t,e,n){"use strict";n("a894")},"845f":function(t,e,n){},"9a51":function(t,e,n){},a894:function(t,e,n){},aab4:function(t,e,n){},ad71:function(t,e,n){"use strict";n("9a51")},cf70:function(t,e,n){},dd4f:function(t,e,n){},ebac:function(t,e,n){"use strict";n("1d9c")},f8ac:function(t,e,n){}});
//# sourceMappingURL=app.1d9f1d5d.js.map