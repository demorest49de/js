'use strict';

window.marbles = (() => {

  const game = () => {
    const ide = {
      bot: 'первый',
      user: 'второй',
      score: [5, 5],
      current: 0,
      switchUser() {
        this.current = +!this.current;
      },
      showResult(){
        alert(`Вы победили! 
        \n${ide.score[0]} - бот
        \n${ide.score[1]} - игрок`);
      },
      changeScore(value){
        if (value > 0) {
          this.score[1] += value;
          this.score[0] -= value;
        } else {
          this.score[0] -= Math.abs(value);
          this.score[1] += Math.abs(value);
        }
      }
    };

    const evenOdd = ['четное', 'нечетное'];

    const getRandomIntInclusive = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    return function start() {
      ide.switchUser();

      const askForBalls = (balls) => {
        const answer = prompt(`Сколько шариков из ${balls} ты хочешь разыграть?`);
        checkFaultsOrExit();
        if (answer > ide.score[ide.current] || answer <= 0) {
          alert(`Ошибка! Ты можешь разыграть ${ide.score[ide.current]} шариков. Попробуйте еще раз`);
          return restart();
        }
        const random = getRandomIntInclusive(1, ide.score[ide.current]);
        if(+answer === random){

          ide.showResult();
        }
      };

      const askForParity = () => {
        const answer = confirm(`Угадайте ${evenOdd.join(', ')} ?`);
        checkFaultsOrExit();
      };

      const checkFaultsOrExit = (answer) => {
        if (answer === null) {
          return confirm('Хотите сыграть еще?') ? restart() : null;
        }
        if (isNaN(+answer) && !isFinite(+answer) || answer.length === 0) {
          return restart();
        }
      };

      //заменить на while
      const restart = () => {
        ide.current ? askForBalls(ide.score[ide.current])
          : askForParity();
      };
      restart();
    };
  };
  return game;
})();