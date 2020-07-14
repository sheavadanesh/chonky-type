class Start {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.dancingCat = new Image();
        this.dancingCat.src = './public/images/dancingCat.gif';
        
    }

    drawStart() {
        this.ctx.beginPath();
            this.ctx.fillStyle = 'red';
            this.ctx.font = 'bold 40px "Jua"';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Start', (this.canvas.width/2), 550);
            this.ctx.fill();
        this.ctx.closePath();
    }

    drawTitle() {
        this.ctx.beginPath();
            this.ctx.fillStyle = 'black';
            this.ctx.font = 'bold 55px "Jua"';
            this.textAlign = 'center';
            this.justifyContent = 'center';
            this.ctx.fillText('Chonky Type', 249, 100);
            this.ctx.fill();
        this.ctx.closePath();
        
    }

    drawHeaderMessage() {
        this.ctx.beginPath();
            this.ctx.fillStyle = 'black';
            this.ctx.font = '24px "Jua"';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Try to get the cat as fat and as chonky as you can!',
                                (this.canvas.width/2), 
                                200);
            this.ctx.fill();
        this.ctx.closePath();
    }

    drawCatGif() {
        let catGif = new GIF();
        catGif.load('/public/images/dancingCat.gif');
        this.ctx.drawImage(catGif, 250, 250, 100, 100);
    }
}

export default Start;