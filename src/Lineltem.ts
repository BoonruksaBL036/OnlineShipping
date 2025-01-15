import { Product } from "./Product"
export class LineItem {
    private quantity: number
    private price: number
    private product: Product;

    constructor(quantity: number, price: number, product: Product) {
        this.quantity = quantity ?? 0;
        this.price = price ?? 0;
        this.product = product
    }

    public getQuantity(): number {
        return this.quantity
    }

    public setQuantity(quantity: number): void {
        this.quantity = quantity
    }

    public getPrice(): number {
        return this.price
    }

    public setPrice(prive: number): void {
        this.price = prive
    }

    public getProduct(): Product {
        return this.product;
    }

    public setProduct(product: Product): void {
        this.product = product;
    }

    public CalcToTal():number{
        return  this.price * this.quantity
    }

    public toString(): string {
        return `LineItem=[quantity=${this.quantity}, price=${this.price}, product=${this.product.toString()}]`;
    }
}