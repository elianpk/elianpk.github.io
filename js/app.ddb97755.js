(function(e){function t(t){for(var i,o,s=t[0],u=t[1],c=t[2],l=0,m=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);d&&d(t);while(m.length)m.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(i=!1)}i&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},a={app:0},r=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("85ec"),a=n.n(i);a.a},"0bed":function(e,t,n){"use strict";var i=n("e6db"),a=n.n(i);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],o=(n("f9e3"),n("2dd8"),n("5df9"),{name:"App"}),s=o,u=(n("034f"),n("2877")),c=Object(u["a"])(s,a,r,!1,null,null,null),d=c.exports,l=n("5f5b"),m=n("b1e0"),f=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("AddAnime"),n("h1",[e._v("Animes")]),n("div",{staticClass:"animes"},e._l(e.allAnimes,(function(t){return n("div",{key:t.id,staticClass:"anime",class:{assistido:t.assistido},attrs:{id:t.id}},[n("router-link",{attrs:{tag:"h3",to:{name:"AnimeDetail",params:{id:t.id}}}},[e._v(" "+e._s(t.title)+" ")]),0==t.assistido?n("b-iconstack",{attrs:{"font-scale":"1",variant:"white"},on:{click:function(n){return e.viuAnime(t)}}},[n("b-icon",{attrs:{stacked:"",icon:"square"}}),n("b-icon",{attrs:{stacked:"",icon:"check"}})],1):e._e(),1==t.assistido?n("b-icon",{attrs:{variant:"white",icon:"trash","font-scale":"1"},on:{click:function(n){return e.deleteAnime(t.id)}}}):e._e()],1)})),0)],1)},v=[],b=n("5530"),h=n("2f62"),A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-form",{attrs:{inline:""}},[n("label",{staticClass:"sr-only",attrs:{for:"inline-form-input-name"}},[e._v("Anime")]),n("b-input",{attrs:{cols:"8",id:"inline-form-input-name",placeholder:"Anime"},model:{value:e.anime_add.title,callback:function(t){e.$set(e.anime_add,"title",t)},expression:"anime_add.title"}}),n("b-button",{attrs:{cols:"4"},on:{click:function(t){return e.onSubmit()}}},[e._v("Save")])],1)],1)},_=[],y={name:"AddAnime",data:function(){return{anime_add:{title:""}}},methods:Object(b["a"])(Object(b["a"])({},Object(h["b"])(["addAnime"])),{},{onSubmit:function(){this.addAnime(this.anime_add)}})},g=y,O=Object(u["a"])(g,A,_,!1,null,null,null),j=O.exports,w={name:"AnimeLista",components:{AddAnime:j},methods:Object(b["a"])(Object(b["a"])({},Object(h["b"])(["getAnimes","deleteAnime","updateAnime"])),{},{viuAnime:function(e){e.assistido=!0,this.updateAnime(e)}}),computed:Object(h["c"])(["allAnimes"]),created:function(){this.getAnimes()}},k=w,x=(n("f084"),Object(u["a"])(k,p,v,!1,null,"740f2350",null)),S=x.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Detalhes do Anime")]),n("router-link",{attrs:{tag:"a",to:{name:"AnimeList"}}},[e._v(" Voltar para lista ")]),n("div",{staticClass:"anime"},[n("h3",[e._v("Nome : "+e._s(e.animeById(e.id).title)+" ")]),e.animeById(e.id).assistido?n("h3",[e._v("Assistido : Sim ")]):n("h3",[e._v("assistido : Não ")]),n("h3",[e._v("Descrição: "+e._s(e.animeById(e.id).descricao))])]),n("router-view")],1)},$=[],I={name:"AnimeDetail",data:function(){return{id:this.$route.params.id}},computed:Object(h["c"])(["animeById"])},B=I,D=(n("0bed"),Object(u["a"])(B,P,$,!1,null,"322058f5",null)),C=D.exports;i["default"].use(f["a"]);var E=new f["a"]({mode:"history",routes:[{path:"/",name:"index",component:S},{path:"/animes",name:"AnimeList",component:S},{path:"/anime/:id",name:"AnimeDetail",component:C}]}),M=(n("4de4"),n("c740"),n("a434"),n("bc3a")),L=n.n(M),T={animes:[]},J={allAnimes:function(e){return e.animes},animeById:function(e){return function(t){return e.animes.filter((function(e){return e.id==t}))[0]}}},N={getAnimes:function(e){var t=e.commit;L.a.get("https://my-json-server.typicode.com/elianpk/fakeapi/animes/").then((function(e){t("getAnimes",e.data)}))},deleteAnime:function(e,t){var n=e.commit;n("removeAnime",t)},addAnime:function(e,t){var n=e.commit,i=T.animes.length+1,a={id:i,title:t.title,img:t.img,assistido:!1};n("newAnime",a)},updateAnime:function(e,t){var n=e.commit;n("updateAnime",t)}},q={getAnimes:function(e,t){return e.animes=t},removeAnime:function(e,t){return e.animes=e.animes.filter((function(e){return e.id!==t}))},newAnime:function(e,t){return e.animes.unshift(t)},updateAnime:function(e,t){var n=e.animes.findIndex((function(e){return e.id===t.id}));-1!==n&&e.animes.splice(n,1,t)}},V={state:T,getters:J,actions:N,mutations:q};i["default"].use(h["a"]);var z=new h["a"].Store({modules:{animes:V}});i["default"].use(l["a"]),i["default"].use(m["a"]),i["default"].config.productionTip=!1,new i["default"]({store:z,router:E,render:function(e){return e(d)}}).$mount("#app")},"85ec":function(e,t,n){},e6db:function(e,t,n){},f084:function(e,t,n){"use strict";var i=n("f721"),a=n.n(i);a.a},f721:function(e,t,n){}});
//# sourceMappingURL=app.ddb97755.js.map