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
        this.cat.fat = 0;
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
        this.gameLoop = this.gameLoop.bind(this);
        this.gameOverFunc = this.gameOverFunc.bind(this);
        this.gameOverAnimate = this.gameOverAnimate.bind(this);
        // this.slowIterate = this.slowIterate.bind(this);
        // this.addFishSet = this.addFishSet.bind(this);

    }

    resetGame() {
        
        this.fish = [];
        this.cat.fishEaten = 0;
        this.fishCount = 0;
        this.count = 0;
        this.cat.fat = 0;
        this.cat.eat = false;
        this.eaten = false;
    }

    // startTimer(e) {
    //     if (this.typeStart === 0 && e.target.value !== ' ') {
    //         this.typeStart = Date.now();
    //     }
    // }

    populateFishArray() {
        
        let x = 12;
        let y = Math.floor((Math.random() * 220) + 170);
        let colors = ['orange', 'gray'];
        let color = colors[Math.floor(Math.random() * 2)];
        let word = this.dictionary.randomWord();
        let newFish = new Fish(this.ctx, this.canvas, word, x, y, color, this.eaten);

        if (this.cat.fat === 0) {
            if (this.fish.length < (this.cat.fat + 10)) {
                this.fish.push(newFish);
            }
            return this.fish;

        } else if (this.cat.fat === 5) {
            if (this.fish.length < (this.cat.fat + 22)) {
                this.fish.push(newFish);
            }
            return this.fish;

        } else if (this.cat.fat === 10) {
            if (this.fish.length < (this.cat.fat + 34)) {
                this.fish.push(newFish);
            }
            return this.fish;

        } else if (this.cat.fat === 15) {
            if (this.fish.length < (this.cat.fat + 47)) {
                this.fish.push(newFish);
            }
            return this.fish;
        } 
    }

    slowIterate(arr) {
        if (arr.length === 0) {
            return;
        }
        let f = arr[0];
        if (delta > interval) {
            if (f.eaten === false) {
                f.move();
                f.draw();
                if (f.x >= 410) {
                    f.eaten = true;
                }
            }
        }
        setTimeout(() => {
            slowIterate(arr.slice(1));
        }, 1000);
    }

    addFish() {
        
        let interval = 100;
        let now = Date.now();
        let delta = now - this.then;
        
        // this.slowIterate(this.fish);

        this.fish.forEach(f => {
            if (delta > interval) {
                // this.then = now - (delta % interval);
                if (f.eaten === false) {
                    f.move();
                    f.draw();
                    if (f.x >= 410) {
                        f.eaten = true;
                    }
                }
            }
        })
        // var interval = 1000; // how much time should the delay between two iterations be (in milliseconds)?
        // this.fish.forEach(function (f, index) {
        //     setTimeout(function () {
        //         if (delta > interval) {
        //         // this.then = now - (delta % interval);
        //         if (f.eaten === false) {
        //             f.move();
        //             f.draw();
        //             if (f.x >= 410) {
        //                 f.eaten = true;
        //             }
        //         }
        //     }
        //     }, interval);
        // });
    }
    
    handleFish(e) {
        if (e.keyCode === 32 || e.keyCode === 13) {
            let typedVal = this.input.value.trim();
            this.fish.forEach(f => {
                if (typedVal === f.word) {
                    f.eaten = true;
                    f.word = null;
                    f = null;
                    this.cat.fishEaten += 1;
                    if (this.cat.fishEaten === 10 
                        || this.cat.fishEaten === 22
                        || this.cat.fishEaten === 34
                        || this.cat.fishEaten === 46) {
                        this.cat.fat += 5;
                    };
                    if (this.cat.fat === 20) {
                        debugger
                        this.gameOverFunc();
                    }
                    this.cat.draw();
                    
                    this.input.value = '';
                    this.typeStart = 0;

                };
            });
        }
    }

    startGame(e) {
        
        if (e.button === 0) {
            this.canvas.removeEventListener('click', this.startGame);
            this.resetGame();
            this.gameLoop();
            this.input.disabled = false;
            this.input.style.display = 'block';
            this.input.focus();
        }
    }

    gameLoop() {
        
        this.render();
    }

    gameOverFunc() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.fish = [];
        this.fishCount = 0;
        this.count = 0;
        this.cat.eat = false;
        this.eaten = false;
        this.canvas.removeEventListener('click', this.input.focus());
        this.input.removeEventListener('keydown', this.handleFish);

        this.input.value = '';
        this.input.disabled = true;
        this.input.style.display = 'none';

        // this.GameOver.endCounter
        // this.canvas.className = 'game-over-canvas';
        debugger
        this.gameOverAnimate();
    }

    gameOverAnimate() {
        debugger
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.gameOver.draw20Win();
        this.gameOver.drawWinMessage();
        this.gameOver.drawFishEaten(this.cat.fishEaten);
        this.gameOver.drawPlayAgain();
    }

    render() {
        
        requestAnimationFrame(this.render);

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.canvas.addEventListener('click', this.input.focus());
        this.input.addEventListener('keydown', this.handleFish);

        

        this.populateFishArray();
        
        this.addFish();
        
        this.cat.drawFishEaten();
        
        this.cat.draw();
        
        
    }

}

export default Game;