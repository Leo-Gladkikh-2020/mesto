import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';

import {
    initialCards,
    popupEdit,
    popupAdd,
    popupPlace,
    buttonEdit,
    buttonAdd,
    buttonCloseEdit,
    buttonCloseAdd,
    buttonClosePlace,
    formEdit,
    formAdd,
    profileTitle,
    profileSubtitle,
    inputName,
    inputAbout,
    inputTitle,
    inputLink,
    listElements,
    config
} from '../utils/constants.js';

// Функция открытия popup
function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupEscape);
}

// Функция закрытия popup
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEscape);
}

function saveNameForm() {
    openPopup(popupEdit);
    inputName.value = profileTitle.textContent;
    inputAbout.value = profileSubtitle.textContent;
    formEditValidator.resetValidation();
}

function resetAddPopup() {
    openPopup(popupAdd);
    formAdd.reset();
    formAddValidator.resetValidation();
}

function submitFormEdit(event) {
    event.preventDefault();
    profileTitle.textContent = inputName.value;
    profileSubtitle.textContent = inputAbout.value;
    closePopup(popupEdit);
}

// класс Cards

initialCards.forEach(item => {
    prependCard(item);
});

function createCard(item) {
    const card = new Card(item, '.template', openPopup);
    return card.generateCard();
}

function prependCard(item) {
    const element = createCard(item);
    listElements.prepend(element);
}

function submitFormAdd(event) {
    event.preventDefault();
    const name = inputTitle.value;
    const link = inputLink.value;
    const item = {
        name: name,
        link: link
    }
    prependCard(item)
    event.target.reset();
    closePopup(popupAdd);
}

buttonEdit.addEventListener('click', saveNameForm);
buttonAdd.addEventListener('click', resetAddPopup);

formEdit.addEventListener('submit', submitFormEdit);
formAdd.addEventListener('submit', submitFormAdd);

buttonCloseEdit.addEventListener('click', () => closePopup(popupEdit));
buttonCloseAdd.addEventListener('click', () => closePopup(popupAdd));
buttonClosePlace.addEventListener('click', () => closePopup(popupPlace));

// плавное открытие и закрытие popup

function popupClickHandler(event) {
    if (event.target.classList.contains('popup')) {
        closePopup(event.target);
    }
}

popupEdit.addEventListener('mouseup', popupClickHandler);
popupAdd.addEventListener('mouseup', popupClickHandler);
popupPlace.addEventListener('mouseup', popupClickHandler);

// закрытие popup вне зоны popup

function closePopupEscape(event) {
    if (event.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}

window.addEventListener('load', () => {
    document.querySelectorAll('.popup').forEach((popup) => popup.classList.add('popup_transition'))
});

// класс FormValidator

const formAddValidator = new FormValidator(config, formAdd);
formAddValidator.enableValidation();
const formEditValidator = new FormValidator(config, formEdit);
formEditValidator.enableValidation();