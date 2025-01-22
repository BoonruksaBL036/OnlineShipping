"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const ShoppingCart_1 = require("./ShoppingCart");
class Account {
    constructor(id, billing, is_closed, open, closed) {
        this.payments = [];
        this.orders = [];
        this.id = id;
        this.billing = billing;
        this.is_closed = is_closed;
        this.open = open;
        this.closed = closed;
        this.shoppingCart = new ShoppingCart_1.ShoppingCart("16/01/2025");
    }
    getId() {
        return this.id;
    }
    getBilling() {
        return this.billing;
    }
    setBilling(billing) {
        this.billing = billing;
    }
    getIs_closed() {
        return this.is_closed;
    }
    setIs_closed(is_closed) {
        this.is_closed = is_closed;
    }
    getOpen() {
        return this.open;
    }
    setOpen(open) {
        this.open = open;
    }
    getClosed() {
        return this.closed;
    }
    setClosed(closed) {
        this.closed = closed;
    }
    getPayment() {
        return this.payments;
    }
    addPayment(payment) {
        this.payments.push(payment);
    }
    getShippingCart() {
        return this.shoppingCart;
    }
    setShippingCart(shoppingCart) {
        this.shoppingCart = shoppingCart;
    }
    getOrders() {
        return this.orders;
    }
    addOrders(order) {
        this.orders.push(order);
    }
    toString() {
        return `Account=[id=${this.id},billing=${this.billing},is_closed=${this.is_closed},open=${this.open},closed=${this.closed},payment=${this.payments.toString()},shoppingCart = ${this.shoppingCart.toString()}
    }]`;
    }
}
exports.Account = Account;
