class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  setHeight(newHeight) {
    this.height = newHeight;
  }
}

class Square extends Rectangle {}

const rectangle = new Rectangle(4, 5);
const square = new Square(4, 4);

console.log(`Height: ${rectangle.height}, Width: ${rectangle.width}`); // Outputs 'Height: 4, Width: 5' (correct)
console.log(`Height: ${square.height}, Width: ${square.width}`); // Outputs 'Height: 4, Width: 4' (correct)

square.setHeight(5);
console.log(`Height: ${square.height}, Width: ${square.width}`); // Outputs 'Height: 5, Width: 4' (wrong)

// In this example we initialise a Rectangle and Square, and output their dimensions. We then call the Rectangle.setHeight() on the Square object, and output its dimensions again. What we find is that the square now has a different height than its length, which of course makes for an invalid square.
