import { LineItem } from "./Lineltem"
export class ShoppingCart{
    private created : string
    private lineItem : LineItem[]=[]

    constructor (created:string){
        this.created = created
    }

    public getCreated():string{
        return this.created
    }

    public setCreated(created:string):void{
        this.created = created
    }

    public getLineItems():LineItem [] {
        return this.lineItem
    }

    public addLineItem(item:LineItem | LineItem []):void{
        if(Array.isArray(item)){
            const add = item.flat()
            this.lineItem.push(...add)
        }else{
            this.lineItem.push(item);
        }
    }

    public toString ():string{
        return `ShoppingCart=[created=${this.created},lineitem=${this.lineItem}]`
    }
}