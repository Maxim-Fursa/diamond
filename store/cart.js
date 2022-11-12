import { makeAutoObservable } from "mobx";

class Cart {
    products = []

    constructor() {
        makeAutoObservable(this)
    }

    addProduct(product) {
        this.products.push(product)
    }

    removeProduct(id) {
        this.products = this.products.filter(item => item.id !== id)
    }

    clear() {
        this.products = []
    }

    get length() {
        return this.products.length
    }
}

export default new Cart