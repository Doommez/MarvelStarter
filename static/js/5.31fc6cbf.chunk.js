(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[5],{23:function(t,e,n){"use strict";var r=n.p+"static/media/error.42292aa1.gif",c=n(0);e.a=function(){return Object(c.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:r,alt:"error"})}},26:function(t,e,n){"use strict";var r=n(24),c=n.n(r),a=n(25),s=n(4),i=n(1);e.a=function(){var t=function(){var t=Object(i.useState)(!1),e=Object(s.a)(t,2),n=e[0],r=e[1],o=Object(i.useState)(null),u=Object(s.a)(o,2),l=u[0],b=u[1];return{loading:n,request:Object(i.useCallback)(function(){var t=Object(a.a)(c.a.mark((function t(e){var n,a,s,i,o,u=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"GET",a=u.length>2&&void 0!==u[2]?u[2]:null,s=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"application/json"},r(!0),t.prev=4,t.next=7,fetch(e,{method:n,body:a,headers:s});case 7:if((i=t.sent).ok){t.next=10;break}throw new Error("could not ferch ".concat(e,", status: ").concat(i.status));case 10:return t.next=12,i.json();case 12:return o=t.sent,r(!1),t.abrupt("return",o);case 17:throw t.prev=17,t.t0=t.catch(4),r(!1),b(t.t0.message),t.t0;case 22:case"end":return t.stop()}}),t,null,[[4,17]])})));return function(e){return t.apply(this,arguments)}}(),[]),error:l,clearError:Object(i.useCallback)((function(){return b(null)}),[])}}(),e=t.loading,n=t.request,r=t.error,o=t.clearError,u="apikey=41f31bb5661e439b207d7fa69245080f",l="https://gateway.marvel.com:443/v1/public/",b=function(){var t=Object(a.a)(c.a.mark((function t(){var e,r,a=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:210,t.next=3,n("".concat(l,"characters?limit=9&offset=").concat(e,"&").concat(u));case 3:return r=t.sent,t.abrupt("return",r.data.results.map(h));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=Object(a.a)(c.a.mark((function t(e){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n("".concat(l,"characters/").concat(e,"?").concat(u));case 2:return r=t.sent,t.abrupt("return",h(r.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(c.a.mark((function t(){var e,r,a=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:0,t.next=3,n("".concat(l,"comics?orderBy=issueNumber&limit=8&offset=").concat(e,"&").concat(u));case 3:return r=t.sent,t.abrupt("return",r.data.results.map(d));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=function(){var t=Object(a.a)(c.a.mark((function t(e){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n("".concat(l,"comics/").concat(e,"?").concat(u));case 2:return r=t.sent,t.abrupt("return",d(r.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(t){return{id:t.id,title:t.title,description:t.description||"There is no description",pageCount:t.pageCount?"".concat(t.pageCount," p."):"No information about the number of pages",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,language:t.textObjects.language||"en-us",price:t.prices.price?"".concat(t.prices.price,"$"):"not available"}},h=function(t){return{id:t.id,name:t.name,description:t.description?"".concat(t.description.slice(0,210),"..."):"There is no description for this character",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,comics:t.comics.items}};return{loading:e,error:r,getAllCharacters:b,getCharacter:p,clearError:o,getAllComics:m,getComics:j}}},28:function(t,e,n){"use strict";var r=n(29),c=n(30),a=n(33),s=n(31),i=n(11),o=n(23),u=n(0),l=function(t){Object(a.a)(n,t);var e=Object(s.a)(n);function n(t){var c;return Object(r.a)(this,n),(c=e.call(this,t)).state={error:!1},c}return Object(c.a)(n,[{key:"componentDidCatch",value:function(t,e){console.log(t,e),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(u.jsx)(o.a,{}):this.props.children}}]),n}(i.Component);e.a=l},38:function(t,e,n){},39:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var r=n(32),c=n(4),a=(n(38),n(1)),s=n(26),i=n(28),o=n(8),u=n(5),l=n(0),b=function(){var t=Object(a.useState)([]),e=Object(c.a)(t,2),n=e[0],b=e[1],p=Object(a.useState)(!1),m=Object(c.a)(p,2),j=m[0],d=m[1],h=Object(a.useState)(0),f=Object(c.a)(h,2),v=f[0],O=f[1],g=Object(a.useState)(!1),x=Object(c.a)(g,2),_=x[0],w=x[1],k=Object(s.a)(),y=k.loading,C=k.error,N=k.getAllComics;Object(a.useEffect)((function(){S(v,!0)}),[]);var S=function(t,e){d(!e),N(t).then(A)},A=function(t){var e=!1;t.length<8&&(e=!0),b([].concat(Object(r.a)(n),Object(r.a)(t))),d(!1),O(v+8),w(e)};var E=function(t){var e=t.map((function(t,e){return Object(l.jsx)("li",{className:"comics__item",children:Object(l.jsxs)(u.b,{to:"/MarvelStarter/comics/".concat(t.id),children:[Object(l.jsx)("img",{src:t.thumbnail,alt:t.title,className:"comics__item-img"}),Object(l.jsx)("div",{className:"comics__item-name",children:t.title}),Object(l.jsx)("div",{className:"comics__item-price",children:t.pageCount}),Object(l.jsx)("div",{className:"comics__item-price",children:t.language}),Object(l.jsx)("div",{className:"comics__item-price",children:t.price})]})},e)}));return Object(l.jsx)("ul",{className:"comics__grid",children:e})}(n),T=C?Object(l.jsx)(i.a,{}):null,q=y&&!j?Object(l.jsx)(o.a,{}):null;return Object(l.jsxs)("div",{className:"comics__list",children:[T,q,E,Object(l.jsx)("button",{disabled:j,style:{display:_?"none":"block"},className:"button button__main button__long",onClick:function(){return S(v)},children:Object(l.jsx)("div",{className:"inner",children:"load more"})})]})},p=(n(39),n.p+"static/media/Avengers.4065c8f9.png"),m=n.p+"static/media/Avengers_logo.9eaf2193.png",j=function(){return Object(l.jsxs)("div",{className:"app__banner",children:[Object(l.jsx)("img",{src:p,alt:"Avengers"}),Object(l.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(l.jsx)("br",{}),"Stay tuned!"]}),Object(l.jsx)("img",{src:m,alt:"Avengers logo"})]})};e.default=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{}),Object(l.jsx)(b,{})]})}}}]);
//# sourceMappingURL=5.31fc6cbf.chunk.js.map