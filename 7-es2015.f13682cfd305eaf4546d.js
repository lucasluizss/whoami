(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{DMmz:function(t,e,s){"use strict";s.r(e),s.d(e,"AppGameModule",(function(){return A}));var i=s("G7Y8");class r{constructor(t,e){this.word=t,this.status=e}}var o=s("HDdC");class a{constructor(){this.maxProgress=0,this.currentProgress=0}Finished(){this.again=!0,this.word=""}NextWord(){this.word=this.words[Math.floor(Math.random()*this.words.length)],this.words=this.words.filter(t=>t!==this.word)}LoadWords(t){this.words=t||[]}get CanClick(){return void 0!==this.again}get HasWords(){return this.words&&this.words.length>0||0===this.words.length&&!!this.word}Start(){return new o.a(t=>{const e=["Prepare-se!","3","2","1"];let s=e.length;const i=setInterval(()=>{this.word=e.shift(),s--||(clearInterval(i),this.again=!1,t.complete())},1e3)})}PlayByTime(t){return this.currentProgress=this.maxProgress=t,new o.a(t=>{this.NextWord();const e=setInterval(()=>{--this.currentProgress<=0&&(clearInterval(e),t.complete())},1e3)})}PlayByNumberOfWords(t){this.currentProgress=this.maxProgress=t,this.NextWord()}PlayTimeByWord(t,e){return this.currentProgress=this.maxProgress=t,new o.a(t=>{const s=setInterval(()=>{this.HasWords&&this.currentProgress--||(clearInterval(s),this.Finished(),t.complete()),this.NextWord(),t.next(new r(this.word,!0))},e)})}}class n{constructor(){this.score=0,this.ClearHistoric()}IsPlayerAddict(){return this.score===this.category.data.length}SetPlayer(t){this.player=t||"An\xf4nimo"}SetCategory(t){const e=JSON.parse(localStorage.getItem("categories"));this.category=e.find(e=>e.id===t)}IncorrectAnswer(t,e){this.AddHistoric(new r(t,!1)),this.score>0&&e&&this.score--}RightAnswer(t){this.AddHistoric(new r(t,!0)),this.score++}ClearHistoric(){this.score=0,this.historic=new Array}AddHistoric(t){this.historic.push(t)}}class c{constructor(t,e){this.player=t,this.score=e}}var u=s("M4Nl"),d=s("sNC9"),h=s("fXoL"),l=s("tyNb"),m=s("ofXK");const g=["audioSuccess"],b=["audioError"],p=["audioFinalGame"];function f(t,e){if(1&t&&h.Kb(0,"progress",15),2&t){const t=h.Wb();h.Yb("value",t.vm.currentProgress),h.Yb("max",t.vm.maxProgress)}}function v(t,e){1&t&&(h.Mb(0,"div",23),h.Kb(1,"a",24),h.Mb(2,"p"),h.gc(3,"Parab\xe9ns voc\xea \xe9 um viciado!"),h.Lb(),h.Lb())}function w(t,e){if(1&t&&(h.Mb(0,"p",16),h.Mb(1,"del"),h.gc(2),h.Lb(),h.Lb()),2&t){const t=h.Wb().$implicit;h.zb(2),h.hc(t.word)}}function y(t,e){if(1&t&&(h.Mb(0,"p",16),h.gc(1),h.Lb()),2&t){const t=h.Wb().$implicit;h.zb(1),h.ic(" ",t.word," ")}}function k(t,e){if(1&t&&(h.Mb(0,"li",25),h.fc(1,w,3,1,"p",26),h.fc(2,y,2,1,"p",26),h.Lb()),2&t){const t=e.$implicit;h.zb(1),h.Xb("ngIf",!t.status),h.zb(1),h.Xb("ngIf",t.status)}}function M(t,e){if(1&t){const t=h.Nb();h.Mb(0,"div"),h.Mb(1,"h4",16),h.Kb(2,"span",17),h.gc(3),h.Kb(4,"span",17),h.Lb(),h.fc(5,v,4,0,"div",18),h.Kb(6,"hr"),h.Mb(7,"div",19),h.Mb(8,"ul",20),h.fc(9,k,3,2,"li",21),h.Lb(),h.Lb(),h.Kb(10,"hr"),h.Mb(11,"button",22),h.Ub("click",(function(){return h.cc(t),h.Wb().play()})),h.gc(12," JOGAR NOVAMENTE "),h.Lb(),h.Lb()}if(2&t){const t=h.Wb();h.zb(3),h.jc(" ",t.game.player," fez ",t.game.score," ponto(s) "),h.zb(2),h.Xb("ngIf",t.vm.isPlayerAddict),h.zb(4),h.Xb("ngForOf",t.game.historic)}}const P=function(){return["/home"]},W=[{path:"",component:(()=>{class t{constructor(t){this.activatedRoute=t,this.game=new n,this.vm=new a}ngOnInit(){this.settings=new u.a,this.configureSound(),this.activatedRoute.queryParams.subscribe(t=>{this.game.SetCategory(+t.id)}),this.whoIsPlaying()}get secoundsOfGame(){return Math.round(this.settings.modeByTime.time/1e3*100)/100}whoIsPlaying(){UIkit.modal.prompt("Digite seu nome:","").then(t=>{this.game.SetPlayer(t),this.notificate("Vamos jogar "+this.game.player),this.play()})}play(){this.audioFinalGame.nativeElement.pause(),this.game.ClearHistoric(),this.vm.LoadWords(this.game.category.data);const t=this;this.vm.Start().subscribe({complete(){t.callGameByMode()}})}callGameByMode(){const t=this;switch(this.settings.gameMode){case d.a.ModeByTime:this.vm.PlayByTime(this.secoundsOfGame).subscribe({complete(){t.saveScoreResult()}});break;case d.a.ModeNumberOfWords:this.vm.PlayByNumberOfWords(this.settings.modeNumberOfWords.numberOfWords);break;case d.a.ModeTimeByWord:this.playTimePerWords();break;default:this.notificate("Este modo de jogo n\xe3o existe!","warning",10)}}playTimePerWords(){const t=this;this.vm.PlayTimeByWord(this.settings.modeTimeByWord.numberOfWords,+this.settings.modeTimeByWord.time).subscribe({next(e){t.game.AddHistoric(e)},complete(){t.computeResult()}})}rightAnswer(){this.notificate("Acertou!","success",.8),this.game.RightAnswer(this.vm.word)}incorrectAnswer(){this.notificate("Errou!","danger",.8),this.game.IncorrectAnswer(this.vm.word,this.settings.losePointsWhenWrong)}computeResult(){UIkit.modal.prompt("Pontua\xe7\xe3o:","").then(t=>{this.game.score=+t||-1,this.saveScoreResult()})}saveScoreResult(){this.settings.soundEnabled&&this.audioFinalGame.nativeElement.play(),this.vm.isPlayerAddict=this.game.IsPlayerAddict(),i.a.AddResult(new c(this.game.player,this.game.score)),this.vm.Finished()}notificate(t,e="primary",s=3){this.checkNotificationSound(e),UIkit.notification({message:t,status:e,pos:"bottom-center",timeout:1e3*s})}checkNotificationSound(t){this.settings.soundEnabled&&("success"===t&&this.audioSuccess.nativeElement.play(),"danger"===t&&this.audioError.nativeElement.play())}onClick(t){const e=t.target,s=e.offsetWidth,i=t.clientX-e.getBoundingClientRect().left;this.vm.CanClick&&this.settings.gameMode!==d.a.ModeTimeByWord&&(!this.vm.HasWords||this.vm.currentProgress<=0?this.saveScoreResult():(this.settings.gameMode===d.a.ModeNumberOfWords&&--this.vm.currentProgress,this.checkAnswer(s,i)))}checkAnswer(t,e){t/2>e?this.rightAnswer():this.incorrectAnswer(),this.vm.NextWord()}configureSound(){document.querySelectorAll("video, audio").forEach(t=>{t.muted=!this.settings.soundEnabled,this.settings.soundEnabled||t.pause()})}}return t.\u0275fac=function(e){return new(e||t)(h.Jb(l.a))},t.\u0275cmp=h.Db({type:t,selectors:[["app-game"]],viewQuery:function(t,e){var s;1&t&&(h.kc(g,!0),h.kc(b,!0),h.kc(p,!0)),2&t&&(h.bc(s=h.Vb())&&(e.audioSuccess=s.first),h.bc(s=h.Vb())&&(e.audioError=s.first),h.bc(s=h.Vb())&&(e.audioFinalGame=s.first))},decls:21,vars:5,consts:[["data-src","assets/images/others/cover.jpg","uk-img","",1,"uk-height-viewport","uk-flex","uk-flex-center","uk-flex-middle","uk-background-cover","uk-ligth",3,"click"],[1,"uk-overlay","uk-ligth","uk-position-top-right"],[3,"routerLink"],["uk-icon","sign-out"],[1,"uk-margin"],[1,"uk-text-white-80"],["class","uk-progress",3,"value","max",4,"ngIf"],[4,"ngIf"],["audioSuccess",""],["src","assets/audios/success_answer.mp3","type","audio/mp3"],["audioError",""],["src","assets/audios/wrong_answer.mp3","type","audio/mp3"],["loop",""],["audioFinalGame",""],["src","assets/audios/final_game_result.mp3","type","audio/mp3"],[1,"uk-progress",3,"value","max"],[1,"uk-text-white-30"],["uk-icon","star"],["class","uk-alert-danger","uk-alert","",4,"ngIf"],[1,"uk-panel","uk-panel-scrollable"],[1,"uk-list"],["class","uk-margin-left",4,"ngFor","ngForOf"],[1,"uk-button","uk-button-primary","uk-width-1-1",3,"click"],["uk-alert","",1,"uk-alert-danger"],["uk-close","",1,"uk-alert-close"],[1,"uk-margin-left"],["class","uk-text-white-30",4,"ngIf"]],template:function(t,e){1&t&&(h.Mb(0,"div",0),h.Ub("click",(function(t){return e.onClick(t)})),h.Mb(1,"div",1),h.Mb(2,"a",2),h.Kb(3,"span",3),h.gc(4," SAIR"),h.Lb(),h.Lb(),h.Mb(5,"div",4),h.Mb(6,"div"),h.Mb(7,"p",5),h.gc(8),h.Lb(),h.fc(9,f,1,2,"progress",6),h.Lb(),h.fc(10,M,13,4,"div",7),h.Lb(),h.Lb(),h.Mb(11,"div"),h.Mb(12,"audio",null,8),h.Kb(14,"source",9),h.Lb(),h.Mb(15,"audio",null,10),h.Kb(17,"source",11),h.Lb(),h.Mb(18,"audio",12,13),h.Kb(20,"source",14),h.Lb(),h.Lb()),2&t&&(h.zb(2),h.Xb("routerLink",h.ac(4,P)),h.zb(6),h.ic(" ",e.vm.word," "),h.zb(1),h.Xb("ngIf",!e.vm.again),h.zb(1),h.Xb("ngIf",e.vm.again&&0!==e.game.score))},directives:[l.d,m.i,m.h],encapsulation:2}),t})(),data:{animation:"GamePage"}}];let A=(()=>{class t{}return t.\u0275mod=h.Hb({type:t}),t.\u0275inj=h.Gb({factory:function(e){return new(e||t)},imports:[[m.b,l.e.forChild(W)],l.e]}),t})()}}]);