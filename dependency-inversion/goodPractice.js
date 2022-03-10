// Rather than directly call the PayPal API from our payment page, we’ll instead create another class called PaymentHandler. The interface for this class will remain the same no matter what underlying payment system we use, even if the two systems are completely different. We’ll still need to make changes to the PaymentHandler interface if we change payment processor, but our higher level interface remains unchanged.

class PurchaseHandler {
  processPayment(paymentDetails, amount) {
    const paymentSuccess = PaymentHandler.requestPayment(
      paymentDetails,
      amount
    );

    if (paymentSuccess) {
      // Do something
      return true;
    }

    // Do something
    return false;
  }
}

class PaymentHandler {
  requestPayment(paymentDetails, amount) {
    // Complicated, PayPal specific logic goes here
    return PayPal.requestPayment(paymentDetails, amount);
  }
}
