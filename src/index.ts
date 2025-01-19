
import { Product } from "./Product";
import { LineItem } from "./Lineltem";
import { WebUser } from "./WebUser";
import { Customer } from "./Customer";
import { Account } from "./Account";
import { UserState } from "./UserState";
import { Payment } from "./Payment";
import { ShoppingCart } from "./ShoppingCart";
import { Order } from "./Order";
import { OrderStatus } from "./OrderStatus";

// // product1-5
// const product1 = new Product("01","ปากกา","Stationery Store")
// // console.log(product1.toString());
// const product2 = new Product("02","ดินสอ","Stationery Store")
// // console.log(product2.toString());
// const product3 = new Product("03","ยางลบ","Stationery Store")
// // console.log(product3.toString());
// const product4 = new Product("04","ไม้บรรทัด","Stationery Store")
// // console.log(product4.toString());
// const product5 = new Product("05","สีไม้","Stationery Store")
// console.log(product5.toString());

// web user 2  person
// const shoppingCart1 = new ShoppingCart("16/01/2025")
// const webUser1 = new WebUser("BL","boon1234",UserState.NEW,shoppingCart1);
// const customer1 = new Customer("01",webUser1,"Nakhon Pathom",820629587,"test1@gmail.com");
// const payment1 = new Payment("PY1","credit",0,"17/01/2025")
// const account1 = new Account("07",customer1,"Nakhon Pathom",true,"8:00","18:00",payment1,shoppingCart1);
// console.log(webUser1.toString());

// const shoppingCart2 = new ShoppingCart("16/01/2025")
// const webUser2 = new WebUser("Noey","noey1234",UserState.NEW,shoppingCart2);
// const customer2 = new Customer("02",webUser2,"Ratchaburi",352523,"test2@gmail.com");
// const payment2 = new Payment("PY1","credit",0,"credit")
// const account2 = new Account("07",customer2,"Ratchaburi",true,"8:00","18:00",payment2,shoppingCart2);
// console.log(webUser2.toString());

// // user 1 order 1 shippingcart
// const shoppingCart1 = new ShoppingCart("16/01/2025")
// const webUser1 = new WebUser("BL","boon1234",UserState.NEW,shoppingCart1);
// const customer1 = new Customer("01",webUser1,"Nakhon Pathom",820629587,"test1@gmail.com");
// const payment1 = new Payment("PY1","credit",0,"17/01/2025");
// const account1 = new Account("07",customer1,"Nakhon Pathom",true,"8:00","18:00",payment1,shoppingCart1);
// const product1 = new Product("01","ปากกา","Stationery Store")
// const product2 = new Product("02","ดินสอ","Stationery Store")
// const quantity1 = new LineItem (2,10,product1)
// const quantity2 = new LineItem (2,5,product2)
// const order1 = new Order("od01", "17/01/2025", "20/01/2025", "Nakhon Pathom", OrderStatus.HOLD, 0,quantity1);

// const shoppingCart2 = new ShoppingCart("17/01/2025")
// const webUser2 = new WebUser("Noey","noey1234",UserState.NEW,shoppingCart2);
// const customer2 = new Customer("02",webUser2,"Ratchaburi",352523,"test2@gmail.com");
// const payment2 = new Payment("PY1","credit",0,"18/01/")
// const account2 = new Account("07",customer2,"Ratchaburi",true,"8:00","18:00",payment2,shoppingCart2);
// const product3 = new Product("03","ยางลบ","Stationery Store")
// const product5 = new Product("05","สีไม้","Stationery Store")
// const quantity3 = new LineItem (3,12,product3)
// const quantity5 = new LineItem (1,199,product5)
// const order2 = new Order("od02", "18/01/2025","21/01/2025", "Ratchaburi", OrderStatus.HOLD, 0,quantity3);
// order1.addLineItem(quantity1);
// order1.addLineItem(quantity2);
// order2.addLineItem(quantity3);
// order2.addLineItem(quantity5);
// order1.setTotal( order1.CalcSubTotal());
// order2.setTotal(order2.CalcSubTotal());
// account1.addOrder(order1);
// account2.addOrder(order2);
// console.log(webUser1.getLogin_id());
// console.log(quantity1.getProduct());
// console.log(quantity2.getProduct());
// console.log(shoppingCart1.toString,order1)
// console.log(webUser2.getLogin_id());
// console.log(quantity3.getProduct());
// console.log(quantity5.getProduct());
// console.log(shoppingCart2.toString,order2)

//shippingcart&order
const shoppingCart1 = new ShoppingCart("16/01/2025")
const webUser1 = new WebUser("BL","boon1234",UserState.NEW,shoppingCart1);
const customer1 = new Customer("01",webUser1,"Nakhon Pathom",820629587,"test1@gmail.com");
const payment1 = new Payment("PY1","17/01/2025",0,"credit");
const account1 = new Account("07",customer1,"Nakhon Pathom",true,"8:00","18:00",payment1,shoppingCart1);
const product1 = new Product("01","ปากกา","Stationery Store");
const product2 = new Product("02","ดินสอ","Stationery Store");
const quantity1 = new LineItem (4,10,product1.getName());
const quantity2 = new LineItem (3,5,product2.getName());
const order1 = new Order("od01", "17/01/2025", "20/01/2025", "Nakhon Pathom", OrderStatus.HOLD, 0,quantity1);
order1.addLineItem(quantity1);
order1.addLineItem(quantity2);
order1.setTotal( order1.CalcSubTotal());
account1.addOrder(order1);
console.log(webUser1.getLogin_id());
console.log(shoppingCart1.toString(),order1)
payment1.setTotal(order1.getTotal());
console.log(payment1.toString());