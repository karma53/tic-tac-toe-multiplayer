(function(e){function t(t){for(var r,o,s=t[0],c=t[1],u=t[2],m=0,p=[];m<s.length;m++)o=s[m],i[o]&&p.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={app:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),i=n.n(r);i.a},"0aac":function(e,t,n){},1:function(e,t){},"1d4a":function(e,t,n){"use strict";var r=n("88a0"),i=n.n(r);i.a},"44e4":function(e,t,n){"use strict";var r=n("81dc"),i=n.n(r);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.nameScene,expression:"nameScene"}],staticClass:"form"},[n("h1",[e._v("Nhập tên của bạn")]),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{id:"fname",type:"text"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),n("span",[e._v("Name")])]),n("input",{attrs:{type:"submit",value:"Enter"},on:{click:e.joinRoom}})]),n("board",{directives:[{name:"show",rawName:"v-show",value:!e.nameScene,expression:"!nameScene"}],attrs:{socket:e.socket}})],1)},a=[],o=n("4bea"),s=n.n(o),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Room Name: "+e._s(e.roomID))]),n("div",{staticClass:"playersList"},[e._l(e.players,function(t){return n("player",{key:t.id,attrs:{player:t,currentTurn:e.currentTurn,socket:e.socket}})}),n("player",{directives:[{name:"show",rawName:"v-show",value:!e.isStart,expression:"!isStart"}],attrs:{player:{username:"addbot",img:"http://www.no42architects.com.au/wp-content/uploads/2018/05/plus-math.png",id:"addBot"},currentTurn:e.currentTurn},nativeOn:{click:function(t){return e.addBot(t)}}})],2),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isStart,expression:"isStart"}],attrs:{id:"board"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:""!=e.winnerImg,expression:"winnerImg!=''"}],staticClass:"overlay"},[n("img",{attrs:{src:e.winnerImg}}),n("p",{staticClass:"myButton",on:{click:e.playAgain}},[e._v("CLICK HERE TO PLAY AGAIN")])]),e._l(e.cells,function(t){return n("cell",{key:t.id,attrs:{img:t.img,canClick:t.canClick,size:e.size},on:{change:function(n){return e.move(t.id)}}})})],2),n("p",{directives:[{name:"show",rawName:"v-show",value:!e.isStart,expression:"!isStart"}],staticClass:"myButton",on:{click:e.startGame}},[e._v("Start")])])},u=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cell",style:{width:e.sizeCalc,height:e.sizeCalc},on:{click:e.check}},[n("img",{style:{width:e.imgSize,height:e.imgSize,opacity:e.imgOpacity},attrs:{src:e.img}})])},m=[],p={name:"Cell",props:["img","canClick","size"],data:function(){return{imgSize:"80%",imgOpacity:1}},created:function(){var e=this;this.$bus.on("playerHover",function(t){t==e.img?(e.imgSize="90%",e.imgOpacity=1):(e.imgSize="70%",e.imgOpacity=.5)}),this.$bus.on("playerHoverLeave",function(){e.imgOpacity=1,e.imgSize="80%"})},methods:{check:function(){this.canClick&&this.$emit("change")}},computed:{sizeCalc:function(){return 100/this.size+"%"}}},f=p,d=(n("44e4"),n("2877")),v=Object(d["a"])(f,l,m,!1,null,"fbb689ee",null),h=v.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",on:{mouseover:e.mouseOver,mouseleave:e.mouseLeave,click:e.mouseClick}},[n("img",{style:{"border-color":e.getcolor},attrs:{src:e.player.img}}),n("p",[e._v(e._s(e.player.username))])])},g=[],b={name:"Player",props:["player","currentTurn","socket"],computed:{getcolor:function(){return this.player.id==this.currentTurn?"#2A8048":"black"}},methods:{mouseClick:function(){this.player.isBot&&this.socket.emit("removeBot",this.player.id)},mouseOver:function(){this.$bus.emit("playerHover",this.player.img)},mouseLeave:function(){this.$bus.emit("playerHoverLeave")}}},w=b,k=(n("72ac"),Object(d["a"])(w,y,g,!1,null,"635f2304",null)),S=k.exports,O={name:"board",props:["socket"],data:function(){return{roomID:"",players:[],cells:[],currentTurn:"",isStart:!1,winnerImg:null,size:null}},created:function(){var e=this;this.socket.on("update",function(t){e.roomID=t.roomID,e.cells=t.cells,e.currentTurn=t.currentTurn,e.winnerImg=t.winner.img,e.players=t.players,e.isStart=t.isStart,e.size=t.size})},methods:{move:function(e){this.socket.emit("move",e)},startGame:function(){this.isStart=!0,this.socket.emit("startGame")},playAgain:function(){this.socket.emit("playAgain")},addBot:function(){this.socket.emit("addBot")}},components:{cell:h,player:S}},_=O,C=(n("1d4a"),Object(d["a"])(_,c,u,!1,null,"1e15040e",null)),x=C.exports,j={name:"app",data:function(){return{nameScene:!0,username:null,socket:{}}},created:function(){this.socket=s()()},components:{board:x},methods:{joinRoom:function(){this.socket.emit("join",{username:this.username||"anonymous",img:"https://api.adorable.io/avatars/"+this.username}),this.nameScene=!1}}},z=j,$=(n("034f"),Object(d["a"])(z,i,a,!1,null,null,null)),T=$.exports,I=n("d225"),N=n("b0b4"),P=function(){function e(){Object(I["a"])(this,e),this.bus=new r["a"]}return Object(N["a"])(e,[{key:"on",value:function(e,t){this.bus.$on(e,t)}},{key:"once",value:function(e,t){this.bus.$once(e,t)}},{key:"off",value:function(e,t){this.bus.$off(e,t)}},{key:"emit",value:function(e){for(var t,n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];(t=this.bus).$emit.apply(t,[e].concat(r))}}]),e}(),A={install:function(e){var t=new P;e.prototype.$bus=t}};r["a"].use(A),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(T)}}).$mount("#app")},"64a9":function(e,t,n){},"72ac":function(e,t,n){"use strict";var r=n("0aac"),i=n.n(r);i.a},"81dc":function(e,t,n){},"88a0":function(e,t,n){}});