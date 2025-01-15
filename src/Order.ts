import { OrderStatus } from "./OrderStatus";
import { LineItem } from './Lineltem';
export class Order {
    private number: string
    private ordered: string
    private shipped: string
    private ship_to: string
    private status: OrderStatus
    private total: number
    private lineItem: LineItem[] = []

    constructor(number: string, ordered: string, shipped: string, ship_to: string, status: OrderStatus, total: number) {
        this.number = number;
        this.ordered = ordered;
        this.shipped = shipped;
        this.ship_to = ship_to;
        this.status = OrderStatus.NEW;
        this.total = 0;

    }

    public getNumber(): string {
        return this.number
    }

    public setNumber(number: string): void {
        this.number = number
    }

    public getOrdered(): string {
        return this.ordered
    }

    public setOrdered(ordered: string): void {
        this.ordered = ordered
    }

    public getShipped(): string {
        return this.shipped
    }

    public setShipped(shipped: string): void {
        this.shipped = shipped
    }

    public getShip_to(): string {
        return this.ship_to
    }

    public setShip_to(ship_to: string): void {
        this.ship_to = ship_to
    }

    public getStatus(): OrderStatus {
        return this.status
    }

    public setStatus(status: OrderStatus): void {
        this.status = status
    }

    public getTotal(): number {
        return this.total
    }

    public setTotal(total: number): void {
        this.total = total
    }

    public CalcSubTotal():number{
        return this.lineItem.reduce((sum,Item)=>sum + Item.CalcToTal(),0)
    }

    public addLineItem(lineItem: LineItem): void {
        this.lineItem.push(lineItem)
    }

    public toString(): string {
        return `Order=[number=${this.number},ordered=${this.ordered},shipped=${this.shipped},ship_to=${this.ship_to},status=${this.status},total=${this.total},lineItem=${this.lineItem.forEach(item => item.toString())}]`;
    }
}