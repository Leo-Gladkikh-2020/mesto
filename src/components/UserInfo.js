export class UserInfo {
    constructor({ nameUser, aboutUser, avatarUser }) {
        this._nameUser = nameUser;
        this._aboutUser = aboutUser;
        this._avatarUser = avatarUser;
    }

    getUserInfo() {
        return {
            name: this._nameUser.textContent,
            about: this._aboutUser.textContent,
        }
    }

    setUserInfo(data) {
        this._nameUser.textContent = data.name;
        this._aboutUser.textContent = data.about;
    }

    setAvatar(data) {
        this._avatarUser.src = data.avatar;
    }
}