'use strict';


const evaluateConversion = (euro, eurToUsd) => {
    const priceInRubles = eurToUsd(euro) * 73;
    return priceInRubles;
};

const userInput1 = +prompt('Введите стоимость покупки в евро:');
const eurUsdCrossCurs = 1.2;
const result1 = evaluateConversion(userInput1, (value) => value * eurUsdCrossCurs);
console.log('result: ', result1);