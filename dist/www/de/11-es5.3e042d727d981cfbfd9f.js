/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3"*/
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"9Bt9":function(t,e,i){"use strict";i.d(e,"f",function(){return F}),i.d(e,"d",function(){return J}),i.d(e,"b",function(){return B}),i.d(e,"i",function(){return S}),i.d(e,"j",function(){return T}),i.d(e,"g",function(){return K}),i.d(e,"h",function(){return z}),i.d(e,"e",function(){return q}),i.d(e,"a",function(){return G}),i.d(e,"c",function(){return W}),i.d(e,"k",function(){return U});var n=i("dWZg"),r=i("n6gG"),o=i("K9Ia"),s=i("pugT"),a=i("6blF"),h=i("p0ib"),c=i("CcnG"),p=i("Ip0R"),d=i("qAlS"),l=i("67Y/"),u=i("t9fZ"),_=i("ny24"),g=i("p0Sj"),f=i("xMyE"),m=i("15JJ");function v(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}function b(t,e){var i=e?"":"none";v(t.style,{touchAction:e?"":"none",webkitUserDrag:e?"":"none",webkitTapHighlightColor:e?"":"transparent",userSelect:i,msUserSelect:i,webkitUserSelect:i,MozUserSelect:i})}function y(t){var e=t.toLowerCase().indexOf("ms")>-1?1:1e3;return parseFloat(t)*e}function w(t,e){return t.getPropertyValue(e).split(",").map(function(t){return t.trim()})}var D=Object(n.f)({passive:!0}),E=Object(n.f)({passive:!1}),R=function(){function t(t,e,i,n,r,h){var c=this;this._config=e,this._document=i,this._ngZone=n,this._viewportRuler=r,this._dragDropRegistry=h,this._passiveTransform={x:0,y:0},this._activeTransform={x:0,y:0},this._moveEvents=new o.a,this._moveEventSubscriptions=0,this._pointerMoveSubscription=s.a.EMPTY,this._pointerUpSubscription=s.a.EMPTY,this._boundaryElement=null,this._nativeInteractionsEnabled=!0,this._handles=[],this._disabledHandles=new Set,this._direction="ltr",this._disabled=!1,this.beforeStarted=new o.a,this.started=new o.a,this.released=new o.a,this.ended=new o.a,this.entered=new o.a,this.exited=new o.a,this.dropped=new o.a,this.moved=new a.a(function(t){var e=c._moveEvents.subscribe(t);return c._moveEventSubscriptions++,function(){e.unsubscribe(),c._moveEventSubscriptions--}}),this._pointerDown=function(t){if(c.beforeStarted.next(),c._handles.length){var e=c._handles.find(function(e){var i=t.target;return!!i&&(i===e||e.contains(i))});!e||c._disabledHandles.has(e)||c.disabled||c._initializeDragSequence(e,t)}else c.disabled||c._initializeDragSequence(c._rootElement,t)},this._pointerMove=function(t){if(c._hasStartedDragging){c._boundaryElement&&(c._previewRect&&(c._previewRect.width||c._previewRect.height)||(c._previewRect=(c._preview||c._rootElement).getBoundingClientRect()));var e=c._getConstrainedPointerPosition(t);if(c._hasMoved=!0,t.preventDefault(),c._updatePointerDirectionDelta(e),c._dropContainer)c._updateActiveDropContainer(e);else{var i=c._activeTransform;i.x=e.x-c._pickupPositionOnPage.x+c._passiveTransform.x,i.y=e.y-c._pickupPositionOnPage.y+c._passiveTransform.y;var n=x(i.x,i.y);c._rootElement.style.transform=c._initialTransform?n+" "+c._initialTransform:n,"undefined"!=typeof SVGElement&&c._rootElement instanceof SVGElement&&c._rootElement.setAttribute("transform","translate("+i.x+" "+i.y+")")}c._moveEventSubscriptions>0&&c._ngZone.run(function(){c._moveEvents.next({source:c,pointerPosition:e,event:t,delta:c._pointerDirectionDelta})})}else{var r=c._getPointerPositionOnPage(t);Math.abs(r.x-c._pickupPositionOnPage.x)+Math.abs(r.y-c._pickupPositionOnPage.y)>=c._config.dragStartThreshold&&(c._hasStartedDragging=!0,c._ngZone.run(function(){return c._startDragSequence(t)}))}},this._pointerUp=function(t){if(c._dragDropRegistry.isDragging(c)&&(c._removeSubscriptions(),c._dragDropRegistry.stopDragging(c),c._handles&&(c._rootElement.style.webkitTapHighlightColor=c._rootElementTapHighlight),c._hasStartedDragging)){if(c.released.next({source:c}),!c._dropContainer)return c._passiveTransform.x=c._activeTransform.x,c._passiveTransform.y=c._activeTransform.y,c._ngZone.run(function(){return c.ended.next({source:c})}),void c._dragDropRegistry.stopDragging(c);c._animatePreviewToPlaceholder().then(function(){c._cleanupDragArtifacts(t),c._dragDropRegistry.stopDragging(c)})}},this.withRootElement(t),h.registerDragItem(this)}return Object.defineProperty(t.prototype,"disabled",{get:function(){return this._disabled||!(!this._dropContainer||!this._dropContainer.disabled)},set:function(t){var e=Object(r.c)(t);e!==this._disabled&&(this._disabled=e,this._toggleNativeDragInteractions())},enumerable:!0,configurable:!0}),t.prototype.getPlaceholderElement=function(){return this._placeholder},t.prototype.getRootElement=function(){return this._rootElement},t.prototype.withHandles=function(t){return this._handles=t.map(function(t){return Object(r.e)(t)}),this._handles.forEach(function(t){return b(t,!1)}),this._toggleNativeDragInteractions(),this},t.prototype.withPreviewTemplate=function(t){return this._previewTemplate=t,this},t.prototype.withPlaceholderTemplate=function(t){return this._placeholderTemplate=t,this},t.prototype.withRootElement=function(t){var e=Object(r.e)(t);return e!==this._rootElement&&(this._rootElement&&this._removeRootElementListeners(this._rootElement),e.addEventListener("mousedown",this._pointerDown,E),e.addEventListener("touchstart",this._pointerDown,D),this._initialTransform=void 0,this._rootElement=e),this},t.prototype.withBoundaryElement=function(t){return this._boundaryElement=t?Object(r.e)(t):null,this},t.prototype.dispose=function(){this._removeRootElementListeners(this._rootElement),this.isDragging()&&I(this._rootElement),this._destroyPreview(),this._destroyPlaceholder(),this._dragDropRegistry.removeDragItem(this),this._removeSubscriptions(),this.beforeStarted.complete(),this.started.complete(),this.released.complete(),this.ended.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this._moveEvents.complete(),this._handles=[],this._disabledHandles.clear(),this._dropContainer=void 0,this._boundaryElement=this._rootElement=this._placeholderTemplate=this._previewTemplate=this._nextSibling=null},t.prototype.isDragging=function(){return this._hasStartedDragging&&this._dragDropRegistry.isDragging(this)},t.prototype.reset=function(){this._rootElement.style.transform=this._initialTransform||"",this._activeTransform={x:0,y:0},this._passiveTransform={x:0,y:0}},t.prototype.disableHandle=function(t){this._handles.indexOf(t)>-1&&this._disabledHandles.add(t)},t.prototype.enableHandle=function(t){this._disabledHandles.delete(t)},t.prototype.withDirection=function(t){return this._direction=t,this},t.prototype._withDropContainer=function(t){this._dropContainer=t},t.prototype._removeSubscriptions=function(){this._pointerMoveSubscription.unsubscribe(),this._pointerUpSubscription.unsubscribe()},t.prototype._destroyPreview=function(){this._preview&&I(this._preview),this._previewRef&&this._previewRef.destroy(),this._preview=this._previewRef=null},t.prototype._destroyPlaceholder=function(){this._placeholder&&I(this._placeholder),this._placeholderRef&&this._placeholderRef.destroy(),this._placeholder=this._placeholderRef=null},t.prototype._startDragSequence=function(t){if(this.started.next({source:this}),O(t)&&(this._lastTouchEventTime=Date.now()),this._dropContainer){var e=this._rootElement;this._nextSibling=e.nextSibling;var i=this._preview=this._createPreviewElement(),n=this._placeholder=this._createPlaceholderElement();e.style.display="none",this._document.body.appendChild(e.parentNode.replaceChild(n,e)),this._document.body.appendChild(i),this._dropContainer.start()}},t.prototype._initializeDragSequence=function(t,e){e.stopPropagation();var i=this.isDragging(),n=O(e),r=!n&&0!==e.button,o=this._rootElement,s=!n&&this._lastTouchEventTime&&this._lastTouchEventTime+800>Date.now();if(e.target&&e.target.draggable&&"mousedown"===e.type&&e.preventDefault(),!(i||r||s)){null==this._initialTransform&&(this._initialTransform=this._rootElement.style.transform||""),this._handles.length&&(this._rootElementTapHighlight=o.style.webkitTapHighlightColor,o.style.webkitTapHighlightColor="transparent"),this._toggleNativeDragInteractions(),this._hasStartedDragging=this._hasMoved=!1,this._initialContainer=this._dropContainer,this._pointerMoveSubscription=this._dragDropRegistry.pointerMove.subscribe(this._pointerMove),this._pointerUpSubscription=this._dragDropRegistry.pointerUp.subscribe(this._pointerUp),this._scrollPosition=this._viewportRuler.getViewportScrollPosition(),this._boundaryElement&&(this._boundaryRect=this._boundaryElement.getBoundingClientRect()),this._pickupPositionInElement=this._previewTemplate&&this._previewTemplate.template?{x:0,y:0}:this._getPointerPositionInElement(t,e);var a=this._pickupPositionOnPage=this._getPointerPositionOnPage(e);this._pointerDirectionDelta={x:0,y:0},this._pointerPositionAtLastDirectionChange={x:a.x,y:a.y},this._dragDropRegistry.startDragging(this,e)}},t.prototype._cleanupDragArtifacts=function(t){var e=this;this._rootElement.style.display="",this._nextSibling?this._nextSibling.parentNode.insertBefore(this._rootElement,this._nextSibling):this._initialContainer.element.appendChild(this._rootElement),this._destroyPreview(),this._destroyPlaceholder(),this._boundaryRect=this._previewRect=void 0,this._ngZone.run(function(){var i=e._dropContainer,n=i.getItemIndex(e),r=e._getPointerPositionOnPage(t),o=i._isOverContainer(r.x,r.y);e.ended.next({source:e}),e.dropped.next({item:e,currentIndex:n,previousIndex:e._initialContainer.getItemIndex(e),container:i,previousContainer:e._initialContainer,isPointerOverContainer:o}),i.drop(e,n,e._initialContainer,o),e._dropContainer=e._initialContainer})},t.prototype._updateActiveDropContainer=function(t){var e=this,i=t.x,n=t.y,r=this._dropContainer._getSiblingContainerFromPosition(this,i,n)||this._initialContainer._getSiblingContainerFromPosition(this,i,n);!r&&this._dropContainer!==this._initialContainer&&this._initialContainer._isOverContainer(i,n)&&(r=this._initialContainer),r&&r!==this._dropContainer&&this._ngZone.run(function(){e.exited.next({item:e,container:e._dropContainer}),e._dropContainer.exit(e),e.entered.next({item:e,container:r}),e._dropContainer=r,e._dropContainer.enter(e,i,n)}),this._dropContainer._sortItem(this,i,n,this._pointerDirectionDelta),this._preview.style.transform=x(i-this._pickupPositionInElement.x,n-this._pickupPositionInElement.y)},t.prototype._createPreviewElement=function(){var t,e=this._previewTemplate,i=e?e.template:null;if(i){var n=e.viewContainer.createEmbeddedView(i,e.context);t=n.rootNodes[0],this._previewRef=n,t.style.transform=x(this._pickupPositionOnPage.x,this._pickupPositionOnPage.y)}else{var r=this._rootElement,o=r.getBoundingClientRect();(t=P(r)).style.width=o.width+"px",t.style.height=o.height+"px",t.style.transform=x(o.left,o.top)}return v(t.style,{pointerEvents:"none",position:"fixed",top:"0",left:"0",zIndex:"1000"}),b(t,!1),t.classList.add("cdk-drag-preview"),t.setAttribute("dir",this._direction),t},t.prototype._animatePreviewToPlaceholder=function(){var t=this;if(!this._hasMoved)return Promise.resolve();var e=this._placeholder.getBoundingClientRect();this._preview.classList.add("cdk-drag-animating"),this._preview.style.transform=x(e.left,e.top);var i=function(t){var e=getComputedStyle(t),i=w(e,"transition-property"),n=i.find(function(t){return"transform"===t||"all"===t});if(!n)return 0;var r=i.indexOf(n),o=w(e,"transition-duration"),s=w(e,"transition-delay");return y(o[r])+y(s[r])}(this._preview);return 0===i?Promise.resolve():this._ngZone.runOutsideAngular(function(){return new Promise(function(e){var n=function(i){(!i||i.target===t._preview&&"transform"===i.propertyName)&&(t._preview.removeEventListener("transitionend",n),e(),clearTimeout(r))},r=setTimeout(n,1.5*i);t._preview.addEventListener("transitionend",n)})})},t.prototype._createPlaceholderElement=function(){var t,e=this._placeholderTemplate,i=e?e.template:null;return i?(this._placeholderRef=e.viewContainer.createEmbeddedView(i,e.context),t=this._placeholderRef.rootNodes[0]):t=P(this._rootElement),t.classList.add("cdk-drag-placeholder"),t},t.prototype._getPointerPositionInElement=function(t,e){var i=this._rootElement.getBoundingClientRect(),n=t===this._rootElement?null:t,r=n?n.getBoundingClientRect():i,o=O(e)?e.targetTouches[0]:e;return{x:r.left-i.left+(o.pageX-r.left-this._scrollPosition.left),y:r.top-i.top+(o.pageY-r.top-this._scrollPosition.top)}},t.prototype._getPointerPositionOnPage=function(t){var e=O(t)?t.touches[0]||t.changedTouches[0]:t;return{x:e.pageX-this._scrollPosition.left,y:e.pageY-this._scrollPosition.top}},t.prototype._getConstrainedPointerPosition=function(t){var e=this._getPointerPositionOnPage(t),i=this._dropContainer?this._dropContainer.lockAxis:null;if("x"===this.lockAxis||"x"===i?e.y=this._pickupPositionOnPage.y:"y"!==this.lockAxis&&"y"!==i||(e.x=this._pickupPositionOnPage.x),this._boundaryRect){var n=this._pickupPositionInElement,r=n.x,o=n.y,s=this._boundaryRect,a=this._previewRect,h=s.top+o,c=s.bottom-(a.height-o);e.x=C(e.x,s.left+r,s.right-(a.width-r)),e.y=C(e.y,h,c)}return e},t.prototype._updatePointerDirectionDelta=function(t){var e=t.x,i=t.y,n=this._pointerDirectionDelta,r=this._pointerPositionAtLastDirectionChange,o=Math.abs(e-r.x),s=Math.abs(i-r.y);return o>this._config.pointerDirectionChangeThreshold&&(n.x=e>r.x?1:-1,r.x=e),s>this._config.pointerDirectionChangeThreshold&&(n.y=i>r.y?1:-1,r.y=i),n},t.prototype._toggleNativeDragInteractions=function(){if(this._rootElement&&this._handles){var t=this.disabled||this._handles.length>0;t!==this._nativeInteractionsEnabled&&(this._nativeInteractionsEnabled=t,b(this._rootElement,t))}},t.prototype._removeRootElementListeners=function(t){t.removeEventListener("mousedown",this._pointerDown,E),t.removeEventListener("touchstart",this._pointerDown,D)},t}();function x(t,e){return"translate3d("+Math.round(t)+"px, "+Math.round(e)+"px, 0)"}function P(t){var e=t.cloneNode(!0);return e.removeAttribute("id"),e}function C(t,e,i){return Math.max(e,Math.min(i,t))}function I(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function O(t){return t.type.startsWith("touch")}function S(t,e,i){var n=L(e,t.length-1),r=L(i,t.length-1);if(n!==r){for(var o=t[n],s=r<n?-1:1,a=n;a!==r;a+=s)t[a]=t[a+s];t[r]=o}}function T(t,e,i,n){var r=L(i,t.length-1),o=L(n,e.length);t.length&&e.splice(o,0,t.splice(r,1)[0])}function L(t,e){return Math.max(0,Math.min(e,t))}var j=0,k=function(){function t(t,e,i){this._dragDropRegistry=e,this.id="cdk-drop-list-ref-"+j++,this.disabled=!1,this.enterPredicate=function(){return!0},this.beforeStarted=new o.a,this.entered=new o.a,this.exited=new o.a,this.dropped=new o.a,this.sorted=new o.a,this._isDragging=!1,this._itemPositions=[],this._previousSwap={drag:null,delta:0},this._siblings=[],this._orientation="vertical",this._activeSiblings=new Set,this._direction="ltr",e.registerDropContainer(this),this._document=i,this.element=t instanceof c.ElementRef?t.nativeElement:t}return t.prototype.dispose=function(){this.beforeStarted.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this.sorted.complete(),this._activeSiblings.clear(),this._dragDropRegistry.removeDropContainer(this)},t.prototype.isDragging=function(){return this._isDragging},t.prototype.start=function(){var t=this;this.beforeStarted.next(),this._isDragging=!0,this._activeDraggables=this._draggables.slice(),this._cacheOwnPosition(),this._cacheItemPositions(),this._siblings.forEach(function(e){return e._startReceiving(t)})},t.prototype.enter=function(t,e,i){this.entered.next({item:t,container:this}),this.start();var n=this._getItemIndexFromPointerPosition(t,e,i),r=this._activeDraggables.indexOf(t),o=this._activeDraggables[n],s=t.getPlaceholderElement();if(r>-1&&this._activeDraggables.splice(r,1),o&&!this._dragDropRegistry.isDragging(o)){var a=o.getRootElement();a.parentElement.insertBefore(s,a),this._activeDraggables.splice(n,0,t)}else this.element.appendChild(s),this._activeDraggables.push(t);s.style.transform="",this._cacheItemPositions()},t.prototype.exit=function(t){this._reset(),this.exited.next({item:t,container:this})},t.prototype.drop=function(t,e,i,n){this._reset(),this.dropped.next({item:t,currentIndex:e,previousIndex:i.getItemIndex(t),container:this,previousContainer:i,isPointerOverContainer:n})},t.prototype.withItems=function(t){var e=this;return this._draggables=t,t.forEach(function(t){return t._withDropContainer(e)}),this},t.prototype.withDirection=function(t){return this._direction=t,this},t.prototype.connectedTo=function(t){return this._siblings=t.slice(),this},t.prototype.withOrientation=function(t){return this._orientation=t,this},t.prototype.getItemIndex=function(t){return this._isDragging?A("horizontal"===this._orientation&&"rtl"===this._direction?this._itemPositions.slice().reverse():this._itemPositions,function(e){return e.drag===t}):this._draggables.indexOf(t)},t.prototype.isReceiving=function(){return this._activeSiblings.size>0},t.prototype._sortItem=function(t,e,i,n){if(this._isPointerNearDropContainer(e,i)){var r=this._itemPositions,o=this._getItemIndexFromPointerPosition(t,e,i,n);if(!(-1===o&&r.length>0)){var s="horizontal"===this._orientation,a=A(r,function(e){return e.drag===t}),h=r[o],c=r[a].clientRect,p=h.clientRect,d=a>o?1:-1;this._previousSwap.drag=h.drag,this._previousSwap.delta=s?n.x:n.y;var l=this._getItemOffsetPx(c,p,d),u=this._getSiblingOffsetPx(a,r,d),_=r.slice();S(r,a,o),this.sorted.next({previousIndex:a,currentIndex:o,container:this,item:t}),r.forEach(function(e,i){if(_[i]!==e){var n=e.drag===t,r=n?l:u,o=n?t.getPlaceholderElement():e.drag.getRootElement();e.offset+=r,s?(o.style.transform="translate3d("+Math.round(e.offset)+"px, 0, 0)",M(e.clientRect,0,r)):(o.style.transform="translate3d(0, "+Math.round(e.offset)+"px, 0)",M(e.clientRect,r,0))}})}}},t.prototype._cacheOwnPosition=function(){this._clientRect=this.element.getBoundingClientRect()},t.prototype._cacheItemPositions=function(){var t=this,e="horizontal"===this._orientation;this._itemPositions=this._activeDraggables.map(function(e){var i=(t._dragDropRegistry.isDragging(e)?e.getPlaceholderElement():e.getRootElement()).getBoundingClientRect();return{drag:e,offset:0,clientRect:{top:i.top,right:i.right,bottom:i.bottom,left:i.left,width:i.width,height:i.height}}}).sort(function(t,i){return e?t.clientRect.left-i.clientRect.left:t.clientRect.top-i.clientRect.top})},t.prototype._reset=function(){var t=this;this._isDragging=!1,this._activeDraggables.forEach(function(t){return t.getRootElement().style.transform=""}),this._siblings.forEach(function(e){return e._stopReceiving(t)}),this._activeDraggables=[],this._itemPositions=[],this._previousSwap.drag=null,this._previousSwap.delta=0},t.prototype._getSiblingOffsetPx=function(t,e,i){var n="horizontal"===this._orientation,r=e[t].clientRect,o=e[t+-1*i],s=r[n?"width":"height"]*i;if(o){var a=n?"left":"top",h=n?"right":"bottom";-1===i?s-=o.clientRect[a]-r[h]:s+=r[a]-o.clientRect[h]}return s},t.prototype._isPointerNearDropContainer=function(t,e){var i=this._clientRect,n=.05*i.width,r=.05*i.height;return e>i.top-r&&e<i.bottom+r&&t>i.left-n&&t<i.right+n},t.prototype._getItemOffsetPx=function(t,e,i){var n="horizontal"===this._orientation,r=n?e.left-t.left:e.top-t.top;return-1===i&&(r+=n?e.width-t.width:e.height-t.height),r},t.prototype._getItemIndexFromPointerPosition=function(t,e,i,n){var r=this,o="horizontal"===this._orientation;return A(this._itemPositions,function(s,a,h){var c=s.drag,p=s.clientRect;return c===t?h.length<2:(!n||c!==r._previousSwap.drag||(o?n.x:n.y)!==r._previousSwap.delta)&&(o?e>=Math.floor(p.left)&&e<=Math.floor(p.right):i>=Math.floor(p.top)&&i<=Math.floor(p.bottom))})},t.prototype._isOverContainer=function(t,e){return N(this._clientRect,t,e)},t.prototype._getSiblingContainerFromPosition=function(t,e,i){return this._siblings.find(function(n){return n._canReceive(t,e,i)})},t.prototype._canReceive=function(t,e,i){if(!this.enterPredicate(t,this)||!N(this._clientRect,e,i))return!1;var n=this._document.elementFromPoint(e,i);return!!n&&(n===this.element||this.element.contains(n))},t.prototype._startReceiving=function(t){var e=this._activeSiblings;e.has(t)||(e.add(t),this._cacheOwnPosition())},t.prototype._stopReceiving=function(t){this._activeSiblings.delete(t)},t}();function M(t,e,i){t.top+=e,t.bottom=t.top+t.height,t.left+=i,t.right=t.left+t.width}function A(t,e){for(var i=0;i<t.length;i++)if(e(t[i],i,t))return i;return-1}function N(t,e,i){return i>=t.top&&i<=t.bottom&&e>=t.left&&e<=t.right}var Z=Object(n.f)({passive:!1,capture:!0}),z=function(){function t(t,e){var i=this;this._ngZone=t,this._dropInstances=new Set,this._dragInstances=new Set,this._activeDragInstances=new Set,this._globalListeners=new Map,this.pointerMove=new o.a,this.pointerUp=new o.a,this._preventDefaultWhileDragging=function(t){i._activeDragInstances.size&&t.preventDefault()},this._document=e}return t.prototype.registerDropContainer=function(t){if(!this._dropInstances.has(t)){if(this.getDropContainer(t.id))throw Error('Drop instance with id "'+t.id+'" has already been registered.');this._dropInstances.add(t)}},t.prototype.registerDragItem=function(t){var e=this;this._dragInstances.add(t),1===this._dragInstances.size&&this._ngZone.runOutsideAngular(function(){e._document.addEventListener("touchmove",e._preventDefaultWhileDragging,Z)})},t.prototype.removeDropContainer=function(t){this._dropInstances.delete(t)},t.prototype.removeDragItem=function(t){this._dragInstances.delete(t),this.stopDragging(t),0===this._dragInstances.size&&this._document.removeEventListener("touchmove",this._preventDefaultWhileDragging,Z)},t.prototype.startDragging=function(t,e){var i=this;if(this._activeDragInstances.add(t),1===this._activeDragInstances.size){var n=e.type.startsWith("touch"),r=n?"touchend":"mouseup";this._globalListeners.set(n?"touchmove":"mousemove",{handler:function(t){return i.pointerMove.next(t)},options:Z}).set(r,{handler:function(t){return i.pointerUp.next(t)},options:!0}).set("selectstart",{handler:this._preventDefaultWhileDragging,options:Z}),n||this._globalListeners.set("wheel",{handler:this._preventDefaultWhileDragging,options:Z}),this._ngZone.runOutsideAngular(function(){i._globalListeners.forEach(function(t,e){i._document.addEventListener(e,t.handler,t.options)})})}},t.prototype.stopDragging=function(t){this._activeDragInstances.delete(t),0===this._activeDragInstances.size&&this._clearGlobalListeners()},t.prototype.isDragging=function(t){return this._activeDragInstances.has(t)},t.prototype.getDropContainer=function(t){return Array.from(this._dropInstances).find(function(e){return e.id===t})},t.prototype.ngOnDestroy=function(){var t=this;this._dragInstances.forEach(function(e){return t.removeDragItem(e)}),this._dropInstances.forEach(function(e){return t.removeDropContainer(e)}),this._clearGlobalListeners(),this.pointerMove.complete(),this.pointerUp.complete()},t.prototype._clearGlobalListeners=function(){var t=this;this._globalListeners.forEach(function(e,i){t._document.removeEventListener(i,e.handler,e.options)}),this._globalListeners.clear()},t.ngInjectableDef=Object(c.defineInjectable)({factory:function(){return new t(Object(c.inject)(c.NgZone),Object(c.inject)(p.d))},token:t,providedIn:"root"}),t}(),H={dragStartThreshold:5,pointerDirectionChangeThreshold:5},F=function(){function t(t,e,i,n){this._document=t,this._ngZone=e,this._viewportRuler=i,this._dragDropRegistry=n}return t.prototype.createDrag=function(t,e){return void 0===e&&(e=H),new R(t,e,this._document,this._ngZone,this._viewportRuler,this._dragDropRegistry)},t.prototype.createDropList=function(t){return new k(t,this._dragDropRegistry,this._document)},t.ngInjectableDef=Object(c.defineInjectable)({factory:function(){return new t(Object(c.inject)(p.d),Object(c.inject)(c.NgZone),Object(c.inject)(d.e),Object(c.inject)(z))},token:t,providedIn:"root"}),t}(),B=new c.InjectionToken("CDK_DROP_LIST"),U=new c.InjectionToken("CDK_DRAG_PARENT"),G=new c.InjectionToken("CDK_DRAG_CONFIG",{providedIn:"root",factory:function(){return{dragStartThreshold:5,pointerDirectionChangeThreshold:5}}}),W=function(){function t(t,e,i,n,r,s,h,p,d,u,_){var g=this;this.element=t,this.dropContainer=e,this._document=i,this._ngZone=n,this._viewContainerRef=r,this._dir=d,this._changeDetectorRef=_,this._destroyed=new o.a,this._disabled=!1,this.started=new c.EventEmitter,this.released=new c.EventEmitter,this.ended=new c.EventEmitter,this.entered=new c.EventEmitter,this.exited=new c.EventEmitter,this.dropped=new c.EventEmitter,this.moved=new a.a(function(t){var e=g._dragRef.moved.pipe(Object(l.a)(function(t){return{source:g,pointerPosition:t.pointerPosition,event:t.event,delta:t.delta}})).subscribe(t);return function(){e.unsubscribe()}}),this._dragRef=u?u.createDrag(t,p):new R(t,p,i,n,s,h),this._dragRef.data=this,this._syncInputs(this._dragRef),this._handleEvents(this._dragRef)}return Object.defineProperty(t.prototype,"disabled",{get:function(){return this._disabled||this.dropContainer&&this.dropContainer.disabled},set:function(t){this._disabled=Object(r.c)(t),this._dragRef.disabled=this._disabled},enumerable:!0,configurable:!0}),t.prototype.getPlaceholderElement=function(){return this._dragRef.getPlaceholderElement()},t.prototype.getRootElement=function(){return this._dragRef.getRootElement()},t.prototype.reset=function(){this._dragRef.reset()},t.prototype.ngAfterViewInit=function(){var t=this;this._ngZone.onStable.asObservable().pipe(Object(u.a)(1),Object(_.a)(this._destroyed)).subscribe(function(){t._updateRootElement(),t._handles.changes.pipe(Object(g.a)(t._handles),Object(f.a)(function(e){var i=e.filter(function(e){return e._parentDrag===t}).map(function(t){return t.element});t._dragRef.withHandles(i)}),Object(m.a)(function(t){return h.a.apply(void 0,t.map(function(t){return t._stateChanges}))}),Object(_.a)(t._destroyed)).subscribe(function(e){var i=t._dragRef,n=e.element.nativeElement;e.disabled?i.disableHandle(n):i.enableHandle(n)})})},t.prototype.ngOnChanges=function(t){var e=t.rootElementSelector;e&&!e.firstChange&&this._updateRootElement()},t.prototype.ngOnDestroy=function(){this._destroyed.next(),this._destroyed.complete(),this._dragRef.dispose()},t.prototype._updateRootElement=function(){var t=this.element.nativeElement,e=this.rootElementSelector?V(t,this.rootElementSelector):t;if(e&&e.nodeType!==this._document.ELEMENT_NODE)throw Error('cdkDrag must be attached to an element node. Currently attached to "'+e.nodeName+'".');this._dragRef.withRootElement(e||t)},t.prototype._getBoundaryElement=function(){var t=this.boundaryElementSelector;return t?V(this.element.nativeElement,t):null},t.prototype._syncInputs=function(t){var e=this;t.beforeStarted.subscribe(function(){if(!t.isDragging()){var i=e._dir,n=e._placeholderTemplate?{template:e._placeholderTemplate.templateRef,context:e._placeholderTemplate.data,viewContainer:e._viewContainerRef}:null,r=e._previewTemplate?{template:e._previewTemplate.templateRef,context:e._previewTemplate.data,viewContainer:e._viewContainerRef}:null;t.disabled=e.disabled,t.lockAxis=e.lockAxis,t.withBoundaryElement(e._getBoundaryElement()).withPlaceholderTemplate(n).withPreviewTemplate(r),i&&t.withDirection(i.value)}})},t.prototype._handleEvents=function(t){var e=this;t.started.subscribe(function(){e.started.emit({source:e}),e._changeDetectorRef&&e._changeDetectorRef.markForCheck()}),t.released.subscribe(function(){e.released.emit({source:e})}),t.ended.subscribe(function(){e.ended.emit({source:e}),e._changeDetectorRef&&e._changeDetectorRef.markForCheck()}),t.entered.subscribe(function(t){e.entered.emit({container:t.container.data,item:e})}),t.exited.subscribe(function(t){e.exited.emit({container:t.container.data,item:e})}),t.dropped.subscribe(function(t){e.dropped.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,previousContainer:t.previousContainer.data,container:t.container.data,isPointerOverContainer:t.isPointerOverContainer,item:e})})},t}();function V(t,e){for(var i=t.parentElement;i;){if(i.matches?i.matches(e):i.msMatchesSelector(e))return i;i=i.parentElement}return null}var q=function(){function t(){this._items=new Set,this._disabled=!1}return Object.defineProperty(t.prototype,"disabled",{get:function(){return this._disabled},set:function(t){this._disabled=Object(r.c)(t)},enumerable:!0,configurable:!0}),t.prototype.ngOnDestroy=function(){this._items.clear()},t}(),Y=0,J=function(){function t(e,i,n,r,s,a,h){var p=this;this.element=e,this._changeDetectorRef=n,this._dir=r,this._group=s,this._destroyed=new o.a,this.connectedTo=[],this.orientation="vertical",this.id="cdk-drop-list-"+Y++,this._disabled=!1,this.enterPredicate=function(){return!0},this.dropped=new c.EventEmitter,this.entered=new c.EventEmitter,this.exited=new c.EventEmitter,this.sorted=new c.EventEmitter,this._dropListRef=h?h.createDropList(e):new k(e,i,a||document),this._dropListRef.data=this,this._dropListRef.enterPredicate=function(t,e){return p.enterPredicate(t.data,e.data)},this._syncInputs(this._dropListRef),this._handleEvents(this._dropListRef),t._dropLists.push(this),s&&s._items.add(this)}return Object.defineProperty(t.prototype,"disabled",{get:function(){return this._disabled||!!this._group&&this._group.disabled},set:function(t){this._disabled=Object(r.c)(t)},enumerable:!0,configurable:!0}),t.prototype.ngAfterContentInit=function(){var t=this;this._draggables.changes.pipe(Object(g.a)(this._draggables),Object(_.a)(this._destroyed)).subscribe(function(e){t._dropListRef.withItems(e.map(function(t){return t._dragRef}))})},t.prototype.ngOnDestroy=function(){var e=t._dropLists.indexOf(this);e>-1&&t._dropLists.splice(e,1),this._group&&this._group._items.delete(this),this._dropListRef.dispose(),this._destroyed.next(),this._destroyed.complete()},t.prototype.start=function(){this._dropListRef.start()},t.prototype.drop=function(t,e,i,n){this._dropListRef.drop(t._dragRef,e,i._dropListRef,n)},t.prototype.enter=function(t,e,i){this._dropListRef.enter(t._dragRef,e,i)},t.prototype.exit=function(t){this._dropListRef.exit(t._dragRef)},t.prototype.getItemIndex=function(t){return this._dropListRef.getItemIndex(t._dragRef)},t.prototype._sortItem=function(t,e,i,n){return this._dropListRef._sortItem(t._dragRef,e,i,n)},t.prototype._getSiblingContainerFromPosition=function(t,e,i){var n=this._dropListRef._getSiblingContainerFromPosition(t._dragRef,e,i);return n?n.data:null},t.prototype._isOverContainer=function(t,e){return this._dropListRef._isOverContainer(t,e)},t.prototype._syncInputs=function(e){var i=this;this._dir&&this._dir.change.pipe(Object(g.a)(this._dir.value),Object(_.a)(this._destroyed)).subscribe(function(t){return e.withDirection(t)}),e.beforeStarted.subscribe(function(){var n=Object(r.b)(i.connectedTo).map(function(e){return"string"==typeof e?t._dropLists.find(function(t){return t.id===e}):e});i._group&&i._group._items.forEach(function(t){-1===n.indexOf(t)&&n.push(t)}),e.lockAxis=i.lockAxis,e.connectedTo(n.filter(function(t){return t&&t!==i}).map(function(t){return t._dropListRef})).withOrientation(i.orientation)})},t.prototype._handleEvents=function(t){var e=this;t.beforeStarted.subscribe(function(){e._changeDetectorRef.markForCheck()}),t.entered.subscribe(function(t){e.entered.emit({container:e,item:t.item.data})}),t.exited.subscribe(function(t){e.exited.emit({container:e,item:t.item.data})}),t.sorted.subscribe(function(t){e.sorted.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,container:e,item:t.item.data})}),t.dropped.subscribe(function(t){e.dropped.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,previousContainer:t.previousContainer.data,container:t.container.data,item:t.item.data,isPointerOverContainer:t.isPointerOverContainer}),e._changeDetectorRef.markForCheck()})},t._dropLists=[],t}(),K=function(){return function(){}}()}}]);