import { Order } from './Order';
import { Payment } from './Payment';
import { ShoppingCart } from './ShoppingCart';

export class Account {
    private id: string
    private billing: string
    private is_closed: boolean
    private open: string
    private closed: string
    private payments: Payment[] = []
    private shoppingCart: ShoppingCart
    private orders: Order[] = []

    constructor(id: string, billing: string, is_closed: boolean, open: string, closed: string) {
        this.id = id
        this.billing = billing
        this.is_closed = is_closed
        this.open = open
        this.closed = closed
        this.shoppingCart = new ShoppingCart ("16/01/2025");
    }

    public getId(): string {
        return this.id
    }

    public getBilling(): string {
        return this.billing
    }

    public setBilling(billing: string): void {
        this.billing = billing
    }

    public getIs_closed(): boolean {
        return this.is_closed
    }

    public setIs_closed(is_closed: boolean): void {
        this.is_closed = is_closed
    }

    public getOpen(): string {
        return this.open
    }

    public setOpen(open: string) {
        this.open = open
    }

    public getClosed(): string {
        return this.closed
    }

    public setClosed(closed: string): void {
        this.closed = closed
    }

    public getPayment(): Payment[] {
        return this.payments
    }

    public addPayment(payment: Payment): void {
        this.payments.push(payment)
    }

    public getShippingCart(): ShoppingCart {
        return this.shoppingCart
    }

    public setShippingCart(shoppingCart: ShoppingCart): void {
        this.shoppingCart = shoppingCart
    }

    public getOrders():Order[] {
        return this.orders
    }

    public addOrders(order:Order):void{
        this.orders.push(order)
    }

    public toString(): string {
        return `Account=[id=${this.id},billing=${this.billing},is_closed=${this.is_closed},open=${this.open},closed=${this.closed},payment=${this.payments.toString()},shoppingCart = ${ this.shoppingCart.toString() }
    }]`
    }
}