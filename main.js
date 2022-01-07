(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i){var a=o.handleDeleteCardClick,u=o.addLike,c=o.deleteLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._ownerId=e.owner._id,this._likes=e.likes,this._likesId=e.likes._id,this._cardSelector=n,this._handleCardClick=r,this._addLike=u,this._deleteLike=c,this._handleDeleteCardClick=a,this._userId=i}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_likeCard",value:function(){this._likeBtn.classList.contains("element__like-btn_active")?(this._likeBtn.classList.remove("element__like-btn_active"),this._deleteLike(this._likesId)):(this._likeBtn.classList.add("element__like-btn_active"),this._addLike(this._likesId))}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"countLikes",value:function(e){this._likesNumber.textContent=e.likes.length}},{key:"_setEventListeners",value:function(){var e=this;this._likeBtn.addEventListener("click",(function(){return e._likeCard()})),this._trashBtn.addEventListener("click",(function(){return e._handleDeleteCardClick(e)})),this._elementImage.addEventListener("click",(function(){return e._handleCardClick(e._name,e._link)}))}},{key:"generateCard",value:function(){var e=this;return this._element=this._getTemplate(),this._elementImage=this._element.querySelector(".element__image"),this._elementTitle=this._element.querySelector(".element__title"),this._elementImage.src=this._link,this._elementImage.alt=this._name,this._elementTitle.textContent=this._name,this._likeBtn=this._element.querySelector(".element__like-btn"),this._trashBtn=this._element.querySelector(".element__trash-btn"),this._likesNumber=this._element.querySelector(".element__like-number"),this._likesNumber.textContent=this._likes.length,this._userId!==this._ownerId&&this._trashBtn.remove(),this._likes.forEach((function(t){t._id===e._userId&&e._likeBtn.classList.add("element__like-btn_active")})),this._setEventListeners(),this._element}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._inputSelector=t.inputSelector,this._inputErrorClass=t.inputErrorClass,this._submitButtonSelector=t.submitButtonSelector,this._submitButtonErrorClass=t.submitButtonErrorClass,this._inputs=Array.from(this._form.querySelectorAll(this._inputSelector))}var t,r;return t=e,(r=[{key:"enableValidation",value:function(){var e=this;this._form.addEventListener("submit",(function(t){return e._handleSubmit(t)})),this._form.addEventListener("input",(function(){return e._setSubmitButtonState()})),this._inputs.forEach((function(t){t.addEventListener("input",(function(){return e._handleFieldValidation(t)}))})),this._setSubmitButtonState()}},{key:"_setSubmitButtonState",value:function(){var e=this._form.querySelector(this._submitButtonSelector);e.disabled=!this._form.checkValidity(),e.classList.toggle(this._submitButtonErrorClass,!this._form.checkValidity())}},{key:"_handleSubmit",value:function(e){e.preventDefault()}},{key:"_handleFieldValidation",value:function(e){e.validity.valid?this._hideError(e):this._showError(e)}},{key:"_showError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage}},{key:"_hideError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.textContent=""}},{key:"resetValidation",value:function(){var e=this;this._setSubmitButtonState(),this._inputs.forEach((function(t){e._hideError(t)}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._containerSelector=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.reverse().forEach((function(e){return t._renderer(e)}))}},{key:"addItem",value:function(e){this._containerSelector.prepend(e)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handlePopupClick",value:function(e){e.target.classList.contains("popup")&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mouseup",(function(t){return e._handlePopupClick(t)})),this._popup.querySelector(".popup__close-btn").addEventListener("click",(function(t){return e.close(t)}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},s.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function h(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&p(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__image"),t._popupCaption=t._popup.querySelector(".popup__caption"),t}return t=a,(n=[{key:"open",value:function(e,t){this._popupImage.src=t,this._popupImage.alt=e,this._popupCaption.textContent=e,s(d(a.prototype),"open",this).call(this)}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=v(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function v(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}function g(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&k(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function a(e,t){var n,r=t.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submitForm=r,n._form=n._popup.querySelector(".popup__form"),n._inputsList=Array.from(n._form.querySelectorAll(".popup__input")),n._submitBtn=n._form.querySelector(".popup__save-btn"),n._submitSaveBtn=n._submitBtn.textContent,n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputsList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;b(S(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues()),e.close()}))}},{key:"close",value:function(){this._form.reset(),b(S(a.prototype),"close",this).call(this)}},{key:"renderLoading",value:function(e){this._submitBtn.textContent=e?"Сохранение...":this._submitSaveBtn}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=L(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},O.apply(this,arguments)}function L(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}function j(e,t){return j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},j(e,t)}function P(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}var U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&j(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(r);if(o){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._form=t._popup.querySelector(".popup__form"),t}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;O(I(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitCallback()}))}},{key:"setSubmitAction",value:function(e){this._handleSubmitCallback=e}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=function(){function e(t){var n=t.nameUser,r=t.aboutUser;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameUser=n,this._aboutUser=r,this._avatarUser=document.querySelector(".profile__avatar")}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameUser.textContent,about:this._aboutUser.textContent}}},{key:"setUserInfo",value:function(e){this._nameUser.textContent=e.name,this._aboutUser.textContent=e.about}},{key:"setAvatar",value:function(e){this._avatarUser.src=e.avatar}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var R,x=function(){function e(t){var n=t.baseUrl,r=t.token;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._token=r}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._checkStatus)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._checkStatus)}},{key:"changeUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkStatus)}},{key:"changeUserAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.avatar})}).then(this._checkStatus)}},{key:"addCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkStatus)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._checkStatus)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._checkStatus)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._checkStatus)}},{key:"_checkStatus",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),A=document.querySelector(".popup-edit"),D=document.querySelector(".popup-avatar"),V=document.querySelector(".popup-add"),z=document.querySelector(".popup-place"),F=document.querySelector(".popup-place-delete"),N=document.querySelector(".popup__form-edit"),J=document.querySelector(".popup__form-avatar"),H=document.querySelector(".popup__form-add"),M=document.querySelector(".profile__edit-btn"),$=document.querySelector(".profile__avatar-btn"),G=document.querySelector(".profile__add-btn"),K=document.querySelector(".profile__name"),Q=document.querySelector(".profile__subtitle"),W=document.querySelector(".popup__input_text_name"),X=document.querySelector(".popup__input_text_about"),Y=document.querySelector(".elements__list"),Z={formSelector:".popup__form",inputSelector:".popup__input",inputErrorClass:"popup__input_text_error",submitButtonSelector:".popup__save-btn",submitButtonErrorClass:"popup__save-btn_invalid"};function ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var te=new x({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-32",token:"834693d9-1821-4fba-aca9-8dc02ca9ce04"}),ne=new y(z);function re(e,t){ne.open(e,t)}function oe(e){var n=new t(e,".template",re,{handleDeleteCardClick:function(t){U.open(),U.setSubmitAction((function(){te.deleteCard(e).then((function(e){t.deleteCard(e),U.close()})).catch((function(e){console.log(e)}))}))},addLike:function(){te.addLike(e).then((function(e){n.countLikes(e),console.log(e)})).catch((function(e){console.log(e)}))},deleteLike:function(){te.deleteLike(e).then((function(e){n.countLikes(e),console.log(e)})).catch((function(e){console.log(e)}))}},R);return n.generateCard()}ne.setEventListeners(),new U(F).setEventListeners();var ie=new i({renderer:function(e){var t=oe(e);ie.addItem(t)}},Y),ae=new T({nameUser:K,aboutUser:Q});Promise.all([te.getUserInfo(),te.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return ee(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ee(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ae.setUserInfo(o),ae.setAvatar(o),R=o._id,ie.renderItems(i)})).catch((function(e){console.log(e)}));var ue=new r(Z,H);ue.enableValidation();var ce=new r(Z,J);ce.enableValidation();var le=new r(Z,N);le.enableValidation();var se=new w(A,{submitForm:function(e){se.renderLoading(!0),te.changeUserInfo(e).then((function(e){ae.setUserInfo(e),console.log(e),se.close()})).catch((function(e){console.log(e)})).finally((function(){se.renderLoading(!1)}))}}),fe=new w(D,{submitForm:function(e){fe.renderLoading(!0),te.changeUserAvatar(e).then((function(e){ae.setAvatar(e),console.log(e),fe.close()})).catch((function(e){console.log(e)})).finally((function(){fe.renderLoading(!1)}))}}),pe=new w(V,{submitForm:function(e){pe.renderLoading(!0),te.addCard(e).then((function(e){var t=oe(e);ie.addItem(t),console.log(e),pe.close()})).catch((function(e){console.log(e)})).finally((function(){pe.renderLoading(!1)}))}});M.addEventListener("click",(function(){var e=ae.getUserInfo();W.value=e.name,X.value=e.about,le.resetValidation(),se.open()})),se.setEventListeners(),$.addEventListener("click",(function(){ce.resetValidation(),fe.open()})),fe.setEventListeners(),G.addEventListener("click",(function(){ue.resetValidation(),pe.open()})),pe.setEventListeners()})();
//# sourceMappingURL=main.js.map