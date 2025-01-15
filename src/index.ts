//testproduct
// const product1 = new Product("01","Lay","Booruksa")
// console.log(product1.toString());
// import { WebUser } from './WebUser';
// import { Customer } from './Customer';
// import { Account } from './Account';
// import { UserState } from './UserState';

//testaccount
// const webUser1 = new WebUser("BL","boon1234",UserState.NEW);
// const customer1 = new Customer("01",webUser1,"Nakhon Pathom",820629587,"test@gmail.com");
// const account1 = new Account("07",customer1,"Nakhon Pathom",true,"8:00","18:00");
// console.log(account1.toString());

//test lineitem
// import { LineItem } from "./Lineltem";
// import { Product } from "./Product";
// const product1 = new Product("01","Lay","Booruksa")
// const quantity1 = new LineItem (4,20,product1)
// console.log(quantity1.CalcToTal());

// //test order
// import { Order } from "./Order";
// import { LineItem } from "./Lineltem";
// import { OrderStatus } from "./OrderStatus";
// import { Product } from "./Product";
// import { log } from "console";
// const order1 = new Order("001","15/01/2025","17/01/2025","Nakhon Pathom",OrderStatus.NEW,0)
// const product1 = new Product("01","Lay","Booruksa")
// const lineItem1 = new LineItem(5,480,product1)
// order1.addLineItem(lineItem1);
// console.log( order1.CalcSubTotal());

//order1
// import { Order } from "./Order";
// import { LineItem } from "./Lineltem";
// import { OrderStatus } from "./OrderStatus";
// import { Product } from "./Product";
// const order1 = new Order("001","15/01/2025","17/01/2025","Nakhon Pathom",OrderStatus.NEW,0)
// const product1 = new Product("01","Lay","Booruksa")
// const lineItem1 = new LineItem(5,480,product1)
// order1.addLineItem(lineItem1);
// console.log( order1.CalcSubTotal());

// // product1-5
// import { Product } from "./Product";
// import { LineItem } from "./Lineltem";
// import { WebUser } from "./WebUser";
// import { Customer } from "./Customer";
// import { Account } from "./Account";
// import { UserState } from "./UserState";
// import { Payment } from "./Payment";
// const product1 = new Product("01","ปากกา","เครื่องเขียน")
// console.log(product1.toString());
// const product2 = new Product("02","ดินสอ","เครื่องเขียน")
// console.log(product2.toString());
// const product3 = new Product("03","ยางลบ","เครื่องเขียน")
// console.log(product3.toString());
// const product4 = new Product("04","ไม้บรรทัด","เครื่องเขียน")
// console.log(product4.toString());
// const product5 = new Product("05","สีไม้","เครื่องเขียน")
// console.log(product5.toString());


// const quantity1 = new LineItem (1,10,product1)
// const quantity2 = new LineItem (1,5,product2)
// const quantity3 = new LineItem (1,12,product3)
// const quantity4 = new LineItem (1,15,product4)
// const quantity5 = new LineItem (1,199,product5)

//webuser2person
import { WebUser } from "./WebUser";
import { Customer } from "./Customer";
import { Account } from "./Account";
import { UserState } from "./UserState";
import { Payment } from "./Payment";
 const webUser1 = new WebUser("BL","boon1234",UserState.NEW);
 const customer1 = new Customer("01",webUser1,"Nakhon Pathom",820629587,"test1@gmail.com");
 const payment1 = new Payment("PY1","150",5000,"credit")
 const account1 = new Account("07",customer1,"Nakhon Pathom",true,"8:00","18:00",payment1);
 console.log(account1.toString());

 const webUser2 = new WebUser("Noey","Nubnoey1234",UserState.NEW);
 const customer2 = new Customer("02",webUser2,"Nakhon Pathom",123456789,"test2@gmail.com");
 const payment2 = new Payment("PY2","250",5000,"credit")
 const account2 = new Account("07",customer2,"Nakhon Pathom",true,"8:00","18:00",payment2);
 console.log(account2.toString());



