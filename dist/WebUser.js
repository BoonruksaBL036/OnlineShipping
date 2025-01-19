"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebUser = void 0;
class WebUser {
    constructor(login_id, password, state, shoppingCart) {
        this.login_id = login_id;
        this.password = password;
        this.state = state;
        this.shoppingCart = shoppingCart;
    }
    getLogin_id() {
        return this.login_id;
    }
    setLogin_id(login_id) {
        this.login_id = login_id;
    }
    getPassword() {
        return this.password;
    }
    setPassword(password) {
        this.password = password;
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
    }
    getShoppingCart() {
        return this.shoppingCart;
    }
    setShoppingCart(shoppingCart) {
        this.shoppingCart = shoppingCart;
    }
    toString() {
        return `WebUser=[login_id=${this.login_id},password=${this.password},state=${this.state}}]`;
    }
}
exports.WebUser = WebUser;
