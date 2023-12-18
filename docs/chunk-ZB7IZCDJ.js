import{A as E,B as P,C as w,D as F,E as D,F as Y,G as j,H as g,I as N,J as Z,K as ee,O as M,Q as te,R as ie,S as H,W as O,X as I,Y as ne,a as U,b as J,c as A,d as C,e as q,f as L,g as W,h as f,i as R,j as G,k as K,l as T,m as s,n as h,o as m,p as d,q as r,r as o,s as p,t as Q,u as b,v as S,w as X,x as B,y as a,z as u}from"./chunk-M4BAMBRV.js";var y=(()=>{let e=class e{constructor(n){this.apiURL="https://restcountries.com/v3.1",this.cacheStore={byCapital:{term:"",countries:[]},byCountries:{term:"",countries:[]},byRegion:{region:"",countries:[]}},this.loadToLocalStorage(),this.httpClient=n}saveToLocalStorage(){localStorage.setItem("cacheStore",JSON.stringify(this.cacheStore))}loadToLocalStorage(){localStorage.getItem("cacheStore")&&(this.cacheStore=JSON.parse(localStorage.getItem("cacheStore")))}getCountriesRequest(n){return this.httpClient.get(n).pipe(A(()=>U([])))}searchCountryByAlhpaCode(n){let i=`${this.apiURL}/alpha/${n}`;return this.httpClient.get(i).pipe(J(c=>c.length>0?c[0]:null),A(()=>U(null)))}searchCapital(n){let i=`${this.apiURL}/capital/${n}`;return this.getCountriesRequest(i).pipe(C(c=>this.cacheStore.byCapital={term:n,countries:c}),C(()=>this.saveToLocalStorage()))}searchCountry(n){let i=`${this.apiURL}/name/${n}`;return this.getCountriesRequest(i).pipe(C(c=>this.cacheStore.byCountries={term:n,countries:c}),C(()=>this.saveToLocalStorage()))}searchRegion(n){let i=`${this.apiURL}/region/${n}`;return this.getCountriesRequest(i).pipe(C(c=>this.cacheStore.byRegion={region:n,countries:c}),C(()=>this.saveToLocalStorage()))}};e.\u0275fac=function(i){return new(i||e)(W(ee))},e.\u0275prov=q({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function pe(t,e){t&1&&(r(0,"div",2),a(1,` There are not countries to show.
`),o())}var ue=t=>["/countries/by",t];function de(t,e){if(t&1&&(r(0,"tr")(1,"td"),a(2),o(),r(3,"td"),a(4),o(),r(5,"td"),p(6,"img",6),o(),r(7,"td"),a(8),o(),r(9,"td"),a(10),o(),r(11,"td"),a(12),w(13,"number"),o(),r(14,"td")(15,"a",7),a(16,"Details"),o()()()),t&2){let l=e.$implicit,n=e.index;s(2),u(n+1),s(2),u(l.flag),s(2),X("src",l.flags.svg,T),s(2),u(l.name.common),s(2),u(l.capital),s(2),u(F(13,7,l.population)),s(3),m("routerLink",P(9,ue,l.cca3))}}function he(t,e){if(t&1&&(r(0,"div",3)(1,"table",4)(2,"thead")(3,"tr")(4,"th"),a(5,"#"),o(),r(6,"th"),a(7,"Icon"),o(),r(8,"th"),a(9,"Flag"),o(),r(10,"th"),a(11,"Name"),o(),r(12,"th"),a(13,"Capital"),o(),r(14,"th"),a(15,"People"),o()()(),r(16,"tbody"),d(17,de,17,11,"tr",5),o()()()),t&2){let l=S();s(17),m("ngForOf",l.countries)}}var _=(()=>{let e=class e{constructor(){this.countries=[]}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=f({type:e,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],["table",""],[1,"alert","alert-warning","text-center"],[1,"table-responsive-sm"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],["alt","",3,"src"],[3,"routerLink"]],template:function(i,c){if(i&1&&d(0,pe,2,0,"div",0)(1,he,18,1,"ng-template",null,1,D),i&2){let v=B(2);m("ngIf",c.countries.length===0)("ngIfElse",v)}},dependencies:[j,g,ie,N],styles:["img[_ngcontent-%COMP%]{width:35px}"]});let t=e;return t})();function ge(t,e){t&1&&p(0,"shared-loading-spinner")}var ae=(()=>{let e=class e{constructor(n){this.countriesList=[],this.isLoading=!1,this.countriesService=n}ngOnInit(){this.countriesList=this.countriesService.cacheStore.byCapital.countries,this.initialValueInput=this.countriesService.cacheStore.byCapital.term}searchByCapital(n){this.isLoading=!0,this.countriesService.searchCapital(n).subscribe(i=>{this.countriesList=i,this.isLoading=!1})}};e.\u0275fac=function(i){return new(i||e)(h(y))},e.\u0275cmp=f({type:e,selectors:[["countries-by-capital-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeHolder","Search By Capital..",3,"initialValue","onDebounce"],[1,"ro"],[4,"ngIf"],[3,"countries"]],template:function(i,c){i&1&&(r(0,"h2"),a(1,"By Capital"),o(),p(2,"hr"),r(3,"div",0)(4,"div",1)(5,"shared-search-box",2),b("onDebounce",function(k){return c.searchByCapital(k)}),o()()(),r(6,"div",3)(7,"div",1),p(8,"hr"),d(9,ge,1,0,"shared-loading-spinner",4),p(10,"countries-table",5),o()()),i&2&&(s(5),m("initialValue",c.initialValueInput),s(4),m("ngIf",c.isLoading),s(1),m("countries",c.countriesList))},dependencies:[g,O,I,_]});let t=e;return t})();function ye(t,e){t&1&&p(0,"shared-loading-spinner")}var se=(()=>{let e=class e{constructor(n,i){this.isLoading=!1,this.countriesList=[],this.countryService=i,this.activatedRoute=n}ngOnInit(){this.countriesList=this.countryService.cacheStore.byCountries.countries,this.initialValueInput=this.countryService.cacheStore.byCountries.term}searchByCountry(n){this.isLoading=!0,this.countryService.searchCountry(n).subscribe(i=>{this.countriesList=i,this.isLoading=!1})}};e.\u0275fac=function(i){return new(i||e)(h(M),h(y))},e.\u0275cmp=f({type:e,selectors:[["app-by-countrie-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeHolder","Search By Country..",3,"initialValue","onDebounce"],[1,"ro"],[4,"ngIf"],[3,"countries"]],template:function(i,c){i&1&&(r(0,"h2"),a(1,"By Country"),o(),p(2,"hr"),r(3,"div",0)(4,"div",1)(5,"shared-search-box",2),b("onDebounce",function(k){return c.searchByCountry(k)}),o()()(),r(6,"div",3)(7,"div",1),p(8,"hr"),d(9,ye,1,0,"shared-loading-spinner",4),p(10,"countries-table",5),o()()),i&2&&(s(5),m("initialValue",c.initialValueInput),s(4),m("ngIf",c.isLoading),s(1),m("countries",c.countriesList))},dependencies:[g,O,I,_]});let t=e;return t})();var ve=t=>({"btn-outline-primary":t});function Ce(t,e){if(t&1){let l=Q();r(0,"button",6),b("click",function(){let c=G(l).$implicit,v=S();return K(v.searchByRegion(c))}),a(1),o()}if(t&2){let l=e.$implicit,n=S();m("ngClass",P(2,ve,n.selectedRegion===l)),s(1),E("",l," ")}}function Se(t,e){t&1&&p(0,"shared-loading-spinner")}var ce=(()=>{let e=class e{constructor(n){this.countriesList=[],this.regions=["Africa","Americas","Asia","Europe","Oceania"],this.isLoading=!1,this.countryService=n}ngOnInit(){this.countriesList=this.countryService.cacheStore.byRegion.countries,this.selectedRegion=this.countryService.cacheStore.byRegion.region}searchByRegion(n){this.isLoading=!0,this.selectedRegion=n,this.countryService.searchRegion(n).subscribe(i=>this.countriesList=i),this.isLoading=!1}};e.\u0275fac=function(i){return new(i||e)(h(y))},e.\u0275cmp=f({type:e,selectors:[["app-by-region-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col","text-center"],["class","btn mx-2",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col"],[4,"ngIf"],[3,"countries"],[1,"btn","mx-2",3,"ngClass","click"]],template:function(i,c){i&1&&(r(0,"h2"),a(1,"By Region"),o(),p(2,"hr"),r(3,"div",0)(4,"div",1),d(5,Ce,2,4,"button",2),o()(),r(6,"div",0)(7,"div",3),p(8,"hr"),d(9,Se,1,0,"shared-loading-spinner",4),p(10,"countries-table",5),o()()),i&2&&(s(5),m("ngForOf",c.regions),s(4),m("ngIf",c.isLoading),s(1),m("countries",c.countriesList))},dependencies:[Y,j,g,I,_]});let t=e;return t})();function xe(t,e){t&1&&(r(0,"div",2),a(1," Wait Please... "),o())}function be(t,e){if(t&1&&(r(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),a(4,"Country: "),r(5,"strong"),a(6),o()(),p(7,"hr"),o()(),r(8,"div",3)(9,"div",5)(10,"h3"),a(11,"Flag"),o(),p(12,"img",6),o(),r(13,"div",7)(14,"h3"),a(15,"Information: "),o(),r(16,"ul",8)(17,"li",9)(18,"strong"),a(19,"People:"),o(),a(20),w(21,"number"),o(),r(22,"li",9)(23,"strong"),a(24,"Numeric Code:"),o(),a(25),o()()()(),r(26,"div",10)(27,"div",7)(28,"h3"),a(29,"Translations"),o(),r(30,"div",11)(31,"span",12),a(32),o(),r(33,"span",12),a(34),o(),r(35,"span",12),a(36),o(),r(37,"span",12),a(38),o(),r(39,"span",12),a(40),o()()()()()),t&2){let l=S();s(6),u(l.country.name.common),s(6),m("src",l.country.flags.svg,T)("alt",l.country.name.common),s(8),E(" ",F(21,10,l.country.population)," "),s(5),E(" ",l.country.cca3," "),s(7),u(l.country.translations.ara==null?null:l.country.translations.ara.common),s(2),u(l.country.translations.es==null?null:l.country.translations.es.common),s(2),u(l.country.translations.fra==null?null:l.country.translations.fra.common),s(2),u(l.country.translations.ja==null?null:l.country.translations.ja.common),s(2),u(l.country.translations.br==null?null:l.country.translations.br.common)}}var le=(()=>{let e=class e{constructor(n,i,c){this.activatedRoute=n,this.countriesService=i,this.router=c}ngOnInit(){this.activatedRoute.params.subscribe(({id:n})=>{this.searchCountry(n)})}searchCountry(n){this.countriesService.searchCountryByAlhpaCode(n).subscribe(i=>{if(!i)return this.router.navigateByUrl("");this.country=i,console.log(this.country)})}};e.\u0275fac=function(i){return new(i||e)(h(M),h(y),h(te))},e.\u0275cmp=f({type:e,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(i,c){if(i&1&&d(0,xe,2,0,"ng-template",null,0,D)(2,be,41,12,"div",1),i&2){let v=B(1);s(2),m("ngIf",c.country)("ngIfElse",v)}},dependencies:[g,N]});let t=e;return t})();var Ie=[{path:"by-capital",component:ae},{path:"by-country",component:se},{path:"by-region",component:ce},{path:"by/:id",component:le},{path:"**",redirectTo:"by-country"}],me=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=R({type:e}),e.\u0275inj=L({imports:[H.forChild(Ie),H]});let t=e;return t})();var Ke=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=R({type:e}),e.\u0275inj=L({imports:[Z,me,ne]});let t=e;return t})();export{Ke as CountriesModule};