(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{XWda:function(e,t,i){"use strict";i.r(t),i.d(t,"AppHomeModule",(function(){return l}));var o=i("Jho9"),r=i("AzD4"),s=i("fXoL"),n=i("tyNb"),a=i("ofXK");function c(e,t){if(1&e){const e=s.Nb();s.Mb(0,"li"),s.Kb(1,"img",6),s.Mb(2,"div",7),s.gc(3),s.Lb(),s.Mb(4,"a",8),s.Ub("click",(function(){s.cc(e);const i=t.$implicit;return s.Wb().goUrl("/game/play",i.id)})),s.Mb(5,"div",9),s.Mb(6,"div",10),s.Mb(7,"p",11),s.gc(8),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb()}if(2&e){const e=t.$implicit;s.zb(1),s.Zb("src","../../../WhoAmI/assets/images/categories/",e.id,".jpg",s.dc),s.zb(2),s.hc(e.authorImage),s.zb(5),s.hc(e.title)}}const u=[{path:"",component:(()=>{class e{constructor(e){this.router=e}ngOnInit(){this.loadCategory()}loadCategory(){this.categories=r.categories,localStorage.setItem("categories",JSON.stringify(r.categories))}goUrl(e,t){this.router.navigate([e],{queryParams:{id:t}})}}return e.\u0275fac=function(t){return new(t||e)(s.Jb(n.b))},e.\u0275cmp=s.Db({type:e,selectors:[["app-home"]],decls:6,vars:1,consts:[["uk-slideshow","autoplay: true"],["tabindex","-1",1,"uk-position-relative","uk-visible-toggle","uk-light"],[1,"uk-slideshow-items"],[4,"ngFor","ngForOf"],["href","#","uk-slidenav-previous","","uk-slideshow-item","previous",1,"uk-position-center-left","uk-position-large","uk-overlay-primary"],["href","#","uk-slidenav-next","","uk-slideshow-item","next",1,"uk-position-center-right","uk-position-large","uk-overlay-primary"],["alt","","uk-cover","",3,"src"],[1,"uk-position-bottom-right","uk-overlay","uk-overlay-secoundary"],[1,"uk-position-center","uk-position-large","uk-text-center",3,"click"],["uk-slideshow-parallax","x: 200,-200"],[1,"uk-tile","uk-tile-secondary"],[1,"uk-h4",2,"color","white","font-size","60px"]],template:function(e,t){1&e&&(s.Mb(0,"div",0),s.Mb(1,"div",1),s.Mb(2,"ul",2),s.fc(3,c,9,3,"li",3),s.Lb(),s.Kb(4,"a",4),s.Kb(5,"a",5),s.Lb(),s.Lb()),2&e&&(s.zb(3),s.Xb("ngForOf",t.categories))},directives:[a.h],encapsulation:2}),e})(),data:{animation:"HomePage"}}];let l=(()=>{class e{}return e.\u0275mod=s.Hb({type:e}),e.\u0275inj=s.Gb({factory:function(t){return new(t||e)},imports:[[a.b,n.e.forChild(u),o.a.register("/ngsw-worker.js",{enabled:!0})],n.e]}),e})()}}]);