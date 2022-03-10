class Interest {
  //Getters & Setters
  constructor(principal, time, rate) {
    //Interest properties
    this.simpleInterest = 0;
    this.principal = principal;
    this.rate = rate;
    this.time = time;
    this.numberOfTimes = 1;
  }
  calculateSimpleInterest() {
    this.simpleInterest = (this.principal * this.rate * this.time) / 100;
    return this.simpleInterest;
  }
  calculateCompoundInterest() {
    this.compoundInterest =
      this.principal *
      (Math.pow(1 + this.rate / this.numberOfTimes),
      this.numberOfTimes * this.time);
    return this.compoundInterest;
  }
  //...only interest functions
}
class Profit {
  // Getters & Setters
  constructor(sellingPrice, costPrice) {
    // Profit properties
    this.profit = 0;
    this.sellingPrice = sellingPrice;
    this.costPrice = costPrice;
  }
  calculateProfit() {
    this.profit = this.sellingPrice - this.costPrice;
    return this.profit;
  }
  //...only profit functions
}

// This principle makes it easy to test as a class will be more related to a
// specific problem. Since the principle makes a unit as small as possible it
// is easier for unit testing.

class Test {
  testProfit() {
    let profit = new Profit(10, 5);
    if (profit.calculateProfit() === 5) console.log('Test successful');
    else console.log('test failed');
  }
  testInterest() {
    let interest = new Interest(1, 10, 1);
    if (interest.calculateSimpleInterest() == 0.1)
      console.log('test successful');
    else console.log('test failed');
  }
}

let t1 = new Test();
t1.testProfit();
t1.testInterest();
