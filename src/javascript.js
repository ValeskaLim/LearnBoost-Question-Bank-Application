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

document.addEventListener('DOMContentLoaded', function() {
    fetch('/user-grade')
        .then(response => response.json())
        .then(data => {
            if (data.grade) {
                document.querySelector('#grade').textContent = data.grade + 'th Grade';
            } else {
                document.querySelector('#grade').textContent = 'NULL';
            }
        })
        .catch(error => {
            console.error('Error fetching grade:', error);
            document.querySelector('#grade').textContent = 'Error loading grade';
        });
    
    fetch('/user-name')
        .then(response => response.json())
        .then(data => {
            if (data.username) {
                document.querySelector('#names').textContent = data.username.toUpperCase();
            } else {
                document.querySelector('#names').textContent = 'NULL';
            }
        })
        .catch(error => {
            console.error('Error fetching name:', error);
            document.querySelector('#names').textContent = 'Error loading name';
        });
});


function toggleDropdown(menuId) {
    const dropdownMenu = document.getElementById(menuId);
    dropdownMenu.classList.toggle('hidden');
}
