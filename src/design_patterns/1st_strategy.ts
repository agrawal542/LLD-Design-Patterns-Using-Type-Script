// class User {
//   private name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   getName(): void {
//     console.log(`👤 User name: ${this.name}`);
//   }

//   setName(name: string): void {
//     this.name = name;
//   }
// }


// interface BalanceStrategy {
//   add(balance: number, currentBalance: number): number;
// }

// class SimpleBalanceStrategy implements BalanceStrategy {
//   add(balance: number, currentBalance: number): number {
//     return currentBalance + balance;
//   }
// }

// class BonusBalanceStrategy implements BalanceStrategy {
//   add(balance: number, currentBalance: number): number {
//     const bonus = balance * 0.1;
//     return currentBalance + balance + bonus;
//   }
// }


// class Account {
//   private balance: number;

//   constructor(
//     private accountHolder: User,
//     balance: number = 0,
//     private balanceStrategy: BalanceStrategy
//   ) {
//     this.balance = balance;
//   }

//   getAccountHolderName(): void {
//     this.accountHolder.getName();
//   }

//   getBalance(): void {
//     console.log(`💰 Balance: ₹${this.balance.toFixed(2)}`);
//   }

//   addBalance(balance: number): void {
//     this.balance = this.balanceStrategy.add(balance, this.balance);
//   }

//   accountDetails(): void {
//     this.accountHolder.getName();
//     console.log(`💰 Balance: ₹${this.balance.toFixed(2)}`);
//   }
// }

// const user = new User("Gautam");
// const strategy = new BonusBalanceStrategy();  // or SimpleBalanceStrategy, etc.


// const acc = new Account(user, 1000, strategy);

// // acc.accountDetails(); // 👤 Gautam, ₹1000
// acc.addBalance(1000); // adds 1000 + 10% bonus = ₹1100
// acc.accountDetails(); // 👤 Gautam, ₹2100



// It is used where you have more then one like suppose account can be type
// fixed, salary, saving and current so dont want to add same logic in accounrManageService classand want to exist open close principle
