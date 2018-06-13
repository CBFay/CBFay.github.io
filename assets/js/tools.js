function get(elementID) {
    return document.getElementById(elementID);
}

function toggle(elementID) {
    get(elementID).classList.toggle('hidden');
}

function disable_opacity() {
    toggle('vector-mirror');
    get('opacity-slide').disabled = ( ! get('opacity-slide').disabled );
}

function update_opacity(value) {
    get('vector-mirror').style.opacity = value * .01;
}

function zoom(multiplier) {
    const level = get('map-wrapper').getAttribute('zoomlevel');
    const result = level * multiplier;
    if ([1, 2, 4, 8, 16, 32].includes(result)) {
        get('map-wrapper').style.transform = 'scale(' + result + ')';
        get('map-wrapper').setAttribute('zoomlevel', result);
        return true;
    }
    return false;
}
