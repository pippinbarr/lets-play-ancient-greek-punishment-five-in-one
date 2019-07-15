let config = {
  type: Phaser.CANVAS,
  width: 800,
  height: 400,
  scene: [Boot, Preloader, Menu, Loader, Sisyphus, Zeno, Danaids, Tantalus, Prometheus],
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  },
  "render.transparency": true,
};

let game = new Phaser.Game(config);
