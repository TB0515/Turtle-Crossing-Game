// Objective: Guide a player across a busy road while avoiding obstacles (car). 
// The goal is to safely reach the other side without getting hit.
// Features:As level increases, car speed gets faster. Score is tracked. No saves. Make it responsive.
// Player can only move forward (bottom to top - so, event listener for up arrow)
// Cars are in diff color, start at random yaxis, move from right to left.
// TO DO 0: create, export and import car,  player, scoreboard modules to app. 
// TO DO 1: Create Player and keyboard controls.
// TO DO 2: Initial Cars, Remove cars that goes off-screen and create new cars at random intervals.
// TO DO 3: Checkcollion an reset the canvas.
// TO DO 4: Track score and level complete.
// TO DO 5: End the loop 

import { Player } from "./modules/player.js";


window.addEventListener('load', function(){
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 600;

    let startX = (canvas.width / 2) - 10;
    let startY = canvas.height - 40;
    let playerSprite = document.getElementById("player");
    let bgSprite = document.getElementById("background");
    let carSprite = document.getElementById("car");
    
    let player = new Player(startX, startY, playerSprite);

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(bgSprite, 0, 0, canvas.width, canvas.height);

        player.draw(ctx);
    }

    animate();

})