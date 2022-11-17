'use strict';

const array = [];


const createArray = () => {
  const random = Math.trunc(Math.random() * 10);
  let sumCounter = sum;
  sumCounter += random;



  return checkSum(sumCounter, random);
};

const checkSum = (sum, random) => {
  if (sum <= 50) {
    array.push(random);

    createArray();
  }
  return [...array];
};

console.log(createArray());
