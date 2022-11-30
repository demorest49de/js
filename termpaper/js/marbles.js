'use strict';

window.marbles = (() => {

  const game = () => {
    const score = {
      player: 5,
      bot: 5,
    };

    const guessing = {
      bot: false,
    };

    const evenodd = ['четное', 'нечетное'];

    const game = window.rpc();
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
    }

    return function start() {
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
              alert(`Ты проиграл! У тебя ${score.player} шариков`);
              console.log(': ', score);
            } else {
              score.player += player;
              score.bot -= player;
              alert(`Ты выиграл! У тебя ${score.player} шариков`);
              console.log(': ', score);
            }
          } else if (!player) {
            badAnswer(player);
          }
        };

        const playerGuess = () => {
          if (!score.bot || !score.player) {
            alert(`Игра окончена! ${!score.bot ? 'Вы победили' : 'Вы проиграли'}`);
            return;
          }

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

        // const isPlayerFirst = game();
        const isPlayerFirst = false;
        if (isPlayerFirst) {
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
