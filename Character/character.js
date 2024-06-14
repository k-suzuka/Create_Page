document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menuIcon');
    const sideMenu = document.getElementById('sideMenu');
    const mainContent = document.getElementById('mainContent');
    const images = document.querySelectorAll('.open-img');
    const modal = document.getElementById('myModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    const closeModalBtn = document.getElementById('closeModalBtn');

    menuIcon.addEventListener('click', () => {
        sideMenu.classList.toggle('open');
        mainContent.classList.toggle('shift');
        setTimeout(() => {
            console.log('mainContent margin-left:', getComputedStyle(mainContent).marginLeft);
        }, 500); // 500ms待ってからログを出力（アニメーションの終了後）
    });

    images.forEach(image => {
        image.addEventListener('click', () => {
            const title = image.getAttribute('data-title');
            const content = image.getAttribute('data-content');

            modalTitle.textContent = title;
            modalContent.textContent = content;
            modal.style.display = 'block';
        });
    });

    // 閉じるボタンでモーダルを閉じる
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // モーダル外をクリックでモーダルを閉じる
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});