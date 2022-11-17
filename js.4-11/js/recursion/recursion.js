'use strict';

const array = [8, 3, 1, 2];


const checkArraySum = (sum, [...rest]) => {
  const [x] = rest;
  sum += x;
  if (sum < 50 && rest.length > 1) {
    rest.shift();
    sum = checkArraySum(sum, rest);
  }
  return sum;
};

const checkSum = (sum, [...array]) => {
  const random = Math.trunc(Math.random() * 10);
  sum += random;
  if (sum <= 50) {
    array.push(random);
    array = checkSum(sum, array);
  }
  return array;
};

const sum = checkArraySum(0, array);

const result = checkSum(sum, array);
console.log(': ', result);
