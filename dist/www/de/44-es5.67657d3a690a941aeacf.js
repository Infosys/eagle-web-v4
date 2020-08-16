/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3"*/
(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{JRSQ:function(t,n,e){"use strict";e.r(n);var i=e("CcnG"),r=function(){return function(){}}(),o=e("pMnS"),a=e("bujt"),s=e("UodH"),u=e("dWZg"),l=e("lLAP"),c=e("wFw1"),d=e("Ip0R"),p=e("Wf4p"),h=e("TtEo"),f=e("LC5p"),m=function(){function t(){this.interactionGroup=[],this.interactionGroupEvent=new i.EventEmitter,this.currentQuestionIndex=0,this.interactionResponse={}}return t.prototype.ngOnInit=function(){var t=this;this.interactionGroup.length&&this.interactionGroup.forEach(function(n,e){t.interactionResponse[e]=[]})},t.prototype.showNextQuestion=function(){this.currentQuestionIndex+1===this.interactionGroup.length?this.interactionDone():this.currentQuestionIndex+=1},t.prototype.showPrevQuestion=function(){this.currentQuestionIndex-=1},t.prototype.skipAll=function(){this.interactionDone()},t.prototype.selectOption=function(t){if(!this.interactionGroup[this.currentQuestionIndex].isSubmitted)if("SCQ"===this.interactionGroup[this.currentQuestionIndex].type)this.interactionResponse[this.currentQuestionIndex]=[],this.interactionResponse[this.currentQuestionIndex].push(t);else if("MCQ"===this.interactionGroup[this.currentQuestionIndex].type){var n=this.interactionResponse[this.currentQuestionIndex].indexOf(t);-1===n?this.interactionResponse[this.currentQuestionIndex].push(t):this.interactionResponse[this.currentQuestionIndex].splice(n,1)}},t.prototype.checkIfSelected=function(t){return this.interactionResponse[this.currentQuestionIndex].indexOf(t)>-1},t.prototype.checkIfCorrect=function(t){var n=this.interactionResponse[this.currentQuestionIndex].indexOf(t);return!!(this.interactionGroup[this.currentQuestionIndex].options[t].isCorrect&&n>-1)},t.prototype.submitInteraction=function(){this.interactionGroup[this.currentQuestionIndex].isSubmitted=!0},t.prototype.interactionDone=function(){this.interactionGroupEvent.emit("resume")},t}(),v=i["\u0275crt"]({encapsulation:0,styles:[[".option-text[_ngcontent-%COMP%]{width:48%;text-align:center;padding:8px 12px;box-sizing:border-box;margin-bottom:8px;font-size:.95rem;line-height:1.3;cursor:pointer}@media only screen and (max-width:599px){.option-text[_ngcontent-%COMP%]{width:100%}}.question[_ngcontent-%COMP%]{padding:8px 12px;box-sizing:border-box;margin-top:16px}.correct[_ngcontent-%COMP%]{color:#fff!important;background:green!important}.wrong[_ngcontent-%COMP%]{color:#fff!important;background:red!important}"]],data:{}});function b(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,2,"button",[["mat-raised-button",""],["type","button"]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(t,n,e){var i=!0;return"click"===n&&(i=!1!==t.component.skipAll()&&i),i},a.d,a.b)),i["\u0275did"](1,180224,null,0,s.b,[i.ElementRef,u.a,l.h,[2,c.a]],null,null),(t()(),i["\u0275ted"](-1,0,[" Alle \xfcberspringen "]))],null,function(t,n){t(n,0,0,i["\u0275nov"](n,1).disabled||null,"NoopAnimations"===i["\u0275nov"](n,1)._animationMode)})}function g(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,2,"button",[["mat-raised-button",""],["type","button"]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(t,n,e){var i=!0;return"click"===n&&(i=!1!==t.component.showNextQuestion()&&i),i},a.d,a.b)),i["\u0275did"](1,180224,null,0,s.b,[i.ElementRef,u.a,l.h,[2,c.a]],null,null),(t()(),i["\u0275ted"](-1,0,[" \xdcberspringen Sie diese "]))],null,function(t,n){t(n,0,0,i["\u0275nov"](n,1).disabled||null,"NoopAnimations"===i["\u0275nov"](n,1)._animationMode)})}function y(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,3,"h3",[["class","mat-h3 mat-accent mat-toolbar question"]],null,null,null,null,null)),(t()(),i["\u0275eld"](1,0,null,null,1,"span",[],null,null,null,null,null)),(t()(),i["\u0275ted"](2,null,["Q"," of ",". "])),(t()(),i["\u0275ted"](3,null,[" "," "]))],null,function(t,n){var e=n.component;t(n,2,0,e.currentQuestionIndex+1,null==e.interactionGroup?null:e.interactionGroup.length),t(n,3,0,e.interactionGroup[e.currentQuestionIndex].question)})}function I(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,5,"div",[["class","option-text mat-toolbar mat-ripple"],["matRipple",""],["role","button"]],[[2,"mat-ripple-unbounded",null]],[[null,"click"]],function(t,n,e){var i=!0;return"click"===n&&(i=!1!==t.component.selectOption(t.context.index)&&i),i},null,null)),i["\u0275prd"](512,null,d.G,d.H,[i.IterableDiffers,i.KeyValueDiffers,i.ElementRef,i.Renderer2]),i["\u0275did"](2,278528,null,0,d.m,[d.G],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),i["\u0275pod"](3,{"mat-primary":0,correct:1,wrong:2}),i["\u0275did"](4,212992,null,0,p.x,[i.ElementRef,i.NgZone,u.a,[2,p.m],[2,c.a]],null,null),(t()(),i["\u0275ted"](5,null,["",""]))],function(t,n){var e=n.component,i=t(n,3,0,e.checkIfSelected(n.context.index),e.checkIfCorrect(n.context.index)&&e.checkIfSelected(n.context.index)&&e.interactionGroup[e.currentQuestionIndex].isSubmitted||e.interactionGroup[e.currentQuestionIndex].isSubmitted&&e.interactionGroup[e.currentQuestionIndex].options[n.context.index].isCorrect,!e.checkIfCorrect(n.context.index)&&e.checkIfSelected(n.context.index)&&e.interactionGroup[e.currentQuestionIndex].isSubmitted);t(n,2,0,"option-text mat-toolbar",i),t(n,4,0)},function(t,n){t(n,0,0,i["\u0275nov"](n,4).unbounded),t(n,5,0,n.context.$implicit.text)})}function _(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,2,"button",[["mat-raised-button",""],["type","button"]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(t,n,e){var i=!0;return"click"===n&&(i=!1!==t.component.showPrevQuestion()&&i),i},a.d,a.b)),i["\u0275did"](1,180224,null,0,s.b,[i.ElementRef,u.a,l.h,[2,c.a]],null,null),(t()(),i["\u0275ted"](-1,0,[" Prev "]))],null,function(t,n){t(n,0,0,i["\u0275nov"](n,1).disabled||null,"NoopAnimations"===i["\u0275nov"](n,1)._animationMode)})}function C(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,2,"button",[["mat-raised-button",""],["type","button"]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(t,n,e){var i=!0;return"click"===n&&(i=!1!==t.component.submitInteraction()&&i),i},a.d,a.b)),i["\u0275did"](1,180224,null,0,s.b,[i.ElementRef,u.a,l.h,[2,c.a]],{disabled:[0,"disabled"],color:[1,"color"]},null),(t()(),i["\u0275ted"](-1,0,["Senden"]))],function(t,n){var e=n.component;t(n,1,0,!e.interactionResponse[e.currentQuestionIndex].length,"primary")},function(t,n){t(n,0,0,i["\u0275nov"](n,1).disabled||null,"NoopAnimations"===i["\u0275nov"](n,1)._animationMode)})}function S(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,2,"button",[["mat-raised-button",""],["type","button"]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(t,n,e){var i=!0;return"click"===n&&(i=!1!==t.component.interactionDone()&&i),i},a.d,a.b)),i["\u0275did"](1,180224,null,0,s.b,[i.ElementRef,u.a,l.h,[2,c.a]],{color:[0,"color"]},null),(t()(),i["\u0275ted"](-1,0,["Fertig"]))],function(t,n){t(n,1,0,"primary")},function(t,n){t(n,0,0,i["\u0275nov"](n,1).disabled||null,"NoopAnimations"===i["\u0275nov"](n,1)._animationMode)})}function w(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,2,"button",[["mat-raised-button",""],["type","button"]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(t,n,e){var i=!0;return"click"===n&&(i=!1!==t.component.showNextQuestion()&&i),i},a.d,a.b)),i["\u0275did"](1,180224,null,0,s.b,[i.ElementRef,u.a,l.h,[2,c.a]],{disabled:[0,"disabled"]},null),(t()(),i["\u0275ted"](-1,0,[" Weiter "]))],function(t,n){var e=n.component;t(n,1,0,!(null!=e.interactionGroup[e.currentQuestionIndex]&&e.interactionGroup[e.currentQuestionIndex].canSkip||e.interactionGroup[e.currentQuestionIndex].isSubmitted))},function(t,n){t(n,0,0,i["\u0275nov"](n,1).disabled||null,"NoopAnimations"===i["\u0275nov"](n,1)._animationMode)})}function E(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,25,"div",[],null,null,null,null,null)),(t()(),i["\u0275eld"](1,0,null,null,12,null,null,null,null,null,null,null)),(t()(),i["\u0275eld"](2,0,null,null,4,"div",[["class","flex flex-between"]],null,null,null,null,null)),(t()(),i["\u0275and"](16777216,null,null,1,null,b)),i["\u0275did"](4,16384,null,0,d.o,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),i["\u0275and"](16777216,null,null,1,null,g)),i["\u0275did"](6,16384,null,0,d.o,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),i["\u0275and"](16777216,null,null,1,null,y)),i["\u0275did"](8,16384,null,0,d.o,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),i["\u0275eld"](9,0,null,null,1,"mat-divider",[["class","mat-divider"],["role","separator"]],[[1,"aria-orientation",0],[2,"mat-divider-vertical",null],[2,"mat-divider-horizontal",null],[2,"mat-divider-inset",null]],null,null,h.b,h.a)),i["\u0275did"](10,49152,null,0,f.a,[],null,null),(t()(),i["\u0275eld"](11,0,null,null,2,"div",[["class","flex flex-between flex-wrapped margin-top-m"]],null,null,null,null,null)),(t()(),i["\u0275and"](16777216,null,null,1,null,I)),i["\u0275did"](13,278528,null,0,d.n,[i.ViewContainerRef,i.TemplateRef,i.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(t()(),i["\u0275eld"](14,0,null,null,11,"div",[["class","flex flex-between margin-top-m"]],null,null,null,null,null)),(t()(),i["\u0275eld"](15,0,null,null,2,"div",[["class","mat-accent mat-toolbar"]],null,null,null,null,null)),(t()(),i["\u0275and"](16777216,null,null,1,null,_)),i["\u0275did"](17,16384,null,0,d.o,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),i["\u0275eld"](18,0,null,null,4,"div",[["class","mat-accent mat-toolbar"]],null,null,null,null,null)),(t()(),i["\u0275and"](16777216,null,null,1,null,C)),i["\u0275did"](20,16384,null,0,d.o,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),i["\u0275and"](16777216,null,null,1,null,S)),i["\u0275did"](22,16384,null,0,d.o,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),i["\u0275eld"](23,0,null,null,2,"div",[["class","mat-accent mat-toolbar"]],null,null,null,null,null)),(t()(),i["\u0275and"](16777216,null,null,1,null,w)),i["\u0275did"](25,16384,null,0,d.o,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(t,n){var e=n.component;t(n,4,0,null==e.interactionGroupMeta?null:e.interactionGroupMeta.canSkip),t(n,6,0,null==e.interactionGroup[e.currentQuestionIndex]?null:e.interactionGroup[e.currentQuestionIndex].canSkip),t(n,8,0,e.interactionGroup[e.currentQuestionIndex].question),t(n,13,0,e.interactionGroup[e.currentQuestionIndex].options),t(n,17,0,e.currentQuestionIndex>0&&e.currentQuestionIndex<(null==e.interactionGroup?null:e.interactionGroup.length)),t(n,20,0,!e.interactionGroup[e.currentQuestionIndex].isSubmitted),t(n,22,0,e.currentQuestionIndex===e.interactionGroup.length-1&&e.interactionGroup[e.currentQuestionIndex].isSubmitted),t(n,25,0,e.currentQuestionIndex<(null==e.interactionGroup?null:e.interactionGroup.length)-1&&(null==e.interactionGroup?null:e.interactionGroup.length)>1)},function(t,n){t(n,9,0,i["\u0275nov"](n,10).vertical?"vertical":"horizontal",i["\u0275nov"](n,10).vertical,!i["\u0275nov"](n,10).vertical,i["\u0275nov"](n,10).inset)})}function x(t){return i["\u0275vid"](0,[(t()(),i["\u0275and"](16777216,null,null,1,null,E)),i["\u0275did"](1,16384,null,0,d.o,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(t,n){var e=n.component;t(n,1,0,null==e.interactionGroup?null:e.interactionGroup.length)},null)}var R=e("mrSG"),T=e("gI3B"),k=e("xXU7"),O=e("bne5"),P=e("P6uZ"),A=e("xMyE"),M=e("67Y/"),G=e("oVAt"),N=e("VX4o"),F=e("qfBg"),L=e("2TuL"),D=e("PnTj"),j=e("r4Kj"),U=e("e2Qb"),Q={techOrder:["azureHtml5JS","flashSS","html5FairPlayHLS","silverlightSS","html5"],nativeControlsForTouch:!1,autoplay:!0,controls:!0,width:"100%",height:"100%",poster:"",logo:{enabled:!1},playbackSpeed:{enabled:!0,initialSpeed:1,speedLevels:[{name:"x3.0",value:3},{name:"x2.0",value:2},{name:"x1.5",value:1.5},{name:"x1.25",value:1.25},{name:"normal",value:1},{name:"x0.85",value:.85},{name:"x0.75",value:.75}]},plugins:{timelineMarker:{markertime:[]}}},V=function(t){function n(n,e){var i=t.call(this,e)||this;return i.code=n,i}return R.__extends(n,t),n}(Error),z=function(){function t(t,n,e,i,r,o,a){this.route=t,this.viewerSvc=n,this.telemetry=e,this.valuesSvc=i,this.historySvc=r,this.userSvc=o,this.configSvc=a,this.lastSec=-1,this.firstRealTimeProgressFired=!1,this.lastRealTimeProgressFired=!1,this.interactionMarkersTimeSet=new Set,this.interactionGroupMeta={},this.hasScriptLoaded=!1,this.markersLoaded=!1,this.isFullScreen=!1}return t.prototype.ngOnInit=function(){return R.__awaiter(this,void 0,void 0,function(){var t=this;return R.__generator(this,function(n){return this.paramSubscription=this.route.data.subscribe(function(n){t.processedContent=n.playerDetails.processedResource,t.collectionId=n.playerDetails.toc.identifier,t.onInItFunction()}),[2]})})},t.prototype.onInItFunction=function(){return R.__awaiter(this,void 0,void 0,function(){return R.__generator(this,function(t){switch(t.label){case 0:return this.processedContent&&this.processedContent.content&&this.processedContent.interactions?(this.interactionMarkersTimeSet=new Set(this.processedContent.interactions.interactions.map(function(t){return t.time})),[4,this.loadPlayer()]):[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}})})},t.prototype.loadPlayer=function(){return R.__awaiter(this,void 0,void 0,function(){var t,n,e,i=this;return R.__generator(this,function(r){switch(r.label){case 0:return this.disposePlayer(),t=this.viewerSvc.resumePointStringToProgressNumber(this.processedContent.resumeData),n=this.processedContent.interactions.interactions.map(function(t){return i.transformTime(t.time)}),this.ivideoContainer.nativeElement.innerHTML='<video id="azuremediaplayer" class="azuremediaplayer amp-flush-skin amp-big-play-centered"></video>',e=this,[4,this.init("azuremediaplayer",this.processedContent.interactions.videoUrl,this.processedContent.video.streamingToken,this.processedContent.video.manifest,this.processedContent.content.appIcon,this.processedContent.content.identifier,this.processedContent.content.mimeType,this.collectionId,t,n)];case 1:return e.player=r.sent(),[2]}})})},t.prototype.disposePlayer=function(){this.player&&"function"==typeof this.player.dispose&&this.player.dispose()},t.prototype.ngOnDestroy=function(){this.disposePlayer()},t.prototype.transformTime=function(t){var n="",e=Math.floor(t/3600),i=Math.floor(t%3600/60),r=Math.floor(t%3600%60);return n+=e>0?this.padZeros(e,2)+":":"00:",(n+=i>0?this.padZeros(i,2)+":":"00:")+(r>0?this.padZeros(r,2):"00")},t.prototype.padZeros=function(t,n){for(var e=t+"";e.length<n;)e="0"+e;return e},t.prototype.init=function(t,n,e,i,r,o,a,s,u,l,c){return void 0===c&&(c={}),R.__awaiter(this,void 0,void 0,function(){var d,p,h,f,m,v=this;return R.__generator(this,function(b){switch(b.label){case 0:return[4,this.scriptSetup()];case 1:return b.sent(),l.length?[4,this.markersSetup()]:[3,3];case 2:b.sent(),b.label=3;case 3:return amp?[3,5]:[4,Object(T.a)(1e3).toPromise()];case 4:if(b.sent(),!amp)throw new Error("AMP NOT LOADED");b.label=5;case 5:return p=u,h=amp(t,this.ampConfig(r,l),function(){d=Object(k.a)(3e4).subscribe(function(){v.notifier("RUNNING",o,s,a,h);var t=h.currentTime();t>p&&(p=h.currentTime()),v.historySvc.saveContinueLearning({contextPathId:o,resourceId:o,percentComplete:Math.round(100*p/h.duration())||0,data:JSON.stringify({progress:t,timestamp:Date.now()})},o).toPromise()}),h.addEventListener("ended",function(){v.notifier("ENDED",o,s,a,h)}),h.addEventListener("play",function(){v.monitorInteractions(),v.configSvc.instanceConfig.platform.updateRealTimeProgress&&v.monitorForRealTimeProgress(h,o,a),v.notifier("PLAYING",o,s,a,h)}),h.addEventListener("pause",function(){v.notifier("PAUSED",o,s,a,h)}),h.addEventListener("disposing",function(){!v.lastRealTimeProgressFired&&v.configSvc.instanceConfig.platform.updateRealTimeProgress&&v._fireRealTimeProgress(h,o,a),v.firstRealTimeProgressFired=!1,v.lastRealTimeProgressFired=!1,v.notifier("UNLOADED",o,s,a,h),d&&d.unsubscribe()}),h.addEventListener("loadeddata",function(){v.monitorInteractions(),v.notifier("LOADED",o,s,a,h),u>10&&h.currentTime(u-10)})}),f=[],m=[],i&&e?(this.valuesSvc.isIos&&f.push({src:"https://cvprsg101v.cloudvideo.azure.net/api/ManifestProxy?playbackUrl="+i+"(format=m3u8-aapl)&token="+encodeURIComponent(e),type:"application/vnd.apple.mpegurl",disableUrlRewriter:!0}),f.push({src:i,type:"application/vnd.ms-sstr+xml",protectionInfo:[{type:"AES",authenticationToken:e}]})):n&&f.push({src:n,type:this.getContentTypeForFile(n)}),c.en&&m.push({label:"English",kind:"subtitles",srclang:"en",src:c.en}),m.length?h.src(f,m):h.src(f),[2,h]}})})},t.prototype.monitorForRealTimeProgress=function(t,n,e){var i=this,r=Math.floor(t.currentTime());if(r!==this.lastSec){if(this.lastSec=r,this.firstRealTimeProgressFired&&this.lastRealTimeProgressFired)return;!this.firstRealTimeProgressFired&&r>=Math.min(.1*t.duration(),15)&&(this.firstRealTimeProgressFired=!0,this._fireRealTimeProgress(t,n,e)),!this.lastRealTimeProgressFired&&r>=Math.min(.95*t.duration(),t.duration()-5)&&(this.lastRealTimeProgressFired=!0,this._fireRealTimeProgress(t,n,e))}setTimeout(function(){t.paused()||i.monitorForRealTimeProgress(t,n,e)},500)},t.prototype._fireRealTimeProgress=function(t,n,e){var i={content_type:this.processedContent.content.contentType,current:[t.currentTime().toString()],max_size:t.duration(),mime_type:e,user_id_type:"uuid"};this.userSvc.realTimeProgressUpdate(n,i).subscribe()},t.prototype.monitorInteractions=function(){var t=this,n=Math.floor(this.player.currentTime());n!==this.lastSec&&(this.lastSec=n,this.interactionMarkersTimeSet.has(n)&&this.initiateInteractionManager(n||-1)),setTimeout(function(){t.player.paused()||t.monitorInteractions()},500)},t.prototype.initiateInteractionManager=function(t){var n=this.processedContent.interactions.interactions.findIndex(function(n){return n.time===t});if(n>-1){this.player.pause();var e=this.processedContent.interactions.videoUrl.split("?")[0].lastIndexOf("/")+1,i=this.processedContent.interactions.videoUrl.lastIndexOf("?");this.currentInteractionGroupId=this.processedContent.interactions.interactions[n].id,this.interactionGroupMeta={groupId:this.processedContent.interactions.interactions[n].id,baseVideoUrl:{baseUrl:this.processedContent.interactions.videoUrl.substring(0,e),query:this.processedContent.interactions.videoUrl.substring(i)},canSkip:this.processedContent.interactions.interactions[n].canSkip||!0,preamble:this.processedContent.interactions.interactions[n].preamble,postamble:this.processedContent.interactions.interactions[n].postamble}}},t.prototype.scriptSetup=function(){return R.__awaiter(this,void 0,void 0,function(){var t,n,e,i=this;return R.__generator(this,function(r){return this.hasScriptLoaded?[2,!0]:(t=document.getElementById("ampScript"))?[2,Object(O.a)(t,"load").pipe(Object(P.a)(),Object(A.a)(function(){i.hasScriptLoaded=!0}),Object(M.a)(function(){return!0})).toPromise()]:((n=document.createElement("script")).setAttribute("id","ampScript"),n.setAttribute("src","https://amp.azure.net/libs/amp/2.2.0/azuremediaplayer.min.js"),document.body.appendChild(n),(e=document.createElement("link")).setAttribute("rel","stylesheet"),e.setAttribute("href","https://amp.azure.net/libs/amp/2.2.0/skins/amp-flush/azuremediaplayer.min.css"),document.body.appendChild(e),[2,Object(O.a)(n,"load").pipe(Object(P.a)(),Object(A.a)(function(){i.hasScriptLoaded=!0}),Object(M.a)(function(){return!0})).toPromise()])})})},t.prototype.markersSetup=function(){return R.__awaiter(this,void 0,void 0,function(){var t,n,e,i=this;return R.__generator(this,function(r){return this.markersLoaded?[2,!0]:(t=document.getElementById("markerScript"))?[2,Object(O.a)(t,"load").pipe(Object(P.a)(),Object(A.a)(function(){i.markersLoaded=!0}),Object(M.a)(function(){return!0})).toPromise()]:((n=document.createElement("script")).setAttribute("id","markerScript"),n.setAttribute("src","/public-assets/common/plugins/timeline-markers/timelineMarkers.js"),document.body.appendChild(n),(e=document.createElement("link")).setAttribute("rel","stylesheet"),e.setAttribute("href","/public-assets/common/plugins/timeline-markers/timelineMarkers.css"),document.body.appendChild(e),[2,Object(O.a)(n,"load").pipe(Object(P.a)(),Object(A.a)(function(){i.markersLoaded=!0}),Object(M.a)(function(){return!0})).toPromise()])})})},t.prototype.notifier=function(t,n,e,i,r){var o={courseId:e,identifier:n,mimeType:i,duration:r.currentTime(),force:!1,isCompleted:!1,isIdeal:r.paused()};this.telemetry.playerTelemetryEvent({app:"WEB_PLAYER_PLUGIN",data:o,plugin:"video",state:t,type:"TELEMETRY"})},t.prototype.ampConfig=function(t,n){var e=R.__assign({},Q);return e.plugins={timelineMarker:{markertime:n}},R.__assign({},e,{poster:t})},t.prototype.getContentTypeForFile=function(t){var n=t.substring(t.lastIndexOf(".")+1),e=n.lastIndexOf("?");switch(e>-1&&(n=n.substring(0,e)),n){case"mp4":return"video/mp4";case"mp3":return"audio/mpeg";default:throw new V("MIME_CONTENT_MISMATCH")}},t.prototype.eventFromInteractionGroupManager=function(t){"resume"===t&&(this.currentInteractionGroupId=null,this.interactionGroupMeta={},this.player.play())},t.prototype.toggleFullscreen=function(){this.intearctionContainer&&this.intearctionContainer.nativeElement&&!1===this.isFullScreen?(this.requestFullScreen(this.intearctionContainer.nativeElement),this.isFullScreen=!0):this.isFullScreen&&(this.requestExitFullScreen(),this.isFullScreen=!1)},t.prototype.requestFullScreen=function(t){Object(U.d)(t)},t.prototype.requestExitFullScreen=function(){Object(U.c)()},t}(),H=e("ZYCi"),q=i["\u0275crt"]({encapsulation:0,styles:[[".interactive-video-container[_ngcontent-%COMP%]{height:100%;position:relative}.interactive-video-container[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]{height:100%}.interactive-video-container[_ngcontent-%COMP%]   .blur[_ngcontent-%COMP%]{-webkit-filter:blur(2px);filter:blur(2px)}app-interaction-group-manager[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:block;height:100%;width:100%;min-width:300px;overflow:auto;padding:64px 32px;box-sizing:border-box;z-index:10}@media only screen and (max-width:599px){app-interaction-group-manager[_ngcontent-%COMP%]{padding:16px}}.manual-fs[_ngcontent-%COMP%]{width:40px;height:40px;position:absolute;cursor:pointer;bottom:0;right:0;z-index:100}"]],data:{}});function B(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,1,"app-interaction-group-manager",[],null,[[null,"interactionGroupEvent"]],function(t,n,e){var i=!0;return"interactionGroupEvent"===n&&(i=!1!==t.component.eventFromInteractionGroupManager(e)&&i),i},x,v)),i["\u0275did"](1,114688,null,0,m,[],{interactionGroup:[0,"interactionGroup"],interactionGroupMeta:[1,"interactionGroupMeta"]},{interactionGroupEvent:"interactionGroupEvent"})],function(t,n){var e=n.component;t(n,1,0,e.processedContent.interactions.interactionEvent[e.currentInteractionGroupId],e.interactionGroupMeta)},null)}function Y(t){return i["\u0275vid"](0,[i["\u0275qud"](402653184,1,{ivideoContainer:0}),i["\u0275qud"](402653184,2,{intearctionContainer:0}),(t()(),i["\u0275eld"](2,0,[[2,0],["intearctionContainer",1]],null,7,"div",[["class","interactive-video-container"]],null,null,null,null,null)),(t()(),i["\u0275eld"](3,0,[[1,0],["ivideoContainer",1]],null,3,"div",[["class","video-container"]],null,null,null,null,null)),i["\u0275prd"](512,null,d.G,d.H,[i.IterableDiffers,i.KeyValueDiffers,i.ElementRef,i.Renderer2]),i["\u0275did"](5,278528,null,0,d.m,[d.G],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),i["\u0275pod"](6,{blur:0}),(t()(),i["\u0275eld"](7,0,null,null,0,"div",[["class","manual-fs"]],null,[[null,"click"]],function(t,n,e){var i=!0;return"click"===n&&(i=!1!==t.component.toggleFullscreen()&&i),i},null,null)),(t()(),i["\u0275and"](16777216,null,null,1,null,B)),i["\u0275did"](9,16384,null,0,d.o,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(t,n){var e=n.component,i=t(n,6,0,e.currentInteractionGroupId);t(n,5,0,"video-container",i),t(n,9,0,e.currentInteractionGroupId&&e.processedContent.interactions.interactionEvent[e.currentInteractionGroupId])},null)}function K(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,1,"app-interactive-video",[],null,null,null,Y,q)),i["\u0275did"](1,245760,null,0,z,[H.a,D.a,N.a,L.a,G.a,F.a,j.a],null,null)],function(t,n){t(n,1,0)},null)}var Z=i["\u0275ccf"]("app-interactive-video",z,K,{processedContent:"processedContent",collectionId:"collectionId"},{},[]),J=e("zsyL"),W=e("RB3e"),X=function(){return function(){}}(),$=e("Fzqc"),tt=e("ZYjt");e.d(n,"InteractiveVideoModuleNgFactory",function(){return nt});var nt=i["\u0275cmf"](r,[],function(t){return i["\u0275mod"]([i["\u0275mpd"](512,i.ComponentFactoryResolver,i["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,Z]],[3,i.ComponentFactoryResolver],i.NgModuleRef]),i["\u0275mpd"](4608,d.q,d.p,[i.LOCALE_ID,[2,d.L]]),i["\u0275mpd"](4608,J.a,J.a,[W.a]),i["\u0275mpd"](1073742336,d.c,d.c,[]),i["\u0275mpd"](1073742336,H.s,H.s,[[2,H.x],[2,H.o]]),i["\u0275mpd"](1073742336,X,X,[]),i["\u0275mpd"](1073742336,$.a,$.a,[]),i["\u0275mpd"](1073742336,p.n,p.n,[[2,p.f],[2,tt.f]]),i["\u0275mpd"](1073742336,u.b,u.b,[]),i["\u0275mpd"](1073742336,p.y,p.y,[]),i["\u0275mpd"](1073742336,s.c,s.c,[]),i["\u0275mpd"](1073742336,f.b,f.b,[]),i["\u0275mpd"](1073742336,r,r,[]),i["\u0275mpd"](256,i.LOCALE_ID,"de",[]),i["\u0275mpd"](1024,H.m,function(){return[[{path:"",pathMatch:"full",component:z,resolve:{playerDetails:J.a}}]]},[]),i["\u0275mpd"](256,i.TRANSLATIONS_FORMAT,"xlf",[])])})},Jmk9:function(t,n,e){"use strict";e.d(n,"a",function(){return s});var i=e("XlPw"),r=e("VX4o"),o=e("CcnG"),a=e("t/Na"),s=function(){function t(t,n){this.http=t,this.telemetrySvc=n,this.API_BASE="/clientApi/v2",this.USER_API=this.API_BASE+"/user",this.apiEndpoints={USER_HISTORY:this.USER_API+"/history",USER_CONTINUE_LEARNING:this.USER_API+"/history/continue"}}return t.prototype.fetchContinueLearning=function(t,n,e){return this.http.get(this.apiEndpoints.USER_CONTINUE_LEARNING+"?pageSize="+t+(n?"&pageState="+n:"")+(e?"&email="+e:""))},t.prototype.saveContinueLearning=function(t,n){var e=this.apiEndpoints.USER_CONTINUE_LEARNING;return Object.keys(t).length?this.http.post(e,t):(this.telemetrySvc.errorTelemetryEvent(e,t,n),Object(i.a)({message:"EMPTY_REQUEST"}))},t.prototype.fetchContentContinueLearning=function(t){return this.http.get(this.apiEndpoints.USER_CONTINUE_LEARNING+"/"+t)},t.prototype.addHistory=function(t){return this.http.post(this.apiEndpoints.USER_HISTORY+"/"+t,{})},t.prototype.deleteHistory=function(t){return this.http.delete(this.apiEndpoints.USER_HISTORY+"/"+t)},t.ngInjectableDef=o["\u0275\u0275defineInjectable"]({factory:function(){return new t(o["\u0275\u0275inject"](a.c),o["\u0275\u0275inject"](r.a))},token:t,providedIn:"root"}),t}()},PnTj:function(t,n,e){"use strict";var i=e("mrSG"),r=e("bne5"),o=e("VnD/"),a=e("5DKC"),s=e("F/XL"),u=e("9Z1F"),l=e("CcnG"),c=e("t/Na"),d=function(){function t(t){this.http=t,this.apiEndpoints={setCookie:a.c+"/videojs/setCookie",setS3Cookie:a.d+"/setS3Cookie/setCookie"}}return t.prototype.setVideoCookie=function(t){return this.http.post(this.apiEndpoints.setCookie,{path:t}).pipe(Object(u.a)(function(t){return Object(s.a)(!0)}))},t.prototype.setS3Cookie=function(t){return this.http.post(this.apiEndpoints.setS3Cookie,{path:t}).pipe(Object(u.a)(function(t){return Object(s.a)(!0)}))},t.ngInjectableDef=l["\u0275\u0275defineInjectable"]({factory:function(){return new t(l["\u0275\u0275inject"](c.c))},token:t,providedIn:"root"}),t}(),p=e("hFHK"),h=e("NBun"),f=e("oVAt"),m=e("vPp1");e.d(n,"a",function(){return g});var v=new Set(Object.values(p.a)),b=function(t){function n(n){var e=t.call(this,n)||this;return e.code=n,e}return i.__extends(n,t),n}(Error),g=function(){function t(t,n,e,i,r){this.http=t,this.contentSvc=n,this.miscSvc=e,this.historySvc=i,this.s3ContentApi=r,this.initGlobalDataRequestResponder()}return t.prototype.updateViewCountAndHistoryOnLoad=function(t,n){this.contentSvc.updateViewCount(n).toPromise(),t&&t!==n&&this.historySvc.saveContinueLearning({contextPathId:t,resourceId:n,percentComplete:0,data:JSON.stringify({timestamp:Date.now()})},n).toPromise().catch(function(t){return console.warn(t)}),this.historySvc.addToHistory(n)},t.prototype.processResponse=function(t){return i.__awaiter(this,void 0,void 0,function(){var n,e,r,o,a,s;return i.__generator(this,function(i){switch(i.label){case 0:n={id:t.id,data:null},e=this.resumePoint(t.contentId),i.label=1;case 1:return i.trys.push([1,5,,6]),[4,this.fetchContentAndValidate(t.contentId)];case 2:return r=i.sent(),o=n,[4,this.transformContent(r)];case 3:return o.data=i.sent(),a=n.data,[4,e];case 4:return a.resumeData=i.sent(),[3,6];case 5:return s=i.sent(),n.error=s.code||"UNKNOWN_ERROR",[3,6];case 6:return[2,n]}})})},t.prototype.fetchContentAndValidate=function(t){return i.__awaiter(this,void 0,void 0,function(){var n,e;return i.__generator(this,function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,this.contentSvc.fetchContent(t).toPromise()];case 1:if("Resource"!==(n=i.sent()).contentType&&"Knowledge Artifact"!==n.contentType)throw new b("INVALID_RESOURCE");if(!v.has(n.mimeType))throw new b("INVALID_MIME");return[2,n];case 2:throw e=i.sent(),new b(e&&e.code||"UNKNOWN_ERROR");case 3:return[2]}})})},t.prototype.transformContent=function(t){return i.__awaiter(this,void 0,void 0,function(){var n,e,r,o,a,s,u,l,c;return i.__generator(this,function(d){switch(d.label){case 0:return t.artifactUrl.indexOf("content-store")>=0?[4,this.setS3Cookie(t.artifactUrl)]:[3,2];case 1:d.sent(),d.label=2;case 2:if("Certification"===t.resourceType)return[2,{content:i.__assign({},t,{mimeType:p.a.certification})}];switch(t.mimeType){case p.a.mp4:return[3,3];case p.a.m3u8:return[3,5];case p.a.quiz:return[3,7];case p.a.webModule:case p.a.webModuleExercise:return[3,9];case p.a.collectionResource:return[3,11];case p.a.handson:return[3,13];case p.a.classDiagram:return[3,15];case p.a.rdbms:return[3,17];case p.a.interaction:return[3,19]}return[3,22];case 3:return[4,this.transformVideo(t)];case 4:return n=d.sent(),[2,{content:t,video:n}];case 5:return[4,this.setVideojsCookie(t.artifactUrl)];case 6:return d.sent(),[2,{content:t}];case 7:return[4,this.transformQuiz(t)];case 8:return e=d.sent(),[2,{content:t,quiz:e}];case 9:return[4,this.transformWebModule(t)];case 10:return r=d.sent(),[2,{content:t,webModule:r}];case 11:return[4,this.transformCollectionResource(t)];case 12:return o=d.sent(),[2,{content:t,collectionResource:o}];case 13:return[4,this.transformHandsOn(t)];case 14:return a=d.sent(),[2,{content:t,handsOn:a}];case 15:return[4,this.transformClassDiagram(t)];case 16:return s=d.sent(),[2,{content:t,classDiagram:s}];case 17:return[4,this.transformDbmsModule(t)];case 18:return u=d.sent(),[2,{content:t,rdbms:u}];case 19:return[4,this.transformInteractions(t)];case 20:return l=d.sent(),[4,this.transformVideo(t)];case 21:return c=d.sent(),[2,{content:t,interactions:l,video:c}];case 22:return[2,{content:t}]}})})},t.prototype.transformVideo=function(t){return i.__awaiter(this,void 0,void 0,function(){var n,e,r;return i.__generator(this,function(i){switch(i.label){case 0:if(n={file:t.artifactUrl,streamingToken:null,manifest:null},!(t.msArtifactDetails&&t.msArtifactDetails.channelId&&t.msArtifactDetails.videoId))return[2,n];i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this.miscSvc.fetchVideoTokens(t.msArtifactDetails.channelId,t.msArtifactDetails.videoId).toPromise()];case 2:return e=i.sent(),r=e.manifest,n.streamingToken=e.streamingToken,n.manifest=r,[2,n];case 3:return i.sent(),[3,4];case 4:return[2,n]}})})},t.prototype.transformQuiz=function(t){return i.__awaiter(this,void 0,void 0,function(){return i.__generator(this,function(n){switch(n.label){case 0:return[4,this.http.get(t.artifactUrl).toPromise().catch(function(t){throw new b("MANIFEST_FETCH_FAILED")})];case 1:return[2,n.sent()]}})})},t.prototype.transformHandsOn=function(t){return i.__awaiter(this,void 0,void 0,function(){return i.__generator(this,function(n){switch(n.label){case 0:return[4,this.http.get(t.artifactUrl).toPromise().catch(function(t){throw new b("MANIFEST_FETCH_FAILED")})];case 1:return[2,n.sent()]}})})},t.prototype.transformClassDiagram=function(t){return i.__awaiter(this,void 0,void 0,function(){return i.__generator(this,function(n){switch(n.label){case 0:return[4,this.http.get(t.artifactUrl).toPromise().catch(function(t){throw new b("MANIFEST_FETCH_FAILED")})];case 1:return[2,n.sent()]}})})},t.prototype.transformDbmsModule=function(t){return i.__awaiter(this,void 0,void 0,function(){return i.__generator(this,function(n){switch(n.label){case 0:return[4,this.http.get(t.artifactUrl).toPromise()];case 1:return[2,n.sent()]}})})},t.prototype.transformWebModule=function(t){return i.__awaiter(this,void 0,void 0,function(){return i.__generator(this,function(n){switch(n.label){case 0:return[4,this.http.get(t.artifactUrl).toPromise().catch(function(t){throw new b("MANIFEST_FETCH_FAILED")})];case 1:return[2,n.sent()]}})})},t.prototype.transformCollectionResource=function(t){return i.__awaiter(this,void 0,void 0,function(){return i.__generator(this,function(n){switch(n.label){case 0:return[4,this.http.get(t.artifactUrl).toPromise().catch(function(t){throw new b("MANIFEST_FETCH_FAILED")})];case 1:return[2,n.sent()]}})})},t.prototype.transformInteractions=function(t){return i.__awaiter(this,void 0,void 0,function(){return i.__generator(this,function(n){switch(n.label){case 0:return[4,this.http.get(t.artifactUrl).toPromise().catch(function(t){throw new b("MANIFEST_FETCH_FAILED")})];case 1:return[2,n.sent()]}})})},t.prototype.resumePoint=function(t){return i.__awaiter(this,void 0,void 0,function(){var n;return i.__generator(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,this.historySvc.fetchContentContinueLearning(t).toPromise()];case 1:return(n=e.sent())&&Array.isArray(n.results)&&n.results.length>0&&n.results[0].continueLearningData?[2,n.results[0].continueLearningData.data]:[3,3];case 2:return e.sent(),[3,3];case 3:return[2,null]}})})},t.prototype.setVideojsCookie=function(t){return i.__awaiter(this,void 0,void 0,function(){return i.__generator(this,function(n){switch(n.label){case 0:return[4,this.s3ContentApi.setVideoCookie(t).toPromise().catch(function(t){throw new b("COOKIE_SET_FAILURE")})];case 1:return n.sent(),[2]}})})},t.prototype.setS3Cookie=function(t){return i.__awaiter(this,void 0,void 0,function(){return i.__generator(this,function(n){switch(n.label){case 0:return[4,this.s3ContentApi.setS3Cookie(t).toPromise().catch(function(t){throw new b("COOKIE_SET_FAILURE")})];case 1:return n.sent(),[2]}})})},t.prototype.initGlobalDataRequestResponder=function(){var t=this;Object(r.a)(window,"message").pipe(Object(o.a)(function(t){return t&&t.data&&"DATA_REQUEST"===t.data.type&&Boolean(t.data.data.contentId)&&Boolean(t.source)&&"function"==typeof t.source.postMessage})).subscribe(function(n){return i.__awaiter(t,void 0,void 0,function(){var t,e;return i.__generator(this,function(i){switch(i.label){case 0:return t=n.source,[4,this.processResponse(n.data.data)];case 1:return e=i.sent(),t.postMessage({app:"WEB_PLAYER",data:e,plugin:"NONE",state:"NONE",type:"DATA_RESPONSE"},"*"),[2]}})})})},t.prototype.resumePointStringToProgressNumber=function(t){try{var n=JSON.parse(t),e=parseInt(n.progress.toString(),10);return Number.isNaN(e)||Math.round(e)!==e?0:e}catch(i){return 0}},t.ngInjectableDef=l["\u0275\u0275defineInjectable"]({factory:function(){return new t(l["\u0275\u0275inject"](c.c),l["\u0275\u0275inject"](h.a),l["\u0275\u0275inject"](m.a),l["\u0275\u0275inject"](f.a),l["\u0275\u0275inject"](d))},token:t,providedIn:"root"}),t}()},oVAt:function(t,n,e){"use strict";e.d(n,"a",function(){return o});var i=e("Jmk9"),r=e("CcnG"),o=function(){function t(t){this.historyApiSvc=t}return t.prototype.fetchContinueLearning=function(t,n,e){return this.historyApiSvc.fetchContinueLearning(t,n,e)},t.prototype.fetchContentContinueLearning=function(t){return this.historyApiSvc.fetchContentContinueLearning(t)},t.prototype.saveContinueLearning=function(t,n){return this.historyApiSvc.saveContinueLearning(t,n)},t.prototype.addToHistory=function(t){return this.historyApiSvc.addHistory(t)},t.ngInjectableDef=r["\u0275\u0275defineInjectable"]({factory:function(){return new t(r["\u0275\u0275inject"](i.a))},token:t,providedIn:"root"}),t}()},xXU7:function(t,n,e){"use strict";e.d(n,"a",function(){return a});var i=e("6blF"),r=e("T1DM"),o=e("/21U");function a(t,n){return void 0===t&&(t=0),void 0===n&&(n=r.a),(!Object(o.a)(t)||t<0)&&(t=0),n&&"function"==typeof n.schedule||(n=r.a),new i.a(function(e){return e.add(n.schedule(s,t,{subscriber:e,counter:0,period:t})),e})}function s(t){var n=t.subscriber,e=t.counter,i=t.period;n.next(e),this.schedule({subscriber:n,counter:e+1,period:i},i)}}}]);