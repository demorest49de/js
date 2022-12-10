'use strict';

window.marbles = (() => {
  const game = () => {
    const ide = {
      goExit: false,
      minValue: 0,
      maxValue: 10,
      current: -1,
      bot: 0,
      player: 1,
      score: [5, 5],
      switchUser() {
        this.current = +!this.current;
      },
      resetScore() {
        this.score = [5, 5];
      },
      showResult(message) {
        alert(`${message}! 
        \n${ide.score[0]} - бот
        \n${ide.score[1]} - игрок`);
      },
      changeScore(value) {
        if (value > 0) {
          ide.score[0] -= value;
          ide.score[1] += value;
        } else {
          ide.score[1] += Math.abs(value);
          ide.score[0] -= Math.abs(value);
        }
        checkScoreConstraints();
      },
    };

    const evenOdd = ['четное', 'нечетное'];
    const checkScoreConstraints = () => {
      for (let i = 0; i < ide.score.length; i++) {
        ide.score[i] = ide.score[i] < ide.minValue ? ide.minValue
          : ide.score[i] > ide.maxValue ? ide.maxValue : ide.score[i];
      }
    };

    const getRandomIntInclusive = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    return function start() {

      const nextTurn = () => {
        let answer = null;
        const random = getRandomIntInclusive(1, ide.score[ide.current]);
        if (ide.current === 1) {
          answer = prompt(`Сколько шариков из ${ide.score[1]} ты хочешь разыграть?`);
          console.log('bot, user: ', random, +answer);
          if (hasFaultsOrExit(answer)) {
            return;
          }
          if (+answer > ide.score[1] || +answer <= 0) {
            alert(`Ошибка! Ты можешь разыграть ${ide.score[1]} шариков. Попробуйте еще раз`);
            return nextTurn();
          }
        } else {
          answer = confirm(`Отгадайте: ${evenOdd.join(' или ')}?`);
          console.log('bot, user: ', random, +answer);
          // проверка на четность
        }
        hasExit();
        if (+answer === random) {
          alert(`Ничья!`);
          return nextTurn();
        } else if (+answer !== random) {
          ide.changeScore(answer);
          ide.showResult('Вы победили');
        } else {
          ide.changeScore(-(+answer));
          ide.showResult('Вы проиграли');
        }
      };

      const wantPlayAgain = () => {
        if (confirm(`Хотите сыграть еще?`)) {
          ide.resetScore();
          ide.current = +window.rpc();
        } else {
          ide.goExit = true;
        }
      };

      const hasFaultsOrExit = (answer) => {
        if (answer === null) {
          wantPlayAgain();
          return true;
        } else if (isNaN(+answer) && !isFinite(+answer) || answer.length === 0) {
          return !nextTurn();
        }
        return false;
      };

      const hasExit = () => {
        const [x, y] = ide.score;
        if (!x || !y) {
          const message = `Игра окончена. ${x === 0 ? 'Вы победили!' : 'Вы проиграли!' +
            `\n${ide.score[0]} - бот` +
            `\n${ide.score[1]} - игрок`} `;
          alert(message);
          wantPlayAgain();
        }
      };
      do {
        if (ide.current < 0) {
          ide.current = +window.rpc()();
          console.log('ide.score: ', ide.score);
        } else {
          ide.switchUser();
        }
        nextTurn();
      } while (!ide.goExit);
    };
  };
  return game;
})();