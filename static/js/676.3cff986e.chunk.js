"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[676],{9026:function(e,n,t){t.d(n,{Df:function(){return u},Ex:function(){return l},W0:function(){return s},on:function(){return p},tx:function(){return d},zv:function(){return f}});var r=t(5861),a=t(7757),o=t.n(a),i=t(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var c={params:{api_key:"043e5f0af957ed407534eefdb77ba7dd",language:"en-US"}},u=function(){var e=(0,r.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("trending/movie/day",c);case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("trending/movie/week",c);case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(n),c);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/search/movie?query=".concat(n),c);case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(n,"/credits?"),c);case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(n,"/reviews?"),c);case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},2049:function(e,n,t){t.d(n,{e:function(){return g}});var r,a,o,i,c,u=t(7689),s=t(1087),l=t(168),p=t(6444),f=p.ZP.li(r||(r=(0,l.Z)(["\n  position: relative;\n  font-size: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n  min-width: 200px; /* \u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0448\u0438\u0440\u0438\u043d\u0430 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 (\u043f\u043e\u0441\u0442\u0435\u0440\u0430) */\n  scroll-snap-align: start;\n  padding: 12px;\n  margin-bottom: 24px;\n\n  background-color: rgba(250, 250, 200, 0.2);\n"]))),d=p.ZP.div(a||(a=(0,l.Z)(["\nmax-width: 1200px;\n"]))),h=p.ZP.ul(o||(o=(0,l.Z)(["\n  display: flex;\n  overflow-x: auto;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  scroll-snap-type: x mandatory; /* \u0427\u0442\u043e\u0431\u044b \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c \u043f\u0440\u0438 \u043f\u0440\u043e\u043a\u0440\u0443\u0442\u043a\u0435 */\n  gap: 10px; /* \u0420\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043c\u0435\u0436\u0434\u0443 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c\u0438 */\n  &::-webkit-scrollbar {\n    height: 8px;\n  }\n\n  &::-webkit-scrollbar-track {\n    background: #f1f1f1; /* \u0426\u0432\u0435\u0442 \u0444\u043e\u043d\u0430 \u0441\u043a\u0440\u043e\u043b\u043b\u0431\u0430\u0440\u0430 */\n    border-radius: 20px;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background: #888; /* \u0426\u0432\u0435\u0442 \u043f\u043e\u043b\u0437\u0443\u043d\u043a\u0430 */\n    border-radius: 10px;\n  }\n\n  &::-webkit-scrollbar-thumb:hover {\n    background: #555; /* \u0426\u0432\u0435\u0442 \u043f\u043e\u043b\u0437\u0443\u043d\u043a\u0430 \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438 */\n  }\n\n  /* \u0414\u043b\u044f Firefox */\n  scrollbar-width: thin; /* \u0422\u043e\u043b\u0449\u0438\u043d\u0430 \u0441\u043a\u0440\u043e\u043b\u043b\u0431\u0430\u0440\u0430 */\n  scrollbar-color: #8888 #f1f1f1; /* \u0426\u0432\u0435\u0442 \u043f\u043e\u043b\u0437\u0443\u043d\u043a\u0430 \u0438 \u0444\u043e\u043d\u0430 */\n"]))),v=p.ZP.p(i||(i=(0,l.Z)(["\n  color: #064e8a;\n  font-size: 16px;\n  font-weight: 700;\n"]))),b=p.ZP.p(c||(c=(0,l.Z)(["\n  position: absolute;\n  top: 2px;\n  left: 5px;\n  border-radius: 360px;\n  border: 1px solid #e66465;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: rgba(230, 100, 101, 1);\n  font-weight: 700;\n  padding: 12px;\n  font-size: 12px;\n  z-index: 1;\n"]))),m=t(184),g=function(e){var n=e.films,t=(0,u.TH)();return(0,m.jsx)(d,{children:(0,m.jsx)(h,{children:n.map((function(e){return(0,m.jsx)(f,{children:(0,m.jsxs)(s.rU,{to:"/movies/".concat(e.id),state:{from:t},cover:e.poster_path,children:[(0,m.jsx)("img",{src:e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):"opps",alt:e.title,width:200})," ",(0,m.jsx)(v,{children:e.title}),(0,m.jsxs)(b,{children:[Math.round(10*e.vote_average),"%"]})]})},e.id)}))})})}},5676:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var r,a,o=t(5861),i=t(9439),c=t(7757),u=t.n(c),s=t(2791),l=t(7231),p=(t(5862),t(2049)),f=t(9026),d=t(168),h=t(6444),v=h.ZP.h2(r||(r=(0,d.Z)(["\n  font-size: 32px;\n  color: #064e8a;\n  margin: 32px 0;\n  "]))),b=h.ZP.div(a||(a=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),m=t(184),g=function(){var e=(0,s.useState)([]),n=(0,i.Z)(e,2),t=n[0],r=n[1],a=(0,s.useState)([]),c=(0,i.Z)(a,2),d=c[0],h=c[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,o.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.Df)();case 3:n=e.sent,r(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,s.useEffect)((function(){var e=function(){var e=(0,o.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.W0)();case 3:n=e.sent,h(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(b,{children:[(0,m.jsx)(v,{children:"Trending Movies Today:"}),(0,m.jsx)(l.y,{baseColor:"#dddddd",highlightColor:"#a5a5a5",children:0===t.length?(0,m.jsx)(l.Z,{count:15,style:{height:30,width:300,marginTop:15}}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(p.e,{films:t}),(0,m.jsx)(v,{children:"Trending Movies Of The Week:"}),(0,m.jsx)(p.e,{films:d})]})})]})})}},5862:function(){},7231:function(e,n,t){t.d(n,{y:function(){return d},Z:function(){return f}});var r=t(9439);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=t(2791),s=["count","wrapper","className","containerClassName","containerTestId","circle","style"],l=["children"],p=u.createContext({});function f(e){for(var n,t,a,o=e.count,l=void 0===o?1:o,f=e.wrapper,d=e.className,h=e.containerClassName,v=e.containerTestId,b=e.circle,m=void 0!==b&&b,g=e.style,x=c(e,s),y=u.useContext(p),w=i({},x),k=0,j=Object.entries(x);k<j.length;k++){var Z=(0,r.Z)(j[k],2),O=Z[0];"undefined"===typeof Z[1]&&delete w[O]}var P=i(i(i({},y),w),{},{circle:m}),E=i(i({},g),function(e){var n=e.baseColor,t=e.highlightColor,r=e.width,a=e.height,o=e.borderRadius,i=e.circle,c=e.direction,u=e.duration,s=e.enableAnimation,l=void 0===s||s,p={};return"rtl"===c&&(p["--animation-direction"]="reverse"),"number"===typeof u&&(p["--animation-duration"]="".concat(u,"s")),l||(p["--pseudo-element-display"]="none"),"string"!==typeof r&&"number"!==typeof r||(p.width=r),"string"!==typeof a&&"number"!==typeof a||(p.height=a),"string"!==typeof o&&"number"!==typeof o||(p.borderRadius=o),i&&(p.borderRadius="50%"),"undefined"!==typeof n&&(p["--base-color"]=n),"undefined"!==typeof t&&(p["--highlight-color"]=t),p}(P)),C="react-loading-skeleton";d&&(C+=" ".concat(d));for(var _=null!==(n=P.inline)&&void 0!==n&&n,T=[],S=Math.ceil(l),z=0;z<S;z++){var D=E;if(S>l&&z===S-1){var N=null!==(t=D.width)&&void 0!==t?t:"100%",F=l%1,M="number"===typeof N?N*F:"calc(".concat(N," * ").concat(F,")");D=i(i({},D),{},{width:M})}var R=u.createElement("span",{className:C,style:D,key:z},"\u200c");_?T.push(R):T.push(u.createElement(u.Fragment,{key:z},R,u.createElement("br",null)))}return u.createElement("span",{className:h,"data-testid":v,"aria-live":"polite","aria-busy":null===(a=P.enableAnimation)||void 0===a||a},f?T.map((function(e,n){return u.createElement(f,{key:n},e)})):T)}function d(e){var n=e.children,t=c(e,l);return u.createElement(p.Provider,{value:t},n)}}}]);
//# sourceMappingURL=676.3cff986e.chunk.js.map