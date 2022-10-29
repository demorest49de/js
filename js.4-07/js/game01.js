alert(`Угадай число`);

const guessNumber = () => {
    return Math.trunc(Math.random() * 100 + 1);
};

const secretNumber = guessNumber();

let userGuess = +prompt('Введите загаданное число от 1 до 100');

while (secretNumber !== userGuess) {
    while(isNaN(userGuess)){
        userGuess = +prompt(`Введите число!`);
    }
    if (userGuess > secretNumber) {
        userGuess = +prompt(`Меньше! Попробуйте еще раз!`);
    } else {
        userGuess = +prompt(`Больше! Попробуйте еще раз!`);
    }

}

alert('Правильно!');