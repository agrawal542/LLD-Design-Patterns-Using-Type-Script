// // The Factory Pattern is a creational design pattern used when you want to delegate the instantiation 
// // of objects to a separate method or class (called a Factory). 

// // You hide the logic of which class to instantiate from the calling code.



// // 1. Define a common interface
// interface Beverage {
//   serve(): void;
// }

// // 2. Concrete classes implementing the interface
// class Coffee implements Beverage {
//   serve(): void {
//     console.log("☕ Serving hot coffee...");
//   }
// }

// class Tea implements Beverage {
//   serve(): void {
//     console.log("🍵 Serving herbal tea...");
//   }
// }

// // 3. Factory class
// class BeverageFactory {
//   static getBeverage(type: string): Beverage {
//     if (type === "coffee") {
//       return new Coffee();
//     } else if (type === "tea") {
//       return new Tea();
//     } else {
//       throw new Error("Unsupported beverage type");
//     }
//   }
// }

// // 4. Usage
// const drink = BeverageFactory.getBeverage("coffee");
// drink.serve(); // Output: ☕ Serving hot coffee...
