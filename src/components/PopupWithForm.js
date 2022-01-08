import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor(popup, { submitForm }) {
        super(popup);
        this._submitForm = submitForm;
        this._form = this._popup.querySelector('.popup__form');
        this._inputsList = Array.from(this._form.querySelectorAll('.popup__input'));
        this._submitBtn = this._form.querySelector('.popup__save-btn');
        this._submitSaveBtn = this._submitBtn.textContent;
    }

    _getInputValues() {
        const inputValue = {}
        this._inputsList.forEach((input) => {
            inputValue[input.name] = input.value;
        });

        return inputValue;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._submitForm(this._getInputValues());
        });
    }

    close() {
        this._form.reset();
        super.close();
    }

    renderLoading(isLoading) {
        if (isLoading) {
            this._submitBtn.textContent = 'Сохранение...'
        } else {
            this._submitBtn.textContent = this._submitSaveBtn;
        }
    }
}