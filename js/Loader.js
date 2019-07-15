let Loader = new Phaser.Class({

  Extends: Phaser.Scene,

  initialize: function Loader () {
    Phaser.Scene.call(this, { key: 'loader' });
  },

  create: function () {
    this.cameras.main.setBackgroundColor('rgba(221, 218, 219, 1)');

    this.scene.launch('sisyphus');
    this.scene.launch('tantalus');
    this.scene.launch('prometheus');
    this.scene.launch('danaids');
    this.scene.launch('zeno');
  },


  update: function () {

  }

});
