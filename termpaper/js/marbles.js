'use strict';

window.marbles = (() => {
  const game = () => {
    const score = {
        player: 5,
        bot: 5,

        get playerScore() {
          return this.player;
        },
        get botScore() {
          return this.bot;
        },
        set playerScore(value) {
          this.player = value;
        },
        set botScore(value) {
          this.bot = value;
        },
        resetValues() {
          this.player = 5;
          this.bot = 5;
        }
      }
    ;

    const evenodd = ['четное', 'нечетное'];
    const gameRPC = window.rpc();

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

    const parseString = (str) => {
      if (str === null) return null;
      if (str === '') return undefined;
      const result = evenodd.indexOf(evenodd.find((item) => item.startsWith(str)));
      return result === -1 ? undefined : result;
    };

    const checkAboveZero = () => {
      score.bot = score.bot < 0 ? 0 : score.bot;
      score.playerScore = score.playerScore < 0 ? 0 : score.playerScore;
    };

    const addRemoveScore = (value) => {
      if (value > 0) {
        score.playerScore += value;
        score.botScore -= value;
      } else {
        score.playerScore -= Math.abs(value);
        score.botScore += Math.abs(value);
      }
    };

    return function start() {

      const playAgain = () => {
        const wantMore = confirm(`Сыграем еще?`);
        if (wantMore) {
          score.resetValues();
          return start();
        }
      };

      const hasExit = () => {
        if (!score.bot || !score.player) {
          alert(`Игра окончена! ${!score.bot ? 'Вы победили' : 'Вы проиграли'}`);
          return playAgain();
        }
      };

      hasExit();

      const doStart = () => {

        const hasExit = ([gamer, gamerId]) => {
          switch (true) {
            case gamer === null:
              return playAgain();
            case gamer === undefined:
              if (gamerId === 1) {
                return botGuess();
              } else if (gamerId === 2) {
                return playerGuess();
              }
          }
        };

        const botGuess = () => {
          const botAnswer = getRandomIntInclusive(0, 1);
          console.log('botAnswer: ', botAnswer);
          const player = isNumber(prompt(`Сколько шариков из ${score.player} вы хотите разыграть?`));
          console.log('player: ', player);
          if (!player) {
            return hasExit([player, 1]);
          }
          if (player > score.player || player <= 0) {
            alert(`Ошибка! Вы можете разыграть ${score.player} шариков. Попробуйте еще раз`);
            return botGuess();
          }

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

          // return playerGuess();
        };

        const playerGuess = () => {

          const botAnswer = getRandomIntInclusive(1, score.botScore);

          console.log('Компьютер загадывает число: ', botAnswer);
          console.log('Шарики игрока: ', score.playerScore);
          console.log('Шарики компьютера: ', score.botScore);

          let userAnswer = parseString(prompt(`Отгадайте: ${evenodd.join(' или ')}?`));
          console.log(': ', userAnswer);

          if (!userAnswer) {
            return hasExit([userAnswer, 2]);
          }
          switch (true) {
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

        botGuess(); // dlja testa;

        // const result = gameRPC();
        // if (result === null) {
        //   playAgain();
        //   return;
        // } else if (result) {
        //   botGuess();
        // } else {
        //   playerGuess();
        // }
      };
      return doStart();
    };
  };
  return game;
})();
