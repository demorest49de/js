'use strict';

const array = [];

const recursionForArray = (array) => {
  const random = Math.trunc(Math.random() * 10);


  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(': ',sum);
  if (sum <= 50) {
    console.log(': ', array);
    array.push(random);
    recursionForArray(array);
  }
  return array;
};

recursionForArray(array);
