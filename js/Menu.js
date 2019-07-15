let device = "MOUSE";
let verb = "CLICK";

let Menu = new Phaser.Class({

  Extends: Phaser.Scene,

  initialize: function Menu () {
    Phaser.Scene.call(this, { key: 'menu' });
  },

  create: function () {
    if (!this.sys.game.device.os.desktop) {
      device = "SCREEN";
      verb = "TAP";
    }

    this.cameras.main.setBackgroundColor('#add');
    let titleStyle = { fontFamily: 'Commodore', fontSize: '38px', fill: '#000', wordWrap: true, align: 'center' };
    let title = this.add.text(this.game.canvas.width/2,100,"LET'S PLAY:\nANCIENT GREEK PUNISHMENT:\nFIVE-IN-ONE",titleStyle);
    title.setOrigin(0.5);

    let itemStyle = { fontFamily: 'Commodore', fontSize: '32px', fill: '#000', wordWrap: true, align: 'center' };
    let itemText = this.add.text(this.game.canvas.width/2,3*this.game.canvas.height/5,`(${verb} TO PLAY!)`,itemStyle);
    itemText.setOrigin(0.5);

    this.input.on('pointerdown',(pointer) => {
      this.scene.start('loader');
    });
  },


  update: function () {

  }

});
