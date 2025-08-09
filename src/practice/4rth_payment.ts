// // Enums & Interfaces
// export enum GatewayType {
//     PAYTM = 'PAYTM',
//     RAZORPAY = 'RAZORPAY'
// }

// export interface BankingSystem {
//     processPayment(amount: number): boolean;
// }

// // Payment Request Class
// export class PaymentRequest {
//     constructor(
//         public sender: string,
//         public receiver: string,
//         public amount: number,
//         public currency: string
//     ) {}
// }

// // Concrete Banking Systems
// export class PaytmBankingSystem implements BankingSystem {
//     processPayment(amount: number): boolean {
//         const r = Math.random() * 100;
//         return r < 80;
//     }
// }

// export class RazorpayBankingSystem implements BankingSystem {
//     processPayment(amount: number): boolean {
//         console.log(`[BankingSystem-Razorpay] Processing payment of ${amount}...`);
//         const r = Math.random() * 100;
//         return r < 90;
//     }
// }

// // Template Method Base Class
// export abstract class PaymentGateway {
//     protected bankingSystem!: BankingSystem;

//     processPayment(request: PaymentRequest): boolean {
//         if (!this.validatePayment(request)) {
//             console.log(`[PaymentGateway] Validation failed for ${request.sender}.`);
//             return false;
//         }
//         if (!this.initiatePayment(request)) {
//             console.log(`[PaymentGateway] Initiation failed for ${request.sender}.`);
//             return false;
//         }
//         if (!this.confirmPayment(request)) {
//             console.log(`[PaymentGateway] Confirmation failed for ${request.sender}.`);
//             return false;
//         }
//         return true;
//     }

//     abstract validatePayment(request: PaymentRequest): boolean;
//     abstract initiatePayment(request: PaymentRequest): boolean;
//     abstract confirmPayment(request: PaymentRequest): boolean;
// }

// // Concrete Gateways
// export class PaytmGateway extends PaymentGateway {
//     constructor() {
//         super();
//         this.bankingSystem = new PaytmBankingSystem();
//     }

//     validatePayment(request: PaymentRequest): boolean {
//         console.log(`[Paytm] Validating payment for ${request.sender}.`);
//         return request.amount > 0 && request.currency === 'INR';
//     }

//     initiatePayment(request: PaymentRequest): boolean {
//         console.log(`[Paytm] Initiating payment of ${request.amount} ${request.currency} for ${request.sender}.`);
//         return this.bankingSystem.processPayment(request.amount);
//     }

//     confirmPayment(request: PaymentRequest): boolean {
//         console.log(`[Paytm] Confirming payment for ${request.sender}.`);
//         return true;
//     }
// }

// export class RazorpayGateway extends PaymentGateway {
//     constructor() {
//         super();
//         this.bankingSystem = new RazorpayBankingSystem();
//     }

//     validatePayment(request: PaymentRequest): boolean {
//         console.log(`[Razorpay] Validating payment for ${request.sender}.`);
//         return request.amount > 0;
//     }

//     initiatePayment(request: PaymentRequest): boolean {
//         console.log(`[Razorpay] Initiating payment of ${request.amount} ${request.currency} for ${request.sender}.`);
//         return this.bankingSystem.processPayment(request.amount);
//     }

//     confirmPayment(request: PaymentRequest): boolean {
//         console.log(`[Razorpay] Confirming payment for ${request.sender}.`);
//         return true;
//     }
// }

// // Proxy Gateway
// export class PaymentGatewayProxy extends PaymentGateway {
//     constructor(
//         private realGateway: PaymentGateway,
//         private retries: number
//     ) {
//         super();
//     }

//     processPayment(request: PaymentRequest): boolean {
//         for (let attempt = 0; attempt < this.retries; attempt++) {
//             if (attempt > 0) {
//                 console.log(`[Proxy] Retrying payment (attempt ${attempt + 1}) for ${request.sender}.`);
//             }
//             if (this.realGateway.processPayment(request)) return true;
//         }
//         console.log(`[Proxy] Payment failed after ${this.retries} attempts for ${request.sender}.`);
//         return false;
//     }

//     validatePayment(request: PaymentRequest): boolean {
//         return this.realGateway.validatePayment(request);
//     }
//     initiatePayment(request: PaymentRequest): boolean {
//         return this.realGateway.initiatePayment(request);
//     }
//     confirmPayment(request: PaymentRequest): boolean {
//         return this.realGateway.confirmPayment(request);
//     }
// }

// // Singleton Gateway Factory
// export class GatewayFactory {
//     private static instance: GatewayFactory;
//     private constructor() {}
//     static getInstance(): GatewayFactory {
//         if (!GatewayFactory.instance) {
//             GatewayFactory.instance = new GatewayFactory();
//         }
//         return GatewayFactory.instance;
//     }

//     getGateway(type: GatewayType): PaymentGateway {
//         const gateway = type === GatewayType.PAYTM
//             ? new PaytmGateway()
//             : new RazorpayGateway();

//         const retries = type === GatewayType.PAYTM ? 3 : 1;
//         return new PaymentGatewayProxy(gateway, retries);
//     }
// }

// // Singleton Payment Service
// export class PaymentService {
//     private static instance: PaymentService;
//     private gateway: PaymentGateway | null = null;
//     private constructor() {}

//     static getInstance(): PaymentService {
//         if (!PaymentService.instance) {
//             PaymentService.instance = new PaymentService();
//         }
//         return PaymentService.instance;
//     }

//     setGateway(gateway: PaymentGateway): void {
//         this.gateway = gateway;
//     }

//     processPayment(request: PaymentRequest): boolean {
//         if (!this.gateway) {
//             console.log("[PaymentService] No gateway selected.");
//             return false;
//         }
//         return this.gateway.processPayment(request);
//     }
// }

// // Singleton Controller
// export class PaymentController {
//     private static instance: PaymentController;
//     private constructor() {}

//     static getInstance(): PaymentController {
//         if (!PaymentController.instance) {
//             PaymentController.instance = new PaymentController();
//         }
//         return PaymentController.instance;
//     }

//     handlePayment(type: GatewayType, request: PaymentRequest): boolean {
//         const gateway = GatewayFactory.getInstance().getGateway(type);
//         PaymentService.getInstance().setGateway(gateway);
//         return PaymentService.getInstance().processPayment(request);
//     }
// }

// // Client Code
// const request1 = new PaymentRequest("Aditya", "Shubham", 1000, "INR");
// console.log("Processing via Paytm\n------------------------------");
// const result1 = PaymentController.getInstance().handlePayment(GatewayType.PAYTM, request1);
// console.log("Result:", result1 ? "SUCCESS" : "FAIL");

// console.log("\nProcessing via Razorpay\n------------------------------");
// const request2 = new PaymentRequest("Shubham", "Aditya", 500, "USD");
// const result2 = PaymentController.getInstance().handlePayment(GatewayType.RAZORPAY, request2);
// console.log("Result:", result2 ? "SUCCESS" : "FAIL");
