
let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "red";
ctx.lineJoine = "round";
ctx.lineCap = "round";
// ctx.lineWidth = 0;
let isDrawing = false;
let lineX= 0;
let lineY=0;
let hue = 0;
ctx.lineWidth= 0;
let linewidth = true;



function draw(e){
  if(!isDrawing)  return;
  ctx.strokeStyle= `hsl(${hue},100%,50%)`;
//   console.log(e);
  ctx.beginPath();
  //start from
  ctx.moveTo(lineX,lineY);
  //got to
  ctx.lineTo(e.offsetX,e.offsetY);
  lineX = e.offsetX;
  lineY = e.offsetY;
  ctx.stroke();
  hue++;
  
  if (hue > 360){
      hue = 0;
  }

console.log(ctx.lineWidth)

if(ctx.lineWidth > 100 || ctx.lineWidth <= 1){    
    linewidth = !linewidth ; 
}

if(linewidth){
    ctx.lineWidth++;
}
else {
    ctx.lineWidth--;
}
}

canvas.addEventListener("mousedown",(e)=> {
    isDrawing = true;
    lineX = e.offsetX;
    lineY = e.offsetY;
});

canvas.addEventListener("mousemove",draw);
canvas.addEventListener("mouseup",()=> isDrawing = false);
canvas.addEventListener("mouseout",()=> isDrawing = false);
