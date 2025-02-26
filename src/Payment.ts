export class Payment{
    private id : string
    private paid : string
    private total : number
    private details : string

    constructor (id:string,paid:string,details:string){
        this.id = id
        this.paid = paid
        this.total = 0;
        this.details = details
    }

    public getId():string{
        return this.id
    }

    public getPaid():string{
        return this.paid
    }

    public setPaid(paid:string):void{
        this.paid = paid
    }

    public getTotal(): number {
        return this.total
    }

    public setTotal(total: number): void {
        this.total = total
    }

    public getDetails():string{
        return this.details
    }

    public setDetails(details:string):void{
        this.details = details
    }

    public toString():string{
        return `Payment[id=${this.id},paid=${this.paid},total=${this.total},details=${this.details}]`
    }
}