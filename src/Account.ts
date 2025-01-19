import { Order } from './Order';
import { Customer } from './Customer';
import { Payment } from './Payment';
import { ShoppingCart } from './ShoppingCart';

export class Account {
    private id: string
    private customer: Customer
    private billing: string
    private is_closed: boolean
    private open: string
    private closed: string
    private payment: Payment
    private shoppingCart: ShoppingCart
    private order: Order[] = []

    constructor(id: string, customer: Customer, billing: string, is_closed: boolean, open: string, closed: string, payment: Payment, shoppingCart: ShoppingCart, order: Order[] = []) {
        this.id = id
        this.customer = customer
        this.billing = billing
        this.is_closed = is_closed
        this.open = open
        this.closed = closed
        this.payment = payment
        this.shoppingCart = shoppingCart
        this.order = order
    }

    public getCustomer():Customer {
        return this.customer; 
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

    public getPayment(): Payment {
        return this.payment
    }

    public setPayment(payment: Payment): void {
        this.payment = payment
    }

    public getShippingCart(): ShoppingCart {
        return this.shoppingCart
    }

    public setShippingCart(shoppingCart: ShoppingCart): void {
        this.shoppingCart = shoppingCart
    }

    public getOrder():Order[] {
        return this.order
    }

    public addOrder(order:Order):void{
        this.order.push(order)
    }

    public toString(): string {
        return `Account=[id=${this.id},customer=${this.customer.toString()},billing=${this.billing},is_closed=${this.is_closed},open=${this.open},closed=${this.closed},payment=${this.payment.toString()},shoppingCart = ${ this.shoppingCart.toString() }
    }]`
    }
}