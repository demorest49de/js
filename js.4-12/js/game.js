'use strict';

window.rockPaperScissors = (() => {

  const view = {
    viewLangRUS: {
      'computer': 'Компьютер',
      'you': 'Вы',
      'youWin': 'Вы выиграли',
      'youLose': 'Вы проиграли',
      'draw': 'Ничья',
      'more': 'Еще',
      'result': 'Результат',
    },
    viewLangENG: {
      'computer': 'Computer',
      'you': 'You',
      'youWin': 'You win',
      'youLose': 'You lose',
      'draw': 'Draw',
      'more': 'more',
      'result': 'Result',
    },

    FIGURES_ENG: ['rock', 'scissors', 'paper'],
    FIGURES_RUS: ['камень', 'ножницы', 'бумага'],

    langHandler(language) {
      language = language.toUpperCase();
      return language === 'EN' || language === 'ENG';
    },

    currLang: {},
    currFigures: [],
    set lang(language) {
      this.currLang = this.langHandler(language) ?
        this.viewLangENG : this.viewLangRUS;
    },

    get lang() {
      return this.currLang;
    },

    set figures(language) {

      this.currFigures = this.langHandler(language) ?
        this.FIGURES_ENG : this.FIGURES_RUS;
    },

    get figures() {
      return this.currFigures;
    },
  };

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const game = (languageSettings) => {
    const result = {
      player: 0,
      computer: 0,
    };
    view.lang = languageSettings;
    view.figures = languageSettings;
    const parseResponse = (str) => {
      if (str === null) return null;
      else if (str === '') return undefined;
      const result = view.figures.indexOf(view.figures.find((item) => item.startsWith(str)));
      return result === -1 ? undefined : result;
    };

    const exitMessage = () => {
      alert(`${view.lang.result}:\n${view.lang.computer}` +
        ` - ${result.computer},\n${view.lang.you} - ${result.player}`);
    };

    const resultGameMessage = ([lang, figures, computer, user, gameResult]) => {
      alert(`${lang.computer}: ${figures[computer]}\n` +
        `${lang.you}: ${figures[user]}\n${gameResult}`);
    };

    return function start() {
      const restart = () => {
        const computer = getRandomIntInclusive(0, 2);
        let user = parseResponse(prompt(`${view.figures.join(', ')}?`));
        switch (true) {
          case user === null:
            return exitMessage();
          case user === undefined:
            return start();
          case computer === user:
            resultGameMessage([view.lang, view.figures, computer, user, view.lang.draw]);
            return start();
          case computer === ((user + 1) % view.figures.length):
            resultGameMessage([view.lang, view.figures, computer, user, view.lang.youWin]);
            result.player += 1;
            user = confirm(`${view.lang.more}?`);
            return user ? start() : exitMessage();
          default:
            resultGameMessage([view.lang, view.figures, computer, user, view.lang.youLose]);
            result.computer += 1;
            user = confirm(`${view.lang.more}?`);
            return user ? start() : exitMessage();
        }
      };
      restart();
    };
  };
  return game;
})();
