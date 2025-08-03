// class User {
//     private name: string;

//     constructor(name: string) {
//         this.name = name;
//     }

//     getName(): void {
//         console.log(`👤 User name: ${this.name}`);
//     }

//     setName(name: string): void {
//         this.name = name;
//     }
// }

// class Account {
//     private balance: number;

//     constructor(
//         private accountHolder: User,
//         balance: number = 0
//     ) {
//         this.balance = balance;
//     }

//     getAccountHolderName(): void {
//         this.accountHolder.getName(); // This will already log the user's name
//     }

//     getBalance(): void {
//         console.log(`💰 Balance: ₹${this.balance.toFixed(2)}`);
//     }

//     addBalance(balance: number, type: string = 'normal'): void {
//         if (type === 'bonus') {
//             this.balance += (balance + balance * 0.1);
//         } else if (type === 'normal') {
//             this.balance += balance;
//         }
//     }

//     accountDetails() {
//         this.accountHolder.getName()
//         console.log(`💰 Balance: ₹${this.balance.toFixed(2)}`);
//     }
// }


// const obj1 = new User("gautam")

// const account1 = new Account(obj1)
// account1.accountDetails()

// account1.addBalance(100)
// account1.addBalance(500, 'bonus')

// account1.accountDetails()


