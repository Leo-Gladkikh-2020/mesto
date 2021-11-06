const initialCards = [
    { name: 'Архыз', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg' },
    { name: 'Челябинская область', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg' },
    { name: 'Иваново', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg' },
    { name: 'Камчатка', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg' },
    { name: 'Холмогорский район', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg' },
    { name: 'Байкал', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg' }
];

const popupEdit = document.querySelector('.popup-edit');
const popupAdd = document.querySelector('.popup-add');
const popupPlace = document.querySelector('.popup-place');

const buttonEdit = document.querySelector('.profile__edit-btn');
const buttonAdd = document.querySelector('.profile__add-btn');
const buttonCloseEdit = document.querySelector('.popup__close-edit');
const buttonCloseAdd = document.querySelector('.popup__close-add');
const buttonClosePlace = document.querySelector('.popup__close-place');

const formEdit = document.querySelector('.popup__form-edit');
const formAdd = document.querySelector('.popup__form-add');

const profileTitle = document.querySelector('.profile__name');
const profileSubtitle = document.querySelector('.profile__subtitle');

const inputName = document.querySelector('.popup__input_text_name');
const inputAbout = document.querySelector('.popup__input_text_about');
const inputTitle = document.querySelector('.popup__input_text_title');
const inputLink = document.querySelector('.popup__input_text_link');

const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

const template = document.querySelector('.template').content;
const listElements = document.querySelector('.elements__list');

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
}

function submitFormEdit(event) {
    event.preventDefault();
    profileTitle.textContent = inputName.value;
    profileSubtitle.textContent = inputAbout.value;
    closePopup(popupEdit);
}

initialCards.forEach(prependCard);

function createCard(item) {
    const element = template.querySelector('.element').cloneNode(true);
    element.querySelector('.element__image').src = item.link;
    element.querySelector('.element__image').alt = item.name;
    element.querySelector('.element__title').innerText = item.name;

    element.querySelector('.element__like-btn').addEventListener('click', (event) => {
        event.target.classList.toggle('element__like-btn_active');
    });

    element.querySelector('.element__trash-btn').addEventListener('click', (event) => {
        event.target.closest('.element').remove();
    });

    element.querySelector('.element__image').addEventListener('click', () => {
        openPopup(popupPlace);
        popupImage.src = item.link;
        popupImage.alt = item.name;
        popupCaption.textContent = item.name;
    });

    return element;
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
    setSubmitButtonState(formAdd, config);
    closePopup(popupAdd);
}

buttonEdit.addEventListener('click', saveNameForm);
buttonAdd.addEventListener('click', () => openPopup(popupAdd));

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