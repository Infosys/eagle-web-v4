/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3"*/
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Mc5n:function(t,e,i){"use strict";i.d(e,"f",function(){return U}),i.d(e,"d",function(){return K}),i.d(e,"b",function(){return $}),i.d(e,"i",function(){return T}),i.d(e,"j",function(){return L}),i.d(e,"g",function(){return X}),i.d(e,"h",function(){return F}),i.d(e,"e",function(){return Y}),i.d(e,"a",function(){return G}),i.d(e,"c",function(){return W}),i.d(e,"k",function(){return V});var s=i("/HVE"),n=i("KCVW"),r=i("XNiG"),o=i("quSY"),a=i("HDdC"),h=i("VRyK"),d=i("8Y7J"),l=i("SVse"),c=i("hOhj"),_=i("lJxs"),p=i("IzEk"),g=i("1G5W"),u=i("JX91"),m=i("vkgz"),f=i("eIep");function v(t,e){for(let i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}function b(t,e){const i=e?"":"none";v(t.style,{touchAction:e?"":"none",webkitUserDrag:e?"":"none",webkitTapHighlightColor:e?"":"transparent",userSelect:i,msUserSelect:i,webkitUserSelect:i,MozUserSelect:i})}function w(t){const e=t.toLowerCase().indexOf("ms")>-1?1:1e3;return parseFloat(t)*e}function D(t,e){return t.getPropertyValue(e).split(",").map(t=>t.trim())}const E=Object(s.f)({passive:!0}),R=Object(s.f)({passive:!1}),y=800;class x{constructor(t,e,i,s,n,h){this._config=e,this._document=i,this._ngZone=s,this._viewportRuler=n,this._dragDropRegistry=h,this._passiveTransform={x:0,y:0},this._activeTransform={x:0,y:0},this._moveEvents=new r.a,this._moveEventSubscriptions=0,this._pointerMoveSubscription=o.a.EMPTY,this._pointerUpSubscription=o.a.EMPTY,this._boundaryElement=null,this._nativeInteractionsEnabled=!0,this._handles=[],this._disabledHandles=new Set,this._direction="ltr",this._disabled=!1,this.beforeStarted=new r.a,this.started=new r.a,this.released=new r.a,this.ended=new r.a,this.entered=new r.a,this.exited=new r.a,this.dropped=new r.a,this.moved=new a.a(t=>{const e=this._moveEvents.subscribe(t);return this._moveEventSubscriptions++,()=>{e.unsubscribe(),this._moveEventSubscriptions--}}),this._pointerDown=(t=>{if(this.beforeStarted.next(),this._handles.length){const e=this._handles.find(e=>{const i=t.target;return!!i&&(i===e||e.contains(i))});!e||this._disabledHandles.has(e)||this.disabled||this._initializeDragSequence(e,t)}else this.disabled||this._initializeDragSequence(this._rootElement,t)}),this._pointerMove=(t=>{if(!this._hasStartedDragging){const e=this._getPointerPositionOnPage(t);return void(Math.abs(e.x-this._pickupPositionOnPage.x)+Math.abs(e.y-this._pickupPositionOnPage.y)>=this._config.dragStartThreshold&&(this._hasStartedDragging=!0,this._ngZone.run(()=>this._startDragSequence(t))))}this._boundaryElement&&(this._previewRect&&(this._previewRect.width||this._previewRect.height)||(this._previewRect=(this._preview||this._rootElement).getBoundingClientRect()));const e=this._getConstrainedPointerPosition(t);if(this._hasMoved=!0,t.preventDefault(),this._updatePointerDirectionDelta(e),this._dropContainer)this._updateActiveDropContainer(e);else{const t=this._activeTransform;t.x=e.x-this._pickupPositionOnPage.x+this._passiveTransform.x,t.y=e.y-this._pickupPositionOnPage.y+this._passiveTransform.y;const i=P(t.x,t.y);this._rootElement.style.transform=this._initialTransform?i+" "+this._initialTransform:i,"undefined"!=typeof SVGElement&&this._rootElement instanceof SVGElement&&this._rootElement.setAttribute("transform",`translate(${t.x} ${t.y})`)}this._moveEventSubscriptions>0&&this._ngZone.run(()=>{this._moveEvents.next({source:this,pointerPosition:e,event:t,delta:this._pointerDirectionDelta})})}),this._pointerUp=(t=>{if(this._dragDropRegistry.isDragging(this)&&(this._removeSubscriptions(),this._dragDropRegistry.stopDragging(this),this._handles&&(this._rootElement.style.webkitTapHighlightColor=this._rootElementTapHighlight),this._hasStartedDragging)){if(this.released.next({source:this}),!this._dropContainer)return this._passiveTransform.x=this._activeTransform.x,this._passiveTransform.y=this._activeTransform.y,this._ngZone.run(()=>this.ended.next({source:this})),void this._dragDropRegistry.stopDragging(this);this._animatePreviewToPlaceholder().then(()=>{this._cleanupDragArtifacts(t),this._dragDropRegistry.stopDragging(this)})}}),this.withRootElement(t),h.registerDragItem(this)}get disabled(){return this._disabled||!(!this._dropContainer||!this._dropContainer.disabled)}set disabled(t){const e=Object(n.c)(t);e!==this._disabled&&(this._disabled=e,this._toggleNativeDragInteractions())}getPlaceholderElement(){return this._placeholder}getRootElement(){return this._rootElement}withHandles(t){return this._handles=t.map(t=>Object(n.e)(t)),this._handles.forEach(t=>b(t,!1)),this._toggleNativeDragInteractions(),this}withPreviewTemplate(t){return this._previewTemplate=t,this}withPlaceholderTemplate(t){return this._placeholderTemplate=t,this}withRootElement(t){const e=Object(n.e)(t);return e!==this._rootElement&&(this._rootElement&&this._removeRootElementListeners(this._rootElement),e.addEventListener("mousedown",this._pointerDown,R),e.addEventListener("touchstart",this._pointerDown,E),this._initialTransform=void 0,this._rootElement=e),this}withBoundaryElement(t){return this._boundaryElement=t?Object(n.e)(t):null,this}dispose(){this._removeRootElementListeners(this._rootElement),this.isDragging()&&O(this._rootElement),this._destroyPreview(),this._destroyPlaceholder(),this._dragDropRegistry.removeDragItem(this),this._removeSubscriptions(),this.beforeStarted.complete(),this.started.complete(),this.released.complete(),this.ended.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this._moveEvents.complete(),this._handles=[],this._disabledHandles.clear(),this._dropContainer=void 0,this._boundaryElement=this._rootElement=this._placeholderTemplate=this._previewTemplate=this._nextSibling=null}isDragging(){return this._hasStartedDragging&&this._dragDropRegistry.isDragging(this)}reset(){this._rootElement.style.transform=this._initialTransform||"",this._activeTransform={x:0,y:0},this._passiveTransform={x:0,y:0}}disableHandle(t){this._handles.indexOf(t)>-1&&this._disabledHandles.add(t)}enableHandle(t){this._disabledHandles.delete(t)}withDirection(t){return this._direction=t,this}_withDropContainer(t){this._dropContainer=t}_removeSubscriptions(){this._pointerMoveSubscription.unsubscribe(),this._pointerUpSubscription.unsubscribe()}_destroyPreview(){this._preview&&O(this._preview),this._previewRef&&this._previewRef.destroy(),this._preview=this._previewRef=null}_destroyPlaceholder(){this._placeholder&&O(this._placeholder),this._placeholderRef&&this._placeholderRef.destroy(),this._placeholder=this._placeholderRef=null}_startDragSequence(t){if(this.started.next({source:this}),S(t)&&(this._lastTouchEventTime=Date.now()),this._dropContainer){const t=this._rootElement;this._nextSibling=t.nextSibling;const e=this._preview=this._createPreviewElement(),i=this._placeholder=this._createPlaceholderElement();t.style.display="none",this._document.body.appendChild(t.parentNode.replaceChild(i,t)),this._document.body.appendChild(e),this._dropContainer.start()}}_initializeDragSequence(t,e){e.stopPropagation();const i=this.isDragging(),s=S(e),n=!s&&0!==e.button,r=this._rootElement,o=!s&&this._lastTouchEventTime&&this._lastTouchEventTime+y>Date.now();if(e.target&&e.target.draggable&&"mousedown"===e.type&&e.preventDefault(),i||n||o)return;null==this._initialTransform&&(this._initialTransform=this._rootElement.style.transform||""),this._handles.length&&(this._rootElementTapHighlight=r.style.webkitTapHighlightColor,r.style.webkitTapHighlightColor="transparent"),this._toggleNativeDragInteractions(),this._hasStartedDragging=this._hasMoved=!1,this._initialContainer=this._dropContainer,this._pointerMoveSubscription=this._dragDropRegistry.pointerMove.subscribe(this._pointerMove),this._pointerUpSubscription=this._dragDropRegistry.pointerUp.subscribe(this._pointerUp),this._scrollPosition=this._viewportRuler.getViewportScrollPosition(),this._boundaryElement&&(this._boundaryRect=this._boundaryElement.getBoundingClientRect()),this._pickupPositionInElement=this._previewTemplate&&this._previewTemplate.template?{x:0,y:0}:this._getPointerPositionInElement(t,e);const a=this._pickupPositionOnPage=this._getPointerPositionOnPage(e);this._pointerDirectionDelta={x:0,y:0},this._pointerPositionAtLastDirectionChange={x:a.x,y:a.y},this._dragDropRegistry.startDragging(this,e)}_cleanupDragArtifacts(t){this._rootElement.style.display="",this._nextSibling?this._nextSibling.parentNode.insertBefore(this._rootElement,this._nextSibling):this._initialContainer.element.appendChild(this._rootElement),this._destroyPreview(),this._destroyPlaceholder(),this._boundaryRect=this._previewRect=void 0,this._ngZone.run(()=>{const e=this._dropContainer,i=e.getItemIndex(this),{x:s,y:n}=this._getPointerPositionOnPage(t),r=e._isOverContainer(s,n);this.ended.next({source:this}),this.dropped.next({item:this,currentIndex:i,previousIndex:this._initialContainer.getItemIndex(this),container:e,previousContainer:this._initialContainer,isPointerOverContainer:r}),e.drop(this,i,this._initialContainer,r),this._dropContainer=this._initialContainer})}_updateActiveDropContainer({x:t,y:e}){let i=this._dropContainer._getSiblingContainerFromPosition(this,t,e)||this._initialContainer._getSiblingContainerFromPosition(this,t,e);!i&&this._dropContainer!==this._initialContainer&&this._initialContainer._isOverContainer(t,e)&&(i=this._initialContainer),i&&i!==this._dropContainer&&this._ngZone.run(()=>{this.exited.next({item:this,container:this._dropContainer}),this._dropContainer.exit(this),this.entered.next({item:this,container:i}),this._dropContainer=i,this._dropContainer.enter(this,t,e)}),this._dropContainer._sortItem(this,t,e,this._pointerDirectionDelta),this._preview.style.transform=P(t-this._pickupPositionInElement.x,e-this._pickupPositionInElement.y)}_createPreviewElement(){const t=this._previewTemplate,e=t?t.template:null;let i;if(e){const s=t.viewContainer.createEmbeddedView(e,t.context);i=s.rootNodes[0],this._previewRef=s,i.style.transform=P(this._pickupPositionOnPage.x,this._pickupPositionOnPage.y)}else{const t=this._rootElement,e=t.getBoundingClientRect();(i=C(t)).style.width=`${e.width}px`,i.style.height=`${e.height}px`,i.style.transform=P(e.left,e.top)}return v(i.style,{pointerEvents:"none",position:"fixed",top:"0",left:"0",zIndex:"1000"}),b(i,!1),i.classList.add("cdk-drag-preview"),i.setAttribute("dir",this._direction),i}_animatePreviewToPlaceholder(){if(!this._hasMoved)return Promise.resolve();const t=this._placeholder.getBoundingClientRect();this._preview.classList.add("cdk-drag-animating"),this._preview.style.transform=P(t.left,t.top);const e=function(t){const e=getComputedStyle(t),i=D(e,"transition-property"),s=i.find(t=>"transform"===t||"all"===t);if(!s)return 0;const n=i.indexOf(s),r=D(e,"transition-duration"),o=D(e,"transition-delay");return w(r[n])+w(o[n])}(this._preview);return 0===e?Promise.resolve():this._ngZone.runOutsideAngular(()=>new Promise(t=>{const i=e=>{(!e||e.target===this._preview&&"transform"===e.propertyName)&&(this._preview.removeEventListener("transitionend",i),t(),clearTimeout(s))},s=setTimeout(i,1.5*e);this._preview.addEventListener("transitionend",i)}))}_createPlaceholderElement(){const t=this._placeholderTemplate,e=t?t.template:null;let i;return e?(this._placeholderRef=t.viewContainer.createEmbeddedView(e,t.context),i=this._placeholderRef.rootNodes[0]):i=C(this._rootElement),i.classList.add("cdk-drag-placeholder"),i}_getPointerPositionInElement(t,e){const i=this._rootElement.getBoundingClientRect(),s=t===this._rootElement?null:t,n=s?s.getBoundingClientRect():i,r=S(e)?e.targetTouches[0]:e;return{x:n.left-i.left+(r.pageX-n.left-this._scrollPosition.left),y:n.top-i.top+(r.pageY-n.top-this._scrollPosition.top)}}_getPointerPositionOnPage(t){const e=S(t)?t.touches[0]||t.changedTouches[0]:t;return{x:e.pageX-this._scrollPosition.left,y:e.pageY-this._scrollPosition.top}}_getConstrainedPointerPosition(t){const e=this._getPointerPositionOnPage(t),i=this._dropContainer?this._dropContainer.lockAxis:null;if("x"===this.lockAxis||"x"===i?e.y=this._pickupPositionOnPage.y:"y"!==this.lockAxis&&"y"!==i||(e.x=this._pickupPositionOnPage.x),this._boundaryRect){const{x:t,y:i}=this._pickupPositionInElement,s=this._boundaryRect,n=this._previewRect,r=s.top+i,o=s.bottom-(n.height-i);e.x=I(e.x,s.left+t,s.right-(n.width-t)),e.y=I(e.y,r,o)}return e}_updatePointerDirectionDelta(t){const{x:e,y:i}=t,s=this._pointerDirectionDelta,n=this._pointerPositionAtLastDirectionChange,r=Math.abs(e-n.x),o=Math.abs(i-n.y);return r>this._config.pointerDirectionChangeThreshold&&(s.x=e>n.x?1:-1,n.x=e),o>this._config.pointerDirectionChangeThreshold&&(s.y=i>n.y?1:-1,n.y=i),s}_toggleNativeDragInteractions(){if(!this._rootElement||!this._handles)return;const t=this.disabled||this._handles.length>0;t!==this._nativeInteractionsEnabled&&(this._nativeInteractionsEnabled=t,b(this._rootElement,t))}_removeRootElementListeners(t){t.removeEventListener("mousedown",this._pointerDown,R),t.removeEventListener("touchstart",this._pointerDown,E)}}function P(t,e){return`translate3d(${Math.round(t)}px, ${Math.round(e)}px, 0)`}function C(t){const e=t.cloneNode(!0);return e.removeAttribute("id"),e}function I(t,e,i){return Math.max(e,Math.min(i,t))}function O(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function S(t){return t.type.startsWith("touch")}function T(t,e,i){const s=k(e,t.length-1),n=k(i,t.length-1);if(s===n)return;const r=t[s],o=n<s?-1:1;for(let a=s;a!==n;a+=o)t[a]=t[a+o];t[n]=r}function L(t,e,i,s){const n=k(i,t.length-1),r=k(s,e.length);t.length&&e.splice(r,0,t.splice(n,1)[0])}function k(t,e){return Math.max(0,Math.min(e,t))}let j=0;const M=.05;class A{constructor(t,e,i){this._dragDropRegistry=e,this.id=`cdk-drop-list-ref-${j++}`,this.disabled=!1,this.enterPredicate=(()=>!0),this.beforeStarted=new r.a,this.entered=new r.a,this.exited=new r.a,this.dropped=new r.a,this.sorted=new r.a,this._isDragging=!1,this._itemPositions=[],this._previousSwap={drag:null,delta:0},this._siblings=[],this._orientation="vertical",this._activeSiblings=new Set,this._direction="ltr",e.registerDropContainer(this),this._document=i,this.element=t instanceof d.ElementRef?t.nativeElement:t}dispose(){this.beforeStarted.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this.sorted.complete(),this._activeSiblings.clear(),this._dragDropRegistry.removeDropContainer(this)}isDragging(){return this._isDragging}start(){this.beforeStarted.next(),this._isDragging=!0,this._activeDraggables=this._draggables.slice(),this._cacheOwnPosition(),this._cacheItemPositions(),this._siblings.forEach(t=>t._startReceiving(this))}enter(t,e,i){this.entered.next({item:t,container:this}),this.start();const s=this._getItemIndexFromPointerPosition(t,e,i),n=this._activeDraggables.indexOf(t),r=this._activeDraggables[s],o=t.getPlaceholderElement();if(n>-1&&this._activeDraggables.splice(n,1),r&&!this._dragDropRegistry.isDragging(r)){const e=r.getRootElement();e.parentElement.insertBefore(o,e),this._activeDraggables.splice(s,0,t)}else this.element.appendChild(o),this._activeDraggables.push(t);o.style.transform="",this._cacheItemPositions()}exit(t){this._reset(),this.exited.next({item:t,container:this})}drop(t,e,i,s){this._reset(),this.dropped.next({item:t,currentIndex:e,previousIndex:i.getItemIndex(t),container:this,previousContainer:i,isPointerOverContainer:s})}withItems(t){return this._draggables=t,t.forEach(t=>t._withDropContainer(this)),this}withDirection(t){return this._direction=t,this}connectedTo(t){return this._siblings=t.slice(),this}withOrientation(t){return this._orientation=t,this}getItemIndex(t){return this._isDragging?z("horizontal"===this._orientation&&"rtl"===this._direction?this._itemPositions.slice().reverse():this._itemPositions,e=>e.drag===t):this._draggables.indexOf(t)}isReceiving(){return this._activeSiblings.size>0}_sortItem(t,e,i,s){if(!this._isPointerNearDropContainer(e,i))return;const n=this._itemPositions,r=this._getItemIndexFromPointerPosition(t,e,i,s);if(-1===r&&n.length>0)return;const o="horizontal"===this._orientation,a=z(n,e=>e.drag===t),h=n[r],d=n[a].clientRect,l=h.clientRect,c=a>r?1:-1;this._previousSwap.drag=h.drag,this._previousSwap.delta=o?s.x:s.y;const _=this._getItemOffsetPx(d,l,c),p=this._getSiblingOffsetPx(a,n,c),g=n.slice();T(n,a,r),this.sorted.next({previousIndex:a,currentIndex:r,container:this,item:t}),n.forEach((e,i)=>{if(g[i]===e)return;const s=e.drag===t,n=s?_:p,r=s?t.getPlaceholderElement():e.drag.getRootElement();e.offset+=n,o?(r.style.transform=`translate3d(${Math.round(e.offset)}px, 0, 0)`,N(e.clientRect,0,n)):(r.style.transform=`translate3d(0, ${Math.round(e.offset)}px, 0)`,N(e.clientRect,n,0))})}_cacheOwnPosition(){this._clientRect=this.element.getBoundingClientRect()}_cacheItemPositions(){const t="horizontal"===this._orientation;this._itemPositions=this._activeDraggables.map(t=>{const e=(this._dragDropRegistry.isDragging(t)?t.getPlaceholderElement():t.getRootElement()).getBoundingClientRect();return{drag:t,offset:0,clientRect:{top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height}}}).sort((e,i)=>t?e.clientRect.left-i.clientRect.left:e.clientRect.top-i.clientRect.top)}_reset(){this._isDragging=!1,this._activeDraggables.forEach(t=>t.getRootElement().style.transform=""),this._siblings.forEach(t=>t._stopReceiving(this)),this._activeDraggables=[],this._itemPositions=[],this._previousSwap.drag=null,this._previousSwap.delta=0}_getSiblingOffsetPx(t,e,i){const s="horizontal"===this._orientation,n=e[t].clientRect,r=e[t+-1*i];let o=n[s?"width":"height"]*i;if(r){const t=s?"left":"top",e=s?"right":"bottom";-1===i?o-=r.clientRect[t]-n[e]:o+=n[t]-r.clientRect[e]}return o}_isPointerNearDropContainer(t,e){const{top:i,right:s,bottom:n,left:r,width:o,height:a}=this._clientRect,h=o*M,d=a*M;return e>i-d&&e<n+d&&t>r-h&&t<s+h}_getItemOffsetPx(t,e,i){const s="horizontal"===this._orientation;let n=s?e.left-t.left:e.top-t.top;return-1===i&&(n+=s?e.width-t.width:e.height-t.height),n}_getItemIndexFromPointerPosition(t,e,i,s){const n="horizontal"===this._orientation;return z(this._itemPositions,({drag:r,clientRect:o},a,h)=>{if(r===t)return h.length<2;if(s){const t=n?s.x:s.y;if(r===this._previousSwap.drag&&t===this._previousSwap.delta)return!1}return n?e>=Math.floor(o.left)&&e<=Math.floor(o.right):i>=Math.floor(o.top)&&i<=Math.floor(o.bottom)})}_isOverContainer(t,e){return H(this._clientRect,t,e)}_getSiblingContainerFromPosition(t,e,i){return this._siblings.find(s=>s._canReceive(t,e,i))}_canReceive(t,e,i){if(!this.enterPredicate(t,this)||!H(this._clientRect,e,i))return!1;const s=this._document.elementFromPoint(e,i);return!!s&&(s===this.element||this.element.contains(s))}_startReceiving(t){const e=this._activeSiblings;e.has(t)||(e.add(t),this._cacheOwnPosition())}_stopReceiving(t){this._activeSiblings.delete(t)}}function N(t,e,i){t.top+=e,t.bottom=t.top+t.height,t.left+=i,t.right=t.left+t.width}function z(t,e){for(let i=0;i<t.length;i++)if(e(t[i],i,t))return i;return-1}function H(t,e,i){const{top:s,bottom:n,left:r,right:o}=t;return i>=s&&i<=n&&e>=r&&e<=o}const Z=Object(s.f)({passive:!1,capture:!0}),F=function(){class t{constructor(t,e){this._ngZone=t,this._dropInstances=new Set,this._dragInstances=new Set,this._activeDragInstances=new Set,this._globalListeners=new Map,this.pointerMove=new r.a,this.pointerUp=new r.a,this._preventDefaultWhileDragging=(t=>{this._activeDragInstances.size&&t.preventDefault()}),this._document=e}registerDropContainer(t){if(!this._dropInstances.has(t)){if(this.getDropContainer(t.id))throw Error(`Drop instance with id "${t.id}" has already been registered.`);this._dropInstances.add(t)}}registerDragItem(t){this._dragInstances.add(t),1===this._dragInstances.size&&this._ngZone.runOutsideAngular(()=>{this._document.addEventListener("touchmove",this._preventDefaultWhileDragging,Z)})}removeDropContainer(t){this._dropInstances.delete(t)}removeDragItem(t){this._dragInstances.delete(t),this.stopDragging(t),0===this._dragInstances.size&&this._document.removeEventListener("touchmove",this._preventDefaultWhileDragging,Z)}startDragging(t,e){if(this._activeDragInstances.add(t),1===this._activeDragInstances.size){const t=e.type.startsWith("touch"),i=t?"touchend":"mouseup";this._globalListeners.set(t?"touchmove":"mousemove",{handler:t=>this.pointerMove.next(t),options:Z}).set(i,{handler:t=>this.pointerUp.next(t),options:!0}).set("selectstart",{handler:this._preventDefaultWhileDragging,options:Z}),t||this._globalListeners.set("wheel",{handler:this._preventDefaultWhileDragging,options:Z}),this._ngZone.runOutsideAngular(()=>{this._globalListeners.forEach((t,e)=>{this._document.addEventListener(e,t.handler,t.options)})})}}stopDragging(t){this._activeDragInstances.delete(t),0===this._activeDragInstances.size&&this._clearGlobalListeners()}isDragging(t){return this._activeDragInstances.has(t)}getDropContainer(t){return Array.from(this._dropInstances).find(e=>e.id===t)}ngOnDestroy(){this._dragInstances.forEach(t=>this.removeDragItem(t)),this._dropInstances.forEach(t=>this.removeDropContainer(t)),this._clearGlobalListeners(),this.pointerMove.complete(),this.pointerUp.complete()}_clearGlobalListeners(){this._globalListeners.forEach((t,e)=>{this._document.removeEventListener(e,t.handler,t.options)}),this._globalListeners.clear()}}return t.ngInjectableDef=Object(d.defineInjectable)({factory:function(){return new t(Object(d.inject)(d.NgZone),Object(d.inject)(l.d))},token:t,providedIn:"root"}),t}(),B={dragStartThreshold:5,pointerDirectionChangeThreshold:5},U=function(){class t{constructor(t,e,i,s){this._document=t,this._ngZone=e,this._viewportRuler=i,this._dragDropRegistry=s}createDrag(t,e=B){return new x(t,e,this._document,this._ngZone,this._viewportRuler,this._dragDropRegistry)}createDropList(t){return new A(t,this._dragDropRegistry,this._document)}}return t.ngInjectableDef=Object(d.defineInjectable)({factory:function(){return new t(Object(d.inject)(l.d),Object(d.inject)(d.NgZone),Object(d.inject)(c.e),Object(d.inject)(F))},token:t,providedIn:"root"}),t}(),$=new d.InjectionToken("CDK_DROP_LIST"),V=new d.InjectionToken("CDK_DRAG_PARENT"),G=new d.InjectionToken("CDK_DRAG_CONFIG",{providedIn:"root",factory:function(){return{dragStartThreshold:5,pointerDirectionChangeThreshold:5}}});class W{constructor(t,e,i,s,n,o,h,l,c,p,g){this.element=t,this.dropContainer=e,this._document=i,this._ngZone=s,this._viewContainerRef=n,this._dir=c,this._changeDetectorRef=g,this._destroyed=new r.a,this._disabled=!1,this.started=new d.EventEmitter,this.released=new d.EventEmitter,this.ended=new d.EventEmitter,this.entered=new d.EventEmitter,this.exited=new d.EventEmitter,this.dropped=new d.EventEmitter,this.moved=new a.a(t=>{const e=this._dragRef.moved.pipe(Object(_.a)(t=>({source:this,pointerPosition:t.pointerPosition,event:t.event,delta:t.delta}))).subscribe(t);return()=>{e.unsubscribe()}}),this._dragRef=p?p.createDrag(t,l):new x(t,l,i,s,o,h),this._dragRef.data=this,this._syncInputs(this._dragRef),this._handleEvents(this._dragRef)}get disabled(){return this._disabled||this.dropContainer&&this.dropContainer.disabled}set disabled(t){this._disabled=Object(n.c)(t),this._dragRef.disabled=this._disabled}getPlaceholderElement(){return this._dragRef.getPlaceholderElement()}getRootElement(){return this._dragRef.getRootElement()}reset(){this._dragRef.reset()}ngAfterViewInit(){this._ngZone.onStable.asObservable().pipe(Object(p.a)(1),Object(g.a)(this._destroyed)).subscribe(()=>{this._updateRootElement(),this._handles.changes.pipe(Object(u.a)(this._handles),Object(m.a)(t=>{const e=t.filter(t=>t._parentDrag===this).map(t=>t.element);this._dragRef.withHandles(e)}),Object(f.a)(t=>Object(h.a)(...t.map(t=>t._stateChanges))),Object(g.a)(this._destroyed)).subscribe(t=>{const e=this._dragRef,i=t.element.nativeElement;t.disabled?e.disableHandle(i):e.enableHandle(i)})})}ngOnChanges(t){const e=t.rootElementSelector;e&&!e.firstChange&&this._updateRootElement()}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),this._dragRef.dispose()}_updateRootElement(){const t=this.element.nativeElement,e=this.rootElementSelector?q(t,this.rootElementSelector):t;if(e&&e.nodeType!==this._document.ELEMENT_NODE)throw Error("cdkDrag must be attached to an element node. "+`Currently attached to "${e.nodeName}".`);this._dragRef.withRootElement(e||t)}_getBoundaryElement(){const t=this.boundaryElementSelector;return t?q(this.element.nativeElement,t):null}_syncInputs(t){t.beforeStarted.subscribe(()=>{if(!t.isDragging()){const e=this._dir,i=this._placeholderTemplate?{template:this._placeholderTemplate.templateRef,context:this._placeholderTemplate.data,viewContainer:this._viewContainerRef}:null,s=this._previewTemplate?{template:this._previewTemplate.templateRef,context:this._previewTemplate.data,viewContainer:this._viewContainerRef}:null;t.disabled=this.disabled,t.lockAxis=this.lockAxis,t.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(i).withPreviewTemplate(s),e&&t.withDirection(e.value)}})}_handleEvents(t){t.started.subscribe(()=>{this.started.emit({source:this}),this._changeDetectorRef&&this._changeDetectorRef.markForCheck()}),t.released.subscribe(()=>{this.released.emit({source:this})}),t.ended.subscribe(()=>{this.ended.emit({source:this}),this._changeDetectorRef&&this._changeDetectorRef.markForCheck()}),t.entered.subscribe(t=>{this.entered.emit({container:t.container.data,item:this})}),t.exited.subscribe(t=>{this.exited.emit({container:t.container.data,item:this})}),t.dropped.subscribe(t=>{this.dropped.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,previousContainer:t.previousContainer.data,container:t.container.data,isPointerOverContainer:t.isPointerOverContainer,item:this})})}}function q(t,e){let i=t.parentElement;for(;i;){if(i.matches?i.matches(e):i.msMatchesSelector(e))return i;i=i.parentElement}return null}class Y{constructor(){this._items=new Set,this._disabled=!1}get disabled(){return this._disabled}set disabled(t){this._disabled=Object(n.c)(t)}ngOnDestroy(){this._items.clear()}}let J=0;const K=function(){class t{constructor(e,i,s,n,o,a,h){this.element=e,this._changeDetectorRef=s,this._dir=n,this._group=o,this._destroyed=new r.a,this.connectedTo=[],this.orientation="vertical",this.id=`cdk-drop-list-${J++}`,this._disabled=!1,this.enterPredicate=(()=>!0),this.dropped=new d.EventEmitter,this.entered=new d.EventEmitter,this.exited=new d.EventEmitter,this.sorted=new d.EventEmitter,this._dropListRef=h?h.createDropList(e):new A(e,i,a||document),this._dropListRef.data=this,this._dropListRef.enterPredicate=((t,e)=>this.enterPredicate(t.data,e.data)),this._syncInputs(this._dropListRef),this._handleEvents(this._dropListRef),t._dropLists.push(this),o&&o._items.add(this)}get disabled(){return this._disabled||!!this._group&&this._group.disabled}set disabled(t){this._disabled=Object(n.c)(t)}ngAfterContentInit(){this._draggables.changes.pipe(Object(u.a)(this._draggables),Object(g.a)(this._destroyed)).subscribe(t=>{this._dropListRef.withItems(t.map(t=>t._dragRef))})}ngOnDestroy(){const e=t._dropLists.indexOf(this);e>-1&&t._dropLists.splice(e,1),this._group&&this._group._items.delete(this),this._dropListRef.dispose(),this._destroyed.next(),this._destroyed.complete()}start(){this._dropListRef.start()}drop(t,e,i,s){this._dropListRef.drop(t._dragRef,e,i._dropListRef,s)}enter(t,e,i){this._dropListRef.enter(t._dragRef,e,i)}exit(t){this._dropListRef.exit(t._dragRef)}getItemIndex(t){return this._dropListRef.getItemIndex(t._dragRef)}_sortItem(t,e,i,s){return this._dropListRef._sortItem(t._dragRef,e,i,s)}_getSiblingContainerFromPosition(t,e,i){const s=this._dropListRef._getSiblingContainerFromPosition(t._dragRef,e,i);return s?s.data:null}_isOverContainer(t,e){return this._dropListRef._isOverContainer(t,e)}_syncInputs(e){this._dir&&this._dir.change.pipe(Object(u.a)(this._dir.value),Object(g.a)(this._destroyed)).subscribe(t=>e.withDirection(t)),e.beforeStarted.subscribe(()=>{const i=Object(n.b)(this.connectedTo).map(e=>"string"==typeof e?t._dropLists.find(t=>t.id===e):e);this._group&&this._group._items.forEach(t=>{-1===i.indexOf(t)&&i.push(t)}),e.lockAxis=this.lockAxis,e.connectedTo(i.filter(t=>t&&t!==this).map(t=>t._dropListRef)).withOrientation(this.orientation)})}_handleEvents(t){t.beforeStarted.subscribe(()=>{this._changeDetectorRef.markForCheck()}),t.entered.subscribe(t=>{this.entered.emit({container:this,item:t.item.data})}),t.exited.subscribe(t=>{this.exited.emit({container:this,item:t.item.data})}),t.sorted.subscribe(t=>{this.sorted.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,container:this,item:t.item.data})}),t.dropped.subscribe(t=>{this.dropped.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,previousContainer:t.previousContainer.data,container:t.container.data,item:t.item.data,isPointerOverContainer:t.isPointerOverContainer}),this._changeDetectorRef.markForCheck()})}}return t._dropLists=[],t}();class X{}}}]);