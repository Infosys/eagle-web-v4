/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3"*/
(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{TY18:function(l,n,t){"use strict";t.r(n);var e=t("CcnG"),u=function(){return function(){}}(),a=t("pMnS"),i=t("HeqF"),o=t("C39E"),r=t("0/Q6"),d=t("6UMx"),c=t("ZYCi"),s=t("Ip0R"),m=t("Wf4p"),f=t("TtEo"),v=t("LC5p"),h=t("Mr+X"),p=t("SMsm"),g=t("bujt"),b=t("UodH"),y=t("dWZg"),_=t("lLAP"),k=t("wFw1"),R=t("FbN9"),C=t("8mMr"),S=t("lzlj"),L=t("FVSy"),w=t("sFxA"),x=t("qfBg"),I=t("JGdh"),E=t("rK5x"),T=function(){function l(l,n,t,e){this.routingSvc=l,this.userSvc=n,this.playlistSvc=t,this.goalsSvc=e,this.sharedPlaylists=[],this.sharedGoals=[]}return l.prototype.ngOnInit=function(){this.initiate()},l.prototype.initiate=function(){this.fetchStatus="fetching",this.statusCount=0,this.fetchRecentBadge(),this.fetchSharedPlaylist(),this.fetchSharedGoals()},l.prototype.fetchRecentBadge=function(){var l=this;this.userSvc.fetchUserRecentBadge().subscribe(function(n){n&&n.recent_badge&&n.recent_badge.image&&(l.recentBadge=n.recent_badge),l.checkContentStatus()},function(n){l.checkContentStatus()})},l.prototype.fetchSharedPlaylist=function(){var l=this;this.playlistSvc.fetchSharedPlaylist().subscribe(function(n){n.forEach(function(l){l.shared_by=l.shared_by.split("@")[0]}),l.sharedPlaylists=n,l.checkContentStatus()},function(n){l.checkContentStatus()})},l.prototype.fetchSharedGoals=function(){var l=this;this.goalsSvc.fetchGoalsSharedWithUser().subscribe(function(n){n.forEach(function(l){l.shared_by=l.shared_by.split("@")[0]}),l.sharedGoals=n,l.checkContentStatus()},function(n){l.checkContentStatus()})},l.prototype.checkContentStatus=function(){this.fetchStatus="done",this.statusCount++,3!==this.statusCount||this.recentBadge||this.sharedGoals.length||this.sharedPlaylists.length||(this.fetchStatus="none")},l.prototype.playlistTrackBy=function(l,n){return n.playlist_id},l.prototype.goalTrackBy=function(l,n){return n.goal_id},l}(),B=e["\u0275crt"]({encapsulation:0,styles:[[".notifications-container[_ngcontent-%COMP%]{max-width:800px;margin-left:auto;margin-right:auto;min-height:100%;box-sizing:border-box}.recent-badge[_ngcontent-%COMP%]{width:48px!important;height:48px!important}.notification-icon[_ngcontent-%COMP%]{font-size:40px!important;width:40px!important;height:40px!important}"]],data:{}});function M(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-spinner",[["class","margin-top-m"]],null,null,null,i.b,i.a)),e["\u0275did"](1,49152,null,0,o.a,[],null,null)],null,null)}function F(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"h2",[["class","mat-h2"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Keine Mitteilungen"]))],null,null)}function K(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,26,null,null,null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,2,"h3",[["class","mat-subheader"],["matSubheader",""]],null,null,null,null,null)),e["\u0275did"](2,16384,null,0,r.g,[],null,null),(l()(),e["\u0275ted"](-1,null,["J\xfcngster Badge"])),(l()(),e["\u0275eld"](4,0,null,null,20,"a",[["class","mat-list-item"],["mat-list-item",""]],[[1,"target",0],[8,"href",4],[2,"mat-list-item-avatar",null],[2,"mat-list-item-with-avatar",null]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,5).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},d.f,d.b)),e["\u0275did"](5,671744,null,0,c.r,[c.o,c.a,s.l],{routerLink:[0,"routerLink"]},null),e["\u0275did"](6,1228800,null,3,r.d,[e.ElementRef,[2,r.h],[2,r.a],e.ChangeDetectorRef],null,null),e["\u0275qud"](603979776,2,{_lines:1}),e["\u0275qud"](335544320,3,{_avatar:0}),e["\u0275qud"](335544320,4,{_icon:0}),(l()(),e["\u0275eld"](10,0,null,0,1,"img",[["class","recent-badge mat-list-avatar"],["matListAvatar",""]],[[8,"src",4]],null,null,null,null)),e["\u0275did"](11,16384,[[3,4]],0,r.b,[],null,null),(l()(),e["\u0275eld"](12,0,null,1,2,"h4",[["class","mat-line"],["matLine",""]],null,null,null,null,null)),e["\u0275did"](13,16384,[[2,4]],0,m.o,[],null,null),(l()(),e["\u0275ted"](14,null,["",""])),(l()(),e["\u0275eld"](15,0,null,1,2,"p",[["class","mat-line"],["matLine",""]],null,null,null,null,null)),e["\u0275did"](16,16384,[[2,4]],0,m.o,[],null,null),(l()(),e["\u0275ted"](17,null,["",""])),(l()(),e["\u0275eld"](18,0,null,1,6,"p",[["class","mat-line"],["matLine",""]],null,null,null,null,null)),e["\u0275did"](19,16384,[[2,4]],0,m.o,[],null,null),(l()(),e["\u0275eld"](20,0,null,null,1,null,null,null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Empfangen am: "])),(l()(),e["\u0275eld"](22,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](23,null,[" ",""])),e["\u0275ppd"](24,1),(l()(),e["\u0275eld"](25,0,null,null,1,"mat-divider",[["class","mat-divider"],["role","separator"]],[[1,"aria-orientation",0],[2,"mat-divider-vertical",null],[2,"mat-divider-horizontal",null],[2,"mat-divider-inset",null]],null,null,f.b,f.a)),e["\u0275did"](26,49152,null,0,v.a,[],null,null)],function(l,n){l(n,5,0,"/badges")},function(l,n){var t=n.component;l(n,4,0,e["\u0275nov"](n,5).target,e["\u0275nov"](n,5).href,e["\u0275nov"](n,6)._avatar||e["\u0275nov"](n,6)._icon,e["\u0275nov"](n,6)._avatar||e["\u0275nov"](n,6)._icon),l(n,10,0,t.recentBadge.image),l(n,14,0,t.recentBadge.badge_name),l(n,17,0,t.recentBadge.message);var u=e["\u0275unv"](n,23,0,l(n,24,0,e["\u0275nov"](n.parent,0),t.recentBadge.last_received_date));l(n,23,0,u),l(n,25,0,e["\u0275nov"](n,26).vertical?"vertical":"horizontal",e["\u0275nov"](n,26).vertical,!e["\u0275nov"](n,26).vertical,e["\u0275nov"](n,26).inset)})}function q(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,25,"a",[["class","mat-list-item"],["mat-list-item",""]],[[1,"target",0],[8,"href",4],[2,"mat-list-item-avatar",null],[2,"mat-list-item-with-avatar",null]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,1).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},d.f,d.b)),e["\u0275did"](1,671744,null,0,c.r,[c.o,c.a,s.l],{routerLink:[0,"routerLink"]},null),e["\u0275did"](2,1228800,null,3,r.d,[e.ElementRef,[2,r.h],[2,r.a],e.ChangeDetectorRef],null,null),e["\u0275qud"](603979776,5,{_lines:1}),e["\u0275qud"](335544320,6,{_avatar:0}),e["\u0275qud"](335544320,7,{_icon:0}),(l()(),e["\u0275eld"](6,0,null,0,3,"mat-icon",[["class","notification-icon mat-icon notranslate mat-list-icon"],["matListIcon",""],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,h.b,h.a)),e["\u0275did"](7,9158656,null,0,p.b,[e.ElementRef,p.d,[8,null],[2,p.a]],null,null),e["\u0275did"](8,16384,[[7,4]],0,r.c,[],null,null),(l()(),e["\u0275ted"](-1,0,["playlist_play"])),(l()(),e["\u0275eld"](10,0,null,1,2,"h4",[["class","mat-line"],["matLine",""]],null,null,null,null,null)),e["\u0275did"](11,16384,[[5,4]],0,m.o,[],null,null),(l()(),e["\u0275ted"](12,null,["",""])),(l()(),e["\u0275eld"](13,0,null,1,5,"p",[["class","mat-line"],["matLine",""]],null,null,null,null,null)),e["\u0275did"](14,16384,[[5,4]],0,m.o,[],null,null),(l()(),e["\u0275eld"](15,0,null,null,1,null,null,null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Gemeinsam genutzt von: "])),(l()(),e["\u0275eld"](17,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](18,null,[" ",""])),(l()(),e["\u0275eld"](19,0,null,1,6,"p",[["class","mat-line"],["matLine",""]],null,null,null,null,null)),e["\u0275did"](20,16384,[[5,4]],0,m.o,[],null,null),(l()(),e["\u0275eld"](21,0,null,null,1,null,null,null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Gemeinsam genutzt am: "])),(l()(),e["\u0275eld"](23,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](24,null,[" ",""])),e["\u0275ppd"](25,1)],function(l,n){l(n,1,0,"/playlist"),l(n,7,0)},function(l,n){l(n,0,0,e["\u0275nov"](n,1).target,e["\u0275nov"](n,1).href,e["\u0275nov"](n,2)._avatar||e["\u0275nov"](n,2)._icon,e["\u0275nov"](n,2)._avatar||e["\u0275nov"](n,2)._icon),l(n,6,0,e["\u0275nov"](n,7).inline,"primary"!==e["\u0275nov"](n,7).color&&"accent"!==e["\u0275nov"](n,7).color&&"warn"!==e["\u0275nov"](n,7).color),l(n,12,0,n.context.$implicit.playlist_title),l(n,18,0,n.context.$implicit.shared_by);var t=e["\u0275unv"](n,24,0,l(n,25,0,e["\u0275nov"](n.parent.parent,0),n.context.$implicit.shared_on));l(n,24,0,t)})}function G(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,4,"div",[["class","text-right"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,3,"a",[["mat-button",""]],[[1,"target",0],[8,"href",4],[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,2).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),"click"===n&&(u=!1!==e["\u0275nov"](l,3)._haltDisabledEvents(t)&&u),u},g.c,g.a)),e["\u0275did"](2,671744,null,0,c.r,[c.o,c.a,s.l],{routerLink:[0,"routerLink"]},null),e["\u0275did"](3,180224,null,0,b.a,[y.a,_.h,e.ElementRef,[2,k.a]],null,null),(l()(),e["\u0275ted"](-1,0,["Mehr ansehen"]))],function(l,n){l(n,2,0,"/playlist")},function(l,n){l(n,1,0,e["\u0275nov"](n,2).target,e["\u0275nov"](n,2).href,e["\u0275nov"](n,3).disabled?-1:e["\u0275nov"](n,3).tabIndex||0,e["\u0275nov"](n,3).disabled||null,e["\u0275nov"](n,3).disabled.toString(),"NoopAnimations"===e["\u0275nov"](n,3)._animationMode)})}function P(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,10,null,null,null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,2,"h3",[["class","mat-subheader"],["matSubheader",""]],null,null,null,null,null)),e["\u0275did"](2,16384,null,0,r.g,[],null,null),(l()(),e["\u0275ted"](-1,null,["Freigegebene Wiedergabeliste"])),(l()(),e["\u0275and"](16777216,null,null,2,null,q)),e["\u0275did"](5,278528,null,0,s.n,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null),e["\u0275pid"](0,s.y,[]),(l()(),e["\u0275and"](16777216,null,null,1,null,G)),e["\u0275did"](8,16384,null,0,s.o,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](9,0,null,null,1,"mat-divider",[["class","mat-divider"],["role","separator"]],[[1,"aria-orientation",0],[2,"mat-divider-vertical",null],[2,"mat-divider-horizontal",null],[2,"mat-divider-inset",null]],null,null,f.b,f.a)),e["\u0275did"](10,49152,null,0,v.a,[],null,null)],function(l,n){var t=n.component;l(n,5,0,e["\u0275unv"](n,5,0,e["\u0275nov"](n,6).transform(t.sharedPlaylists,0,2)),t.playlistTrackBy),l(n,8,0,t.sharedPlaylists.length>2)},function(l,n){l(n,9,0,e["\u0275nov"](n,10).vertical?"vertical":"horizontal",e["\u0275nov"](n,10).vertical,!e["\u0275nov"](n,10).vertical,e["\u0275nov"](n,10).inset)})}function z(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,25,"a",[["class","mat-list-item"],["mat-list-item",""]],[[1,"target",0],[8,"href",4],[2,"mat-list-item-avatar",null],[2,"mat-list-item-with-avatar",null]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,1).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},d.f,d.b)),e["\u0275did"](1,671744,null,0,c.r,[c.o,c.a,s.l],{routerLink:[0,"routerLink"]},null),e["\u0275did"](2,1228800,null,3,r.d,[e.ElementRef,[2,r.h],[2,r.a],e.ChangeDetectorRef],null,null),e["\u0275qud"](603979776,8,{_lines:1}),e["\u0275qud"](335544320,9,{_avatar:0}),e["\u0275qud"](335544320,10,{_icon:0}),(l()(),e["\u0275eld"](6,0,null,0,3,"mat-icon",[["class","notification-icon mat-icon notranslate mat-list-icon"],["matListIcon",""],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,h.b,h.a)),e["\u0275did"](7,9158656,null,0,p.b,[e.ElementRef,p.d,[8,null],[2,p.a]],null,null),e["\u0275did"](8,16384,[[10,4]],0,r.c,[],null,null),(l()(),e["\u0275ted"](-1,0,["adjust"])),(l()(),e["\u0275eld"](10,0,null,1,2,"h4",[["class","mat-line"],["matLine",""]],null,null,null,null,null)),e["\u0275did"](11,16384,[[8,4]],0,m.o,[],null,null),(l()(),e["\u0275ted"](12,null,["",""])),(l()(),e["\u0275eld"](13,0,null,1,5,"p",[["class","mat-line"],["matLine",""]],null,null,null,null,null)),e["\u0275did"](14,16384,[[8,4]],0,m.o,[],null,null),(l()(),e["\u0275eld"](15,0,null,null,1,null,null,null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Gemeinsam genutzt von: "])),(l()(),e["\u0275eld"](17,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](18,null,[" ",""])),(l()(),e["\u0275eld"](19,0,null,1,6,"p",[["class","mat-line"],["matLine",""]],null,null,null,null,null)),e["\u0275did"](20,16384,[[8,4]],0,m.o,[],null,null),(l()(),e["\u0275eld"](21,0,null,null,1,null,null,null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Gemeinsam genutzt am: "])),(l()(),e["\u0275eld"](23,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](24,null,[" ",""])),e["\u0275ppd"](25,1)],function(l,n){l(n,1,0,"/goals"),l(n,7,0)},function(l,n){l(n,0,0,e["\u0275nov"](n,1).target,e["\u0275nov"](n,1).href,e["\u0275nov"](n,2)._avatar||e["\u0275nov"](n,2)._icon,e["\u0275nov"](n,2)._avatar||e["\u0275nov"](n,2)._icon),l(n,6,0,e["\u0275nov"](n,7).inline,"primary"!==e["\u0275nov"](n,7).color&&"accent"!==e["\u0275nov"](n,7).color&&"warn"!==e["\u0275nov"](n,7).color),l(n,12,0,n.context.$implicit.goal_title),l(n,18,0,n.context.$implicit.shared_by);var t=e["\u0275unv"](n,24,0,l(n,25,0,e["\u0275nov"](n.parent.parent,0),n.context.$implicit.shared_on));l(n,24,0,t)})}function A(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,4,"div",[["class","text-right"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,3,"a",[["mat-button",""]],[[1,"target",0],[8,"href",4],[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,2).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),"click"===n&&(u=!1!==e["\u0275nov"](l,3)._haltDisabledEvents(t)&&u),u},g.c,g.a)),e["\u0275did"](2,671744,null,0,c.r,[c.o,c.a,s.l],{routerLink:[0,"routerLink"]},null),e["\u0275did"](3,180224,null,0,b.a,[y.a,_.h,e.ElementRef,[2,k.a]],null,null),(l()(),e["\u0275ted"](-1,0,["Mehr ansehen"]))],function(l,n){l(n,2,0,"/goals")},function(l,n){l(n,1,0,e["\u0275nov"](n,2).target,e["\u0275nov"](n,2).href,e["\u0275nov"](n,3).disabled?-1:e["\u0275nov"](n,3).tabIndex||0,e["\u0275nov"](n,3).disabled||null,e["\u0275nov"](n,3).disabled.toString(),"NoopAnimations"===e["\u0275nov"](n,3)._animationMode)})}function O(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,8,null,null,null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,2,"h3",[["class","mat-subheader"],["matSubheader",""]],null,null,null,null,null)),e["\u0275did"](2,16384,null,0,r.g,[],null,null),(l()(),e["\u0275ted"](-1,null,["Gemeinsame Ziele"])),(l()(),e["\u0275and"](16777216,null,null,2,null,z)),e["\u0275did"](5,278528,null,0,s.n,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null),e["\u0275pid"](0,s.y,[]),(l()(),e["\u0275and"](16777216,null,null,1,null,A)),e["\u0275did"](8,16384,null,0,s.o,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](0,null,null,0))],function(l,n){var t=n.component;l(n,5,0,e["\u0275unv"](n,5,0,e["\u0275nov"](n,6).transform(t.sharedGoals,0,2)),t.goalTrackBy),l(n,8,0,t.sharedGoals.length>2)},null)}function D(l){return e["\u0275vid"](0,[e["\u0275pid"](0,s.e,[e.LOCALE_ID]),(l()(),e["\u0275eld"](1,0,null,null,16,"mat-toolbar",[["class","mat-toolbar"],["color","primary"]],[[2,"mat-toolbar-multiple-rows",null],[2,"mat-toolbar-single-row",null]],null,null,R.b,R.a)),e["\u0275did"](2,4243456,null,1,C.a,[e.ElementRef,y.a,s.d],{color:[0,"color"]},null),e["\u0275qud"](603979776,1,{_toolbarRows:1}),(l()(),e["\u0275eld"](4,0,null,0,5,"a",[["mat-icon-button",""]],[[1,"target",0],[8,"href",4],[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,5).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),"click"===n&&(u=!1!==e["\u0275nov"](l,6)._haltDisabledEvents(t)&&u),u},g.c,g.a)),e["\u0275did"](5,671744,null,0,c.r,[c.o,c.a,s.l],{queryParams:[0,"queryParams"],fragment:[1,"fragment"],routerLink:[2,"routerLink"]},null),e["\u0275did"](6,180224,null,0,b.a,[y.a,_.h,e.ElementRef,[2,k.a]],null,null),(l()(),e["\u0275eld"](7,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,h.b,h.a)),e["\u0275did"](8,9158656,null,0,p.b,[e.ElementRef,p.d,[8,null],[2,p.a]],null,null),(l()(),e["\u0275ted"](-1,0,["arrow_back"])),(l()(),e["\u0275eld"](10,0,null,0,1,"span",[["class","margin-left-xs"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Mitteilungen"])),(l()(),e["\u0275eld"](12,0,null,0,0,"span",[["class","spacer"]],null,null,null,null,null)),(l()(),e["\u0275eld"](13,0,null,0,4,"button",[["aria-label","Mitteilungen aktualisieren"],["mat-icon-button",""],["title","Mitteilungen nochmals \xfcberpr\xfcfen"],["type","button"]],[[8,"hidden",0],[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.initiate()&&e),e},g.d,g.b)),e["\u0275did"](14,180224,null,0,b.b,[e.ElementRef,y.a,_.h,[2,k.a]],null,null),(l()(),e["\u0275eld"](15,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,h.b,h.a)),e["\u0275did"](16,9158656,null,0,p.b,[e.ElementRef,p.d,[8,null],[2,p.a]],null,null),(l()(),e["\u0275ted"](-1,0,["refresh"])),(l()(),e["\u0275eld"](18,0,null,null,13,"mat-card",[["class","notifications-container mat-card"]],null,null,null,S.d,S.a)),e["\u0275did"](19,49152,null,0,L.a,[],null,null),(l()(),e["\u0275and"](16777216,null,0,1,null,M)),e["\u0275did"](21,16384,null,0,s.o,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,0,1,null,F)),e["\u0275did"](23,16384,null,0,s.o,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](24,0,null,0,7,"mat-nav-list",[["class","mat-nav-list mat-list-base"],["role","navigation"]],null,null,null,d.i,d.d)),e["\u0275did"](25,704512,null,0,r.h,[],null,null),(l()(),e["\u0275and"](16777216,null,0,1,null,K)),e["\u0275did"](27,16384,null,0,s.o,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,0,1,null,P)),e["\u0275did"](29,16384,null,0,s.o,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,0,1,null,O)),e["\u0275did"](31,16384,null,0,s.o,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,2,0,"primary"),l(n,5,0,t.routingSvc.getLastUrl().qparams,t.routingSvc.getLastUrl().fragment,t.routingSvc.getLastUrl().route),l(n,8,0),l(n,16,0),l(n,21,0,"fetching"===t.fetchStatus),l(n,23,0,"none"===t.fetchStatus),l(n,27,0,t.recentBadge),l(n,29,0,t.sharedPlaylists.length),l(n,31,0,t.sharedGoals.length)},function(l,n){var t=n.component;l(n,1,0,e["\u0275nov"](n,2)._toolbarRows.length>0,0===e["\u0275nov"](n,2)._toolbarRows.length),l(n,4,0,e["\u0275nov"](n,5).target,e["\u0275nov"](n,5).href,e["\u0275nov"](n,6).disabled?-1:e["\u0275nov"](n,6).tabIndex||0,e["\u0275nov"](n,6).disabled||null,e["\u0275nov"](n,6).disabled.toString(),"NoopAnimations"===e["\u0275nov"](n,6)._animationMode),l(n,7,0,e["\u0275nov"](n,8).inline,"primary"!==e["\u0275nov"](n,8).color&&"accent"!==e["\u0275nov"](n,8).color&&"warn"!==e["\u0275nov"](n,8).color),l(n,13,0,"fetching"===t.fetchStatus,e["\u0275nov"](n,14).disabled||null,"NoopAnimations"===e["\u0275nov"](n,14)._animationMode),l(n,15,0,e["\u0275nov"](n,16).inline,"primary"!==e["\u0275nov"](n,16).color&&"accent"!==e["\u0275nov"](n,16).color&&"warn"!==e["\u0275nov"](n,16).color)})}function N(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-notifications",[],null,null,null,D,B)),e["\u0275did"](1,114688,null,0,T,[w.a,x.a,I.a,E.a],null,null)],function(l,n){l(n,1,0)},null)}var V=e["\u0275ccf"]("app-notifications",T,N,{},{},[]),U=function(){return function(){}}(),$=t("Fzqc"),j=t("ZYjt"),J=t("Blfk"),W=t("ze1e");t.d(n,"NotificationsModuleNgFactory",function(){return Z});var Z=e["\u0275cmf"](u,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,V]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,s.q,s.p,[e.LOCALE_ID,[2,s.L]]),e["\u0275mpd"](1073742336,s.c,s.c,[]),e["\u0275mpd"](1073742336,c.s,c.s,[[2,c.x],[2,c.o]]),e["\u0275mpd"](1073742336,U,U,[]),e["\u0275mpd"](1073742336,$.a,$.a,[]),e["\u0275mpd"](1073742336,m.n,m.n,[[2,m.f],[2,j.f]]),e["\u0275mpd"](1073742336,J.c,J.c,[]),e["\u0275mpd"](1073742336,W.a,W.a,[]),e["\u0275mpd"](1073742336,C.b,C.b,[]),e["\u0275mpd"](1073742336,p.c,p.c,[]),e["\u0275mpd"](1073742336,y.b,y.b,[]),e["\u0275mpd"](1073742336,m.y,m.y,[]),e["\u0275mpd"](1073742336,b.c,b.c,[]),e["\u0275mpd"](1073742336,m.p,m.p,[]),e["\u0275mpd"](1073742336,m.w,m.w,[]),e["\u0275mpd"](1073742336,v.b,v.b,[]),e["\u0275mpd"](1073742336,r.e,r.e,[]),e["\u0275mpd"](1073742336,L.g,L.g,[]),e["\u0275mpd"](1073742336,u,u,[]),e["\u0275mpd"](256,e.LOCALE_ID,"de",[]),e["\u0275mpd"](1024,c.m,function(){return[[{path:"",component:T}]]},[]),e["\u0275mpd"](256,e.TRANSLATIONS_FORMAT,"xlf",[])])})}}]);