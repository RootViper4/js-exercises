class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}

const rectangle = new Rectangle(5, 3);
console.log("area rectangle", rectangle.area())
console.log("perimeter rectangle", rectangle.perimeter())

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    areas() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    circumference() {
        return 2 * Math.PI * this.radius;
    }
}

const circle = new Circle(5, 3);
console.log("area cirlce", circle.areas())
console.log("circumference cirlce", circle.circumference())
