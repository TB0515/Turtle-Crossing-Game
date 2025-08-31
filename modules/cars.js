export default class Car {
    constructor(x, y, speed, sprite) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.sprite = sprite;
        this.width = 96;
        this.height = 90;
        this.collisionOffsetsW = {
            'orange': 14,
            'red': 10,
            'green': 12,
            'yellow': 5,
            'purple': 14,
            'blue': 5,
        };
        this.collisionOffsetsH = {
            'orange': 50,
            'red': 45,
            'green': 25,
            'yellow': 23,
            'purple': 5,
            'blue': 5,
        };

        this.collisionHeights = {
            'orange': 30,
            'red': 35,
            'green': 40,
            'yellow': 40,
            'purple': 42,
            'blue': 43,
        };

        this.collisionWidths = {
            'orange': 85,
            'red': 79,
            'green': 85,
            'yellow': 90,
            'purple': 83,
            'blue': 90,
        };

        this.carColor = ['orange','red', 'green', 'yellow', 'purple', 'blue'];
        this.sx = {
            'orange': 0,
            'red': 1000,
            'green': 0,
            'yellow': 1000,
            'purple': 0,
            'blue': 1000,
        };
        this.sy = {
            "orange": 0,
            'red': 0,
            'green': 666.67,
            'yellow': 666.67,
            'purple': 1333.33,
            'blue': 1333.33,
        };
        this.randomColor = this.carColor[Math.floor(Math.random() * this.carColor.length)];
        this.sxValue = this.sx[this.randomColor];
        this.syValue = this.sy[this.randomColor];
        this.collisionOffsetX = this.collisionOffsetsW[this.randomColor];
        this.collisionOffsetY = this.collisionOffsetsH[this.randomColor];
        this.collisionHeight = this.collisionHeights[this.randomColor];
        this.collisionWidth = this.collisionWidths[this.randomColor];
    
    }

    draw(ctx) {
        ctx.drawImage(this.sprite, this.sxValue, this.syValue, 900, 600, this.x, this.y, this.width, this.height);
    }

    move() {
        this.x -= this.speed;
    }

    static createCars(level, canvasWidth, carSprite) {
        const cars = [];
        for (let i = 0; i < level + 5; i++) {
            const y = 100 + i * 60;
            const speed = 2 + level * 0.5 + Math.random();
            const x = Math.random() * (canvasWidth - 150);
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
        const carLeft = this.x + this.collisionOffsetX;
        const carRight = carLeft + this.collisionWidth;
        const carTop = this.y + this.collisionOffsetY;
        const carBottom = carTop + this.collisionHeight;

        const playerLeft = player.x + player.collisionOffsetX;
        const playerRight = playerLeft + player.collisionWidth;
        const playerTop = player.y + player.collisionOffsetY;
        const playerBottom = playerTop + player.collisionHeight;

        return !(carRight < playerLeft ||
                carLeft > playerRight ||
                carBottom < playerTop ||
                carTop > playerBottom);
    }
}

