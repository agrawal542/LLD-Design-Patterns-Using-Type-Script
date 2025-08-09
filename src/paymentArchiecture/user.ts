// User.ts
class User {
    constructor(
        public id: number,
        public name: string,
        public email: string
    ) { }
}

// Property.ts
class Property {
    constructor(
        public id: number,
        public name: string,
        public pricePerNight: number,
        public host: User
    ) { }
}

export {
    User, Property
}