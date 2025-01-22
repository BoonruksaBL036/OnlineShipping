"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
class ShoppingCart {
    constructor(created) {
        this.lineItem = [];
        this.created = created;
    }
    getCreated() {
        return this.created;
    }
    setCreated(created) {
        this.created = created;
    }
    getLineItems() {
        return this.lineItem;
    }
    addLineItem(item) {
        if (Array.isArray(item)) {
            const add = item.flat();
            this.lineItem.push(...add);
        }
        else {
            this.lineItem.push(item);
        }
    }
    toString() {
        return `ShoppingCart=[created=${this.created},lineitem=${this.lineItem}]`;
    }
}
exports.ShoppingCart = ShoppingCart;
