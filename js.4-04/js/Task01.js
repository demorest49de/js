'use strict';


const evaluateConversion = (euro, eurToUsd) => {
    let priceInRubles = eurToUsd(euro) * 73;
    return priceInRubles;
};

const userInput = +prompt('Введите стоимость покупки в евро:');
const eurUsdCrossCurs = 1.2;
const result = evaluateConversion(userInput, (value) => value * eurUsdCrossCurs);
console.log('result: ', result);