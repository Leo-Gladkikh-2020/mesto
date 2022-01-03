import './index.css';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
//import { Api } from '../components/Api.js';

import {
    initialCards,
    popupEdit,
    popupAdd,
    popupPlace,
    formEdit,
    formAdd,
    buttonEdit,
    buttonAdd,
    profileTitle,
    profileSubtitle,
    inputName,
    inputAbout,
    listElements,
    config
} from '../utils/constants.js';

//const api = new Api({
//baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-32',
//headers: {
//authorization: '834693d9-1821-4fba-aca9-8dc02ca9ce04',
//'Content-Type': 'application/json'
//}
//});

buttonEdit.addEventListener('click', () => {
    popupWithFormEdit.open();
    const profileDescription = userInfo.getUserInfo();
    inputName.value = profileDescription.name;
    inputAbout.value = profileDescription.about;
    formEditValidator.resetValidation();
});

buttonAdd.addEventListener('click', () => {
    popupWithFormAdd.open();
    formAddValidator.resetValidation();
});

// класс Cards

function createCard(item) {
    const card = new Card(item, '.template', handleCardClick);
    return card.generateCard();
}

// класс FormValidator

const formAddValidator = new FormValidator(config, formAdd);
formAddValidator.enableValidation();
const formEditValidator = new FormValidator(config, formEdit);
formEditValidator.enableValidation();

// // класс Section

const section = new Section({
    items: initialCards,
    renderer: (item) => {
        const cardItem = createCard(item);
        section.addItem(cardItem);
    }
},
    listElements);
section.renderItems();

// класс PopupWithImage

const popupWithImage = new PopupWithImage(popupPlace);
popupWithImage.setEventListeners();

function handleCardClick(name, link) {
    popupWithImage.open(name, link);
}

// // класс PopupWithForm

const popupWithFormEdit = new PopupWithForm(popupEdit, {
    submitForm: (data) => {
        userInfo.setUserInfo(data);
    }
});
popupWithFormEdit.setEventListeners();

const popupWithFormAdd = new PopupWithForm(popupAdd, {
    submitForm: (data) => {
        const cardItem = createCard({ name: data.title, link: data.link });
        section.addItem(cardItem);
    }
});
popupWithFormAdd.setEventListeners();

// класс UserInfo

const userInfo = new UserInfo({ nameUser: profileTitle, aboutUser: profileSubtitle });