import './index.css';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';

import {
    popupEdit,
    popupAvatar,
    popupAdd,
    popupPlace,
    popupPlaceDelete,
    formEdit,
    formAvatar,
    formAdd,
    buttonEdit,
    buttonAdd,
    buttonAvatar,
    profileTitle,
    profileSubtitle,
    inputName,
    inputAbout,
    listElements,
    config
} from '../utils/constants.js';

// класс Api

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-32',
    token: '834693d9-1821-4fba-aca9-8dc02ca9ce04'
});

// класс PopupWithImage

const popupWithImage = new PopupWithImage(popupPlace);
popupWithImage.setEventListeners();

function handleCardClick(name, link) {
    popupWithImage.open(name, link);
}

// класс PopupWithConfirmation

const popupWithConfirmation = new PopupWithConfirmation(popupPlaceDelete);

// класс Cards

function createCard(item) {
    const card = new Card(item, '.template', handleCardClick, {
        handleDeleteIconClick: (card) => {
            PopupWithConfirmation.open();
            PopupWithConfirmation.setSubmitAction(() => {
                api.deleteCard(data._id)
                    .then((res) => {
                        card.deleteCard(res);
                        PopupWithConfirmation.close();
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            })
        },
        addLike: () => {
            api.addLike(data._id)
                .then((data) => {
                    card.countLikes(data);
                    console.log(data);
                })
                .catch((err) => {
                    console.log(err);
                })
        },
        deleteLike: () => {
            api.deleteLike(data._id)
                .then((data) => {
                    card.countLikes(data);
                    console.log(data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    })
    return card.generateCard();
}

// класс Section

const section = new Section({
    renderer: (item) => {
        const cardItem = createCard(item);
        section.addItem(cardItem);
    }
},
    listElements);

// класс UserInfo

const userInfo = new UserInfo({ nameUser: profileTitle, aboutUser: profileSubtitle });

Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([userData, cards]) => {
        userInfo.setUserInfo(userData);
        userInfo.setAvatar(userData);
        section.renderItems(cards);
    })
    .catch((err) => {
        console.log(err);
    })

// класс FormValidator

const formAddValidator = new FormValidator(config, formAdd);
formAddValidator.enableValidation();
const formAvatarValidator = new FormValidator(config, formAvatar);
formAvatarValidator.enableValidation();
const formEditValidator = new FormValidator(config, formEdit);
formEditValidator.enableValidation();

// класс PopupWithForm

const popupWithFormEdit = new PopupWithForm(popupEdit, {
    submitForm: (data) => {
        popupWithFormEdit.renderLoading(true);
        api.changeUserInfo(data)
            .then((res) => {
                userInfo.setUserInfo(res);
                console.log(res);
                popupWithFormEdit.close();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                popupWithFormEdit.renderLoading(false);
            })
    }
});

const popupWithFormAvatar = new PopupWithForm(popupAvatar, {
    submitForm: (data) => {
        popupWithFormAvatar.renderLoading(true);
        api.changeUserAvatar(data)
            .then((res) => {
                userInfo.setAvatar(res);
                console.log(res);
                popupWithFormAvatar.close();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                popupWithFormAvatar.renderLoading(false);
            })
    }
});

const popupWithFormAdd = new PopupWithForm(popupAdd, {
    submitForm: (data) => {
        popupWithFormAdd.renderLoading(true);
        api.addCard(data)
            .then((res) => {
                const cardItem = createCard(res);
                section.addItem(cardItem);
                console.log(res);
                popupWithFormAdd.close();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                popupWithFormAdd.renderLoading(false);
            })
    }
});

buttonEdit.addEventListener('click', () => {
    const profileDescription = userInfo.getUserInfo();
    inputName.value = profileDescription.name;
    inputAbout.value = profileDescription.about;
    formEditValidator.resetValidation();
    popupWithFormEdit.open();
});
popupWithFormEdit.setEventListeners();

buttonAvatar.addEventListener('click', () => {
    formAvatarValidator.resetValidation();
    popupWithFormAvatar.open();
});
popupWithFormAvatar.setEventListeners();

buttonAdd.addEventListener('click', () => {
    formAddValidator.resetValidation();
    popupWithFormAdd.open();
});
popupWithFormAdd.setEventListeners();

popupWithConfirmation.setEventListeners();