class Cat {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.fat = 0;
        // this.wpm; if you have time.
        this.fishCount = 0;
        this.eat = false;

        this.catImg = new Image();
        this.catEatingImg = new Image();
        this.cat5Img = new Image();
        this.cat5EatingImg = new Image();
        this.cat10Img = new Image();
        this.cat10EatingImg = new Image();
        this.cat15Img = new Image();
        this.cat15EatingImg = new Image();
        this.cat20Img = new Image();
        this.catImg.src = '';
        this.catEatingImg.src = '';
        this.cat5Img.src = '';
        this.cat5EatingImg.src = '';
        this.cat10Img.src = '';
        this.cat10EatingImg.src = '';
        this.cat15Img.src = '';
        this.cat15EatingImg.src = '';
        this.cat20Img.src = '';
    }

    draw() {
        if (this.eat) {
            if (this.fat === 0) {
                this.ctx.drawImage(this.catEatingImg, 
                                    200, 240, 
                                    90, 150);
            } else if (this.fat === 5) {
                this.ctx.drawImage(this.cat5EatingImg,
                    200, 240,
                    90, 150);
            } else if (this.fat === 10) {
                this.ctx.drawImage(this.cat10EatingImg,
                    200, 240,
                    90, 150);
            } else if (this.fat === 15) {
                this.ctx.drawImage(this.cat15EatingImg,
                    200, 240,
                    90, 150);
            };
        } else if (this.fat === 0){
            this.ctx.drawImage(this.catImg,
                                200, 240,
                                90, 150);
        } else if (this.fat === 5) {
            this.ctx.drawImage(this.cat5Img,
                200, 240,
                90, 150);
        } else if (this.fat === 10) {
            this.ctx.drawImage(this.cat10Img,
                200, 240,
                90, 150);
        } else if (this.fat === 15) {
            this.ctx.drawImage(this.cat15Img,
                200, 240,
                90, 150);
        } else if (this.fat === 20) {
            this.ctx.drawImage(this.cat20Img,
                200, 240,
                90, 150);
        };
    }

    drawFishCount() {
        this.ctx.beginPath();
            this.ctx.fillStyle ='black';
            this.ctx.font = 'bold 18px "Jua"';
            this.ctx.fillText("Fish eaten: " + this.fishCount.toString(), this.canvas.width - 210, 50);
            this.ctx.fill();
        this.ctx.closePath();
    }
}

export default Cat;