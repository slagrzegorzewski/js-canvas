document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    var canvasArea = document.createElement("canvas");
    canvasArea.width = 500;
    canvasArea.height = 500;
    document.body.appendChild(canvasArea);

    var ctx = canvasArea.getContext("2d");

    ctx.fillRect(100, 50, 250, 50);
});
