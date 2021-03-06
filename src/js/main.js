window.onload = function () {
  'use strict';

  var game
  , ns = window['palitosgame'];

  game = new Phaser.Game(700, 500, Phaser.AUTO, 'palitosgame-game');
  game.state.add('boot', ns.Boot);
  game.state.add('preloader', ns.Preloader);
  game.state.add('menu', ns.Menu);
  game.state.add('game', ns.Game);
  game.state.add('gameover', ns.Gameover);
  game.state.add('rules', ns.Rules);

  game.state.start('boot');
};
