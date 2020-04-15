const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

let direction = true;
let hue = 0;
let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY]
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 1;

function draw(e) {
  // stop the function from running when they are not mouse down
  if(!isDrawing) return;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  hue++;
  if(hue >=360) {
    hue = 0;
  }

  if(ctx.lineWidth >= 70 || ctx.lineWidth <=1) {
    direction = !direction;
  }

  if(direction) {
    ctx.lineWidth++;
  }
  else {
    ctx.lineWidth--;
  }

  [lastX, lastY] = [e.offsetX, e.offsetY];
}

