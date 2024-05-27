function getZoomLevel() {
    return Math.round(window.devicePixelRatio * 100);
}

function checkZoomLevel() {
    const zoomLevel = getZoomLevel();
    const menuBox = document.getElementById('menu-box');
    const content = document.querySelector('.content');

    if (zoomLevel >= 200) {
        menuBox.classList.add('fade-out');
    } else {
        menuBox.classList.remove('fade-out');
    }

}

window.addEventListener('resize', checkZoomLevel);
window.addEventListener('load', checkZoomLevel);
