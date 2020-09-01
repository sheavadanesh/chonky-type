class GameOver {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
    }

    draw20Win() {
        this.ctx.clearRect(0, 0, 800, 600);
        // debugger
        this.ctx.beginPath();
            this.ctx.fillStyle = 'black';
            this.ctx.font = 'bold 40px "Jua"';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Chonk status: MEGACHONK!!', 400, 110);
            this.ctx.fill();
        this.ctx.closePath();
        this.drawWinMessage();
    }

    draw15Win() {
        this.ctx.beginPath();
            this.ctx.fillStyle = 'black';
            this.ctx.font = 'bold 40px "Jua"';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Chonk status: A CHONKY BOI!', 400, 110);
            this.ctx.fill();
        this.ctx.closePath();
        this.drawLoseMessage();
    }

    draw10Win() {
        this.ctx.beginPath();
            this.ctx.fillStyle = 'black';
            this.ctx.font = 'bold 40px "Jua"';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Chonk status: Slight chonker!', 400, 110);
            this.ctx.fill();
        this.ctx.closePath();
        this.drawLoseMessage();
    }

    draw5Win() {
        this.ctx.beginPath();
            this.ctx.fillStyle = 'black';
            this.ctx.font = 'bold 40px "Jua"';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Chonk status: Not very chonky.', 400, 110);
            this.ctx.fill();
        this.ctx.closePath();
        this.drawLoseMessage();
    }

    draw0Win() {
        this.ctx.beginPath();
            this.ctx.fillStyle = 'black';
            this.ctx.font = 'bold 40px "Jua"';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Chonk status: A fine boi, but not chonky at all.', 400, 110);
            this.ctx.fill();
        this.ctx.closePath();
        this.drawLoseMessage();
    }

    drawWinMessage() {
        // debugger
        this.ctx.beginPath();
            this.ctx.fillStyle = 'black';
            this.ctx.font = '20px "Jua"';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('He is the chonkiest boi thanks to you!', 400, 150);
            this.ctx.fill();
        this.ctx.closePath();
    }

    drawLoseMessage() {
        this.ctx.beginPath();
        this.ctx.fillStyle = 'black';
        this.ctx.font = '20px "Jua"';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('...but he is still hungry :(', 400, 150);
        this.ctx.fill();
        this.ctx.closePath();
    }

    drawFishEaten(fishCount) {
        // debugger
        this.ctx.beginPath();
            this.ctx.fillStyle = 'black';
            this.ctx.font = 'bold 20px "Jua"';
            this.textAlign = 'center';
            this.ctx.fillText('Fish eaten: ' + `${fishCount}`, 400, 200);
    }

    drawPlayAgain() {
        // debugger
        this.ctx.beginPath();
            this.ctx.fillStyle = 'red';
            this.ctx.textAlign = 'center';
            this.ctx.font = 'bold 30px "Jua"';
            this.ctx.fillText('Play Again', 400, 300);
            this.ctx.fill();
        this.ctx.closePath();
    }

}

export default GameOver;