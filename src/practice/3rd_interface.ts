// interface INotification {
//     send(to: string, message: string): void;
// }

// class EmailNotification implements INotification {
//     send(to: string, message: string): void {
//         console.log(`📧 Sending EMAIL to ${to}: ${message}`);
//     }
// }

// class SMSNotification implements INotification {
//     send(to: string, message: string): void {
//         console.log(`📱 Sending SMS to ${to}: ${message}`);
//     }
// }

// class WhatsAppNotification implements INotification {
//     send(to: string, message: string): void {
//         console.log(`💬 Sending WhatsApp to ${to}: ${message}`);
//     }
// }

// class NotificationFactory {
//   static createChannel(channel: string): INotification {
//     switch (channel.toLowerCase()) {
//       case 'email':
//         return new EmailNotification();
//       case 'sms':
//         return new SMSNotification();
//       case 'whatsapp':
//         return new WhatsAppNotification();
//       default:
//         throw new Error(`Unsupported notification type: ${channel}`);
//     }
//   }
// }

// const notifier =  NotificationFactory.createChannel('email');
// notifier.send('user@example.com', 'Your EMI is due!');


// // const notifier: INotification = new EmailNotification()
// // notifier.send('user@example.com', 'Your EMI is due!');
