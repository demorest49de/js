'use strict';

const rectangle = {
  width: 5,
  height: 5,
  get Width() {
    return this.width + 'см';
  },
  set Width(value) {
    if (typeof(value) === 'number') {
      this.width = value;
    } else {
      console.log(`${value} is not a number`);
    }
  },
  get Height() {
    return this.height + 'см';
  },
  set Height(value) {
    if (typeof(value) === 'number') {
      this.height = value;
    } else {
      console.log(`${value} is not a number`);
    }
  },
};

rectangle.Width = 'alsgfj';
rectangle.Width = 111;

rectangle.Height = 45;
console.log(rectangle.Width);
console.log(rectangle.Height);
