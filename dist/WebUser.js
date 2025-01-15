"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebUser = void 0;
class WebUser {
    // private shoppingCart : ShoppingCart
    constructor(login_id, password, state) {
        this.login_id = login_id;
        this.password = password;
        this.state = state;
        // this.shoppingCart = shoppingCart
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
    // public getShoppingCart():ShoppingCart{
    //     return this.shoppingCart
    // }
    // public setShoppingCart(shoppingCart:ShoppingCart):void{
    //     this.shoppingCart = shoppingCart
    // }
    toString() {
        return `WebUser=[login_id=${this.login_id},password=${this.password},state=${this.state}}]`;
    }
}
exports.WebUser = WebUser;
