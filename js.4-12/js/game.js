'use strict';

window.rockPaperScissors = (() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const viewLangRUS = {
    'computer': 'Компьютер',
    'you': 'Вы',
    'youWin': 'Вы выиграли',
    'youLose': 'Вы проиграли',
    'draw': 'Ничья',
    'more': 'Еще',
    'result': 'Результат',
  };

  const viewLangENG = {
    'computer': 'Computer',
    'you': 'You',
    'youWin': 'You win',
    'youLose': 'You lose',
    'draw': 'Draw',
    'more': 'more',
    'result': 'Result',
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

    const language = languageSettings.toUpperCase();
    const lang = language === 'EN' || language === 'ENG' ?
      FIGURES_ENG : FIGURES_RUS;

    const viewLang = language === 'EN' || language === 'ENG' ?
      viewLangENG : viewLangRUS;

    const parseResponse = (str) => {
      if (str === null) return null;
      else if (str === '') return undefined;
      const result = lang.indexOf(lang.find((item) => item.startsWith(str)));

      return result === -1 ? undefined : result;
    };

    const exitMessage = () => {
      alert(`${viewLang.result}:\n${viewLang.computer}` +
        ` - ${result.computer},\n${viewLang.you} - ${result.player}`);
    };

    return function start() {
      const restart = () => {
        const computer = getRandomIntInclusive(0, 2);
        console.log('computer: ', computer);

        let user = parseResponse(prompt(`${lang.join(', ')}?`));
        console.log('user: ', user);

        switch (true) {
          case user === null:
            return exitMessage();

          case user === undefined:
            return start();

          case computer === user:
            alert(`${viewLang.computer}: ${lang[computer]}\n` +
              `${viewLang.you}: ${lang[user]}\n${viewLang.draw}`);
            return start();

          case computer === ((user + 1) % lang.length):

            alert(`${viewLang.computer}: ${lang[computer]}\n` +
              `${viewLang.you}: ${lang[user]}\n${viewLang.youWin}`);
            result.player += 1;

            user = confirm('Еще?');
            console.log('user: ', user);
            return user ? start() : exitMessage();

          default:
            alert(`${viewLang.computer}: ${lang[computer]}\n` +
              `${viewLang.you}: ${lang[user]}\n${viewLang.youLose}`);
            result.computer += 1;
            user = confirm(`${viewLang.more}?`);
            return user ? start() : exitMessage();
        }
      };

      restart();
    };
  };

  return game;
})();
