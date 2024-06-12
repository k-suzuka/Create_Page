document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const mainContent = document.querySelector('.main-content');
    menuIcon.addEventListener('click', () => {
        toggleMenu();
        mainContent.classList.toggle('shift');
    });
});

function toggleMenu() {
    const sideMenu = document.getElementById('sideMenu');
    if (sideMenu) {
        sideMenu.classList.toggle('open');
    } else {
        console.error("sideMenu element not found");
    }
}