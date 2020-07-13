import Start from './start';

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('main-canvas');
    const ctx = canvas.getContext('2d');
    const page = document.getElementById('page');

    const start = new Start(ctx, canvas);
    console.log('webpack is working');

    
})