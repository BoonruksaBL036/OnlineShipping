"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
class ShoppingCart {
    constructor(created, account) {
        this.created = created;
        this.account = account;
    }
    getCreated() {
        return this.created;
    }
    setCreated(created) {
        this.created = created;
    }
    getAccount() {
        return this.account;
    }
    setAccount(account) {
        this.account = account;
    }
    ToString() {
        return `ShoppingCart[created=${this.created},account=${this.account.toString}]`;
    }
}
exports.ShoppingCart = ShoppingCart;
