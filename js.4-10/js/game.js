'use strict';
alert(`Угадай число`);
console.log(': ');
console.log(': ');
console.log(': ');
console.log(': ');
console.log(': ');
console.log(': ');
console.log(': ');
console.log(': ');

const secretNumber = Math.trunc(Math.random() * 100 + 1);
console.log(': secretNumber', secretNumber);
let userGuess = prompt('Введите загаданное число от 1 до 100');

const guessNumber = () => {
  if (userGuess === null) {
    alert('Выход из программы...');
    return;
  }

  if (isNaN(userGuess) || (!userGuess)) {
    userGuess = prompt(`Введите число!`);
    console.log(': ', userGuess, typeof (userGuess));
    guessNumber();
    return;
  }

  if (secretNumber !== +userGuess) {
    console.log(': ', userGuess, typeof (userGuess));

    if (userGuess > secretNumber) {
      userGuess = prompt(`Меньше! Попробуйте еще раз!`);
      guessNumber();
      return;
    } else {
      userGuess = prompt(`Больше! Попробуйте еще раз!`);
      guessNumber();
      return;
    }
  } else {
    alert(`Вы угадали ...`);
    return;
  }
};

guessNumber();
