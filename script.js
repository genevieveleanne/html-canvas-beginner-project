//Constant variables 
const canvas = document.querySelector("#canvas-one");
const context = canvas.getContext("2d");

//Ensures the canvas covers the entire browser window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//Prevent rectangle from being stretched if the browser window is resized
function adjustRect(event) {
    event.preventDefault();

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
}

window.addEventListener("resize", adjustRect);

