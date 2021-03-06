import Start from './start';
import Game from './game';

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('main-canvas');
    const ctx = canvas.getContext('2d');
    const page = document.getElementById('page');
    const input = document.getElementById('user-input');

    const start = new Start(ctx, canvas);
    const game = new Game(page, ctx, canvas, input)
    
    setTimeout(() => {
        start.drawTitle();
        start.drawHeaderMessage();
    }, 500)
    start.drawCat();
    
    let count = 0;
    function flashyText() {
        ctx.clearRect(345, 520, 110, 110);
        count ++;
        if (count % 2 === 1) {
            start.drawStart();
        } else {
            null;
        }
        canvas.addEventListener('click', game.startGame);
    }
    input.style.display = 'none';
    window.startInterval = setInterval(flashyText, 900);
    
})