(function(e){function t(t){for(var r,c,i=t[0],u=t[1],l=t[2],f=0,b=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&b.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(b.length)b.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var s=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2926:function(e,t,n){},"2d2a":function(e,t,n){"use strict";n("aab4")},3600:function(e,t,n){"use strict";n("8a42")},"56d7":function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("7a23"),o={id:"wraper"},a=Object(r["g"])("div",{id:"bg"},null,-1);function c(e,t,n,c,i,u){var l=Object(r["y"])("Nav"),s=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["f"])("div",o,[Object(r["i"])(l),Object(r["i"])(s),a])}var i={align:"center"},u=Object(r["h"])("Home"),l=Object(r["h"])("Bariloche"),s=Object(r["h"])("Estados Unidos"),f=Object(r["h"])("Otros..."),b={align:"center"},p=Object(r["h"])("Volver");function d(e,t,n,o,a,c){var d=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])(r["a"],null,[Object(r["g"])("nav",i,[Object(r["g"])("ul",null,[Object(r["g"])("li",null,[(Object(r["r"])(),Object(r["d"])(d,{to:"/",class:"travelLink",key:e.$route.fullPath},{default:Object(r["F"])((function(){return[u]})),_:1}))]),Object(r["g"])("li",null,[(Object(r["r"])(),Object(r["d"])(d,{to:"/viaje/brc",class:"travelLink",key:e.$route.fullPath},{default:Object(r["F"])((function(){return[l]})),_:1}))]),Object(r["g"])("li",null,[(Object(r["r"])(),Object(r["d"])(d,{to:"/viaje/eeuu",class:"travelLink",key:e.$route.fullPath},{default:Object(r["F"])((function(){return[s]})),_:1}))]),Object(r["g"])("li",null,[(Object(r["r"])(),Object(r["d"])(d,{to:"/viaje/otros",class:"travelLink",key:e.$route.fullPath},{default:Object(r["F"])((function(){return[f]})),_:1}))])])]),Object(r["g"])("div",b,[Object(r["g"])("button",null,[Object(r["i"])(d,{to:"/",class:"travelLink"},{default:Object(r["F"])((function(){return[p]})),_:1})])])],64)}var j={name:"Vue"},m=(n("7f96"),n("6b0d")),O=n.n(m);const g=O()(j,[["render",d],["__scopeId","data-v-4968ced8"]]);var v=g,h=(n("845f"),{components:{Nav:v}});n("a191");const x=O()(h,[["render",c]]);var y=x,k=n("6c02"),w=function(e){return Object(r["u"])("data-v-6be321ae"),e=e(),Object(r["s"])(),e},E={key:0,id:"header"},R=w((function(){return Object(r["g"])("div",{class:"logo"},[Object(r["g"])("span",{class:"icon fa fa-map"})],-1)})),I=w((function(){return Object(r["g"])("div",{class:"content"},[Object(r["g"])("div",{class:"inner"},[Object(r["g"])("h1",null,"Viajes 2022")])],-1)})),_={id:"menuViajes"},S=Object(r["h"])("Bariloche"),V=Object(r["h"])("Estados Unidos"),P=Object(r["h"])("Otros...");function A(e,t,n,o,a,c){var i=Object(r["y"])("router-link"),u=Object(r["y"])("Modal");return a.showTravel?Object(r["e"])("",!0):(Object(r["r"])(),Object(r["f"])("div",E,[R,I,Object(r["g"])("div",_,[Object(r["g"])("ul",null,[Object(r["g"])("li",null,[(Object(r["r"])(),Object(r["d"])(i,{to:"/viaje/brc",class:"travelLink",key:e.$route.fullPath},{default:Object(r["F"])((function(){return[S]})),_:1}))]),Object(r["g"])("li",null,[(Object(r["r"])(),Object(r["d"])(i,{to:"/viaje/eeuu",class:"travelLink",key:e.$route.fullPath},{default:Object(r["F"])((function(){return[V]})),_:1}))]),Object(r["g"])("li",null,[(Object(r["r"])(),Object(r["d"])(i,{to:"/viaje/otros",class:"travelLink",key:e.$route.fullPath},{default:Object(r["F"])((function(){return[P]})),_:1}))])])]),Object(r["i"])(u)]))}var L=function(e){return Object(r["u"])("data-v-17d2e8ba"),e=e(),Object(r["s"])(),e},T={id:"myModal",class:"modal"},C={class:"modal-content"},U=L((function(){return Object(r["g"])("div",{class:"modal-header"},[Object(r["g"])("span",{class:"close"},"×"),Object(r["g"])("h2",null,"Se necesita contraseña ver todos los viajes")],-1)})),D={class:"modal-body"},$={class:"mb-3"},F=L((function(){return Object(r["g"])("label",{for:"exampleInputPassword1",class:"form-label"},"Contraseña",-1)})),G=L((function(){return Object(r["g"])("button",{type:"submit",class:"btn btn-success"},"Comprobar",-1)})),B=L((function(){return Object(r["g"])("div",{class:"modal-footer"},[Object(r["g"])("h3",null,"Sin la contraseña no se pueden ver algunos viajes")],-1)}));function M(e,t,n,o,a,c){return Object(r["r"])(),Object(r["f"])("div",T,[Object(r["g"])("div",C,[U,Object(r["g"])("div",D,[Object(r["g"])("form",{onSubmit:t[1]||(t[1]=Object(r["H"])((function(){return c.comprobarPass&&c.comprobarPass.apply(c,arguments)}),["prevent"]))},[Object(r["g"])("div",$,[F,Object(r["G"])(Object(r["g"])("input",{type:"password",class:"form-control",id:"exampleInputPassword1","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.pass=e}),placeholder:"Ingrese la contraseña"},null,512),[[r["D"],a.pass]])]),G],32)]),B])])}n("ac1f"),n("5319");var N=n("3d20"),J=n.n(N),z={name:"Modal",data:function(){return{pass:"",lastRoute:localStorage.getItem("lastRoute"),mostrarModal:!1}},mounted:function(){this.lastRoute&&(this.mostrarModal=!0);var e=document.getElementById("myModal"),t=document.getElementsByClassName("close")[0];this.mostrarModal?e.style.display="block":e.style.display="none",t.onclick=function(){e.style.display="none"},window.onclick=function(t){t.target==e&&(e.style.display="none")}},methods:{comprobarPass:function(){123321==this.pass?(localStorage.removeItem("lastRoute"),localStorage.setItem("at",!0),setTimeout((function(){localStorage.removeItem("at")}),36e5),this.$router.replace(this.lastRoute)):(localStorage.setItem("at",!1),J.a.fire({title:"Contraseña incorrecta!",text:"Verifique y vuelva a intentarlo",icon:"error",confirmButtonText:"Ok"}))}}};n("2d2a");const H=O()(z,[["render",M],["__scopeId","data-v-17d2e8ba"]]);var q=H,K={components:{Modal:q},name:"Home",data:function(){return{showTravel:!1,prevRoute:null}},mounted:function(){},beforeRouteEnter:function(e,t,n){n((function(t){t.prevRoute=e}))},beforeUnmount:function(){var e=this.$route.fullPath;"/viaje/eeuu"!==e&&"/viaje/otros"!==e||"/"!==this.prevRoute.fullPath||localStorage.getItem("at")||(localStorage.setItem("lastRoute","/viaje/eeuu"),this.$router.go(-1))},created:function(){},methods:{}};n("c153");const Q=O()(K,[["render",A],["__scopeId","data-v-6be321ae"]]);var W=Q,X=function(e){return Object(r["u"])("data-v-eb89e86c"),e=e(),Object(r["s"])(),e},Y={align:"center"},Z={class:"row row-cols-1 row-cols-md-3 g-4 container"},ee={class:"card h-100"},te=["src"],ne={class:"badge bg-success"},re=["href"],oe=X((function(){return Object(r["g"])("span",{class:"badge bg-primary"},"Link",-1)})),ae=[oe],ce=["href"],ie=X((function(){return Object(r["g"])("span",{class:"badge bg-info"},"¿Cómo llego?",-1)})),ue=[ie],le={class:"card-body"},se={class:"card-title"},fe={class:"card-text"},be=["onClick"],pe=["onClick"],de={class:"m-5"},je=Object(r["h"])("Cargar Imperdibles/Excursiones");function me(e,t,n,o,a,c){var i=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("div",Y,[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(a.viajesLocal,(function(e){return Object(r["r"])(),Object(r["f"])("div",{key:e.tipo},[Object(r["g"])("h1",null,Object(r["A"])(e.tipo),1),Object(r["g"])("div",Z,[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(e.viaje,(function(e){return Object(r["r"])(),Object(r["f"])("div",{class:"col",key:e.id},[Object(r["g"])("div",ee,[Object(r["g"])("img",{src:e.img||"https://www.emsevilla.es/wp-content/uploads/2020/10/no-image-1.png",class:"card-img-top",alt:"..."},null,8,te),Object(r["g"])("span",ne,"PRECIO $"+Object(r["A"])(e.precio),1),e.url?(Object(r["r"])(),Object(r["f"])("a",{key:0,href:e.url,target:"_blank"},ae,8,re)):Object(r["e"])("",!0),e.comollego?(Object(r["r"])(),Object(r["f"])("a",{key:1,href:e.comollego,target:"_blank"},ue,8,ce)):Object(r["e"])("",!0),Object(r["g"])("div",le,[Object(r["g"])("h5",se,Object(r["A"])(e.titulo),1),Object(r["g"])("p",fe,Object(r["A"])(e.descripcion),1),Object(r["g"])("button",{class:"btn btn-danger ml-5",onClick:function(t){return c.handleDelete(e._id)}},"Eliminar",8,be),Object(r["g"])("button",{class:"btn btn-primary m-1",onClick:function(t){return c.updateRoute(e.idViaje,e._id)}},"Modificar",8,pe)])])])})),128))])])})),128)),Object(r["g"])("button",de,[(Object(r["r"])(),Object(r["d"])(i,{to:"/carga/"+a.id,class:"travelLink",key:e.$route.fullPath},{default:Object(r["F"])((function(){return[je]})),_:1},8,["to"]))])])}var Oe=n("1da1"),ge=n("2909"),ve=(n("96cf"),n("d3b7"),n("159b"),n("6062"),n("3ca3"),n("ddb0"),n("4de4"),n("e9c4"),n("99af"),{URL_API:"https://viajesback.herokuapp.com/"}),he=function(){var e=Object(Oe["a"])(regeneratorRuntime.mark((function e(){var t,n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=ve.URL_API,n="".concat(t,"/"),e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:return o=e.sent,e.abrupt("return",o);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),xe=function(){var e=Object(Oe["a"])(regeneratorRuntime.mark((function e(t){var n,r,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=ve.URL_API,r="".concat(n,"/").concat(t),e.next=4,fetch(r,{method:"DELETE"});case 4:return o=e.sent,e.next=7,o.json();case 7:return a=e.sent,e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ye={name:"Viaje",data:function(){return{id:this.$route.params.id,viajes:[],viajesFiltrados:[],viajesSinFiltro:[],tipos:[],viajesLocal:"",titulo:""}},mounted:function(){this.getViajes()},beforeRouteUpdate:function(e,t,n){this.id=e.params.id,this.viajesSinFiltro=[],this.tipos=[],this.viajesLocal="",this.tipofiltered(),n()},methods:{tipofiltered:function(){var e=this;this.viajesSinFiltro=this.viajesfiltered(),this.viajesSinFiltro.forEach((function(t){e.tipos.push(t.tipo)})),this.tipos=Object(ge["a"])(new Set(this.tipos));var t=[];this.tipos.forEach((function(n){t.push({tipo:n,viaje:e.viajes.filter((function(e){return e.tipo===n}))})})),localStorage.setItem("viajes",JSON.stringify(t)),this.viajesLocal=JSON.parse(localStorage.getItem("viajes")),this.viajesLocal.forEach((function(t,n){t.viaje.forEach((function(r){r.comollego="https://www.google.com.ar/maps/place/".concat(r.titulo),e.viajesLocal[n].viaje.viaje=[].concat(Object(ge["a"])(e.viajesLocal[n].viaje),[t.comollego])}))}))},viajesfiltered:function(){var e=this;return this.viajes.filter((function(t){return t.idViaje===e.id}))},getViajes:function(){var e=this;return Object(Oe["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,he();case 2:n=t.sent,r=n.viajes,e.viajes=r,e.tipofiltered();case 6:case"end":return t.stop()}}),t)})))()},handleDelete:function(e){var t=this;return Object(Oe["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,xe(e);case 2:r=n.sent,J.a.fire({title:"Item borrado!",text:"Se borró el item ".concat(r.viaje.titulo),icon:"success",confirmButtonText:"Ok"}),t.getViajes();case 5:case"end":return n.stop()}}),n)})))()},updateRoute:function(e,t){this.$router.replace("/actualizar/".concat(e,"/").concat(t))}}};n("8347");const ke=O()(ye,[["render",me],["__scopeId","data-v-eb89e86c"]]);var we=ke,Ee=function(e){return Object(r["u"])("data-v-1512ff41"),e=e(),Object(r["s"])(),e},Re={class:"container"},Ie={align:"center"},_e={class:"form-outline mb-4"},Se=Ee((function(){return Object(r["g"])("label",{class:"form-label",for:"form4Example1"},"Titulo",-1)})),Ve={class:"form-outline mb-4"},Pe=Ee((function(){return Object(r["g"])("label",{class:"form-label",for:"form4Example1"},"Tipo",-1)})),Ae=Ee((function(){return Object(r["g"])("option",{selected:""},"Selecciona una opción",-1)})),Le=Ee((function(){return Object(r["g"])("option",{value:"excursión"},"Excursión",-1)})),Te=Ee((function(){return Object(r["g"])("option",{value:"Imperdible"},"Imperdible",-1)})),Ce=[Ae,Le,Te],Ue={class:"form-outline mb-4"},De=Ee((function(){return Object(r["g"])("label",{class:"form-label",for:"form4Example1"},"Precio",-1)})),$e={class:"form-outline mb-4"},Fe=Ee((function(){return Object(r["g"])("label",{class:"form-label",for:"form4Example1"},"Link",-1)})),Ge={class:"form-outline mb-4"},Be=Ee((function(){return Object(r["g"])("label",{for:"formFile",class:"form-label"},"Imagen",-1)})),Me={class:"form-outline mb-4"},Ne=Ee((function(){return Object(r["g"])("label",{class:"form-label",for:"form4Example3"},"Descripción",-1)})),Je=Ee((function(){return Object(r["g"])("button",{type:"submit",class:"btn btn-primary btn-block mb-4"},"Guardar",-1)}));function ze(e,t,n,o,a,c){return Object(r["r"])(),Object(r["f"])("div",Re,[Object(r["g"])("div",Ie,[Object(r["g"])("h1",null,"Carga Info Viajes "+Object(r["A"])(a.id),1),Object(r["g"])("form",{onSubmit:t[8]||(t[8]=Object(r["H"])((function(){return c.cargarData&&c.cargarData.apply(c,arguments)}),["prevent"]))},[Object(r["g"])("div",_e,[Se,Object(r["G"])(Object(r["g"])("input",{type:"text",id:"form4Example1","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.titulo=e}),class:"form-control",autocomplete:"off"},null,512),[[r["D"],a.titulo]])]),Object(r["g"])("div",Ve,[Pe,Object(r["G"])(Object(r["g"])("select",{class:"form-select","aria-label":"seleccionar","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.tipo=e}),onClick:t[2]||(t[2]=function(){return c.changeArea&&c.changeArea.apply(c,arguments)})},Ce,512),[[r["C"],a.tipo]])]),Object(r["g"])("div",Ue,[De,Object(r["G"])(Object(r["g"])("input",{type:"number",id:"form4Example1","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.precio=e}),class:"form-control"},null,512),[[r["D"],a.precio]])]),Object(r["g"])("div",$e,[Fe,Object(r["G"])(Object(r["g"])("input",{type:"text",id:"form4Example1","onUpdate:modelValue":t[4]||(t[4]=function(e){return a.url=e}),class:"form-control",autocomplete:"off"},null,512),[[r["D"],a.url]])]),Object(r["g"])("div",Ge,[Be,Object(r["G"])(Object(r["g"])("input",{type:"text",id:"form4Example1","onUpdate:modelValue":t[5]||(t[5]=function(e){return a.img=e}),class:"form-control",autocomplete:"off"},null,512),[[r["D"],a.img]])]),Object(r["g"])("div",Me,[Ne,Object(r["G"])(Object(r["g"])("textarea",{class:"form-control",id:"form4Example3",rows:"4","onUpdate:modelValue":t[6]||(t[6]=function(e){return a.descripcion=e}),onClick:t[7]||(t[7]=function(){return c.changeArea&&c.changeArea.apply(c,arguments)}),autocomplete:"off"},null,512),[[r["D"],a.descripcion]])]),Je],32)])])}var He=function(){var e=Object(Oe["a"])(regeneratorRuntime.mark((function e(t){var n,r,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=ve.URL_API,r="".concat(n,"/"),e.next=4,fetch(r,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 4:return o=e.sent,e.next=7,o.json();case 7:return a=e.sent,e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),qe={name:"Carga",data:function(){return{id:this.$route.params.id,titulo:"",descripcion:"",tipo:"",precio:0,url:"",img:""}},mounted:function(){},methods:{cargarData:function(){var e=this;return Object(Oe["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.tipo){t.next=3;break}return J.a.fire({title:"Revisa bien!",text:"El tipo es obligatorio",icon:"error",confirmButtonText:"Ok"}),t.abrupt("return");case 3:if(e.descripcion){t.next=6;break}return J.a.fire({title:"Revisa bien!",text:"La descripción es obligatoria",icon:"error",confirmButtonText:"Ok"}),t.abrupt("return");case 6:if(e.titulo){t.next=9;break}return J.a.fire({title:"Revisa bien!",text:"El titulo es obligatorio",icon:"error",confirmButtonText:"Ok"}),t.abrupt("return");case 9:return n={idViaje:e.id,titulo:e.titulo,descripcion:e.descripcion,tipo:e.tipo,precio:e.precio,url:e.url,img:e.img},t.next=12,He(n);case 12:r=t.sent,J.a.fire({title:"Item cargado!",text:"Se cargó el item ".concat(r.viaje.titulo),icon:"success",confirmButtonText:"Ok"}),e.$router.replace("/viaje/".concat(r.viaje.idViaje));case 15:case"end":return t.stop()}}),t)})))()},changeArea:function(e){var t=e.target;t.setAttribute("style","background-color: transparent")}}};n("3600");const Ke=O()(qe,[["render",ze],["__scopeId","data-v-1512ff41"]]);var Qe=Ke,We=function(e){return Object(r["u"])("data-v-41cc497f"),e=e(),Object(r["s"])(),e},Xe={class:"container"},Ye={align:"center"},Ze={class:"form-outline mb-4"},et=We((function(){return Object(r["g"])("label",{class:"form-label",for:"form4Example1"},"Titulo",-1)})),tt={class:"form-outline mb-4"},nt=We((function(){return Object(r["g"])("label",{class:"form-label",for:"form4Example1"},"Tipo",-1)})),rt=We((function(){return Object(r["g"])("option",{selected:""},"Selecciona una opción",-1)})),ot=We((function(){return Object(r["g"])("option",{value:"excursión"},"Excursión",-1)})),at=We((function(){return Object(r["g"])("option",{value:"Imperdible"},"Imperdible",-1)})),ct=[rt,ot,at],it={class:"form-outline mb-4"},ut=We((function(){return Object(r["g"])("label",{class:"form-label",for:"form4Example1"},"Precio",-1)})),lt={class:"form-outline mb-4"},st=We((function(){return Object(r["g"])("label",{class:"form-label",for:"form4Example1"},"Link",-1)})),ft={class:"form-outline mb-4"},bt=We((function(){return Object(r["g"])("label",{for:"formFile",class:"form-label"},"Imagen",-1)})),pt={class:"form-outline mb-4"},dt=We((function(){return Object(r["g"])("label",{class:"form-label",for:"form4Example3"},"Descripción",-1)})),jt=We((function(){return Object(r["g"])("button",{type:"submit",class:"btn btn-primary btn-block mb-4"},"Guardar",-1)}));function mt(e,t,n,o,a,c){return Object(r["r"])(),Object(r["f"])("div",Xe,[Object(r["g"])("div",Ye,[Object(r["g"])("h1",null,"Carga Info Viajes "+Object(r["A"])(a.idViaje),1),Object(r["g"])("form",{onSubmit:t[8]||(t[8]=Object(r["H"])((function(){return c.updateData&&c.updateData.apply(c,arguments)}),["prevent"]))},[Object(r["g"])("div",Ze,[et,Object(r["G"])(Object(r["g"])("input",{type:"text",id:"form4Example1","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.titulo=e}),class:"form-control",autocomplete:"off"},null,512),[[r["D"],a.titulo]])]),Object(r["g"])("div",tt,[nt,Object(r["G"])(Object(r["g"])("select",{class:"form-select","aria-label":"seleccionar","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.tipo=e}),onClick:t[2]||(t[2]=function(){return c.changeArea&&c.changeArea.apply(c,arguments)})},ct,512),[[r["C"],a.tipo]])]),Object(r["g"])("div",it,[ut,Object(r["G"])(Object(r["g"])("input",{type:"number",id:"form4Example1","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.precio=e}),class:"form-control"},null,512),[[r["D"],a.precio]])]),Object(r["g"])("div",lt,[st,Object(r["G"])(Object(r["g"])("input",{type:"text",id:"form4Example1","onUpdate:modelValue":t[4]||(t[4]=function(e){return a.url=e}),class:"form-control",autocomplete:"off"},null,512),[[r["D"],a.url]])]),Object(r["g"])("div",ft,[bt,Object(r["G"])(Object(r["g"])("input",{type:"text",id:"form4Example1","onUpdate:modelValue":t[5]||(t[5]=function(e){return a.img=e}),class:"form-control",autocomplete:"off"},null,512),[[r["D"],a.img]])]),Object(r["g"])("div",pt,[dt,Object(r["G"])(Object(r["g"])("textarea",{class:"form-control",id:"form4Example3",rows:"4","onUpdate:modelValue":t[6]||(t[6]=function(e){return a.descripcion=e}),onClick:t[7]||(t[7]=function(){return c.changeArea&&c.changeArea.apply(c,arguments)}),autocomplete:"off"},null,512),[[r["D"],a.descripcion]])]),jt],32)])])}n("7db0");var Ot=function(){var e=Object(Oe["a"])(regeneratorRuntime.mark((function e(t,n){var r,o,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=ve.URL_API,o="".concat(r,"/").concat(n),e.next=4,fetch(o,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 4:return a=e.sent,e.next=7,a.json();case 7:return c=e.sent,e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),gt={name:"Actualizar",data:function(){return{id:this.$route.params.id,idViaje:this.$route.params.idViaje,titulo:"",descripcion:"",tipo:"",precio:0,url:"",img:"",viaje:{}}},mounted:function(){var e=this,t=JSON.parse(localStorage.getItem("viajes")),n=[],r=[];t.forEach((function(e){n.push(e.viaje)})),n.forEach((function(e){r.push(e[0])})),this.viaje=r.find((function(t){return t._id===e.id})),this.setValues()},methods:{setValues:function(){this.titulo=this.viaje.titulo,this.descripcion=this.viaje.descripcion,this.tipo=this.viaje.tipo,this.precio=this.viaje.precio,this.url=this.viaje.url,this.img=this.viaje.img},updateData:function(){var e=this;return Object(Oe["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.tipo){t.next=3;break}return J.a.fire({title:"Revisa bien!",text:"El tipo es obligatorio",icon:"error",confirmButtonText:"Ok"}),t.abrupt("return");case 3:if(e.descripcion){t.next=6;break}return J.a.fire({title:"Revisa bien!",text:"La descripción es obligatoria",icon:"error",confirmButtonText:"Ok"}),t.abrupt("return");case 6:if(e.titulo){t.next=9;break}return J.a.fire({title:"Revisa bien!",text:"El titulo es obligatorio",icon:"error",confirmButtonText:"Ok"}),t.abrupt("return");case 9:return n={titulo:e.titulo,descripcion:e.descripcion,tipo:e.tipo,precio:e.precio,url:e.url,img:e.img},t.next=12,Ot(n,e.id);case 12:r=t.sent,J.a.fire({title:"Item actualizado!",text:"Se actualizó el item ".concat(r.viaje.titulo),icon:"success",confirmButtonText:"Ok"}),e.$router.replace("/viaje/".concat(r.viaje.idViaje));case 15:case"end":return t.stop()}}),t)})))()},changeArea:function(e){var t=e.target;t.setAttribute("style","background-color: transparent")}}};n("df8c");const vt=O()(gt,[["render",mt],["__scopeId","data-v-41cc497f"]]);var ht=vt,xt=[{path:"/",name:"Home",component:W},{path:"/viaje/:id",name:"Viaje",component:we},{path:"/carga/:id",name:"Carga",component:Qe},{path:"/actualizar/:idViaje/:id",name:"Actualizar",component:ht}],yt=Object(k["a"])({history:Object(k["b"])(),routes:xt}),kt=yt;Object(r["c"])(y).use(kt).mount("#app")},"7f96":function(e,t,n){"use strict";n("a894")},8347:function(e,t,n){"use strict";n("2926")},"845f":function(e,t,n){},"8a42":function(e,t,n){},a191:function(e,t,n){"use strict";n("d484")},a894:function(e,t,n){},aab4:function(e,t,n){},be54:function(e,t,n){},c153:function(e,t,n){"use strict";n("be54")},d484:function(e,t,n){},df8c:function(e,t,n){"use strict";n("e4c1")},e4c1:function(e,t,n){}});
//# sourceMappingURL=app.e1f3ca09.js.map