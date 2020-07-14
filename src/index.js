import Start from './start';


document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('main-canvas');
    const ctx = canvas.getContext('2d');
    const page = document.getElementById('page');

    const start = new Start(ctx, canvas);
    
    start.drawTitle();
    start.drawHeaderMessage();

    let count = 0;
    function flashyTitle() {
        ctx.clearRect(300, 400, canvas.width, canvas.height);
        count ++;
        if (count % 2 == 1) {
            start.drawStart();
        } else {
            null;
        }
        if (count == 1000) clearInterval(timer);
    }
    window.startInterval = setInterval(flashyTitle, 900);

})