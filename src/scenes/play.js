class Play extends Phaser.Scene {
    constructor(){
        super("play");
    }

    preload(){
        this.load.image("starfield", "assets/starfield.png");
    }

    create(){
        this.starfield = this.add.tileSprite(0,0,640,480,"starfield").setOrigin(0,0);

        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x00FF00).setOrigin(0,0);
        // white borders
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);      
        // rocket
        this.rocket = new Rocket(this, game.config.width / 2, game.config.height - borderUISize, 'rocket').setOrigin(0.5, 0);  
    }

    update(){
        this.starfield.tilePositionX -= 4;
    }
}