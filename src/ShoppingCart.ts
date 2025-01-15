import { Account } from './Account';
export class ShoppingCart{
    private created : string
    private account : Account

    constructor (created:string,account:Account){
        this.created = created
        this.account = account
    }

    public getCreated():string{
        return this.created
    }

    public setCreated(created:string):void{
        this.created = created
    }

    public getAccount():Account{
        return this.account
    }

    public setAccount(account:Account):void{
        this.account = account
    }

    public toString ():string{
        return `ShoppingCart=[created=${this.created},account=${this.account.toString}]`
    }
}