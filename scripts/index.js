const popup = document.querySelector('.popup');
const form = document.querySelector('.popup__form');
const editButton = document.querySelector('.profile__edit-btn');
const closeButton = document.querySelector('.popup__close-btn');
const profileTitle = document.querySelector('.profile__name');
const profileSubtitle = document.querySelector('.profile__subtitle');
const inputName = document.querySelector('.popup__input_name');
const inputAbout = document.querySelector('.popup__input_about');

function openPopup() {
    popup.classList.add('popup_isOpen')
}

function closePopup() {
    popup.classList.remove('popup_isOpen')
}

function submitForm(event) {
    event.preventDefault();
    profileTitle.textContent = inputName.value;
    profileSubtitle.textContent = inputAbout.value;
    closePopup();
}

function inputNameForm() {
    openPopup()
    inputName.value = profileTitle.textContent;
    inputAbout.value = profileSubtitle.textContent;
}

form.addEventListener('submit', submitForm);
editButton.addEventListener('click', inputNameForm);
closeButton.addEventListener('click', closePopup);