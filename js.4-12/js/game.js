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

    set lang(language) {
      console.log(': ', language);
      this.lang = this.langHandler(language) ?
        this.viewLangENG : this.viewLangRUS;
    },

    get lang() {
      return this.lang;
    },

    set figures(language) {
      console.log(': ', language);
      this.figures = this.langHandler(language) ?
        this.FIGURES_ENG : this.FIGURES_RUS;
    },

    get figures() {
      return this.figures;
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
    this.lang = languageSettings;
    console.log(': ', this.lang);
    this.figures = languageSettings;
    console.log(': ', this.lang);

    const parseResponse = (str) => {
      if (str === null) return null;
      else if (str === '') return undefined;
      const result = this.figures.indexOf(this.figures.find((item) => item.startsWith(str)));
      return result === -1 ? undefined : result;
    };

    const exitMessage = () => {
      alert(`${this.lang.result}:\n${this.lang.computer}` +
        ` - ${this.result.computer},\n${this.lang.you} - ${this.result.player}`);
    };

    const resultGameMessage = ([lang, figures, computer, user, gameResult]) => {
      alert(`${lang.computer}: ${figures[computer]}\n` +
        `${lang.you}: ${figures[user]}\n${gameResult}`);
    };

    return function start() {
      const restart = () => {
        const computer = getRandomIntInclusive(0, 2);
        console.log('computer: ', computer);

        let user = parseResponse(prompt(`${this.figures.join(', ')}?`));
        console.log('user: ', user);

        switch (true) {
          case user === null:
            return exitMessage();

          case user === undefined:
            return start();

          case computer === user:
            resultGameMessage([this.lang, this.figures, computer, user, this.lang.draw]);
            return start();

          case computer === ((user + 1) % this.figures.length):
            resultGameMessage([this.lang, this.figures, computer, user, this.lang.youWin]);
            result.player += 1;

            user = confirm(`${this.lang.more}?`);
            console.log('user: ', user);
            return user ? start() : exitMessage();

          default:
            resultGameMessage([this.lang, this.figures, computer, user, this.lang.youLose]);
            result.computer += 1;
            user = confirm(`${this.lang.more}?`);
            return user ? start() : exitMessage();
        }
      };

      restart();
    };
  };

  return game;
})();
