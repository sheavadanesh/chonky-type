class Cat {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.fat = 0;
        this.fishEaten = 0;
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
        this.catImg.src = '/images/cat.png';
        this.catEatingImg.src = '/images/catEating.png';
        this.cat5Img.src = '/images/cat5.png';
        this.cat5EatingImg.src = '/images/cat5eating.png';
        this.cat10Img.src = '/images/cat10.png';
        this.cat10EatingImg.src = '/images/cat10eating.png';
        this.cat15Img.src = '/images/cat15.png';
        this.cat15EatingImg.src = '/images/cat15eating.png';
        this.cat20Img.src = '/images/cat20.png';
    }

    drawEating() {
        if (this.fat === 0) {
            this.ctx.drawImage(this.catEatingImg,
                480, 190,
                360, 250);
        } else if (this.fat === 5) {
            this.ctx.drawImage(this.cat5EatingImg,
                480, 190,
                360, 250);
        } else if (this.fat === 10) {
            this.ctx.drawImage(this.cat10EatingImg,
                480, 190,
                360, 250);
        } else if (this.fat === 15) {
            this.ctx.drawImage(this.cat15EatingImg,
                480, 190,
                360, 250);
        }; 
    }

    draw() {
        if (this.fat === 0){
            this.ctx.drawImage(this.catImg,
                                480, 190,
                                360, 250);
        } else if (this.fat === 5) {
            this.ctx.drawImage(this.cat5Img,
                                480, 190,
                                360, 250);
        } else if (this.fat === 10) {
            this.ctx.drawImage(this.cat10Img,
                                480, 190,
                                360, 250);
        } else if (this.fat === 15) {
            this.ctx.drawImage(this.cat15Img,
                                480, 190,
                                360, 250);
        } else if (this.fat === 20) {
            this.ctx.drawImage(this.cat20Img,
                                480, 190,
                                360, 250);
        };
    }

    drawFishEaten() {
        this.ctx.beginPath();
            this.ctx.fillStyle ='black';
            this.ctx.font = 'bold 18px "Jua"';
            this.ctx.fillText("Fish eaten : " + this.fishEaten.toString(), this.canvas.width - 210, 50);
            this.ctx.fill();
        this.ctx.closePath();
    }
}

export default Cat;