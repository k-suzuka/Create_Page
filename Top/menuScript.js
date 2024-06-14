document.addEventListener('DOMContentLoaded', () => {
    // DOMの読み込みが完了したことを確認
    const menuIcon = document.querySelector('.menu-icon');

    // クリックイベントリスナーを追加
    menuIcon.addEventListener('click', toggleMenu);

    // キーボード操作もサポート
    menuIcon.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault(); // デフォルトのスペーススクロールを無効にする
            toggleMenu();
        }
    });
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