//Constant variables 
const canvas = document.querySelector("#canvas-one");
const context = canvas.getContext("2d");

//Ensures the canvas covers the entire browser window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//Prevent rectangle from being stretched if the browser window is resized
function adjustCircle(event) {
    event.preventDefault();

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
}

window.addEventListener("resize", adjustCircle);

//Draw a full circle
context.fillStyle = "blue";
context.strokeStyle = "red";
context.lineWidth = 5;

context.beginPath();
context.arc(100, 100, 50, 0, Math.PI * 2);

context.fill();
context.stroke();
