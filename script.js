//Constant variables 
const canvas = document.querySelector("#canvas-one");
const context = canvas.getContext("2d");

//Ensures the canvas covers the entire browser window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//Prevents shape from being stretched if the browser window is resized
function adjustShapeSize(event) {
    event.preventDefault();

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
}

window.addEventListener("resize", adjustShapeSize);

//Global X and Y coordinates for mouse movement
const mouse = {
    x: undefined,
    y: undefined,
}

//Paintbrush Effect
function moveMouse(event) {
    event.preventDefault;

    mouse.x = event.x;
    mouse.y = event.y; 

    drawCircle();
}

canvas.addEventListener("mousemove", moveMouse)

function drawCircle() {
context.fillStyle = "blue";

context.beginPath();
context.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);

context.fill();
}
