"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineItem = void 0;
class LineItem {
    constructor(quantity, price, product) {
        this.quantity = quantity !== null && quantity !== void 0 ? quantity : 0;
        this.price = price !== null && price !== void 0 ? price : 0;
        this.product = product;
    }
    getQuantity() {
        return this.quantity;
    }
    setQuantity(quantity) {
        this.quantity = quantity;
    }
    getPrice() {
        return this.price;
    }
    setPrice(prive) {
        this.price = prive;
    }
    getProduct() {
        return this.product;
    }
    setProduct(product) {
        this.product = product;
    }
    CalcToTal() {
        return this.price * this.quantity;
    }
    toString() {
        return `LineItem=[quantity=${this.quantity}, price=${this.price} THB, product=${this.product.toString()}]`;
    }
}
exports.LineItem = LineItem;
