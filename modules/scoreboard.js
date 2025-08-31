export default class Scoreboard {
    constructor() {
        this.level = 1;
        this.score = 0;
    }

    incrementLevel() {
        this.level++;
        this.score ++;
    }

    reset() {
        this.level = 1;
        this.score = 0;
    }

    draw(ctx, canvas) {
        ctx.font = "20px Arial";
        ctx.fillStyle = "black";
        ctx.fillText(`Level: ${this.level}, Score: ${this.score}`, 10, 25);
    }
}
