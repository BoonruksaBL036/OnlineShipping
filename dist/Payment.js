"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
class Payment {
    constructor(id, paid, details) {
        this.id = id;
        this.paid = paid;
        this.total = 0;
        this.details = details;
    }
    getId() {
        return this.id;
    }
    getPaid() {
        return this.paid;
    }
    setPaid(paid) {
        this.paid = paid;
    }
    getTotal() {
        return this.total;
    }
    setTotal(total) {
        this.total = total;
    }
    getDetails() {
        return this.details;
    }
    setDetails(details) {
        this.details = details;
    }
    toString() {
        return `Payment[id=${this.id},paid=${this.paid},total=${this.total},details=${this.details}]`;
    }
}
exports.Payment = Payment;
