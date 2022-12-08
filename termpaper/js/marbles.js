'use strict';

window.marbles = (() => {

  const game = () => {
    const ide = {
      bot: 0,
      user: 1,
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
          this.score[this.user] += value;
          this.score[this.bot] -= value;
        } else {
          this.score[this.bot] -= Math.abs(value);
          this.score[this.user] += Math.abs(value);
        }
        for (let i = 0; i < this.score.length; i++) {
          this.checkGamerScore(i);
        }
      },
      checkGamerScore(index) {
        this.score[index] = this.score[index] < 0 ? 0
          : this.score[index] > 10 ? 10 : this.score[index];
      },
      resetScore() {
        this.score = [5, 5];
      }
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
          ide.resetScore();
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