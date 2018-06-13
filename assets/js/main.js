function buildMaps() {
    imageToCanvas('vector-raw', 'vector-legend')
    imageToCanvas('vector-raw', 'vector-mirror');
    imageToCanvas('raster-raw', 'raster-mirror');
    toggle('vector-legend');
    toggle('vector-mirror');
    toggle('raster-mirror');
    toggle('loader-page');
    document.body.style.overflow = "auto";
}

function imageToCanvas(fromID, toID) {
    let image = document.getElementById(fromID);
    let canvas = document.getElementById(toID);
    let context = canvas.getContext('2d');
    canvas.width = image.width;
    canvas.height = image.height;
    context.drawImage(image, 0, 0);
}

