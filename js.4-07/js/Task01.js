'use strict';

const randomArray = (quantity) => {
    const array = [];
    array.length = quantity;
    for (let i = 0; i < array.length; i++) {
        array[i] = Math.trunc(Math.random() * 100) + 1;
    }

    return array;
};

const result = randomArray(150);
console.log(': ', result);