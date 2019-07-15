let Menu = new Phaser.Class({

  Extends: Phaser.Scene,

  initialize: function Menu () {
    Phaser.Scene.call(this, { key: 'menu' });
  },

  create: function () {
    this.cameras.main.setBackgroundColor('#add');
    let titleStyle = { fontFamily: 'Commodore', fontSize: '38px', fill: '#000', wordWrap: true, align: 'center' };
    let title = this.add.text(this.game.canvas.width/2,100,"LET'S PLAY:\nANCIENT GREEK PUNISHMENT:\nFIVE-IN-ONE",titleStyle);
    title.setOrigin(0.5);

    // For now let's just launch it all
    this.scene.start('loader');
  },


  update: function () {

  }

});
