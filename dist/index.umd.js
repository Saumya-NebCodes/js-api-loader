!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(((t="undefined"!=typeof globalThis?globalThis:t||self).google=t.google||{},t.google.maps=t.google.maps||{},t.google.maps.plugins=t.google.maps.plugins||{},t.google.maps.plugins.loader={}))}(this,(function(t){"use strict";function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(t,e){return t(e={exports:{}},e.exports),e.exports}var o=function(t){return t&&t.Math==Math&&t},i=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof n&&n)||function(){return this}()||Function("return this")(),c=function(t){try{return!!t()}catch(t){return!0}},a=!c((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),u={}.propertyIsEnumerable,s=Object.getOwnPropertyDescriptor,f={f:s&&!u.call({1:2},1)?function(t){var e=s(this,t);return!!e&&e.enumerable}:u},l=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},h={}.toString,p=function(t){return h.call(t).slice(8,-1)},d="".split,v=c((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==p(t)?d.call(t,""):Object(t)}:Object,g=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},y=function(t){return v(g(t))},m=function(t){return"object"==typeof t?null!==t:"function"==typeof t},b=function(t,e){if(!m(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!m(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!m(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!m(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},w=function(t){return Object(g(t))},S={}.hasOwnProperty,j=function(t,e){return S.call(w(t),e)},E=i.document,O=m(E)&&m(E.createElement),T=function(t){return O?E.createElement(t):{}},k=!a&&!c((function(){return 7!=Object.defineProperty(T("div"),"a",{get:function(){return 7}}).a})),L=Object.getOwnPropertyDescriptor,P={f:a?L:function(t,e){if(t=y(t),e=b(e,!0),k)try{return L(t,e)}catch(t){}if(j(t,e))return l(!f.f.call(t,e),t[e])}},M=function(t){if(!m(t))throw TypeError(String(t)+" is not an object");return t},x=Object.defineProperty,C={f:a?x:function(t,e,n){if(M(t),e=b(e,!0),M(n),k)try{return x(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},_=a?function(t,e,n){return C.f(t,e,l(1,n))}:function(t,e,n){return t[e]=n,t},A=function(t,e){try{_(i,t,e)}catch(n){i[t]=e}return e},I="__core-js_shared__",N=i[I]||A(I,{}),R=Function.toString;"function"!=typeof N.inspectSource&&(N.inspectSource=function(t){return R.call(t)});var D,F,G,K,V=N.inspectSource,B=i.WeakMap,z="function"==typeof B&&/native code/.test(V(B)),U=r((function(t){(t.exports=function(t,e){return N[t]||(N[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.11.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),H=0,q=Math.random(),W=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++H+q).toString(36)},J=U("keys"),Y={},Q="Object already initialized",X=i.WeakMap;if(z){var Z=N.state||(N.state=new X),$=Z.get,tt=Z.has,et=Z.set;D=function(t,e){if(tt.call(Z,t))throw new TypeError(Q);return e.facade=t,et.call(Z,t,e),e},F=function(t){return $.call(Z,t)||{}},G=function(t){return tt.call(Z,t)}}else{var nt=J[K="state"]||(J[K]=W(K));Y[nt]=!0,D=function(t,e){if(j(t,nt))throw new TypeError(Q);return e.facade=t,_(t,nt,e),e},F=function(t){return j(t,nt)?t[nt]:{}},G=function(t){return j(t,nt)}}var rt,ot,it={set:D,get:F,has:G,enforce:function(t){return G(t)?F(t):D(t,{})},getterFor:function(t){return function(e){var n;if(!m(e)||(n=F(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},ct=r((function(t){var e=it.get,n=it.enforce,r=String(String).split("String");(t.exports=function(t,e,o,c){var a,u=!!c&&!!c.unsafe,s=!!c&&!!c.enumerable,f=!!c&&!!c.noTargetGet;"function"==typeof o&&("string"!=typeof e||j(o,"name")||_(o,"name",e),(a=n(o)).source||(a.source=r.join("string"==typeof e?e:""))),t!==i?(u?!f&&t[e]&&(s=!0):delete t[e],s?t[e]=o:_(t,e,o)):s?t[e]=o:A(e,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||V(this)}))})),at=i,ut=function(t){return"function"==typeof t?t:void 0},st=function(t,e){return arguments.length<2?ut(at[t])||ut(i[t]):at[t]&&at[t][e]||i[t]&&i[t][e]},ft=Math.ceil,lt=Math.floor,ht=function(t){return isNaN(t=+t)?0:(t>0?lt:ft)(t)},pt=Math.min,dt=function(t){return t>0?pt(ht(t),9007199254740991):0},vt=Math.max,gt=Math.min,yt=function(t){return function(e,n,r){var o,i=y(e),c=dt(i.length),a=function(t,e){var n=ht(t);return n<0?vt(n+e,0):gt(n,e)}(r,c);if(t&&n!=n){for(;c>a;)if((o=i[a++])!=o)return!0}else for(;c>a;a++)if((t||a in i)&&i[a]===n)return t||a||0;return!t&&-1}},mt={includes:yt(!0),indexOf:yt(!1)}.indexOf,bt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype"),wt={f:Object.getOwnPropertyNames||function(t){return function(t,e){var n,r=y(t),o=0,i=[];for(n in r)!j(Y,n)&&j(r,n)&&i.push(n);for(;e.length>o;)j(r,n=e[o++])&&(~mt(i,n)||i.push(n));return i}(t,bt)}},St={f:Object.getOwnPropertySymbols},jt=st("Reflect","ownKeys")||function(t){var e=wt.f(M(t)),n=St.f;return n?e.concat(n(t)):e},Et=function(t,e){for(var n=jt(e),r=C.f,o=P.f,i=0;i<n.length;i++){var c=n[i];j(t,c)||r(t,c,o(e,c))}},Ot=/#|\.prototype\./,Tt=function(t,e){var n=Lt[kt(t)];return n==Mt||n!=Pt&&("function"==typeof e?c(e):!!e)},kt=Tt.normalize=function(t){return String(t).replace(Ot,".").toLowerCase()},Lt=Tt.data={},Pt=Tt.NATIVE="N",Mt=Tt.POLYFILL="P",xt=Tt,Ct=P.f,_t=function(t,e){var n,r,o,c,a,u=t.target,s=t.global,f=t.stat;if(n=s?i:f?i[u]||A(u,{}):(i[u]||{}).prototype)for(r in e){if(c=e[r],o=t.noTargetGet?(a=Ct(n,r))&&a.value:n[r],!xt(s?r:u+(f?".":"#")+r,t.forced)&&void 0!==o){if(typeof c==typeof o)continue;Et(c,o)}(t.sham||o&&o.sham)&&_(c,"sham",!0),ct(n,r,c,t)}},At=Array.isArray||function(t){return"Array"==p(t)},It=function(t,e,n){var r=b(e);r in t?C.f(t,r,l(0,n)):t[r]=n},Nt="process"==p(i.process),Rt=st("navigator","userAgent")||"",Dt=i.process,Ft=Dt&&Dt.versions,Gt=Ft&&Ft.v8;Gt?ot=(rt=Gt.split("."))[0]+rt[1]:Rt&&(!(rt=Rt.match(/Edge\/(\d+)/))||rt[1]>=74)&&(rt=Rt.match(/Chrome\/(\d+)/))&&(ot=rt[1]);var Kt,Vt=ot&&+ot,Bt=!!Object.getOwnPropertySymbols&&!c((function(){return!Symbol.sham&&(Nt?38===Vt:Vt>37&&Vt<41)})),zt=Bt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Ut=U("wks"),Ht=i.Symbol,qt=zt?Ht:Ht&&Ht.withoutSetter||W,Wt=function(t){return j(Ut,t)&&(Bt||"string"==typeof Ut[t])||(Bt&&j(Ht,t)?Ut[t]=Ht[t]:Ut[t]=qt("Symbol."+t)),Ut[t]},Jt=Wt("species"),Yt=function(t,e){var n;return At(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!At(n.prototype)?m(n)&&null===(n=n[Jt])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)},Qt=Wt("species"),Xt=Wt("isConcatSpreadable"),Zt=9007199254740991,$t="Maximum allowed index exceeded",te=Vt>=51||!c((function(){var t=[];return t[Xt]=!1,t.concat()[0]!==t})),ee=(Kt="concat",Vt>=51||!c((function(){var t=[];return(t.constructor={})[Qt]=function(){return{foo:1}},1!==t[Kt](Boolean).foo}))),ne=function(t){if(!m(t))return!1;var e=t[Xt];return void 0!==e?!!e:At(t)};_t({target:"Array",proto:!0,forced:!te||!ee},{concat:function(t){var e,n,r,o,i,c=w(this),a=Yt(c,0),u=0;for(e=-1,r=arguments.length;e<r;e++)if(ne(i=-1===e?c:arguments[e])){if(u+(o=dt(i.length))>Zt)throw TypeError($t);for(n=0;n<o;n++,u++)n in i&&It(a,u,i[n])}else{if(u>=Zt)throw TypeError($t);It(a,u++,i)}return a.length=u,a}});var re=function(t,e){var n=[][t];return!!n&&c((function(){n.call(null,e||function(){throw 1},1)}))},oe=[].join,ie=v!=Object,ce=re("join",",");_t({target:"Array",proto:!0,forced:ie||!ce},{join:function(t){return oe.call(y(this),void 0===t?",":t)}});var ae={};ae[Wt("toStringTag")]="z";var ue="[object z]"===String(ae),se=Wt("toStringTag"),fe="Arguments"==p(function(){return arguments}()),le=ue?p:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),se))?n:fe?p(e):"Object"==(r=p(e))&&"function"==typeof e.callee?"Arguments":r},he=ue?{}.toString:function(){return"[object "+le(this)+"]"};ue||ct(Object.prototype,"toString",he,{unsafe:!0});var pe=i.Promise,de=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(t){}return function(n,r){return M(n),function(t){if(!m(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype")}(r),e?t.call(n,r):n.__proto__=r,n}}():void 0),ve=C.f,ge=Wt("toStringTag"),ye=Wt("species"),me=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},be={},we=Wt("iterator"),Se=Array.prototype,je=function(t,e,n){if(me(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}},Ee=Wt("iterator"),Oe=function(t){var e=t.return;if(void 0!==e)return M(e.call(t)).value},Te=function(t,e){this.stopped=t,this.result=e},ke=function(t,e,n){var r,o,i,c,a,u,s,f,l=n&&n.that,h=!(!n||!n.AS_ENTRIES),p=!(!n||!n.IS_ITERATOR),d=!(!n||!n.INTERRUPTED),v=je(e,l,1+h+d),g=function(t){return r&&Oe(r),new Te(!0,t)},y=function(t){return h?(M(t),d?v(t[0],t[1],g):v(t[0],t[1])):d?v(t,g):v(t)};if(p)r=t;else{if("function"!=typeof(o=function(t){if(null!=t)return t[Ee]||t["@@iterator"]||be[le(t)]}(t)))throw TypeError("Target is not iterable");if(void 0!==(f=o)&&(be.Array===f||Se[we]===f)){for(i=0,c=dt(t.length);c>i;i++)if((a=y(t[i]))&&a instanceof Te)return a;return new Te(!1)}r=o.call(t)}for(u=r.next;!(s=u.call(r)).done;){try{a=y(s.value)}catch(t){throw Oe(r),t}if("object"==typeof a&&a&&a instanceof Te)return a}return new Te(!1)},Le=Wt("iterator"),Pe=!1;try{var Me=0,xe={next:function(){return{done:!!Me++}},return:function(){Pe=!0}};xe[Le]=function(){return this},Array.from(xe,(function(){throw 2}))}catch(t){}var Ce,_e,Ae,Ie=Wt("species"),Ne=st("document","documentElement"),Re=/(?:iphone|ipod|ipad).*applewebkit/i.test(Rt),De=i.location,Fe=i.setImmediate,Ge=i.clearImmediate,Ke=i.process,Ve=i.MessageChannel,Be=i.Dispatch,ze=0,Ue={},He="onreadystatechange",qe=function(t){if(Ue.hasOwnProperty(t)){var e=Ue[t];delete Ue[t],e()}},We=function(t){return function(){qe(t)}},Je=function(t){qe(t.data)},Ye=function(t){i.postMessage(t+"",De.protocol+"//"+De.host)};Fe&&Ge||(Fe=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return Ue[++ze]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},Ce(ze),ze},Ge=function(t){delete Ue[t]},Nt?Ce=function(t){Ke.nextTick(We(t))}:Be&&Be.now?Ce=function(t){Be.now(We(t))}:Ve&&!Re?(Ae=(_e=new Ve).port2,_e.port1.onmessage=Je,Ce=je(Ae.postMessage,Ae,1)):i.addEventListener&&"function"==typeof postMessage&&!i.importScripts&&De&&"file:"!==De.protocol&&!c(Ye)?(Ce=Ye,i.addEventListener("message",Je,!1)):Ce=He in T("script")?function(t){Ne.appendChild(T("script")).onreadystatechange=function(){Ne.removeChild(this),qe(t)}}:function(t){setTimeout(We(t),0)});var Qe,Xe,Ze,$e,tn,en,nn,rn,on={set:Fe,clear:Ge},cn=/web0s(?!.*chrome)/i.test(Rt),an=P.f,un=on.set,sn=i.MutationObserver||i.WebKitMutationObserver,fn=i.document,ln=i.process,hn=i.Promise,pn=an(i,"queueMicrotask"),dn=pn&&pn.value;dn||(Qe=function(){var t,e;for(Nt&&(t=ln.domain)&&t.exit();Xe;){e=Xe.fn,Xe=Xe.next;try{e()}catch(t){throw Xe?$e():Ze=void 0,t}}Ze=void 0,t&&t.enter()},Re||Nt||cn||!sn||!fn?hn&&hn.resolve?(nn=hn.resolve(void 0),rn=nn.then,$e=function(){rn.call(nn,Qe)}):$e=Nt?function(){ln.nextTick(Qe)}:function(){un.call(i,Qe)}:(tn=!0,en=fn.createTextNode(""),new sn(Qe).observe(en,{characterData:!0}),$e=function(){en.data=tn=!tn}));var vn,gn,yn,mn,bn,wn,Sn,jn=dn||function(t){var e={fn:t,next:void 0};Ze&&(Ze.next=e),Xe||(Xe=e,$e()),Ze=e},En=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=me(e),this.reject=me(n)},On={f:function(t){return new En(t)}},Tn=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}},kn=on.set,Ln=Wt("species"),Pn="Promise",Mn=it.get,xn=it.set,Cn=it.getterFor(Pn),_n=pe&&pe.prototype,An=pe,In=i.TypeError,Nn=i.document,Rn=i.process,Dn=On.f,Fn=Dn,Gn=!!(Nn&&Nn.createEvent&&i.dispatchEvent),Kn="function"==typeof PromiseRejectionEvent,Vn="unhandledrejection",Bn=xt(Pn,(function(){if(!(V(An)!==String(An))){if(66===Vt)return!0;if(!Nt&&!Kn)return!0}if(Vt>=51&&/native code/.test(An))return!1;var t=An.resolve(1),e=function(t){t((function(){}),(function(){}))};return(t.constructor={})[Ln]=e,!(t.then((function(){}))instanceof e)})),zn=Bn||!function(t,e){if(!e&&!Pe)return!1;var n=!1;try{var r={};r[Le]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(t){}return n}((function(t){An.all(t).catch((function(){}))})),Un=function(t){var e;return!(!m(t)||"function"!=typeof(e=t.then))&&e},Hn=function(t,e){if(!t.notified){t.notified=!0;var n=t.reactions;jn((function(){for(var r=t.value,o=1==t.state,i=0;n.length>i;){var c,a,u,s=n[i++],f=o?s.ok:s.fail,l=s.resolve,h=s.reject,p=s.domain;try{f?(o||(2===t.rejection&&Yn(t),t.rejection=1),!0===f?c=r:(p&&p.enter(),c=f(r),p&&(p.exit(),u=!0)),c===s.promise?h(In("Promise-chain cycle")):(a=Un(c))?a.call(c,l,h):l(c)):h(r)}catch(t){p&&!u&&p.exit(),h(t)}}t.reactions=[],t.notified=!1,e&&!t.rejection&&Wn(t)}))}},qn=function(t,e,n){var r,o;Gn?((r=Nn.createEvent("Event")).promise=e,r.reason=n,r.initEvent(t,!1,!0),i.dispatchEvent(r)):r={promise:e,reason:n},!Kn&&(o=i["on"+t])?o(r):t===Vn&&function(t,e){var n=i.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}("Unhandled promise rejection",n)},Wn=function(t){kn.call(i,(function(){var e,n=t.facade,r=t.value;if(Jn(t)&&(e=Tn((function(){Nt?Rn.emit("unhandledRejection",r,n):qn(Vn,n,r)})),t.rejection=Nt||Jn(t)?2:1,e.error))throw e.value}))},Jn=function(t){return 1!==t.rejection&&!t.parent},Yn=function(t){kn.call(i,(function(){var e=t.facade;Nt?Rn.emit("rejectionHandled",e):qn("rejectionhandled",e,t.value)}))},Qn=function(t,e,n){return function(r){t(e,r,n)}},Xn=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=2,Hn(t,!0))},Zn=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw In("Promise can't be resolved itself");var r=Un(e);r?jn((function(){var n={done:!1};try{r.call(e,Qn(Zn,n,t),Qn(Xn,n,t))}catch(e){Xn(n,e,t)}})):(t.value=e,t.state=1,Hn(t,!1))}catch(e){Xn({done:!1},e,t)}}};if(Bn&&(An=function(t){!function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation")}(this,An,Pn),me(t),vn.call(this);var e=Mn(this);try{t(Qn(Zn,e),Qn(Xn,e))}catch(t){Xn(e,t)}},(vn=function(t){xn(this,{type:Pn,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=function(t,e,n){for(var r in e)ct(t,r,e[r],n);return t}(An.prototype,{then:function(t,e){var n,r,o,i=Cn(this),c=Dn((n=An,void 0===(o=M(this).constructor)||null==(r=M(o)[Ie])?n:me(r)));return c.ok="function"!=typeof t||t,c.fail="function"==typeof e&&e,c.domain=Nt?Rn.domain:void 0,i.parent=!0,i.reactions.push(c),0!=i.state&&Hn(i,!1),c.promise},catch:function(t){return this.then(void 0,t)}}),gn=function(){var t=new vn,e=Mn(t);this.promise=t,this.resolve=Qn(Zn,e),this.reject=Qn(Xn,e)},On.f=Dn=function(t){return t===An||t===yn?new gn(t):Fn(t)},"function"==typeof pe&&_n!==Object.prototype)){mn=_n.then,ct(_n,"then",(function(t,e){var n=this;return new An((function(t,e){mn.call(n,t,e)})).then(t,e)}),{unsafe:!0});try{delete _n.constructor}catch(t){}de&&de(_n,An.prototype)}_t({global:!0,wrap:!0,forced:Bn},{Promise:An}),wn=Pn,Sn=!1,(bn=An)&&!j(bn=Sn?bn:bn.prototype,ge)&&ve(bn,ge,{configurable:!0,value:wn}),function(t){var e=st(t),n=C.f;a&&e&&!e[ye]&&n(e,ye,{configurable:!0,get:function(){return this}})}(Pn),yn=st(Pn),_t({target:Pn,stat:!0,forced:Bn},{reject:function(t){var e=Dn(this);return e.reject.call(void 0,t),e.promise}}),_t({target:Pn,stat:!0,forced:Bn},{resolve:function(t){return function(t,e){if(M(t),m(e)&&e.constructor===t)return e;var n=On.f(t);return(0,n.resolve)(e),n.promise}(this,t)}}),_t({target:Pn,stat:!0,forced:zn},{all:function(t){var e=this,n=Dn(e),r=n.resolve,o=n.reject,i=Tn((function(){var n=me(e.resolve),i=[],c=0,a=1;ke(t,(function(t){var u=c++,s=!1;i.push(void 0),a++,n.call(e,t).then((function(t){s||(s=!0,i[u]=t,--a||r(i))}),o)})),--a||r(i)}));return i.error&&o(i.value),n.promise},race:function(t){var e=this,n=Dn(e),r=n.reject,o=Tn((function(){var o=me(e.resolve);ke(t,(function(t){o.call(e,t).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}});var $n=[].push,tr=function(t){var e=1==t,n=2==t,r=3==t,o=4==t,i=6==t,c=7==t,a=5==t||i;return function(u,s,f,l){for(var h,p,d=w(u),g=v(d),y=je(s,f,3),m=dt(g.length),b=0,S=l||Yt,j=e?S(u,m):n||c?S(u,0):void 0;m>b;b++)if((a||b in g)&&(p=y(h=g[b],b,d),t))if(e)j[b]=p;else if(p)switch(t){case 3:return!0;case 5:return h;case 6:return b;case 2:$n.call(j,h)}else switch(t){case 4:return!1;case 7:$n.call(j,h)}return i?-1:r||o?o:j}},er={forEach:tr(0),map:tr(1),filter:tr(2),some:tr(3),every:tr(4),find:tr(5),findIndex:tr(6),filterOut:tr(7)}.forEach,nr=re("forEach")?[].forEach:function(t){return er(this,t,arguments.length>1?arguments[1]:void 0)};for(var rr in{CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var or=i[rr],ir=or&&or.prototype;if(ir&&ir.forEach!==nr)try{_(ir,"forEach",nr)}catch(t){ir.forEach=nr}}var cr="__googleMapsScriptId",ar=function(){function t(e){var n=e.apiKey,r=e.channel,o=e.client,i=e.id,c=void 0===i?cr:i,a=e.libraries,u=void 0===a?[]:a,s=e.language,f=e.region,l=e.version,h=e.mapIds,p=e.nonce,d=e.retries,v=void 0===d?3:d,g=e.url,y=void 0===g?"https://maps.googleapis.com/maps/api/js":g;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.version=l,this.apiKey=n,this.channel=r,this.client=o,this.id=c||cr,this.libraries=u,this.language=s,this.region=f,this.mapIds=h,this.nonce=p,this.retries=v,this.url=y,t.instance){if(!function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){if(e.constructor!==n.constructor)return!1;var r,o,i;if(Array.isArray(e)){if((r=e.length)!=n.length)return!1;for(o=r;0!=o--;)if(!t(e[o],n[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if((r=(i=Object.keys(e)).length)!==Object.keys(n).length)return!1;for(o=r;0!=o--;)if(!Object.prototype.hasOwnProperty.call(n,i[o]))return!1;for(o=r;0!=o--;){var c=i[o];if(!t(e[c],n[c]))return!1}return!0}return e!=e&&n!=n}(this.options,t.instance.options))throw new Error("Loader must not be called again with different options. ".concat(JSON.stringify(this.options)," !== ").concat(JSON.stringify(t.instance.options)));return t.instance}t.instance=this}var n,r,o;return n=t,(r=[{key:"options",get:function(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url}}},{key:"failed",get:function(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}},{key:"createUrl",value:function(){var t=this.url;return t+="?callback=".concat(this.CALLBACK),this.apiKey&&(t+="&key=".concat(this.apiKey)),this.channel&&(t+="&channel=".concat(this.channel)),this.client&&(t+="&client=".concat(this.client)),this.libraries.length>0&&(t+="&libraries=".concat(this.libraries.join(","))),this.language&&(t+="&language=".concat(this.language)),this.region&&(t+="&region=".concat(this.region)),this.version&&(t+="&v=".concat(this.version)),this.mapIds&&(t+="&map_ids=".concat(this.mapIds.join(","))),t}},{key:"load",value:function(){return this.loadPromise()}},{key:"loadPromise",value:function(){var t=this;return new Promise((function(e,n){t.loadCallback((function(t){t?n(t):e()}))}))}},{key:"loadCallback",value:function(t){this.callbacks.push(t),this.execute()}},{key:"setScript",value:function(){if(document.getElementById(this.id))this.callback();else{var t=this.createUrl(),e=document.createElement("script");e.id=this.id,e.type="text/javascript",e.src=t,e.onerror=this.loadErrorCallback.bind(this),e.defer=!0,e.async=!0,this.nonce&&(e.nonce=this.nonce),document.head.appendChild(e)}}},{key:"deleteScript",value:function(){var t=document.getElementById(this.id);t&&t.remove()}},{key:"reset",value:function(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}},{key:"resetIfRetryingFailed",value:function(){this.failed&&this.reset()}},{key:"loadErrorCallback",value:function(t){var e=this;if(this.errors.push(t),this.errors.length<=this.retries){var n=this.errors.length*Math.pow(2,this.errors.length);console.log("Failed to load Google Maps script, retrying in ".concat(n," ms.")),setTimeout((function(){e.deleteScript(),e.setScript()}),n)}else this.onerrorEvent=t,this.callback()}},{key:"setCallback",value:function(){window.__googleMapsCallback=this.callback.bind(this)}},{key:"callback",value:function(){var t=this;this.done=!0,this.loading=!1,this.callbacks.forEach((function(e){e(t.onerrorEvent)})),this.callbacks=[]}},{key:"execute",value:function(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version)return console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),void this.callback();this.loading||(this.loading=!0,this.setCallback(),this.setScript())}}}])&&e(n.prototype,r),o&&e(n,o),t}();t.DEFAULT_ID=cr,t.Loader=ar,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=index.umd.js.map
