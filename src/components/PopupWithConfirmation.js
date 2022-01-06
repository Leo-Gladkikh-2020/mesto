import { Popup } from './Popup.js';

export default class PopupWithConfirmation extends Popup {
    constructor(popup) {
        super(popup);
        this._form = this._popup.querySelector('.popup__form');
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._submitHandler();
        })
    }

    setSubmitAction(action) {
        this._submitHandler = action;
    }
}