/* ==========================================================================
   A1 Project - Main JavaScript
   編纂責任者：アーキテクト
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // --- ページに応じてアクティブなナビゲーションを設定 ---
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.main-nav .nav-item a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.parentElement.classList.add('active');
        }
    });

    // --- プログラムページのナビゲーション ---
    const programNavLinks = document.querySelectorAll('.program-nav .nav-item a');
    if (programNavLinks.length > 0) {
        programNavLinks.forEach(link => {
            const linkPage = link.getAttribute('href').split('/').pop();
            if (linkPage === currentPage) {
                link.parentElement.classList.add('active');
            }
        });
    }

    // --- その他の動的処理（必要に応じて追加） ---
    console.log("A1 Project Frontend: Initialized.");
});



/* ==========================================================================
   Hamburger Menu Control
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.site-overlay');

    if (hamburger && sidebar && overlay) {
        // ハンバーガーボタンをクリックした時の動作
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('is-open');
            sidebar.classList.toggle('is-open');
            overlay.classList.toggle('is-open');
        });

        // オーバーレイをクリックした時の動作
        overlay.addEventListener('click', () => {
            hamburger.classList.remove('is-open');
            sidebar.classList.remove('is-open');
            overlay.classList.remove('is-open');
        });
    }
});