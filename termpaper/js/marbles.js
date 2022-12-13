'use strict';

window.marbles = (() => {
  const game = () => {
    const ide = {
      goExit: false,
      skipOneTurn: false,
      minValue: 0,
      maxValue: 10,
      current: -1,
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
          ide.score[0] += Math.abs(value);
          ide.score[1] -= Math.abs(value);
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

    const getRandomIntInclusive = () => {
      const min = Math.ceil(ide.current === 1 ? 1 : 1);
      const max = Math.floor(ide.current === 1 ? 2 : ide.score[ide.current]);
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    return function start() {

      const nextTurn = () => {
        const handleResult = (answer, random, points = 0) => {
          if (answer === random) {
            ide.changeScore(points);
            ide.showResult(`Вы победили. Вы выиграли ${points} шариков`);
          } else {
            ide.changeScore(-points);
            ide.showResult(`Вы проиграли Вы проиграли ${points} шариков`);
          }
        };

        let answer = null;
        const random = getRandomIntInclusive();
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
          handleResult(+!(answer % 2), +!!(random % 2), +answer);
        } else {
          answer = confirm(`Отгадайте: ${evenOdd.join(' или ')}?`);
          console.log('bot, user: ', random, +answer);
          handleResult(+answer, +!(random % 2), random);
        }
        hasExit();
      };

      const wantPlayAgain = () => {
        if (confirm(`Хотите сыграть еще?`)) {
          ide.resetScore();
          ide.current = +window.rpc()();
          ide.skipOneTurn = true;
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
        switch (true) {
          case ide.current < 0:
            ide.current = +window.rpc()();
            console.log('ide.score: ', ide.score);
            break;
          case ide.skipOneTurn:
            ide.skipOneTurn = false;
            break;
          default:
            ide.switchUser();
            break;
        }
        // if (ide.current < 0) {
        //   ide.current = +window.rpc()();
        //   console.log('ide.score: ', ide.score);
        // } else if (ide.skipOneTurn) {
        //   ide.skipOneTurn = false;
        // } else if (!ide.skipOneTurn) {
        //   ide.switchUser();
        // }
        nextTurn();
      } while (!ide.goExit);
    };
  };
  return game;
})();