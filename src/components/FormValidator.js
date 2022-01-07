/* export class FormValidator {
    constructor(config, form) {
        this._form = form;
        this._inputSelector = config.inputSelector;
        this._inputErrorClass = config.inputErrorClass;
        this._submitButtonSelector = config.submitButtonSelector;
        this._submitButtonErrorClass = config.submitButtonErrorClass;
        this._inputs = Array.from(this._form.querySelectorAll(this._inputSelector));
    }

    enableValidation() {
        this._form.addEventListener('submit', (event) => this._handleSubmit(event));
        this._form.addEventListener('input', () => this._setSubmitButtonState());
        this._inputs.forEach(inputElement => {
            inputElement.addEventListener('input', () => this._handleFieldValidation(inputElement))
        });
        this._setSubmitButtonState();
    }

    _setSubmitButtonState() {
        const button = this._form.querySelector(this._submitButtonSelector);
        button.disabled = !this._form.checkValidity();
        button.classList.toggle(this._submitButtonErrorClass, !this._form.checkValidity());
    }

    _handleSubmit(event) {
        event.preventDefault();
    }

    _handleFieldValidation(input) {
        if (!input.validity.valid) {
            this._showError(input);
        } else {
            this._hideError(input);
        }
    }

    _showError(input) {
        const errorElement = this._form.querySelector(`#${input.id}-error`);
        input.classList.add(this._inputErrorClass);
        errorElement.textContent = input.validationMessage;
    }

    _hideError(input) {
        const errorElement = this._form.querySelector(`#${input.id}-error`);
        input.classList.remove(this._inputErrorClass);
        errorElement.textContent = '';
    }

    resetValidation() {
        this._setSubmitButtonState();
        this._inputs.forEach((input) => {
            this._hideError(input);
        });
    }
} */