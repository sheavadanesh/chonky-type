class Start {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
    }

    drawStart() {
        this.ctx.beginPath();
            this.ctx.fillStyle = 'red';
            this.ctx.font = 'bold 30px "Jua"';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Start', (this.canvas.width/2), 300);
            this.ctx.fill();
        this.ctx.closePath();
    }

    drawTitle() {
        this.ctx.beginPath();
            this.ctx.fillStyle = 'black';
            this.ctx.font = 'bold 50px "Jua"';
            this.textAlign = 'center';
            this.ctx.fillText('Chonky Type!', (this.canvas.width/2), 100);
            this.ctx.fill();
        this.ctx.closePath();
        
    }

    drawHeaderMessage() {
        this.ctx.beginPath();
            this.ctx.fillStyle = 'black';
            this.ctx.font = '20px "Jua"';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Try to get the cat as fat and chonky as you can!',
                                (this.canvas.width/2), 200);
            this.ctx.fill();
        this.ctx.closePath();
    }
}

export default Start;