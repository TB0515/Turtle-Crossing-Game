import Player from "./modules/player.js";
import Car from "./modules/cars.js";
import Scoreboard from "./modules/scoreboard.js";


window.addEventListener('load', function(){
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    const startScreen = document.getElementById('startScreen');
    const startBtn = document.getElementById('startGameBtn');
    canvas.width = 600;
    canvas.height = 600;

    let startX = (canvas.width / 2) - 10;
    let startY = canvas.height - 40;
    const playerSprite = document.getElementById("player");
    const bgSprite = document.getElementById("background");
    const carSprite = document.getElementById("car");
    
    let player = new Player(startX, startY, playerSprite);
    let scoreboard = new Scoreboard();
    
    function setupLevel(){
         return Car.createCars(scoreboard.level, canvas.width, carSprite); 
    };
    
    let cars = setupLevel();

    canvas.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp') {
            player.moveUp();

        }
    });
    canvas.tabIndex = 0;
    canvas.focus(); 

    function resetGame(){
        scoreboard.reset();
        player.reset(startX, startY);
        cars = setupLevel();
        gameOn = true;
        animate();
    };
    
    let gameOn = false;

    function animate() {
        if (!gameOn) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(bgSprite, 0, 0, canvas.width, canvas.height);

        player.draw(ctx);
        scoreboard.draw(ctx, canvas);

        for (let car of cars) {
            car.move();
            if (car.x + canvas.width < (canvas.width - 100)){
                let newX = canvas.width;
                let newSpeed = 2 + scoreboard.level * 0.5 + Math.random();
                car.reset(newX, car.y, newSpeed);
            }
            car.draw(ctx);

            if (car.collidesWith(player)){
                gameOn = false;
                setTimeout(() => {
                    if(confirm('GAME OVER. YOU GOT HIT! PLAY AGAIN?')){
                        resetGame();
                    } 
                }, 100);
            } 
        }

        if (player.y < 0){
                scoreboard.incrementLevel();
                player.reset(startX, startY);
                setupLevel();
        }

        if (gameOn) {
        requestAnimationFrame(animate);
        }
    }
    
    startBtn.addEventListener('click', () => {
        console.log('Start button clicked');
        startScreen.style.display = 'none';
        gameOn = true;
        animate(); 
    });
    
})