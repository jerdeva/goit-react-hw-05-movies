"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[396],{9026:function(n,e,r){r.d(e,{Df:function(){return o},Ex:function(){return p},W0:function(){return s},on:function(){return f},tx:function(){return l},zv:function(){return d}});var t=r(5861),a=r(7757),c=r.n(a),u=r(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i={params:{api_key:"043e5f0af957ed407534eefdb77ba7dd",language:"en-US"}},o=function(){var n=(0,t.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day",i);case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,t.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/week",i);case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(e),i);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?query=".concat(e),i);case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/credits?"),i);case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/reviews?"),i);case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},1333:function(n,e,r){r.r(e),r.d(e,{default:function(){return S}});var t,a,c,u,i,o,s,p=r(5861),f=r(9439),d=r(7757),l=r.n(d),x=r(2791),h=r(7689),v=r(9026),m=r.p+"static/media/placeholder.08ba4a3915c0ff049252.jpg",g=r(168),Z=r(6444),b=Z.ZP.h1(t||(t=(0,g.Z)(["\n  color: darkblue;\n  margin-left: 36px;\n"]))),w=Z.ZP.ul(a||(a=(0,g.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: 0;\n  gap: 8px 28px;\n"]))),k=Z.ZP.li(c||(c=(0,g.Z)(["\n  width: 200px;\n"]))),j=Z.ZP.img(u||(u=(0,g.Z)(["\n  border: black 1px solid;\n"]))),y=Z.ZP.p(i||(i=(0,g.Z)(["\n  font-size: 20px;\n  color: #680747;\n"]))),P=Z.ZP.div(o||(o=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 32px;\n"]))),_=Z.ZP.button(s||(s=(0,g.Z)(["\n  background-color: #7fb5e1;\n  color: #064e8a;\n  border: none;\n  font-weight: 900;\n  border-radius: 4px;\n  box-shadow: 0px 0px 2px 2px #7fb5e1;\n  margin-right: 12px;\n  margin-bottom: 4px;\n  padding: 12px 24px;\n\n"]))),C=r(184),S=function(){var n=(0,h.UO)().movieId,e=(0,x.useState)([]),r=(0,f.Z)(e,2),t=r[0],a=r[1],c=(0,x.useState)(1),u=(0,f.Z)(c,2),i=u[0],o=u[1];(0,x.useEffect)((function(){var e=function(){var e=(0,p.Z)(l().mark((function e(){var r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,v.zv)(n);case 3:r=e.sent,a(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]);var s=10*i,d=s-10,g=t.slice(d,s),Z=Math.ceil(t.length/10);return(0,C.jsxs)(C.Fragment,{children:[0!==t.length&&(0,C.jsxs)("div",{children:[(0,C.jsx)(b,{children:"Movie Cast"}),(0,C.jsx)(w,{children:g.map((function(n){return(0,C.jsxs)(k,{children:[(0,C.jsx)(j,{width:"200px",height:"300px",src:n.profile_path?"https://image.tmdb.org/t/p/w300".concat(n.profile_path):"".concat(m),alt:n.original_name}),(0,C.jsx)(y,{children:n.name})]},n.id)}))}),(0,C.jsxs)(P,{children:[(0,C.jsx)(_,{onClick:function(){i>1&&o((function(n){return n-1}))},disabled:1===i,children:"Previous"}),(0,C.jsxs)("span",{children:["Page ",i," of ",Z]}),(0,C.jsx)(_,{onClick:function(){i<Z&&o((function(n){return n+1}))},disabled:i===Z,children:"Next"})]})]}),0===t.length&&(0,C.jsx)("div",{children:"Sorry! We don't have cast for this movie."})]})}}}]);
//# sourceMappingURL=396.e5506deb.chunk.js.map