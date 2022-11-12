import { makeAutoObservable } from "mobx";

class Like {
    favorites = []

    constructor() {
        makeAutoObservable(this)
    }

    addFavorite(favorites) {
        this.favorites.push(favorites)
    }

    removeFavorite(id) {
        this.favorites = this.favorites.filter(item => item.id !== id)
    }

    clear() {
        this.favorites = []
    }

    get length() {
        return this.favorites.length
    }
}

export default new Like