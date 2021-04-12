class Menu extends Phaser.Scene {
    constructor(){
        super("menu");
    }

    preload(){
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
    }

    create(){
        //this.add.text(20,20, "test text");
        //this.scene.start("play");
        this.add.text(game.config.width / 2, game.config.height / 2 - borderUISize - borderPadding, "ROCKET PATROL", textConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 2, "Use ←→ arrows to move & (F) to fire", textConfig).setOrigin(0.5);
        let menuConfig = textConfig;
        menuConfig.backgroundColor = "#00FF00";
        menuConfig.color = "#000000";
        this.add.text(game.config.width / 2, game.config.height / 2 + borderUISize + borderPadding, "Press ← for Novice or → for Expert", menuConfig).setOrigin(0.5);

        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update(){
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)){
            // easy
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60 // in seconds, will be multiplied by 1000 later
            }
            this.sound.play("sfx_select");
            this.scene.start("play");
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)){
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 45
            }
            this.sound.play("sfx_select");
            this.scene.start("play");
        }
    }
}