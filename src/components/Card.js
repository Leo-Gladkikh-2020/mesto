export class Card {
    constructor(data, cardSelector, handleCardClick, { handleDeleteCardClick, addLike, deleteLike }, userId) {
        this._name = data.name;
        this._link = data.link;
        this._ownerId = data.owner._id;
        this._likes = data.likes;
        this._likesId = data.likes._id;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._addLike = addLike;
        this._deleteLike = deleteLike;
        this._handleDeleteCardClick = handleDeleteCardClick;
        this._userId = userId;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
        return cardElement;
    }

    _likeCard() {
        if (!this._likeBtn.classList.contains('element__like-btn_active')) {
            this._likeBtn.classList.add('element__like-btn_active');
            this._addLike(this._likesId);
        } else {
            this._likeBtn.classList.remove('element__like-btn_active');
            this._deleteLike(this._likesId);
        }
    }

    deleteCard() {
        this._element.remove();
        this._element = null;
    }

    countLikes(data) {
        this._likesNumber.textContent = data.likes.length;
    }

    _setEventListeners() {
        this._likeBtn.addEventListener('click', () => this._likeCard());
        this._trashBtn.addEventListener('click', () => this._handleDeleteCardClick(this));
        this._elementImage.addEventListener('click', () => this._handleCardClick(this._name, this._link));
    }

    generateCard() {
        this._element = this._getTemplate();
        this._elementImage = this._element.querySelector('.element__image');
        this._elementTitle = this._element.querySelector('.element__title');
        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;
        this._elementTitle.textContent = this._name;
        this._likeBtn = this._element.querySelector('.element__like-btn');
        this._trashBtn = this._element.querySelector('.element__trash-btn');
        this._likesNumber = this._element.querySelector('.element__like-number');
        this._likesNumber.textContent = this._likes.length;
        //if (this._userId !== this._ownerId) {
        //this._trashBtn.remove();
        //}
        this._likes.forEach(like => {
            if (like._id === this._userId) {
                this._likeBtn.classList.add('element__like-btn_active');
            }
        })
        this._setEventListeners();

        return this._element;
    }
}