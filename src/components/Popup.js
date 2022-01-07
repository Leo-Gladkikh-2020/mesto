export class Popup {
    constructor(popup) {
        this._popup = popup;
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    // Метод открытия popup
    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    // Метод закрытия popup
    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    // Метод закрытия popup кликом на 'Esc'
    _handleEscClose(event) {
        if (event.key === 'Escape') {
            this.close();
        }
    }

    _handlePopupClick(event) {
        if (event.target.classList.contains('popup')) {
            this.close();
        }
    }

    setEventListeners() {
        this._popup.addEventListener('mouseup', (event) => this._handlePopupClick(event));
        this._popup.querySelector('.popup__close-btn').addEventListener('click', (event) => this.close(event));
    }
}