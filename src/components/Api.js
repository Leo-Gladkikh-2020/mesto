export class Api {
    constructor({ baseUrl, token }) {
        this._baseUrl = baseUrl;
        this._token = token;
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        })
            .then(this._checkStatus)
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        })
            .then(this._checkStatus)
    }

    changeUserInfo({ name, about }) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, about })
        })
            .then(this._checkStatus)
    }

    changeUserAvatar({ avatar }) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ avatar })
        })
            .then(this._checkStatus)
    }

    addCard({ name, link }) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, link })
        })
            .then(this._checkStatus)
    }

    deleteCard(data) {
        return fetch(`${this._baseUrl}/cards/${data}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        })
            .then(this._checkStatus)
    }

    addLike(data) {
        return fetch(`${this._baseUrl}/cards/${data}/likes`, {
            method: 'PUT',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        })
            .then(this._checkStatus)
    }

    deleteLike(data) {
        return fetch(`${this._baseUrl}/cards/${data}/likes`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        })
            .then(this._checkStatus)
    }

    _checkStatus(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }
}