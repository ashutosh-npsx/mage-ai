(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1911],{94629:function(e,r,n){"use strict";n.d(r,{Z:function(){return E}});var t=n(82394),i=n(21831),o=n(82684),u=n(50724),s=n(82555),c=n(97618),a=n(70613),d=n(59696),l=n(68899),f=n(28598);function p(e,r){var n=e.children,t=e.noPadding;return(0,f.jsx)(l.HS,{noPadding:t,ref:r,children:n})}var v=o.forwardRef(p),b=n(62547),h=n(82571),O=n(35686),m=n(98464),_=n(46684),j=n(70515),w=n(53808),P=n(19183);function g(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function y(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?g(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function S(e,r){var n,t=e.addProjectBreadcrumbToCustomBreadcrumbs,p=e.after,g=e.afterHidden,S=e.afterWidth,E=e.afterWidthOverride,Z=e.before,x=e.beforeWidth,k=e.breadcrumbs,I=e.children,N=e.errors,A=e.headerMenuItems,C=e.headerOffset,R=e.mainContainerHeader,T=e.navigationItems,M=e.setErrors,W=e.subheaderChildren,D=e.subheaderNoPadding,H=e.title,U=e.uuid,B=(0,P.i)().width,F="dashboard_after_width_".concat(U),L="dashboard_before_width_".concat(U),z=(0,o.useRef)(null),G=(0,o.useState)(E?S:(0,w.U2)(F,S)),K=G[0],V=G[1],X=(0,o.useState)(!1),Y=X[0],q=X[1],J=(0,o.useState)(Z?Math.max((0,w.U2)(L,x),13*j.iI):null),Q=J[0],$=J[1],ee=(0,o.useState)(!1),re=ee[0],ne=ee[1],te=(0,o.useState)(null)[1],ie=O.ZP.projects.list({},{revalidateOnFocus:!1}).data,oe=null===ie||void 0===ie?void 0:ie.projects,ue={label:function(){var e;return null===oe||void 0===oe||null===(e=oe[0])||void 0===e?void 0:e.name},linkProps:{href:"/"}},se=[];k?(t&&se.push(ue),se.push.apply(se,(0,i.Z)(k))):(null===oe||void 0===oe?void 0:oe.length)>=1&&se.push.apply(se,[ue,{bold:!0,label:function(){return H}}]),(0,o.useEffect)((function(){null===z||void 0===z||!z.current||Y||re||null===te||void 0===te||te(z.current.getBoundingClientRect().width)}),[Y,K,re,Q,z,te,B]),(0,o.useEffect)((function(){Y||(0,w.t8)(F,K)}),[g,Y,K,F]),(0,o.useEffect)((function(){re||(0,w.t8)(L,Q)}),[re,Q,L]);var ce=(0,m.Z)(S);return(0,o.useEffect)((function(){E&&ce!==S&&V(S)}),[E,S,ce]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.Z,{title:H}),(0,f.jsx)(d.Z,{breadcrumbs:se,menuItems:A,project:null===oe||void 0===oe?void 0:oe[0],version:null===oe||void 0===oe||null===(n=oe[0])||void 0===n?void 0:n.version}),(0,f.jsxs)(l.Nk,{ref:r,children:[0!==(null===T||void 0===T?void 0:T.length)&&(0,f.jsx)(l.lm,{showMore:!0,children:(0,f.jsx)(h.Z,{navigationItems:T,showMore:!0})}),(0,f.jsx)(c.Z,{flex:1,flexDirection:"column",children:(0,f.jsxs)(b.Z,{after:p,afterHeightOffset:_.Mz,afterHidden:g,afterMousedownActive:Y,afterWidth:K,before:Z,beforeHeightOffset:_.Mz,beforeMousedownActive:re,beforeWidth:l.k1+(Z?Q:0),headerOffset:C,hideAfterCompletely:!0,leftOffset:Z?l.k1:null,mainContainerHeader:R,mainContainerRef:z,setAfterMousedownActive:q,setAfterWidth:V,setBeforeMousedownActive:ne,setBeforeWidth:$,children:[W&&(0,f.jsx)(v,{noPadding:D,children:W}),I]})})]}),N&&(0,f.jsx)(u.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===M||void 0===M?void 0:M(null)},children:(0,f.jsx)(s.Z,y(y({},N),{},{onClose:function(){return null===M||void 0===M?void 0:M(null)}}))})]})}var E=o.forwardRef(S)},75083:function(e,r,n){"use strict";n.d(r,{HF:function(){return u},L6:function(){return t}});var t,i=n(82359),o=n(72473);function u(e,r,n){var u=e.owner,s=(e.roles,[{Icon:o.Vz,id:t.WORKSPACES,isSelected:function(){return t.WORKSPACES===n},label:function(){return"Workspaces"},linkProps:{href:"/manage"}}]);return u&&s.push({Icon:o.NO,id:t.USERS,isSelected:function(){return t.USERS===n},label:function(){return"Users"},linkProps:{href:"/manage/users"}}),r==i.k.MAIN&&s.push({Icon:o.Zr,id:t.SETTINGS,isSelected:function(){return t.SETTINGS===n},label:function(){return"Settings"},linkProps:{href:"/manage/settings"}}),s}!function(e){e.WORKSPACES="workspaces",e.USERS="users",e.SETTINGS="settings"}(t||(t={}))},59533:function(e,r,n){"use strict";var t=n(82684),i=n(94629),o=n(35686),u=n(70515),s=n(75083),c=n(50178),a=n(28598);r.Z=function(e){var r=e.before,n=e.breadcrumbs,d=void 0===n?[]:n,l=e.children,f=e.errors,p=e.pageName,v=e.subheaderChildren,b=o.ZP.statuses.list().data,h=(0,t.useMemo)((function(){var e,r;return null===b||void 0===b||null===(e=b.statuses)||void 0===e||null===(r=e[0])||void 0===r?void 0:r.project_type}),[b]),O=(0,c.PR)()||{};return(0,a.jsx)(i.Z,{before:r,beforeWidth:r?50*u.iI:0,breadcrumbs:d,errors:f,navigationItems:(0,s.HF)(O,h,p),subheaderChildren:v,title:"Workspaces",uuid:"workspaces/index",children:l})}},82359:function(e,r,n){"use strict";var t,i;n.d(r,{d:function(){return t},k:function(){return i}}),function(e){e.ADD_NEW_BLOCK_V2="add_new_block_v2",e.DATA_INTEGRATION_IN_BATCH_PIPELINE="data_integration_in_batch_pipeline",e.INTERACTIONS="interactions",e.LOCAL_TIMEZONE="display_local_timezone",e.OPERATION_HISTORY="operation_history"}(t||(t={})),function(e){e.MAIN="main",e.STANDALONE="standalone",e.SUB="sub"}(i||(i={}))},12222:function(e,r,n){"use strict";n.r(r);var t=n(77837),i=n(82394),o=n(38860),u=n.n(o),s=n(82684),c=n(34376),a=n(71180),d=n(85854),l=n(93808),f=n(38276),p=n(75499),v=n(30160),b=n(59533),h=n(35686),O=n(98464),m=n(72473),_=n(70515),j=n(75083),w=n(72619),P=n(50178),g=n(42122),y=n(69419),S=n(28598);function E(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function Z(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?E(Object(n),!0).forEach((function(r){(0,i.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function x(){var e=(0,c.useRouter)(),r=(0,s.useState)(null),n=r[0],t=r[1],i=((0,P.PR)()||{}).owner,o=(0,s.useState)(null),u=o[0],l=o[1],E=h.ZP.users.list({},{revalidateOnFocus:!1}),x=E.data;E.mutate;(0,s.useEffect)((function(){(0,w.bB)(x,t)}),[x]);var k=(0,s.useMemo)((function(){return(null===x||void 0===x?void 0:x.users)||[]}),[null===x||void 0===x?void 0:x.users]),I=h.ZP.users.detail(null===u||void 0===u?void 0:u.user_id,{},{revalidateOnFocus:!1}),N=I.data;I.mutate;(0,s.useEffect)((function(){(0,w.bB)(N,t)}),[N]);var A=null===N||void 0===N?void 0:N.user,C=(0,y.iV)(),R=(0,O.Z)(C);return(0,s.useEffect)((function(){var e=C.add_new_user,r=C.user_id;if(!(0,g.Xy)(C,R)){var n=Z(Z({},R),C);r?n.user_id=r:delete n.user_id,e?n.add_new_user=e:delete n.add_new_user,l(n)}}),[C,R]),(0,S.jsxs)(b.Z,{breadcrumbs:[{label:function(){return"Workspaces"},linkProps:{as:"/manage",href:"/manage"}},{bold:!0,label:function(){return"Users"}}],errors:n,pageName:j.L6.USERS,children:[i&&(0,S.jsx)(f.Z,{p:_.cd,children:(0,S.jsx)(a.Z,{beforeIcon:(0,S.jsx)(m.mm,{}),onClick:function(){return e.push("/manage/users/new")},primary:!0,children:"Add new user"})}),(0,S.jsx)(f.Z,{p:_.cd,children:(0,S.jsx)(d.Z,{children:"Users"})}),(0,S.jsx)(p.Z,{columnFlex:[1,1,1],columns:[{uuid:"Username"},{uuid:"Email"},{uuid:"Role"}],isSelectedRow:function(e){var r;return(null===(r=k[e])||void 0===r?void 0:r.id)===(null===A||void 0===A?void 0:A.id)},onClickRow:function(r){var n,t=null===(n=k[r])||void 0===n?void 0:n.id;e.push("/manage/users/[user]","/manage/users/".concat(t))},rows:k.map((function(e){var r=e.email,n=e.roles_display,t=e.roles_new,i=e.username;return[(0,S.jsx)(v.ZP,{bold:!0,children:i},"username"),(0,S.jsx)(v.ZP,{default:!0,children:r},"email"),(0,S.jsx)(v.ZP,{default:!0,children:t&&t[0]?t[0].name:n},"roles")]})),uuid:"pipeline-runs"})]})}x.getInitialProps=(0,t.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))),r.default=(0,l.Z)(x)},72695:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage/users",function(){return n(12222)}])},80022:function(e,r,n){"use strict";function t(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(r,{Z:function(){return t}})},15544:function(e,r,n){"use strict";function t(e){return t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(e)}n.d(r,{Z:function(){return t}})},99177:function(e,r,n){"use strict";function t(e,r){return t=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},t(e,r)}function i(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&t(e,r)}n.d(r,{Z:function(){return i}})},93189:function(e,r,n){"use strict";n.d(r,{Z:function(){return o}});var t=n(12539),i=n(80022);function o(e,r){if(r&&("object"===t(r)||"function"===typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return(0,i.Z)(e)}}},function(e){e.O(0,[844,2083,8013,600,9696,8264,4666,5499,9774,2888,179],(function(){return r=72695,e(e.s=r);var r}));var r=e.O();_N_E=r}]);