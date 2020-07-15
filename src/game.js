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
        this.inputTimer = 0;
        this.typeStart = 0;
        this.typeEnd = 0;
        this.date = Date.now();

        this.resetGame = this.resetGame.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.populateFishArray = this.populateFishArray.bind(this);
        this.addFish = this.addFish.bind(this);
        this.handleFish = this.handleFish.bind(this);

    }

    resetGame() {
        this.fish = [];
        this.fishCount = 0;
        this.cat.fishEaten = 0;
        this.count = 0;
        this.fat = 0;
        this.cat.eat = false;
    }

    startTimer(e) {
        if (this.typeStart === 0 && e.target.value !== ' ') {
            this.typeStart = Date.now();
        }
    }

    populateFishArray() {
        let i = 0;
        for (i = 0; i < 5; i++) {
            let x = 100;
            let y = Math.floor((Math.random() * 220) + 240);
            let colors = ['orange', 'gray'];
            let color = colors[Math.floor(Math.random() * 2)];
            let word = this.dictionary.randomWord();
            let newFish = new Fish(this.ctx, this.canvas, word, x, y, color);
            this.fish.push(newFish);
            this.fishCount += 1;
        }
    }

    addFish() {
        this.populateFishArray();
        let count = 0;
        let x = 100;
        let i = 0;
        const that = this;
        for (i = 0; i < 5; i++) {
            let f = that.fish[i];
            function movePiece() {
                that.ctx.clearRect(f.x, f.y, 80, 70);
                count++;
                x+=1;
                f.x += 1;
                f.draw();
            }
            window.startInterval = setInterval(movePiece, 40)
        }

    }

    handleFish() {
        if (e.keyCode === 32) {
            let typedVal = this.input.value.trim();
            this.fish.forEach( f => {
                if (typedVal === f.word) {
                    this.cat.eat = true;
                    this.cat.fishEaten += 1;
                    f.word = null;
                    // break;
                };
            });
            this.input.value = '';
            this.typeStart = 0;
        }
    }

    handleOverlap() {
        
    }

}

export default Game;