'use strict';

window.marbles = (() => {
  const game = () => {
    const ide = {
      minValue: 0,
      maxValue: 10,
      current: 0,
      bot: 5,
      player: 5,
      score: [this.bot, this.player],
      switchUser() {
        this.current = +!this.current;
      },
      resetScore() {
        this.score = [5, 5];
      }
    };

    const evenodd = ['четное', 'нечетное'];

    const isNumber = (num) => {
      if (num === null) return null;
      if (!Number.isNaN(parseFloat(num)) && isFinite(num)) {
        return +num;
      }
      return undefined;
    };

    const getRandomIntInclusive = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const addRemoveScore = (value) => {
      if (value > 0) {
        ide.bot -= value;
        ide.player += value;
      } else {
        ide.bot += Math.abs(value);
        ide.player -= Math.abs(value);
      }
      checkConstraints(ide.score);
    };

    const checkConstraints = (score) => {
      for (let i = 0; i < score.length; i++) {
        ide.score[i] = ide.score[i] < ide.minValue ? ide.minValue
          : ide.score[i] > ide.maxValue ? ide.maxValue : ide.score[i];
      }
    };

    return function start() {
      const nextTurn = () => {
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

      const hasExit = () => {
        const [x, y] = ide.score;
        if (!x || !y) {
          const message = `Игра окончена. ${x === 0 ? 'Вы победили!' : 'Вы проиграли!' +
            `\n${ide.bot} - бот` +
            `\n${ide.player} - игрок`} `;
          alert(message);
          if (confirm(`Хотите сыграть еще?`)) {
            ide.resetScore();
            return false;
          } else {
            return true;
          }
        }

        do {
          ide.switchUser();
          nextTurn();
        } while (!hasExit());
      };
    };
  };
  return game;
})();