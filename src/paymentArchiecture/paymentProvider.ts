interface PaymentProvider {
    send(amount: number): void;
}

class RazorpayProvider implements PaymentProvider {
    send(amount: number): void {
        console.log(`Razorpay: Processing ₹${amount}`);
    }
}

class StripeProvider implements PaymentProvider {
    send(amount: number): void {
        console.log(`Stripe: Processing ₹${amount}`);
    }
}


export {
    PaymentProvider, RazorpayProvider, StripeProvider
}