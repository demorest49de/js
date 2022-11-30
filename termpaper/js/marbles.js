'use strict';

window.marbles = (() => {
  const game = () => function start() {
    const doStart = () => {
      return 5;
    };
    return doStart();
  };
  return game;
})();
