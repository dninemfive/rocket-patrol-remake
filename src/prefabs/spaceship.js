class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.points = pointValue;
        this.moveSpeed = 3;
    }

    update(){
        this.x -= this.moveSpeed;
        if(this.x <= -this.width){
            // not using reset() because I'm gonna put the explosion anim in there
            this.x = game.config.width;
        }
    }

    reset(){
        this.x = game.config.width;
    }
}