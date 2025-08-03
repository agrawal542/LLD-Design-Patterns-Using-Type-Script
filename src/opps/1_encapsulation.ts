// class Person {
//     // Private property - cannot be accessed directly outside the class
//     private age: number;

//     constructor(private name: string, initialAge: number) {
//         this.name = name;
//         this.age = initialAge;
//     }

//     // Public method to access the private data
//     getAge(): number {
//         return this.age;
//     }

//     // Public method to safely modify private data
//     setAge(newAge: number): void {
//         if (newAge >= 0 && newAge <= 120) {
//             this.age = newAge;
//         } else {
//             console.log("❌ Invalid age.");
//         }
//     }

//     greet(): void {
//         console.log(`👋 Hello, I'm ${this.name} and I'm ${this.age} years old.`);
//     }
// }


// export {
//     Person
// }


