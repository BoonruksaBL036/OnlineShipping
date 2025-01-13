import { WebUser } from './WebUser';
export class Customer {
    private id : string
    private webUser : WebUser
    private address : string
    private phone : number
    private email : string

    constructor (id:string,webUser:WebUser,address:string,phone:number,email:string){
        this.id = id
        this.webUser = webUser
        this.address = address
        this.phone = phone
        this.email = email
    }

    public getId():string{
        return this.id
    }

    public getWebuser():WebUser{
        return this.webUser
    }

    public setWebuser(webUser:WebUser):void{
        this.webUser = webUser
    }

    public getAddress():string{
        return this.address
    }

    public setAddress(address:string):void{
        this.address = address
    }

    public getPhon():number{
        return this.phone
    }

    public setPhone(phone:number):void{
        this.phone = phone
    }

    public getEmail():string{
        return this.email
    }

    public setEmail(email:string):void{
        this.email = email
    }
    
    public toString():string{
    return `Customer[id=${this.id},webUser=${this.webUser.toString()},address=${this.address},phone=${this.phone},email=${this.email}]`}
}