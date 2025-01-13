"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(id, customer, billing, is_closed, open, closed, payment) {
        this.id = id;
        this.customer = customer;
        this.billing = billing;
        this.is_closed = is_closed;
        this.open = open;
        this.closed = closed;
        this.payment = payment;
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
        return this.payment;
    }
    setPayment(payment) {
        this.payment = payment;
    }
    toString() {
        return `Account=[id=${this.id},customer=${this.customer.toString()},billing=${this.billing},is_closed=${this.is_closed},open=${this.open},closed=${this.closed},payment=${this.payment.ToString()}]`;
    }
}
exports.Account = Account;
