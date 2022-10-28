'use strict';

const randomArrayV1 = (length) => {
    const array = [];
    array.length = length;
    for (let i = 0; i < array.length; i++) {
        array[i] = Math.trunc(Math.random() * 100) + 1;
    }

    return array;
};

console.log(': ', randomArrayV1(15));