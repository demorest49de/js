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
  set Width(value) {
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

rectangle.Width = 'alsgfj';
rectangle.Width = 111;
rectangle.height = 45;
console.log(rectangle.perimeter);
console.log(rectangle.square);
