import{L as l,M as d,N as f,P as u,S as a,T as h,U as C,V as y,Y as M,f as r,h as c,i,q as m,r as s,s as p}from"./chunk-M4BAMBRV.js";var g=(()=>{let t=class t{constructor(){this.title="countryApp"}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c({type:t,selectors:[["app-root"]],decls:5,vars:0,consts:[[1,"row","mt-4"],[1,"col-4"],[1,"col"]],template:function(e,j){e&1&&(m(0,"div",0)(1,"div",1),p(2,"shared-sidebar"),s(),m(3,"div",2),p(4,"router-outlet"),s()())},dependencies:[h,u]});let o=t;return o})();var N=[{path:"about",component:C},{path:"contact",component:y},{path:"countries",loadChildren:()=>import("./chunk-ZB7IZCDJ.js").then(o=>o.CountriesModule)},{path:"**",redirectTo:"countries/by-country"}],v=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t}),t.\u0275inj=r({imports:[a.forRoot(N),a]});let o=t;return o})();var w=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t,bootstrap:[g]}),t.\u0275inj=r({imports:[f,M,v,l]});let o=t;return o})();d().bootstrapModule(w).catch(o=>console.error(o));