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
}

export default Start;