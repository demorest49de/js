'use strict';

window.marbles = (() => {

  const game = () => {
    const score = {
      player: 5,
      bot: 5,
    };

    const firstMove = {
      player: false,
      firstMoveRPC: true,
    };

    const evenodd = ['четное', 'нечетное'];

    const gameRPC = window.rpc();
    const isNumber = (num) => {
      if (num === '') return undefined;
      if (!Number.isNaN(parseFloat(num)) && isFinite(num)) {
        return +num;
      }
      return null;
    };

    const getRandomIntInclusive = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const parseResponse = (str) => {
      if (str === null) return null;
      else if (str === '') return undefined;
      const result = evenodd.indexOf(evenodd.find((item) => item.startsWith(str)));
      return result === -1 ? undefined : result;
    };

    const checkAboveZero = () => {
      score.bot = score.bot < 0 ? 0 : score.bot;
      score.player = score.player < 0 ? 0 : score.player;
      score.player = score.player < 0 ? 0 : score.player;
    };

    return function start() {
      if (!score.bot || !score.player) {
        alert(`Игра окончена! ${!score.bot ? 'Вы победили' : 'Вы проиграли'}`);
        const needExit = confirm(`Сыграем еще?`);
        if (needExit) {
          return;
        } else {
          score.player = 5;//set initial value
          score.bot = 5;
          firstMove.firstMoveRPC = true;
        }
      }
      const doStart = () => {

        const badAnswer = (player) => {
          switch (true) {
            case player === null:
              return;
            case player === undefined:
              return botGuess();
          }
        };

        const botGuess = () => {
          const botAnswer = getRandomIntInclusive(0, 1);
          console.log(': ', botAnswer);
          const player = isNumber(prompt(`Сколько шариков из ${score.player} вы хотите разыграть?`));
          console.log(': ', player);

          if (player && player <= score.player) {
            const playerAnswer = !!(player % 2);
            console.log('pla, bot: ', !!playerAnswer, !!botAnswer);
            if (botAnswer === +playerAnswer) {
              score.player -= player;
              score.bot += player;
              checkAboveZero();
              alert(`Ты проиграл! У тебя ${score.player} шариков`);
              console.log(': ', score);
              return start();
            } else {
              score.player += player;
              score.bot -= player;
              checkAboveZero();
              alert(`Ты выиграл! У тебя ${score.player} шариков`);
              console.log(': ', score);
              return start();
            }
          } else if (!player) {
            badAnswer(player);
          }
        };

        const playerGuess = () => {

          const botAnswer = getRandomIntInclusive(1, score.bot);
          console.log('Компьютер загадывает число: ', botAnswer);
          console.log('Шарики игрока: ', score.player);
          console.log('Шарики компьютера: ', score.bot);
          let userAnswer = parseResponse(prompt(`Отгадайте: ${evenodd.join(' или ')}?`));
          // console.log('!!(userAnswer + 2) % 2: ', !!((userAnswer + 2) % 2));
          // console.log('!!botAnswer % 2: ', !!(botAnswer % 2));

          switch (true) {
            case userAnswer === null:
              return;
            case userAnswer === undefined:
              return playerGuess();
            case (!!(botAnswer % 2) == !!((userAnswer + 2) % 2)):
              score.player += botAnswer;
              score.bot -= botAnswer;
              checkAboveZero();
              alert(`Ты выиграл! У тебя осталось ${score.player} шариков`);
              return start();
            case (!(botAnswer % 2) == !((userAnswer + 2) % 2)):
              score.player += botAnswer;
              score.bot -= botAnswer;
              checkAboveZero();
              alert(`Ты выиграл! У тебя осталось ${score.player} шариков`);
              return start();
            default:
              score.player -= botAnswer;
              score.bot += botAnswer;
              checkAboveZero();
              alert(`Ты проиграл! У тебя осталось ${score.player} шариков`);
              return start();
          }
        };

        if (firstMove.firstMoveRPC) {
          firstMove.player = !!(gameRPC()) ? true : false;
          firstMove.firstMoveRPC = false;
        }

        if (firstMove.player) {
          firstMove.player = false;
          botGuess();
        } else {
          firstMove.player = true;
          playerGuess();
        }

      };

      return doStart();
    };
  };
  return game;
})();
