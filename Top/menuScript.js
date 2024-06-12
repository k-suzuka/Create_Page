document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    const menuIcon = document.querySelector('.menu-icon');
    menuIcon.addEventListener('click', toggleMenu);
});

// メニュー表示/非表示のトグル関数
function toggleMenu() {
    const sideMenu = document.getElementById('sideMenu');
    if (sideMenu) {
        sideMenu.classList.toggle('open');
    } else {
        console.error("sideMenu element not found");
    }
}