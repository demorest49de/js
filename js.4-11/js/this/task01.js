'use strict';

const rectangle = {
  _width: 5,
  _height: 5,
  get perimeter() {
    return (2 * (this._width + this._height)) + 'см';
  },
  get square() {
    return (this._width * this._height) + 'см';
  },
  set width(value) {
    if (typeof(value) === 'number') {
      this._width = value;
    } else {
      console.log(`${value} is not a number`);
    }
  },
  set height(value) {
    if (typeof(value) === 'number') {
      this._height = value;
    } else {
      console.log(`${value} is not a number`);
    }
  },
};

rectangle.width = 'alsgfj';
rectangle.width = 111;
rectangle.height = 45;
console.log(rectangle.perimeter);
console.log(rectangle.square);
