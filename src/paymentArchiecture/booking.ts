import { Property, User } from "./user";

// Booking.ts
class Booking {
    constructor(
        public id: number,
        public guest: User,
        public property: Property,
        public nights: number
    ) { }

    getTotalAmount(): number {
        return this.nights * this.property.pricePerNight;
    }
}


export {
    Booking
}
