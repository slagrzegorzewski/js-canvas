document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    var canvasArea = document.createElement("canvas"),
        ctx = canvasArea.getContext("2d");
    canvasArea.width = 500;
    canvasArea.height = 500;
    document.body.appendChild(canvasArea);

    ctx.fillRect(100, 50, 250, 50);
    ctx.strokeRect(100, 120, 50, 100);
    ctx.clearRect(120, 80, 80, 60);

    ctx.moveTo(180, 200);
    ctx.lineTo(250, 200);
    ctx.lineTo(350, 300);
    ctx.lineTo(250, 230);
    ctx.fill();
});
