import { Booking } from "./booking";
import { PaymentProvider } from "./paymentProvider";

class PaymentGateway {
  constructor(private booking: Booking, private provider: PaymentProvider) {}

  initiatePayment(): void {
    const amount = this.booking.getTotalAmount();
    console.log(
      `${this.booking.guest.name} is booking ${this.booking.property.name}`
    );
    this.provider.send(amount);
    console.log(`Booking confirmed for ₹${amount}`);
  }
}

export { PaymentGateway };
