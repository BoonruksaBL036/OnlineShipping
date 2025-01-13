"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor(number, ordered, shipped, ship_to, status, total) {
        this.lineItem = [];
        this.number = number;
        this.ordered = ordered;
        this.shipped = shipped;
        this.ship_to = ship_to;
        this.status = status;
        this.total = total;
    }
    getNumber() {
        return this.number;
    }
    setNumber(number) {
        this.number = number;
    }
    getOrdered() {
        return this.ordered;
    }
    setOrdered(ordered) {
        this.ordered = ordered;
    }
    getShipped() {
        return this.shipped;
    }
    setShipped(shipped) {
        this.shipped = shipped;
    }
    getShip_to() {
        return this.ship_to;
    }
    setShip_to(ship_to) {
        this.ship_to = ship_to;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    getTotal() {
        return this.total;
    }
    setTotal(total) {
        this.total = total;
    }
    getLineItem() {
        return this.lineItem;
    }
    addLineItem(lineItem) {
        this.lineItem.push(lineItem);
    }
    ToString() {
        return `Order=[number=${this.number},ordered=${this.ordered},shipped=${this.shipped},ship_to=${this.ship_to},status=${this.status},total=${this.total},lineItem=${this.lineItem.forEach(item => item.toString())}]`;
    }
}
exports.Order = Order;
