// This can be solved, using polymorphism, an if statement in the Rectangle class, or a variety of other methods. But the real cause of the issue is that Square is not a good child class of Rectangle, and that in reality, perhaps both shapes should inherit from a Shape class instead.

class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Rectangle extends Shape {
  setHeight(newHeight) {
    this.height = newHeight;
  }
}

class Square extends Shape {
  setHeight(newHeight) {
    this.height = newHeight;
    this.width = newHeight;
  }
}

const rectangle = new Rectangle(4, 5);
const square = new Square(4, 4);

console.log(`Height: ${rectangle.height}, Width: ${rectangle.width}`); // Outputs 'Height: 4, Width: 5' (correct)
console.log(`Height: ${square.height}, Width: ${square.width}`); // Outputs 'Height: 4, Width: 4' (correct)

square.setHeight(5);
console.log(`Height: ${square.height}, Width: ${square.width}`); // Outputs 'Height: 5, Width: 5' (correct)
