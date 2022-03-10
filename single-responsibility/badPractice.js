class Math {
  // Getters & Setters
  constructor() {
    //Profit properties
    this.profit = 0;
    this.sellingPrice = 0;
    this.costPrice = 0;
    //Interest properties
    this.simpleInterest = 0;
    this.principal = 0;
    this.rate = 0;
    this.time = 0;
    this.numberOfTimes = 0;
  }
  calculateProfit() {
    this.profit = this.sellingPrice - this.costPrice;
  }
  calculateSimpleInterest() {
    this.simpleInterest = (this.principal * this.rate * this.time) / 100;
  }
  calculateCompoundInterest() {
    this.compoundInterest =
      this.principal *
      (Math.pow(1 + this.rate / this.numberOfTimes),
      this.numberOfTimes * this.time);
  }
  //... other mathematics functions
}
