// // src/oops/abstraction.ts

// // 🔐 Abstract class defines the common interface & behavior
// abstract class BankAccount {
//     protected balance: number = 0;

//     constructor(
//         protected accountNumber: string,
//         protected holderName: string
//     ) { }

//     // Common method
//     deposit(amount: number): void {
//         if (amount <= 0) {
//             throw new Error("Deposit must be positive");
//         }
//         this.balance += amount;
//         console.log(`Deposited ₹${amount}. New balance: ₹${this.balance}`);
//     }

//     // Common method
//     getBalance(): number {
//         return this.balance;
//     }

//     // 🚫 Abstract method must be implemented by subclasses
//     abstract withdraw(amount: number): void;
// }


// class SavingsAccount extends BankAccount {
//     private interestRate: number = 0.04;

//     withdraw(amount: number): void {
//         if (amount > this.balance) {
//             console.log("❌ Insufficient funds");
//             return;
//         }
//         this.balance -= amount;
//         console.log(`✅ Withdrew ₹${amount}. Remaining balance: ₹${this.balance}`);
//     }

//     addInterest(): void {
//         const interest = this.balance * this.interestRate;
//         this.balance += interest;
//         console.log(`💰 Interest added: ₹${interest.toFixed(2)}`);
//     }
// }


// class FixedDepositAccount extends BankAccount {
//     withdraw(): void {
//         console.log("❌ Cannot withdraw from fixed deposit before maturity.");
//     }

//     maturity(): void {
//         console.log("🎉 FD matured. You may now withdraw.");
//     }
// }


// export {
//     SavingsAccount, FixedDepositAccount
// }