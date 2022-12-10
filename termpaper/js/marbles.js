'use strict';

window.marbles = (() => {
  const game = () => {
    const ide = {
      goExit: false,
      minValue: 0,
      maxValue: 10,
      current: -1,
      bot: 5,
      player: 5,
      score: [5, 5],
      switchUser() {
        this.current = +!this.current;
      },
      resetScore() {
        this.score = [5, 5];
      },
      showResult(message) {
        alert(`${message}! 
        \n${ide.bot} - бот
        \n${ide.player} - игрок`);
      },
      changeScore(value) {
        if (value > 0) {
          ide.bot -= value;
          ide.player += value;
        } else {
          ide.bot += Math.abs(value);
          ide.player -= Math.abs(value);
        }
        checkScoreConstraints(ide.score);
      },
    };

    const evenOdd = ['четное', 'нечетное'];
    const checkScoreConstraints = (score) => {
      for (let i = 0; i < score.length; i++) {
        ide.score[i] = ide.score[i] < ide.minValue ? ide.minValue
          : ide.score[i] > ide.maxValue ? ide.maxValue : ide.score[i];
      }
    };

    // const isNumber = (num) => {
    //   if (num === null) return null;
    //   if (!Number.isNaN(parseFloat(num)) && isFinite(num)) {
    //     return +num;
    //   }
    //   return undefined;
    // };

    const getRandomIntInclusive = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    return function start() {

      const nextTurn = () => {
        let answer = null;
        let random = null;
        if (ide.current === 1) {
          random = getRandomIntInclusive(1, ide.score[ide.current]);
          answer = prompt(`Сколько шариков из ${ide.player} ты хочешь разыграть?`);
          console.log('bot, user: ', random, +answer);
          if (hasFaultsOrExit(answer)) {
            return;
          }
          if (+answer > ide.player || +answer <= 0) {
            alert(`Ошибка! Ты можешь разыграть ${ide.player} шариков. Попробуйте еще раз`);
            return nextTurn();
          }
        } else {
          random = getRandomIntInclusive(0, 1);
          answer = confirm(`Отгадайте: ${evenOdd.join(' или ')}?`);
          console.log('bot, user: ', random, +answer);
        }
        if (+answer === random) {
          alert(`Ничья!`)
        } else if (+answer !== random) {
          ide.changeScore(+answer);
          ide.showResult('Вы победили');
        } else {
          ide.changeScore(-(+answer));
          ide.showResult('Вы проиграли');
        }
        hasExit();
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
            `\n${ide.bot} - бот` +
            `\n${ide.player} - игрок`} `;
          alert(message);
          wantPlayAgain();
        }
      };
      do {
        if (ide.current < 0) {
          // ide.current = +window.rpc()();
          ide.current = 1;
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