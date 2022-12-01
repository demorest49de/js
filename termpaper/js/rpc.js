'use strict';

window.rpc = (() => {
  const view = {
    VIEWLANG: {
      'computer': 'Компьютер',
      'you': 'Вы',
      'youWin': 'Ты победил... начинаешь первым',
      'youLose': 'Ты проиграл... я начинаю первым',
      'draw': 'Ничья... продолжаем',
    },

    FIGURES: ['камень', 'ножницы', 'бумага'],

    get lang() {
      return this.VIEWLANG;
    },

    get figures() {
      return this.FIGURES;
    },
  };


  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const game = () => {
    const lang = view.lang;
    const figures = view.figures;

    const parseResponse = (str) => {
      if (str === null) return null;
      else if (str === '') return undefined;
      const result = figures.indexOf(
          figures.find((item) => item.startsWith(str)));
      return result === -1 ? undefined : result;
    };

    const resultGameMessage = ([computer, user, gameResult]) => {
      alert(`${lang.computer}: ${figures[computer]}\n` +
        `${lang.you}: ${figures[user]}\n${gameResult}`);
    };

    return function start() {
      const doStart = () => {
        const computer = getRandomIntInclusive(0, 2);
        console.log(': ', figures[computer]);
        const user = parseResponse(prompt(
            `${figures.join(', ')}? Тот кто выиграет,
           тот первый  загадывает число`));
        switch (true) {
          case user === null:
            return null;
          case user === undefined:
            alert(`введите ${figures.join(' или ')} ...`);
            return start();

          case computer === user:
            resultGameMessage([computer, user, lang.draw]);

            return start();
          case computer === ((user + 1) % figures.length):
            resultGameMessage([computer, user, lang.youWin]);
            return true;
          default:
            resultGameMessage([computer, user, lang.youLose]);
            return false;
        }
      };
      return doStart();
    };
  };
  return game;
})();
