/*
 ------------------------------------1:encapsulation---------------------------------
*/

// const person = new Person("Gautam", 25);

// person.greet();         // 👋 Hello, I'm Gautam and I'm 25 years old.

// person.setAge(30);      // ✅ Valid update
// person.greet();         // 👋 Hello, I'm Gautam and I'm 30 years old.

// person.setAge(-5);      // ❌ Invalid age.
// console.log(person.getAge());  // 30
// person.age = 1000;   // ❌ Error: Property 'age' is private

/*
 ------------------------------------2:absraction-------------------------------
*/

// src/index.ts
// import { SavingsAccount, FixedDepositAccount } from './opps/2_abstraction';

// const sa = new SavingsAccount("SA001", "Azza");
// sa.deposit(5000);
// sa.withdraw(2000);
// sa.addInterest();

// const fd = new FixedDepositAccount("FD001", "Mooji");
// fd.deposit(10000);
// fd.withdraw(); // Not allowed

/*
 -----------------------------------3:inherritance------------------------------
*/

// import { Cat, Dog } from './opps/3_inherritance';

// const dog = new Dog("Mooji");
// dog.makeSound();   // Mooji barks 🐶
// dog.fetch();       // Mooji is fetching a ball 🎾

// const cat = new Cat("Azza");
// cat.makeSound();   // Azza meows 🐱
// cat.scratch();     // Azza is scratching the couch 😼

/*
 -------------------------------------polymorphism------------------------------
*/

// import {
//     BankAccount,
//     SavingsAccount,
//     FixedDepositAccount
// } from './opps/4_polymorphsim'

// const accounts: BankAccount[] = [
//     new SavingsAccount(),
//     new FixedDepositAccount()
// ];

// accounts.forEach(acc => {
//     acc.withdraw(); // ✅ Polymorphic call
// });


/*
------------------------------practice------------------------------
*/

// import './practice/1st'
import './practice/2nd'
import './practice/3rd_interface'
import './practice/4rth_payment'
/*
----------------------------startegy design patter-----------------
*/

import './design_patterns/creational/1st_builder'
import './design_patterns/creational/2nd.fractory'
import './design_patterns/creational/3rd_prototype'

import './design_patterns/structural/1st_strategy'



/*
------------------------------Payment------------------------------
*/

// import './practice/1st'
import './paymentArchiecture/index'