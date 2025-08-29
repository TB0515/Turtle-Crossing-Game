export default class Car {
    constructor(x, y, speed, sprite) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.sprite = sprite;
        this.width = 64;
        this.height = 60;
        this.carColor = ['red', 'orange', 'pink', 'purple', 'blue', 'cyan', 'green'];
        this.sx = {
            'red': 0,
            'orange': 93,
            'pink': 178,
            'purple': 256,
            'blue': 0,
            'cyan': 89,
            'green': 175,
        };
        this.sy = {
            'red': 0,
            'orange': 0,
            'pink': 0,
            'purple': 0,
            'blue': 34,
            'cyan': 40,
            'green': 40,
        };
        this.randomColor = this.carColor[Math.floor(Math.random() * this.carColor.length)];
    }

    draw(ctx) {
        console.log('Car position:', this.x, this.y);
        let sxValue = this.sx[this.randomColor];
        let syValue = this.sy[this.randomColor];
        ctx.drawImage(this.sprite, sxValue, syValue, 80, 54, this.x, this.y, this.width, this.height);
    }

    move() {
        this.x -= this.speed;
    }

    static createCars(level, canvasWidth, carSprite) {
        const cars = [];
        for (let i = 0; i < level + 5; i++) {
            const y = 100 + i * 60;
            const speed = 2 + level * 0.5 + Math.random();
            const x = canvasWidth + Math.random() * 100;
            cars.push(new Car(x, y, speed, carSprite));
        }
        return cars;
    }

    reset(newX, newY, newSpeed) {
        this.x = newX;
        this.y = newY;
        this.speed = newSpeed;
    }

    collidesWith(player) {
        return !(this.x + this.width < player.x ||
                 this.x > player.x + player.width ||
                 this.y + this.height < player.y ||
                 this.y > player.y + player.height);
    }

}

