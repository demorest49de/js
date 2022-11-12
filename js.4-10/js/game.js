const guessNumber = () => {
  alert(`Угадай число`);

  const getRandom = () => {
    return Math.trunc(Math.random() * 100 + 1);
  };

  const secretNumber = getRandom();

  let userGuess = prompt('Введите загаданное число от 1 до 100');
  console.log(': ', userGuess);
  while (secretNumber != userGuess) {
    if (userGuess === null) return;
    while (isNaN(userGuess)) {
      userGuess = prompt(`Введите число!`);
    }
    if (userGuess > secretNumber) {
      userGuess = prompt(`Меньше! Попробуйте еще раз!`);
    } else {
      userGuess = prompt(`Больше! Попробуйте еще раз!`);
    }
  }

  alert('Правильно!');
};

guessNumber();