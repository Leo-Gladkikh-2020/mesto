const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    inputErrorClass: 'popup__input_text_error',
    submitButtonSelector: '.popup__save-btn',
    submitButtonErrorClass: 'popup__save-btn_invalid',
}

function enableValidation(validationConfig) {
    const forms = [...document.querySelectorAll(validationConfig.formSelector)];
    forms.forEach((form) => setFormListeners(form, validationConfig));
}

function setFormListeners(form, config) {
    form.addEventListener('submit', handleSubmit);
    form.addEventListener('input', () => setSubmitButtonState(form, config));
    const inputs = [...form.querySelectorAll(config.inputSelector)];
    inputs.forEach(inputElement => { inputElement.addEventListener('input', () => handleFieldValidation(inputElement, form, config)) });
    setSubmitButtonState(form, config);
}

function setSubmitButtonState(form, config) {
    const button = form.querySelector(config.submitButtonSelector);
    button.disabled = !form.checkValidity();
    button.classList.toggle(config.submitButtonErrorClass, !form.checkValidity());
}

function handleSubmit(event) {
    event.preventDefault();
}

function handleFieldValidation(input, form, config) {
    if (!input.validity.valid) {
        showError(input, form, config);
    } else {
        hideError(input, form, config);
    }
}

function showError(input, form, config) {
    const errorElement = form.querySelector(`#${input.id}-error`);
    input.classList.add(config.inputErrorClass);
    errorElement.textContent = input.validationMessage;
}

function hideError(input, form, config) {
    const errorElement = form.querySelector(`#${input.id}-error`);
    input.classList.remove(config.inputErrorClass);
    errorElement.textContent = '';
}

function resetErrorInput(form, config) {
    const inputs = [...form.querySelectorAll(config.inputSelector)];
    inputs.forEach((input) => hideError(input, form, config));
}

function checkForm(form, config) {
    resetErrorInput(form, config);
    setSubmitButtonState(form, config);
}

enableValidation(config);