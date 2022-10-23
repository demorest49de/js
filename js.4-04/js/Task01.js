'use strict';


const evaluateConversion = (euro, eurToUsd) => {
    let priceInRubles = eurToUsd(euro) * 73;
    return priceInRubles;
};

let userInput = +prompt('Введите стоимость покупки в евро:');
const eurUsdCrossCurs = 1.2;
let result = evaluateConversion(userInput, (value) => value * eurUsdCrossCurs);
console.log('result: ', result);