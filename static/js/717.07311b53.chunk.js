"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[717],{9026:function(n,r,e){e.d(r,{Df:function(){return i},Ex:function(){return u},on:function(){return p},tx:function(){return l},zv:function(){return d}});var t=e(5861),a=e(7757),c=e.n(a),o=e(1243);o.Z.defaults.baseURL="https://api.themoviedb.org/3";var s={params:{api_key:"043e5f0af957ed407534eefdb77ba7dd",language:"en-US"}},i=function(){var n=(0,t.Z)(c().mark((function n(){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day",s);case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(c().mark((function n(r){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(r),s);case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(c().mark((function n(r){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/search/movie?query=".concat(r),s);case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(c().mark((function n(r){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(r,"/credits?"),s);case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(c().mark((function n(r){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(r,"/reviews?"),s);case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()},6717:function(n,r,e){e.r(r),e.d(r,{default:function(){return z}});var t,a,c,o,s,i,u,p,d,l,h=e(5861),f=e(9439),x=e(7757),v=e.n(x),m=e(2791),b=e(7689),Z=e(1087),g=e(9026),j=e(168),w=e(6444),k=w.ZP.button(t||(t=(0,j.Z)(["\n  background-color: #0a0a23;\n  color: #cca8e9;\n  border: none;\n  font-weight: 800;\n  border-radius: 10px;\n  box-shadow: 0px 0px 2px 2px rgb(0, 0, 0);\n  margin-right: 12px;\n  margin-bottom: 4px;\n  padding: 12px;\n  &:hover,\n  &:focus {\n    color: palevioletred;\n  }\n  &:active {\n    color: red;\n  }\n"]))),y=e(184),P=function(n){var r=n.text;return(0,y.jsx)(k,{type:"button",children:r})},_=e(5119),U=function(){_.C},C=w.ZP.h1(a||(a=(0,j.Z)(["\n  color: #53a8b6;\n"]))),R=w.ZP.h4(c||(c=(0,j.Z)(["\n  color: #f76b8a;\n"]))),E=w.ZP.h2(o||(o=(0,j.Z)(["\n  color: #53a8b6;\n"]))),S=w.ZP.p(s||(s=(0,j.Z)(["\n  color: black;\n"]))),G=w.ZP.h2(i||(i=(0,j.Z)(["\n  color: #53a8b6;\n"]))),H=w.ZP.h3(u||(u=(0,j.Z)(["\n  color: #53a8b6;\n"]))),O=w.ZP.h3(p||(p=(0,j.Z)(["\n  color: #53a8b6;\n"]))),T=w.ZP.div(d||(d=(0,j.Z)(["\n  display: flex;\n"]))),q=w.ZP.div(l||(l=(0,j.Z)(["\n  margin: 24px;\n"]))),z=function(){var n,r,e=(0,b.UO)().movieId,t=(0,m.useState)(null),a=(0,f.Z)(t,2),c=a[0],o=a[1],s=(0,b.TH)(),i=(0,m.useRef)((null===(n=s.state)||void 0===n?void 0:n.from)||"/");if((0,m.useEffect)((function(){var n=function(){var n=(0,h.Z)(v().mark((function n(){var r;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,g.Ex)(e);case 3:r=n.sent,o(r),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),!c)return(0,y.jsx)(U,{});var u=null===(r=c.production_companies)||void 0===r?void 0:r.map((function(n){var r=n.id,e=n.logo_path,t=n.name;return e&&(0,y.jsx)("li",{children:e&&(0,y.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e),alt:t,style:{maxHeight:50,maxWidth:200,marginRight:30,marginTop:10}})},r)})),p=Math.round(10*c.vote_average);return(0,y.jsxs)("div",{children:[(0,y.jsx)(Z.rU,{to:i.current,children:(0,y.jsx)(P,{text:"Go back"})}),(0,y.jsxs)(T,{backdrop:c.backdrop_path,children:[(0,y.jsx)(q,{children:(0,y.jsx)("img",{src:c.poster_path?"https://image.tmdb.org/t/p/w500".concat(c.poster_path):"opps",alt:c.title,width:300})}),(0,y.jsxs)("div",{children:[(0,y.jsx)(C,{children:c.title}),(0,y.jsxs)(R,{children:["User score: ",p,"%"]}),(0,y.jsx)(E,{children:"Overview"}),(0,y.jsx)(S,{children:c.overview}),(0,y.jsx)(G,{children:"Genres"}),(0,y.jsx)("p",{children:c.genres.map((function(n){return(0,y.jsxs)("span",{children:[" ",n.name]},n.id)}))}),null!==u[0]&&u.length>0&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(H,{children:"Production companies"}),(0,y.jsx)("div",{children:u})]})]})]}),(0,y.jsx)("hr",{}),(0,y.jsx)(O,{children:"Additional information"}),(0,y.jsx)(Z.rU,{to:"cast",children:(0,y.jsx)(P,{text:"Cast"})}),(0,y.jsx)(Z.rU,{to:"reviews",children:(0,y.jsx)(P,{text:"Reviews"})}),(0,y.jsx)(m.Suspense,{fallback:(0,y.jsx)(U,{}),children:(0,y.jsx)(b.j3,{})})]})}}}]);
//# sourceMappingURL=717.07311b53.chunk.js.map