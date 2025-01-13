import { UserState } from "./UserState"
import { ShoppingCart } from './ShoppingCart';
export class WebUser{
    private login_id : string
    private password : string
    private state : UserState
    private shoppingCart : ShoppingCart

    constructor (login_id:string,password:string,state:UserState,shoppingCart:ShoppingCart){
        this.login_id = login_id
        this.password = password
        this.state = state
        this.shoppingCart = shoppingCart
    }

    public getLogin_id():string{
        return this.login_id
    }

    public setLogin_id(login_id:string):void{
        this.login_id = login_id
    }

    public getPassword():string{
        return this.password 
    }

    public setPassword(password:string):void{
        this.password = password
    }
    
    public getState():UserState{
        return this.state
    }

    public setState(state:UserState):void{
        this.state = state
    }

    public getShoppingCart():ShoppingCart{
        return this.shoppingCart
    }

    public setShoppingCart(shoppingCart:ShoppingCart):void{
        this.shoppingCart = shoppingCart
    }

    public toString():string{
        return `WebUser=[login_id=${this.login_id},password=${this.password},state=${this.state},shoppingCart=${this.shoppingCart.ToString}]`
    }
}