class Rectangle {
  constructor(_width, _height, _color) {
    this.width = _width;
    this.height = _height;
    this.color = _color;
  }
  getRectangleArea() {
    return `The area of the ${this.color} rectangle is ${
      this.width * this.height
    } square meters`;
  }

  set anotherObject(value) {
    let heightRange = [
      10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 110,
      200, 350, 600, 900, 1150, 2000, 3000, 8000, 5000, 2250, 150, 400, 1250,
    ];
    let colorRange = ["blue", "yellow", "green", "orange", "red", "purple"];
    this.width = value;
    this.height = heightRange[Math.floor(Math.random() * 30)];
    this.color = colorRange[Math.floor(Math.random() * 6)];
  }

  get theAreas() {
    return `The area of the randomly chosen ${this.color} rectangle is now ${
      this.width * this.height
    } square meters`;
  }
}

const rect1 = new Rectangle(5, 3, "skyblue");
const rect2 = new Rectangle(9, 4, "darkgreen");

document.write(`<span>${rect1.getRectangleArea()} </span> </br>`);

document.write(`<span>${rect2.getRectangleArea()} </span> </br>`);

rect1.anotherObject = 50;

document.write(`<span>${rect1.theAreas} </spanstyle=></br>`);
