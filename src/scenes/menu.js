class Menu extends Phaser.Scene {
    constructor(){
        super("menu");
    }
    create(){
        this.add.text(20,20, "test text");
        this.scene.start("play");
    }
}