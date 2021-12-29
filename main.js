(()=>{"use strict";var e=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t={};e(t);var r={};e(r);var n={};e(n);e({});var o={};e(o);var a={};e(a);var p={};e(p);var s={};e(s);var i=document.querySelector(".popup-edit"),d=document.querySelector(".popup-add"),u=document.querySelector(".popup-place"),c=document.querySelector(".popup__form-edit"),l=document.querySelector(".popup__form-add"),m=document.querySelector(".profile__edit-btn"),v=document.querySelector(".profile__add-btn"),_=document.querySelector(".profile__name"),f=document.querySelector(".profile__subtitle"),y=document.querySelector(".popup__input_text_name"),b=document.querySelector(".popup__input_text_about"),S=document.querySelector(".elements__list"),h={formSelector:".popup__form",inputSelector:".popup__input",inputErrorClass:"popup__input_text_error",submitButtonSelector:".popup__save-btn",submitButtonErrorClass:"popup__save-btn_invalid"};function k(e){return new t.Card(e,".template",x).generateCard()}new s.Api({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-32",headers:{authorization:"834693d9-1821-4fba-aca9-8dc02ca9ce04","Content-Type":"application/json"}}),m.addEventListener("click",(function(){E.open();var e=F.getUserInfo();y.value=e.name,b.value=e.about,q.resetValidation()})),v.addEventListener("click",(function(){I.open(),g.resetValidation()}));var g=new r.FormValidator(h,l);g.enableValidation();var q=new r.FormValidator(h,c);q.enableValidation();var j=new n.Section({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){var t=k(e);j.addItem(t)}},S);j.renderItems();var w=new o.PopupWithImage(u);function x(e,t){w.open(e,t)}w.setEventListeners();var E=new a.PopupWithForm(i,{submitForm:function(e){F.setUserInfo(e)}});E.setEventListeners();var I=new a.PopupWithForm(d,{submitForm:function(e){var t=k({name:e.title,link:e.link});j.addItem(t)}});I.setEventListeners();var F=new p.UserInfo({nameUser:_,aboutUser:f})})();