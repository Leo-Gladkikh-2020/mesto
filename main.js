(()=>{"use strict";var e=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t={};e(t);var r={};e(r);var n={};e(n);e({});var o={};e(o);var a={};e(a);var p={};e(p);var u=document.querySelector(".popup-edit"),d=document.querySelector(".popup-add"),s=document.querySelector(".popup-place"),i=document.querySelector(".popup__form-edit"),l=document.querySelector(".popup__form-add"),c=document.querySelector(".profile__edit-btn"),m=document.querySelector(".profile__add-btn"),v=document.querySelector(".profile__name"),_=document.querySelector(".profile__subtitle"),f=document.querySelector(".popup__input_text_name"),y=document.querySelector(".popup__input_text_about"),b=document.querySelector(".elements__list"),S={formSelector:".popup__form",inputSelector:".popup__input",inputErrorClass:"popup__input_text_error",submitButtonSelector:".popup__save-btn",submitButtonErrorClass:"popup__save-btn_invalid"};function k(e){return new t.Card(e,".template",j).generateCard()}c.addEventListener("click",(function(){w.open();var e=I.getUserInfo();f.value=e.name,y.value=e.about,h.resetValidation()})),m.addEventListener("click",(function(){E.open(),g.resetValidation()}));var g=new r.FormValidator(S,l);g.enableValidation();var h=new r.FormValidator(S,i);h.enableValidation();var q=new n.Section({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){var t=k(e);q.addItem(t)}},b);q.renderItems();var x=new o.PopupWithImage(s);function j(e,t){x.open(e,t)}x.setEventListeners();var w=new a.PopupWithForm(u,{submitForm:function(e){I.setUserInfo(e)}});w.setEventListeners();var E=new a.PopupWithForm(d,{submitForm:function(e){var t=k({name:e.title,link:e.link});q.addItem(t)}});E.setEventListeners();var I=new p.UserInfo({nameUser:v,aboutUser:_})})();