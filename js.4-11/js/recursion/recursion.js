'use strict';

const array = [];


const arrayCheckerHandler = (sum = 0) => {
  const random = Math.trunc(Math.random() * 10);
  let sumCounter = sum;
  sumCounter += random;

  return checkSum(sumCounter, random);
};

const checkSum = (sum, random) => {
  if (sum <= 50) {
    array.push(random);

    arrayCheckerHandler(sum);
  }
  return [...array];
};

console.log(arrayCheckerHandler());
