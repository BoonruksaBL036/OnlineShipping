"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(id, webUser, address, phone, email, account) {
        this.id = id;
        this.webUser = webUser;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.account = account;
    }
    getId() {
        return this.id;
    }
    getWebuser() {
        return this.webUser;
    }
    setWebuser(webUser) {
        this.webUser = webUser;
    }
    getAddress() {
        return this.address;
    }
    setAddress(address) {
        this.address = address;
    }
    getPhon() {
        return this.phone;
    }
    setPhone(phone) {
        this.phone = phone;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getAccount() {
        return this.account;
    }
    setAccount(account) {
        this.account = account;
    }
    toString() {
        return `Customer[id=${this.id},webUser=${this.webUser.toString()},address=${this.address},phone=${this.phone},email=${this.email}]`;
    }
}
exports.Customer = Customer;
