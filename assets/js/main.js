function buildMaps() {
    imageToCanvas('vector-raw', 'vector-legend');
    imageToCanvas('vector-raw', 'vector-mirror');
    imageToCanvas('raster-raw', 'raster-mirror');
    console.log('done!');
}

function imageToCanvas(fromID, toID) {
    let image = document.getElementById(fromID);
    let canvas = document.getElementById(toID);
    let context = canvas.getContext('2d');
    canvas.width = image.width;
    canvas.height = image.height;
    context.drawImage(image, 0, 0);
}

