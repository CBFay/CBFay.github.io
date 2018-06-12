
function create_canvas1() {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    let vector = document.getElementById('vector');
    canvas.width = vector.width * 4;
    canvas.height = vector.height * 4;
    context.drawImage(vector, 50, 50);
    console.log(canvas);
}

function draw_canvases() {
    create_canvas('legend-canvas', 'vector-base');
}

function create_canvas(id, base) {
    let canvas = document.getElementById(id);
    let context = canvas.getContext("2d");
    
    let img = document.getElementById(base);

    canvas.width = img.width;
    canvas.height = img.height;
    context.drawImage(img, 0, 0);
    console.log(canvas);
}
