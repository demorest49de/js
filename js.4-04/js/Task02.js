'use strict';

const changeCapitalLetter = (phrase) => {
    let toLower = phrase.toLowerCase();
    return toLower.charAt(0).toUpperCase() + toLower.slice(1);
};

const userInput = prompt('Введите фразу:');

const result = console.log('result: ', changeCapitalLetter(userInput));