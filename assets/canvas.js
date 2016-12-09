let canvas = document.getElementById('drawzone');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth/2;
canvas.height = window.innerHeight/2;

export { canvas, ctx };

