import { popupPlace } from '../utils/constants.js';

export class Card {
    constructor(data, cardSelector, openPopup) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._openPopup = openPopup;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
        return cardElement;
    }

    _likeCard(event) {
        event.target.classList.toggle('element__like-btn_active');
    }

    _deleteCard(event) {
        event.target.closest('.element').remove();
    }

    _openPopupPlace() {
        popupPlace.querySelector('.popup__image').src = this._link;
        popupPlace.querySelector('.popup__image').alt = this._name;
        popupPlace.querySelector('.popup__caption').textContent = this._name;
        this._openPopup(popupPlace);
    }

    _setEventListeners() {
        this._element.querySelector('.element__like-btn').addEventListener('click', (event) => this._likeCard(event));
        this._element.querySelector('.element__trash-btn').addEventListener('click', (event) => this._deleteCard(event));
        this._element.querySelector('.element__image').addEventListener('click', () => this._openPopupPlace());
    }

    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__image').alt = this._name;
        this._element.querySelector('.element__title').textContent = this._name;
        this._setEventListeners();

        return this._element;
    }
}