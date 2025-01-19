export class ShoppingCart{
    private created : string

    constructor (created:string){
        this.created = created
    }

    public getCreated():string{
        return this.created
    }

    public setCreated(created:string):void{
        this.created = created
    }

    public toString ():string{
        return `ShoppingCart=[created=${this.created}]`
    }
}