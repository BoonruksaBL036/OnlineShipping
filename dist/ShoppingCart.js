"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
class ShoppingCart {
    constructor(created) {
        this.created = created;
    }
    getCreated() {
        return this.created;
    }
    setCreated(created) {
        this.created = created;
    }
    toString() {
        return `ShoppingCart=[created=${this.created}]`;
    }
}
exports.ShoppingCart = ShoppingCart;
