function _defineProperties(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{DMmz:function(e,t,i){"use strict";i.r(t),i.d(t,"AppGameModule",(function(){return A}));var s=i("G7Y8"),r=function e(t,i){_classCallCheck(this,e),this.word=t,this.status=i},n=i("HDdC"),a=function(){function e(){_classCallCheck(this,e),this.maxProgress=0,this.currentProgress=0}return _createClass(e,[{key:"Finished",value:function(){this.again=!0,this.word=""}},{key:"NextWord",value:function(){var e=this;this.word=this.words[Math.floor(Math.random()*this.words.length)],this.words=this.words.filter((function(t){return t!==e.word}))}},{key:"LoadWords",value:function(e){this.words=e||[]}},{key:"Start",value:function(){var e=this;return new n.a((function(t){var i=["Prepare-se!","3","2","1"],s=i.length,r=setInterval((function(){e.word=i.shift(),--s||(clearInterval(r),e.again=!1,t.complete())}),1e3)}))}},{key:"PlayByTime",value:function(e){var t=this;return this.currentProgress=this.maxProgress=e,new n.a((function(e){t.NextWord();var i=setInterval((function(){--t.currentProgress||(clearInterval(i),e.complete())}),1e3)}))}},{key:"PlayByNumberOfWords",value:function(e){this.currentProgress=this.maxProgress=e,this.NextWord()}},{key:"PlayTimeByWord",value:function(e,t){var i=this;return this.currentProgress=this.maxProgress=e,new n.a((function(e){var s=setInterval((function(){i.HasWords&&i.currentProgress--||(clearInterval(s),i.Finished(),e.complete()),i.NextWord(),e.next(new r(i.word,!1))}),t)}))}},{key:"CanClick",get:function(){return void 0!==this.again}},{key:"HasWords",get:function(){return this.words&&this.words.length>0||0===this.words.length&&!!this.word}}]),e}(),o=function(){function e(){_classCallCheck(this,e),this.score=0,this.ClearHistoric()}return _createClass(e,[{key:"IsPlayerAddict",value:function(){return this.score===this.category.data.length}},{key:"SetPlayer",value:function(e){this.player=e||"An\xf4nimo"}},{key:"SetCategory",value:function(e){var t=JSON.parse(localStorage.getItem("categories"));this.category=t.find((function(t){return t.id===e}))}},{key:"IncorrectAnswer",value:function(e,t){this.AddHistoric(new r(e,!1)),this.score>0&&t&&this.score--}},{key:"RightAnswer",value:function(e){this.AddHistoric(new r(e,!0)),this.score++}},{key:"ClearHistoric",value:function(){this.score=0,this.historic=new Array}},{key:"AddHistoric",value:function(e){this.historic.push(e)}}]),e}(),c=function e(t,i){_classCallCheck(this,e),this.player=t,this.score=i},u=i("M4Nl"),l=i("sNC9"),h=i("fXoL"),d=i("tyNb"),m=i("ofXK"),f=["audioSuccess"],b=["audioError"],g=["audioFinalGame"];function v(e,t){if(1&e&&h.Kb(0,"progress",15),2&e){var i=h.Wb();h.Yb("value",i.vm.currentProgress),h.Yb("max",i.vm.maxProgress)}}function y(e,t){1&e&&(h.Mb(0,"div",23),h.Kb(1,"a",24),h.Mb(2,"p"),h.gc(3,"Parab\xe9ns voc\xea \xe9 um viciado!"),h.Lb(),h.Lb())}function k(e,t){if(1&e&&(h.Mb(0,"p",16),h.Mb(1,"del"),h.gc(2),h.Lb(),h.Lb()),2&e){var i=h.Wb().$implicit;h.zb(2),h.hc(i.word)}}function p(e,t){if(1&e&&(h.Mb(0,"p",16),h.gc(1),h.Lb()),2&e){var i=h.Wb().$implicit;h.zb(1),h.ic(" ",i.word," ")}}function w(e,t){if(1&e&&(h.Mb(0,"li",25),h.fc(1,k,3,1,"p",26),h.fc(2,p,2,1,"p",26),h.Lb()),2&e){var i=t.$implicit;h.zb(1),h.Xb("ngIf",!i.status),h.zb(1),h.Xb("ngIf",i.status)}}function P(e,t){if(1&e){var i=h.Nb();h.Mb(0,"div"),h.Mb(1,"h4",16),h.Kb(2,"span",17),h.gc(3),h.Kb(4,"span",17),h.Lb(),h.fc(5,y,4,0,"div",18),h.Kb(6,"hr"),h.Mb(7,"div",19),h.Mb(8,"ul",20),h.fc(9,w,3,2,"li",21),h.Lb(),h.Lb(),h.Kb(10,"hr"),h.Mb(11,"button",22),h.Ub("click",(function(){return h.cc(i),h.Wb().play()})),h.gc(12," JOGAR NOVAMENTE "),h.Lb(),h.Lb()}if(2&e){var s=h.Wb();h.zb(3),h.jc(" ",s.game.player," fez ",s.game.score," ponto(s) "),h.zb(2),h.Xb("ngIf",s.vm.isPlayerAddict),h.zb(4),h.Xb("ngForOf",s.game.historic)}}var M,W,C=function(){return["/home"]},I=[{path:"",component:(M=function(){function e(t){_classCallCheck(this,e),this.activatedRoute=t,this.game=new o,this.vm=new a}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.settings=new u.a,this.activatedRoute.queryParams.subscribe((function(t){e.game.SetCategory(+t.id)})),this.whoIsPlaying()}},{key:"whoIsPlaying",value:function(){var e=this;UIkit.modal.prompt("Digite seu nome:","").then((function(t){e.game.SetPlayer(t),e.notificate("Vamos jogar "+e.game.player),e.play()}))}},{key:"play",value:function(){this.audioFinalGame.nativeElement.pause(),this.game.ClearHistoric(),this.vm.LoadWords(this.game.category.data);var e=this;this.vm.Start().subscribe({complete:function(){e.callGameByMode()}})}},{key:"callGameByMode",value:function(){var e=this;switch(this.settings.gameMode){case l.a.ModeByTime:this.vm.PlayByTime(this.secoundsOfGame).subscribe({complete:function(){e.saveScoreResult()}});break;case l.a.ModeNumberOfWords:this.vm.PlayByNumberOfWords(this.settings.modeNumberOfWords.numberOfWords);break;case l.a.ModeTimeByWord:this.playTimePerWords();break;default:this.notificate("Este modo de jogo n\xe3o existe!","warning",10)}}},{key:"playTimePerWords",value:function(){var e=this;this.vm.PlayTimeByWord(this.settings.modeTimeByWord.numberOfWords,+this.settings.modeTimeByWord.time).subscribe({next:function(t){e.game.AddHistoric(t)},complete:function(){e.computeResult()}})}},{key:"rightAnswer",value:function(){this.audioSuccess.nativeElement.play(),this.notificate("Acertou!","success",.8),this.game.RightAnswer(this.vm.word)}},{key:"incorrectAnswer",value:function(){this.audioError.nativeElement.play(),this.notificate("Errou!","danger",.8),this.game.IncorrectAnswer(this.vm.word,this.settings.losePointsWhenWrong)}},{key:"computeResult",value:function(){var e=this;UIkit.modal.prompt("Pontua\xe7\xe3o:","").then((function(t){e.game.score=+t||0,e.saveScoreResult()}))}},{key:"saveScoreResult",value:function(){this.audioFinalGame.nativeElement.play(),this.vm.isPlayerAddict=this.game.IsPlayerAddict(),s.a.AddResult(new c(this.game.player,this.game.score)),this.vm.Finished()}},{key:"notificate",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"primary",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3;UIkit.notification({message:e,status:t,pos:"bottom-center",timeout:1e3*i})}},{key:"onClick",value:function(e){var t=e.target,i=t.offsetWidth,s=e.clientX-t.getBoundingClientRect().left;this.vm.CanClick&&this.settings.gameMode!==l.a.ModeTimeByWord&&(!this.vm.HasWords||this.vm.currentProgress<=0?this.saveScoreResult():(i/2>s?this.rightAnswer():this.incorrectAnswer(),this.vm.NextWord()))}},{key:"secoundsOfGame",get:function(){return Math.round(this.settings.modeByTime.time/1e3*100)/100}}]),e}(),M.\u0275fac=function(e){return new(e||M)(h.Jb(d.a))},M.\u0275cmp=h.Db({type:M,selectors:[["app-game"]],viewQuery:function(e,t){var i;1&e&&(h.kc(f,!0),h.kc(b,!0),h.kc(g,!0)),2&e&&(h.bc(i=h.Vb())&&(t.audioSuccess=i.first),h.bc(i=h.Vb())&&(t.audioError=i.first),h.bc(i=h.Vb())&&(t.audioFinalGame=i.first))},decls:21,vars:5,consts:[["data-src","../../../WhoAmI/assets/images/others/cover.jpg","uk-img","",1,"uk-height-viewport","uk-flex","uk-flex-center","uk-flex-middle","uk-background-cover","uk-ligth",3,"click"],[1,"uk-overlay","uk-ligth","uk-position-top-right"],[3,"routerLink"],["uk-icon","sign-out"],[1,"uk-margin"],[1,"uk-text-white-80"],["class","uk-progress",3,"value","max",4,"ngIf"],[4,"ngIf"],["audioSuccess",""],["src","../../../WhoAmI/assets/audios/success_answer.mp3","type","audio/mp3"],["audioError",""],["src","../../../WhoAmI/assets/audios/wrong_answer.mp3","type","audio/mp3"],["loop",""],["audioFinalGame",""],["src","../../../WhoAmI/assets/audios/final_game_result.mp3","type","audio/mp3"],[1,"uk-progress",3,"value","max"],[1,"uk-text-white-30"],["uk-icon","star"],["class","uk-alert-danger","uk-alert","",4,"ngIf"],[1,"uk-panel","uk-panel-scrollable"],[1,"uk-list"],["class","uk-margin-left",4,"ngFor","ngForOf"],[1,"uk-button","uk-button-primary","uk-width-1-1",3,"click"],["uk-alert","",1,"uk-alert-danger"],["uk-close","",1,"uk-alert-close"],[1,"uk-margin-left"],["class","uk-text-white-30",4,"ngIf"]],template:function(e,t){1&e&&(h.Mb(0,"div",0),h.Ub("click",(function(e){return t.onClick(e)})),h.Mb(1,"div",1),h.Mb(2,"a",2),h.Kb(3,"span",3),h.gc(4," SAIR"),h.Lb(),h.Lb(),h.Mb(5,"div",4),h.Mb(6,"div"),h.Mb(7,"p",5),h.gc(8),h.Lb(),h.fc(9,v,1,2,"progress",6),h.Lb(),h.fc(10,P,13,4,"div",7),h.Lb(),h.Lb(),h.Mb(11,"div"),h.Mb(12,"audio",null,8),h.Kb(14,"source",9),h.Lb(),h.Mb(15,"audio",null,10),h.Kb(17,"source",11),h.Lb(),h.Mb(18,"audio",12,13),h.Kb(20,"source",14),h.Lb(),h.Lb()),2&e&&(h.zb(2),h.Xb("routerLink",h.ac(4,C)),h.zb(6),h.ic(" ",t.vm.word," "),h.zb(1),h.Xb("ngIf",!t.vm.again),h.zb(1),h.Xb("ngIf",t.vm.again&&0!==t.game.score))},directives:[d.d,m.i,m.h],encapsulation:2}),M),data:{animation:"GamePage"}}],A=((W=function e(){_classCallCheck(this,e)}).\u0275mod=h.Hb({type:W}),W.\u0275inj=h.Gb({factory:function(e){return new(e||W)},imports:[[m.b,d.e.forChild(I)],d.e]}),W)}}]);