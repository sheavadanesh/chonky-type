import Cat from './cat';
import Fish from './fish';
import Dictionary from './dictionary';
import GameOver from './game_over';

class Game {
    constructor(page, ctx, canvas, input) {
        this.page = page;
        this.ctx = ctx;
        this.canvas = canvas;
        this.input = input;
        
        this.cat = new Cat(ctx, canvas);
        this.dictionary = new Dictionary();
        this.gameOver = new GameOver(ctx, canvas);
        
        this.fish = [];
        this.fishCount = 0;
        this.count = 0;
        this.fat = 0;
        this.eaten = false;
        this.inputTimer = 0;
        this.typeStart = 0;
        this.typeEnd = 0;
        this.then = Date.now();

        this.resetGame = this.resetGame.bind(this);
        // this.startTimer = this.startTimer.bind(this);
        this.populateFishArray = this.populateFishArray.bind(this);
        this.addFish = this.addFish.bind(this);
        this.handleFish = this.handleFish.bind(this);
        this.startGame = this.startGame.bind(this);
        this.render = this.render.bind(this);

    }

    resetGame() {
        this.fish = [];
        this.cat.fishEaten = 0;
        this.fishCount = 0;
        this.count = 0;
        this.fat = 0;
        this.cat.eat = false;
        this.eaten = false;
    }

    // startTimer(e) {
    //     if (this.typeStart === 0 && e.target.value !== ' ') {
    //         this.typeStart = Date.now();
    //     }
    // }

    populateFishArray() {
        let i = 0;
        let x = 20;
        let y = Math.floor((Math.random() * 220) + 170);
        let colors = ['orange', 'gray'];
        let color = colors[Math.floor(Math.random() * 2)];
        let word = this.dictionary.randomWord();
        let newFish = new Fish(this.ctx, this.canvas, word, x, y, color, this.eaten);
        this.fish.push(newFish);
        this.fishCount += 1;
    }

    addFish() {
        // setInterval(this.populateFishArray(), 2000);
        this.populateFishArray();
        let count = 0;
        let x = 10;
        let i = 0;
        const that = this;
        for (i = 0; i < 0; i++) {
            let f = that.fish[i];
            function movePiece() {
                // debugger
                if (f.eaten === false) {
                    that.ctx.clearRect(f.x, f.y, 80, 70);
                    count++;
                    x+=0.5;
                    f.x+=0.5;
                    if (f.x >= 600) {
                        f.eaten = true;
                    }
                } else {
                    // var index = that.fish.indexOf(f);
                    // if (index > -1) {
                    //     that.fish.splice(index, 1);
                    // }
                }
            }
            window.startInterval = setInterval(movePiece, 1000);
            window.clearInterval(movePiece);
        }

    }

    handleFish(e) {
        if (e.keyCode === 32) {
            let typedVal = this.input.value.trim();
            this.fish.forEach(f => {
                if (typedVal === f.word) {
                    this.cat.eat = true;
                    f.eaten = true;
                    f.word = null;
                    this.cat.fishEaten += 1;
                };
            });
            this.input.value = '';
            this.typeStart = 0;
        }
    }

    startGame(e) {
        if (e.button === 0) {
            this.canvas.removeEventListener('click', this.startGame);
            this.resetGame();
            // clearInterval(window.startInterval);
            // clearInterval(window.overInterval);
            // this.canvas.className = 'game';
            // requestAnimationFrame(this.render);
            this.render();
            this.input.disabled = false;
            this.input.style.display = 'block';
            this.input.focus();
        }
    }

    // gameLoop() {

    // }
    // haev a game loop function that renders every second that you want frames to move
    // start game should call loop funciton, which calls render


    render() {
        // just be responsible for putting stuff on screen
        // 
        let req = requestAnimationFrame(this.render);

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.canvas.addEventListener('click', this.input.focus());
        this.input.addEventListener('keydown', this.handleFish);
        this.input.addEventListener('input', this.startTimer);

        let interval = 100;
        let now = Date.now();
        let delta = now - this.then;

        if (this.fishEaten === 10) {
            this.fat += 5;
        }

        this.addFish();

        this.cat.drawFishEaten();

        this.fish.forEach(f => {
            if (f.eaten === false) {
                f.draw(); //this is causing the fish to show on screen
                if (delta > interval) {
                    this.then = now - (delta % interval);
                    f.move();
                }
            }
        })

        if (this.cat.fat < 20) {
            this.cat.drawFishEaten();
            this.cat.draw();
        } else if (this.cat.fat >= 20) {
            this.cat.eat = false;
            this.cat.drawFishEaten();
            this.cat.draw();
            cancelAnimationFrame(req);
            this.gameOver();
        }
    }

    gameOver() {
        this.canvas.removeEventListener('click', this.input.focus());
        this.input.removeEventListener('keydown', this.handleFish);
        this.input.removeEventListener('input', this.startTimer);
        this.input.value = '';
        this.input.disabled = true;
        this.input.style.display = 'none';

        if (this.cat.fat >= 20) {
            this.GameOver.endCounter
            this.canvas.className = 'game-over-canvas';
            window.overInterval = setInterval(this.gameOverAnimate, 100);
        }
    }

    gameOverAnimate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawBackground();
        this.GameOver.draw20Win();
        this.GameOver.drawWinMessage();
        this.GameOver.drawFishEaten(this.cat.fishEaten);
        this.GameOver.drawPlayAgain();
    }

}

export default Game;