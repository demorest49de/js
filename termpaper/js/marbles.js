'use strict';

window.marbles = (() => {

  const game = () => {
    const ide = {
      bot: 'первый',
      user: 'второй',
      score: [5, 5],
      current: 0,
      switchUser() {
        this.current = +!this.current;
      },
      showResult(message) {
        alert(`${message}! 
        \n${ide.score[0]} - бот
        \n${ide.score[1]} - игрок`);
      },
      changeScore(value) {
        if (value > 0) {
          this.score[1] += value;
          this.score[0] -= value;
        } else {
          this.score[0] -= Math.abs(value);
          this.score[1] += Math.abs(value);
        }
      },
    };

    const evenOdd = ['четное', 'нечетное'];
    const getRandomIntInclusive = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    return function start() {
      const askForBalls = (balls) => {
        const answer = prompt(`Сколько шариков из ${balls} ты хочешь разыграть?`);
        checkFaultsOrExit(answer);
        if (answer > ide.score[ide.current] || answer <= 0) {
          alert(`Ошибка! Ты можешь разыграть ${ide.score[ide.current]} шариков. Попробуйте еще раз`);
          return start();
        }
        const random = getRandomIntInclusive(1, ide.score[ide.current]);
        if (+answer !== random) {
          ide.changeScore(+answer);
          ide.showResult('Вы победили');
        } else {
          ide.changeScore(-(+answer));
          ide.showResult('Вы проиграли');
        }
      };

      const askForParity = () => {
        const answer = confirm(`Угадайте ${evenOdd.join(', ')} ?`);
        checkFaultsOrExit();
      };

      const checkFaultsOrExit = (answer) => {
        if (answer === null) {
          return confirm('Хотите сыграть еще?') ? start() : null;
        }
        if (isNaN(+answer) && !isFinite(+answer) || answer.length === 0) {
          return start();
        }
      };

      const hasExit = () => {
        const [x, y] = ide.score;
        if (!x || !y) {
          const message = `Игра окончена. ${x === 0 ? 'Вы победили!' : 'Вы проиграли!' +
            '\n${ide.score[0]} - бот' +
            '\n${ide.score[1]} - игрок'} `;
          alert(message);
        }
      };

      do {
        ide.switchUser();
        // ide.current ? askForBalls(ide.score[ide.current])
        //   : askForParity(ide.score[ide.current]);
        askForBalls(ide.score[ide.current]);
      } while (!hasExit());

    };
  };
  return game;
})
();