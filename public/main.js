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

/* ==========================================================================
   Logout Protocol
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logout-button');

    if (logoutButton) {
        logoutButton.addEventListener('click', (e) => {
            e.preventDefault(); // リンクのデフォルト動作を停止

            // 国民の通行許可証（トークン）を破棄する
            localStorage.removeItem('jwt_token');

            // 帝国の玄関（ログインページ）へ強制送還する
            window.location.href = '/login';
        });
    }
});



/* ==========================================================================
   Final Navigation Protocol
   テックプリーストによる、最後の光の儀式
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {

    // --- サブメニュー開閉の儀式 ---
    const submenuToggles = document.querySelectorAll('.submenu-toggle');
    submenuToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            const parentItem = toggle.closest('.has-submenu');
            if (parentItem.classList.contains('is-open')) {
                // 開いているなら、何もしない（リンクとして機能させる）
            } else {
                e.preventDefault(); // 閉じているなら、リンクを止め、
                parentItem.classList.add('is-open'); // メニューを開く
            }
        });
    });

    // --- 現在地表示の儀式 ---
    const currentPath = window.location.pathname;
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        const link = item.querySelector('a');
        if (!link) return;

        const href = link.getAttribute('href');

        // 親メニュー（宝物庫など）の場合
        if (item.classList.contains('has-submenu')) {
            if (currentPath.startsWith(href)) {
                item.classList.add('is-active');
            }
        } 
        // 通常のメニューの場合
        else {
            if (href === currentPath) {
                item.classList.add('is-active');
            }
        }
    });
});