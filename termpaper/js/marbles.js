'use strict';

window.marbles = (() => {
  const game = () => {
    const score = {
      initialPlayer: 5,
      initialBot: 5,
      player: 1,
      bot: 9,

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
      resetScoreValues() {
        this.player = this.initialPlayer;
        this.bot = this.initialBot;
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

    const parseAnswer = (str) => {
      return str ? 0 : 1;
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
      const maxGamerPoints = score.initialPlayer + score.initialBot;
      score.playerScore = score.playerScore > maxGamerPoints ? maxGamerPoints : score.playerScore;
      score.botScore = score.botScore > maxGamerPoints ? maxGamerPoints : score.botScore;
    };

    return function start() {

      const isNeedExit = () => {
        if (!score.botScore || !score.playerScore) {
          alert(`Игра окончена! ${!score.botScore ? 'Ты победил!' : 'Ты проиграл!'}`);
          return true;
        }
        return false;
      };
      const gameRPC = window.rpc();

      const doStart = (firstMove) => {
        const chooseFirstMove = () => {
          if (firstMove === null) {
            return;
          } else if (firstMove) {
            return playerGuess();
          } else if (!firstMove) {
            return botGuess();
          }
        };

        const playAgain = () => {
          if (confirm(`Сыграем еще?`)) {
            score.resetScoreValues();
            // return doStart(gameRPC());
            return doStart(false);
          }
        };

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
          console.log('Бот загадывает число: ', evenodd[botAnswer]);
          const message = score.playerScore === 1 ? `Вы хотите разыграть последний шар?`
            : `Сколько шариков из ${score.playerScore} ты хочешь разыграть?`;
          const result = score.playerScore === 1 ? confirm(message) : prompt(message);
          let player = null;

          if (typeof (result) === 'boolean') {
            player = result ? 1 : null;
          } else  {
            player = isNumber(result);
          }

          console.log('Шарики игрока: ', score.playerScore);
          console.log('Шарики компьютера: ', score.botScore);
          if (!player) {
            return exitHandler([player, 1]);
          }
          if (player > score.playerScore || player <= 0) {
            alert(`Ошибка! Ты можешь разыграть ${score.player} шариков. Попробуйте еще раз`);
            return botGuess();
          }
          const playerAnswer = !!(player % 2);
          if (botAnswer === +playerAnswer) {
            addRemoveScore(-player);
            alert(`Ты проиграл! У тебя ${score.player} шариков`);
          } else {
            addRemoveScore(player);
            alert(`Ты выиграл! У тебя ${score.player} шариков`);
          }
          return isNeedExit() ? playAgain() : playerGuess();
        };

        const playerGuess = () => {
          const botAnswer = getRandomIntInclusive(1, score.botScore);
          console.log('Компьютер загадывает число: ', botAnswer);
          console.log('Шарики игрока: ', score.playerScore);
          console.log('Шарики компьютера: ', score.botScore);
          let userAnswer = parseAnswer(confirm(`Отгадайте: ${evenodd.join(' или ')}?`));
          console.log('Игрок выбирает : ', evenodd[userAnswer]);
          if (!!(botAnswer % 2) === !!((userAnswer + 2) % 2)) {
            addRemoveScore(botAnswer);
            alert(`Ты выиграл! У тебя осталось ${score.player} шариков`);
          } else {
            addRemoveScore(-botAnswer);
            alert(`Ты проиграл! У тебя осталось ${score.player} шариков`);
          }
          return isNeedExit() ? playAgain() : botGuess();
        };

        return chooseFirstMove(firstMove);
      };
      return doStart(false);
      // return doStart(gameRPC());
    };
  };
  return game;
})();