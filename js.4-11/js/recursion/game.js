'use strict';
// alert(`Угадай число`);

const guessHandler = () => {
  const secretNumber = Math.trunc(Math.random() * 100 + 1);

  console.log(': secretNumber', secretNumber);
  const guessNumber = (response) => {

    console.log(': ', response);
    console.log(': ', typeof (response));


    switch (true) {
      case response === null:
        return alert('Выход из программы...');

      case isNaN(response) || +response === 0:
        response = prompt(`Введите число!`);
        return guessNumber(response);

      case response > secretNumber:
         response = prompt(`Меньше! Попробуйте еще раз!`);
        return guessNumber(response);

      case  response < secretNumber:
        response = prompt(`Больше! Попробуйте еще раз!`);
        return guessNumber(response);

      default:
        return alert(`Вы угадали число ${response}!`);

    }
  };
  guessNumber(prompt('Введите загаданное число от 1 до 100'));
};

guessHandler();


