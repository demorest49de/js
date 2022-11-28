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

  const getFigure = (lang) => {
    const random = getRandomIntInclusive(0, lang.length - 1);
    return lang[random];
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
      return lang.find((item) => item.startsWith(str));
    };

    const getRules = (lang) => {
      const [rock, scissors, paper] = lang;

      const rules = new Map();

      rules.set([rock, scissors], {hasWin: true});
      rules.set([rock, paper], {hasWin: false});

      rules.set([paper, rock], {hasWin: true});
      rules.set([paper, scissors], {hasWin: false});

      rules.set([scissors, paper], {hasWin: true});
      rules.set([scissors, rock], {hasWin: false});
      rules.set([null], {hasWin: null});
      return rules;
    };

    const getWinner = (response, figure) => {
      response = response.toLowerCase().trim();

      const rules = getRules(lang);
      const result = response !== figure ? [response, figure] : [null];

      for (const [ruleArray, value] of rules) {
        if (JSON.stringify(ruleArray) === JSON.stringify(result)) {
          return value;
        }
      }
    };

    const exitMessage = () => {
      alert(`${viewLang.result}:\n${viewLang.computer}` +
        ` - ${result.computer},\n${viewLang.you} - ${result.player}`);
    };

    return function start() {
      const restart = () => {
        const figure = getFigure(lang);
        console.log(': ', figure);

        let response = parseResponse(prompt(`${lang.join(', ')}?`));
        console.log(': ', response);

        switch (true) {
          case response === null:
            return exitMessage();

          case response === undefined:
            return start();

          case (getWinner(response, figure).hasWin === null):
            alert(`${viewLang.computer}: ${figure}\n` +
              `${viewLang.you}: ${response}\n${viewLang.draw}`);
            return start();

          case (!getWinner(response, figure).hasWin):
            alert(`${viewLang.computer}: ${figure}\n` +
              `${viewLang.you}: ${response}\n${viewLang.youLose}`);
            result.computer += 1;
            console.log('result.computer: ', result.computer);
            response = prompt(`${viewLang.more}?`);
            return response !== null ? start() : exitMessage();

          case (getWinner(response, figure).hasWin):
            alert(`${viewLang.computer}: ${figure}\n` +
              `${viewLang.you}: ${response}\n${viewLang.youWin}`);
            result.player += 1;
            console.log('result.player: ', result.player);
            response = prompt('Еще?');
            return response !== null ? start() : exitMessage();
        }
      };

      restart();
    };
  };

  return game;
})();
