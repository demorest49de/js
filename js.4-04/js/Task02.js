const changeCapitalLetter = (phrase) => {
    let toLower = phrase.toLowerCase();
    return toLower.charAt(0).toUpperCase() + toLower.slice(1);
};

userInput = prompt('Введите фразу:');

result = console.log('result: ', changeCapitalLetter(userInput));