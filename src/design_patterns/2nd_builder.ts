// The actual object you'll use
class User {
  constructor(
    public name: string,
    public email: string,
    public age?: number,
    public country?: string,
    public isActive: boolean = false
  ) {}
}

// The builder that gradually sets values
class UserBuilder {
  private name!: string;
  private email!: string;
  private age?: number;
  private country?: string;
  private isActive: boolean = false;

  setName(name: string): this {
    this.name = name;
    return this;
  }

  setEmail(email: string): this {
    this.email = email;
    return this;
  }

  setAge(age: number): this {
    this.age = age;
    return this;
  }

  setCountry(country: string): this {
    this.country = country;
    return this;
  }

  setActive(isActive: boolean): this {
    this.isActive = isActive;
    return this;
  }

  build(): User {
    return new User(this.name, this.email, this.age, this.country, this.isActive);
  }
}



const user = new UserBuilder()
  .setName("Gautam")
  .setEmail("gautam@gmail.com")
  .setAge(28)
  .setCountry("India")
  .setActive(true)
  .build();

console.log(user);
