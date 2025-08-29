export default class Player {
    constructor(startX, startY, sprite){
        this.x = startX;
        this.y = startY;
        this.sprite = sprite;
        this.width = 40;
        this.height = 40;
        this.collisionWidth = 32;
        this.collisionHeight = 30;
        this.speed = 10;
        this.collisionOffsetX = 4;
        this.collisionOffsetY = 4;
    }

    draw(ctx) {
        ctx.drawImage(this.sprite, 0, 192, 64, 64, this.x, this.y, this.width, this.height);
    }
    moveUp(){
        this.y -= this.speed;
    }
    reset(startX, startY){
        this.x = startX;
        this.y = startY;
    }

}
