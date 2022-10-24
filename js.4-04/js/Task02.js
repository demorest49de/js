const changeCapitalLetter = (phrase) => {
    let toLower = phrase.toLowerCase();
    return toLower.charAt(0).toUpperCase() + toLower.slice(1);
};

const userInput2 = prompt('Введите фразу:');

const result2 = console.log('result: ', changeCapitalLetter(userInput2));