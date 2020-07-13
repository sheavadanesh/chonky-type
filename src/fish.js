class Fish {
    constructor(ctx, canvas, word, pos, color) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.pos = pos;
        this.word = word
        this.color = color;
        this.orangeFishImg = new Image();
        this.grayFishImg = new Image();
        this.orangeFishImg.src = './public/images/orange_fish.png';
        this.grayFishImg.src = './public/images/gray_fish.png';

        const x = this.pos[0];
        const y = this.pos[1];
    }

    draw() {
        if (this.color === 'orange') {
            this.ctx.drawImage(this.orangeFishImg, x, y, 50, 30);
        } else {
            this.ctx.drawImage(this.grayFishImg, x, y, 50, 30);
        }
    }

    drawWord() {
        this.ctx.beginPath();
            this.ctx.font = '15px "Jua"'
            this.ctx.fillText(this.word, x, y);
            this.ctx.fill();
        this.ctx.closePath();
    }

    move() {
        x += 1;
        y += 1;
    }
}

export default Fish;