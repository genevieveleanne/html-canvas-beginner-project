const canvas = document.querySelector("#canvas-one");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.fillStyle = "white";
context.fillRect(10, 20, 150, 50);

function adjustRect(event) {
    event.preventDefault();

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    context.fillStyle = "white";
    context.fillRect(10, 20, 150, 50);
}

window.addEventListener("resize", adjustRect);

