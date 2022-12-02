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

    const addRemoveScore = (value) => {
      if (value > 0) {
        score.playerScore += value;
        score.botScore -= value;
      } else {
        score.playerScore -= Math.abs(value);
        score.botScore += Math.abs(value);
      }
      score.playerScore = score.playerScore < 0 ? 0 : score.playerScore;
      score.botScore = score.botScore < 0 ? 0 : score.botScore;
    };

    const firstMove = {byPlayer: false};
    return function start() {

      const playAgain = () => {
        const wantMore = confirm(`Сыграем еще?`);
        if (wantMore) {
          score.resetValues();
          firstMove.byPlayer = null;
          return start();
        }
      };

      const isNeedExit = () => {
        if (!score.bot || !score.player) {
          alert(`Игра окончена! ${!score.bot ? 'Вы победили' : 'Вы проиграли'}`);
          return playAgain();
        }
      };

      isNeedExit();

      const doStart = () => {

        const exitHandler = ([gamer, gamerId]) => {
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
            return exitHandler([player, 1]);
          }
          if (player > score.player || player <= 0) {
            alert(`Ошибка! Вы можете разыграть ${score.player} шариков. Попробуйте еще раз`);
            return botGuess();
          }

          const playerAnswer = !!(player % 2);
          if (botAnswer === +playerAnswer) {
            addRemoveScore(-player);
            alert(`Ты проиграл! У тебя ${score.player} шариков`);
            console.log(': ', score);
            return playerGuess();
          } else {
            addRemoveScore(player);
            alert(`Ты выиграл! У тебя ${score.player} шариков`);
            console.log(': ', score);
            return playerGuess();
          }
        };

        const playerGuess = () => {

          const botAnswer = getRandomIntInclusive(1, score.botScore);

          console.log('Компьютер загадывает число: ', botAnswer);
          console.log('Шарики игрока: ', score.playerScore);
          console.log('Шарики компьютера: ', score.botScore);

          let userAnswer = parseString(prompt(`Отгадайте: ${evenodd.join(' или ')}?`));
          console.log(': ', userAnswer);

          if (userAnswer !== 0 && !userAnswer) {
            return exitHandler([userAnswer, 2]);
          }
          switch (true) {
            case (!!(botAnswer % 2) == !!((userAnswer + 2) % 2)):
              addRemoveScore(botAnswer);
              alert(`Ты выиграл! У тебя осталось ${score.player} шариков`);
              return botGuess();
            case (!(botAnswer % 2) == !((userAnswer + 2) % 2)):
              addRemoveScore(botAnswer);
              alert(`Ты выиграл! У тебя осталось ${score.player} шариков`);
              return botGuess();
            default:
              addRemoveScore(-botAnswer);
              alert(`Ты проиграл! У тебя осталось ${score.player} шариков`);
              return botGuess();
          }
        };

        firstMove.byPlayer ? botGuess() : playerGuess();
      };
      if (gameRPC()) firstMove.byPlayer = true;
      return doStart();
    };
  };
  return game;
})();
