import{D as l,E as d,F as f,H as u,I as a,J as h,K as C,L as y,N as M,d as r,f as c,g as i,m,n as s,o as p}from"./chunk-NCPGYR2E.js";var g=(()=>{let t=class t{constructor(){this.title="countryApp"}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c({type:t,selectors:[["app-root"]],decls:5,vars:0,consts:[[1,"row","mt-4"],[1,"col-3"],[1,"col"]],template:function(e,j){e&1&&(m(0,"div",0)(1,"div",1),p(2,"shared-sidebar"),s(),m(3,"div",2),p(4,"router-outlet"),s()())},dependencies:[h,u]});let o=t;return o})();var N=[{path:"about",component:C},{path:"contact",component:y},{path:"countries",loadChildren:()=>import("./chunk-LGGCNWW4.js").then(o=>o.CountriesModule)},{path:"**",redirectTo:"countries/by-country"}],v=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t}),t.\u0275inj=r({imports:[a.forRoot(N),a]});let o=t;return o})();var w=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t,bootstrap:[g]}),t.\u0275inj=r({imports:[f,M,v,l]});let o=t;return o})();d().bootstrapModule(w).catch(o=>console.error(o));