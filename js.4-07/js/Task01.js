'use strict';

const randomArrayV1 = (quantity) => {
    const array = [];
    array.length = quantity;
    for (let i = 0; i < array.length; i++) {
        array[i] = Math.trunc(Math.random() * 100) + 1;
    }

    return array;
};

console.log(': ', randomArrayV1(150));