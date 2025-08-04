// // The Builder Pattern is used when an object has a lot of optional parameters or complex construction logic. 
// // Instead of a bloated constructor, you build the object step by step using method chaining.





// class User {
//   constructor(
//     public name: string,
//     public email: string,
//     public phone?: number,
//     public address?: string
//   ) {}
// }

// class UserBuilder {
//   private name!: string;
//   private email!: string;
//   private phone?: number;
//   private address?: string;

//   setName(name: string): this {
//     this.name = name;
//     return this;
//   }

//   setEmail(email: string): this {
//     this.email = email;
//     return this;
//   }

//   setPhone(phone: number): this {
//     this.phone = phone;
//     return this;
//   }

//   setAddress(address: string): this {
//     this.address = address;
//     return this;
//   }

//   build(): User {
//     return new User(this.name, this.email, this.phone, this.address);
//   }
// }

// // Usage
// const user = new UserBuilder()
//   .setName("Gautam")
//   .setEmail("gautam@example.com")
//   .setPhone(9876543210)
//   .build();

// console.log(user);
