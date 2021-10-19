const popup = document.querySelector('.popup');
const form = document.querySelector('.popup__form');
const editButton = document.querySelector('.profile__edit-btn');
const closeButton = document.querySelector('.popup__close-btn');
const profileTitle = document.querySelector('.profile__name');
const profileSubtitle = document.querySelector('.profile__subtitle');
const inputName = document.querySelector('.popup__input_text_name');
const inputAbout = document.querySelector('.popup__input_text_about');

// Функция открытия popup
function openPopup() {
    popup.classList.add('popup_opened')
}

// Функция закрытия popup
function closePopup() {
    popup.classList.remove('popup_opened')
}

//Функция сохранения popup
function submitForm(event) {
    event.preventDefault();
    profileTitle.textContent = inputName.value;
    profileSubtitle.textContent = inputAbout.value;
    closePopup();
}

//Функция сохранения данных
function saveNameForm() {
    openPopup()
    inputName.value = profileTitle.textContent;
    inputAbout.value = profileSubtitle.textContent;
}

form.addEventListener('submit', submitForm);
editButton.addEventListener('click', saveNameForm);
closeButton.addEventListener('click', closePopup);