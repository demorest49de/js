'use strict';
// alert(`Угадай число`);

const secretNumber = Math.trunc(Math.random() * 100 + 1);
console.log(': secretNumber', secretNumber);

const userGuess = prompt('Введите загаданное число от 1 до 100');

const guessNumber = (response) => {

  console.log(': ',response);
  console.log(': ',typeof (response));

  if (response === null) {
    alert('Выход из программы...');
    return;
  } else if (isNaN(response) || +response === 0) {
    response = prompt(`Введите число!`);
    return guessNumber(response);
  }

  switch (+response === secretNumber) {

    case true:
      alert(`Вы угадали число ${response}!`);
      return;

    case false:
      response = response > secretNumber ? prompt(`Меньше! Попробуйте еще раз!`)
        : prompt(`Больше! Попробуйте еще раз!`);
      guessNumber(response);
      return;
  }
};

guessNumber(userGuess);
