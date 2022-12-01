'use strict';

window.marbles = (() => {
  const game = () => {
    const score = {
      player: 5,
      bot: 5,
    };

    const evenodd = ['четное', 'нечетное'];
    const gameRPC = window.rpc();
    const isNumber = (num) => {
      if (num === '') return undefined;
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

    const parseString = (str) => {
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

    const addRemoveScore = (value) => {
      if (value > 0) {
        score.player += value;
        score.bot -= value;
      } else {
        score.player -= Math.abs(value);
        score.bot += Math.abs(value);
      }
    };

    return function start() {

      const playAgain = () => {
        const wantMore = confirm(`Сыграем еще?`);
        if (wantMore) {
          score.player = 5;
          score.bot = 5;
          return start();
        }
      };

      if (!score.bot || !score.player) {
        alert(`Игра окончена! ${!score.bot ? 'Вы победили' : 'Вы проиграли'}`);
        return playAgain();
      }

      const doStart = () => {
        const badAnswer = ([gamerValue, gamerId]) => {
          switch (true) {
            case gamerValue === null:
              return;
            case gamerValue === undefined:
              if (gamerId === 1) {
                return botGuess();
              } else if (gamerId === 2) {
                return playerGuess();
              }
          }
        };

        const botGuess = () => {
          const botAnswer = getRandomIntInclusive(0, 1);
          console.log(': ', botAnswer);
          const player = isNumber(prompt(`Сколько шариков из ${score.player} вы хотите разыграть?`));
          console.log('player: ', player);
          if (player === null) {
            return playAgain();
          }
          if (!player) {
            return badAnswer([player, 1]);
          }
          if (player > score.player || player <= 0) {
            alert(`Ошибка! Вы можете разыграть ${score.player} шариков. Попробуйте еще раз`);
            return botGuess();
          }

          if (player && player <= score.player) {
            const playerAnswer = !!(player % 2);

            if (botAnswer === +playerAnswer) {
              addRemoveScore(-player);
              checkAboveZero();
              alert(`Ты проиграл! У тебя ${score.player} шариков`);
              console.log(': ', score);
              return start();
            } else {
              addRemoveScore(player);
              checkAboveZero();
              alert(`Ты выиграл! У тебя ${score.player} шариков`);
              console.log(': ', score);
              return start();
            }
          } else if (!player) {
            return badAnswer([player, 1]);
          }
        };

        const playerGuess = () => {

          const botAnswer = getRandomIntInclusive(1, score.bot);
          console.log('Компьютер загадывает число: ', botAnswer);
          console.log('Шарики игрока: ', score.player);
          console.log('Шарики компьютера: ', score.bot);
          let userAnswer = parseString(prompt(`Отгадайте: ${evenodd.join(' или ')}?`));

          switch (true) {
            case !userAnswer:
              return badAnswer([userAnswer, 2]);
            case (!!(botAnswer % 2) == !!((userAnswer + 2) % 2)):
              addRemoveScore(botAnswer);
              checkAboveZero();
              alert(`Ты выиграл! У тебя осталось ${score.player} шариков`);
              return start();
            case (!(botAnswer % 2) == !((userAnswer + 2) % 2)):
              addRemoveScore(botAnswer);
              checkAboveZero();
              alert(`Ты выиграл! У тебя осталось ${score.player} шариков`);
              return start();
            default:
              addRemoveScore(-botAnswer);
              checkAboveZero();
              alert(`Ты проиграл! У тебя осталось ${score.player} шариков`);
              return start();
          }
        };

        const result = gameRPC();
        if (result === null) {
          playAgain();
          return;
        } else if (result) {
          botGuess();
        } else {
          playerGuess();
        }
      };
      return doStart();
    };
  };
  return game;
})();
