(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[4],{24:function(e,t,c){"use strict";var n=c.p+"static/media/error.42292aa1.gif",a=c(0);t.a=function(){return Object(a.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:n,alt:"error"})}},27:function(e,t,c){"use strict";var n=c(25),a=c.n(n),r=c(26),s=c(4),i=c(1);t.a=function(){var e=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),c=t[0],n=t[1],o=Object(i.useState)(null),l=Object(s.a)(o,2),u=l[0],j=l[1];return{loading:c,request:Object(i.useCallback)(function(){var e=Object(r.a)(a.a.mark((function e(t){var c,r,s,i,o,l=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=l.length>1&&void 0!==l[1]?l[1]:"GET",r=l.length>2&&void 0!==l[2]?l[2]:null,s=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},n(!0),e.prev=4,e.next=7,fetch(t,{method:c,body:r,headers:s});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("could not ferch ".concat(t,", status: ").concat(i.status));case 10:return e.next=12,i.json();case 12:return o=e.sent,n(!1),e.abrupt("return",o);case 17:throw e.prev=17,e.t0=e.catch(4),n(!1),j(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:u,clearError:Object(i.useCallback)((function(){return j(null)}),[])}}(),t=e.loading,c=e.request,n=e.error,o=e.clearError,l="apikey=41f31bb5661e439b207d7fa69245080f",u="https://gateway.marvel.com:443/v1/public/",j=function(){var e=Object(r.a)(a.a.mark((function e(){var t,n,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:210,e.next=3,c("".concat(u,"characters?limit=9&offset=").concat(t,"&").concat(l));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(O));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(r.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(u,"characters/").concat(t,"?").concat(l));case 2:return n=e.sent,e.abrupt("return",O(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(r.a)(a.a.mark((function e(){var t,n,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:0,e.next=3,c("".concat(u,"comics?orderBy=issueNumber&limit=8&offset=").concat(t,"&").concat(l));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(m));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(r.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(u,"comics/").concat(t,"?").concat(l));case 2:return n=e.sent,e.abrupt("return",m(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:e.textObjects.language||"en-us",price:e.prices.price?"".concat(e.prices.price,"$"):"not available"}},O=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}};return{loading:t,error:n,getAllCharacters:j,getCharacter:b,clearError:o,getAllComics:h,getComics:d}}},30:function(e,t,c){"use strict";var n=c(34),a=c(35),r=c(38),s=c(36),i=c(12),o=c(24),l=c(0),u=function(e){Object(r.a)(c,e);var t=Object(s.a)(c);function c(e){var a;return Object(n.a)(this,c),(a=t.call(this,e)).state={error:!1},a}return Object(a.a)(c,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(l.jsx)(o.a,{}):this.props.children}}]),c}(i.Component);t.a=u},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t);var n=c(4),a=c(1),r=c(9),s=c(24),i=c(27),o=c(52),l=(c(41),c.p+"static/media/mjolnir.61f31e18.png"),u=c(0),j=function(e){var t=e.char,c=t.name,n=t.description,a=t.thumbnail,r=t.homepage,s=t.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(i={objectFit:"contain"}),Object(u.jsxs)("div",{className:"randomchar__block",children:[Object(u.jsx)("img",{src:a,alt:"Random character",className:"randomchar__img",style:i}),Object(u.jsxs)("div",{className:"randomchar__info",children:[Object(u.jsx)("p",{className:"randomchar__name",children:c}),Object(u.jsx)("p",{className:"randomchar__descr",children:n}),Object(u.jsxs)("div",{className:"randomchar__btns",children:[Object(u.jsx)("a",{href:r,className:"button button__main",children:Object(u.jsx)("div",{className:"inner",children:"homepage"})}),Object(u.jsx)("a",{href:s,className:"button button__secondary",children:Object(u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},b=function(){var e=Object(a.useState)({}),t=Object(n.a)(e,2),c=t[0],b=t[1],h=Object(a.useState)(!1),d=Object(n.a)(h,2),m=d[0],O=d[1],f=Object(i.a)(),p=f.loading,v=f.error,x=f.getCharacter,_=f.clearError;Object(a.useEffect)((function(){N();var e=setInterval(N,6e4);return O(!0),function(){clearInterval(e)}}),[]);var g=function(e){b(e)},N=function(){_();var e=Math.floor(400*Math.random())+1011e3;x(e).then(g)},k=v?Object(u.jsx)(s.a,{}):null,y=p?Object(u.jsx)(r.a,{}):null,w=p||v||!c?null:Object(u.jsx)(j,{char:c});return Object(u.jsx)(o.a,{classNames:"randomchar",in:m,timeout:500,mountOnEnter:!0,unmountOnExit:!0,children:Object(u.jsxs)("div",{className:"randomchar",children:[k,y,w,Object(u.jsxs)("div",{className:"randomchar__static",children:[Object(u.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(u.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(u.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(u.jsx)("button",{onClick:N,className:"button button__main",children:Object(u.jsx)("div",{className:"inner",children:"try it"})}),Object(u.jsx)("img",{src:l,alt:"mjolnir",className:"randomchar__decoration"})]})]})})},h=c(37),d=(c(42),c(54)),m=function(e){var t=Object(a.useState)([]),l=Object(n.a)(t,2),j=l[0],b=l[1],m=Object(a.useState)(!1),O=Object(n.a)(m,2),f=O[0],p=O[1],v=Object(a.useState)(210),x=Object(n.a)(v,2),_=x[0],g=x[1],N=Object(a.useState)(!1),k=Object(n.a)(N,2),y=k[0],w=k[1],C=Object(i.a)(),S=C.loading,E=C.error,F=C.getAllCharacters;Object(a.useEffect)((function(){I(_,!0)}),[]);var I=function(e,t){p(!t),F(e).then(R)},R=function(e){var t=!1;e.length<9&&(t=!0),b((function(t){return[].concat(Object(h.a)(t),Object(h.a)(e))})),p((function(e){return!1})),g((function(e){return e+9})),w((function(e){return t}))},T=Object(a.useRef)([]),A=function(e){T.current.forEach((function(e){e&&e.classList.remove("char__item_selected")})),T.current[e].classList.add("char__item_selected"),T.current[e].focus()};var M=function(t){var c=t.map((function(t,c){var n={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail&&(n={objectFit:"unset"}),Object(u.jsx)(o.a,{nodeRef:T.current[c],timeout:500,classNames:"char__item",children:Object(u.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return T.current[c]=e},onClick:function(){e.onCharSelected(t.id),A(c)},onKeyPress:function(n){" "!==n.key&&"Enter"!==n.key||(e.onCharSelected(t.id),A(c))},children:[Object(u.jsx)("img",{src:t.thumbnail,alt:t.name,style:n}),Object(u.jsx)("div",{className:"char__name",children:t.name})]},t.id)},t.id)}));return Object(u.jsx)("ul",{className:"char__grid",children:Object(u.jsx)(d.a,{component:null,children:c})})}(j),q=E?Object(u.jsx)(s.a,{}):null,D=S&&!f?Object(u.jsx)(r.a,{}):null;return S&&c.e(9).then(c.bind(null,50)).then((function(e){return e.logger()})).catch((function(){return console.log("err")})),Object(u.jsxs)("div",{className:"char__list",children:[q,D,M,Object(u.jsx)("button",{className:"button button__main button__long",disabled:f,style:{display:y?"none":"block"},onClick:function(){return I(_)},children:Object(u.jsx)("div",{className:"inner",children:"load more"})})]})},O=c(6),f=(c(43),function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(u.jsxs)("div",{className:"skeleton",children:[Object(u.jsxs)("div",{className:"pulse skeleton__header",children:[Object(u.jsx)("div",{className:"pulse skeleton__circle"}),Object(u.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(u.jsx)("div",{className:"pulse skeleton__block"}),Object(u.jsx)("div",{className:"pulse skeleton__block"}),Object(u.jsx)("div",{className:"pulse skeleton__block"})]})]})}),p=(c(44),function(e){var t=e.char,c=t.name,n=t.description,a=t.thumbnail,r=t.homepage,s=t.wiki,i=t.comics,o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(o={objectFit:"contain"}),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"char__basics",children:[Object(u.jsx)("img",{src:a,alt:c,style:o}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"char__info-name",children:c}),Object(u.jsxs)("div",{className:"char__btns",children:[Object(u.jsx)("a",{href:r,className:"button button__main",children:Object(u.jsx)("div",{className:"inner",children:"homepage"})}),Object(u.jsx)("a",{href:s,className:"button button__secondary",children:Object(u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(u.jsx)("div",{className:"char__descr",children:n}),Object(u.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(u.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this character",i.map((function(e,t){if(!(t>9))return Object(u.jsx)(O.b,{to:"/MarvelStarter/comics/".concat(e.resourceURI.slice(e.resourceURI.lastIndexOf("/")+1)),className:"char__comics-item",children:e.name},t)}))]})]})}),v=function(e){var t=Object(a.useState)(null),c=Object(n.a)(t,2),o=c[0],l=c[1],j=Object(i.a)(),b=j.loading,h=j.error,d=j.getCharacter,m=j.clearError;Object(a.useEffect)((function(){O()}),[e.charId]);var O=function(){m();var t=e.charId;t&&d(t).then(v)},v=function(e){l(e)},x=o||b||h?null:Object(u.jsx)(f,{}),_=h?Object(u.jsx)(s.a,{}):null,g=b?Object(u.jsx)(r.a,{}):null,N=b||h||!o?null:Object(u.jsx)(p,{char:o});return Object(u.jsxs)("div",{className:"char__info",children:[x,_,g,N]})},x=c(30),_=c.p+"static/media/vision.067d4ae1.png";t.default=function(){var e=Object(a.useState)(null),t=Object(n.a)(e,2),c=t[0],r=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(x.a,{children:Object(u.jsx)(b,{})}),Object(u.jsxs)("div",{className:"char__content",children:[Object(u.jsx)(x.a,{children:Object(u.jsx)(m,{onCharSelected:function(e){r(e)}})}),Object(u.jsx)(x.a,{children:Object(u.jsx)(v,{charId:c})})]}),Object(u.jsx)("img",{className:"bg-decoration",src:_,alt:"vision"})]})}}}]);
//# sourceMappingURL=4.171327b7.chunk.js.map