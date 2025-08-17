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


/**
 * ★★★【新設】ログアウト処理を実行する関数 ★★★
 */
function logout() {
    console.log('ログアウト処理を開始します...');
    
    // 1. 身分証明書（トークン）を記録保管庫から破棄する
    localStorage.removeItem('jwt_token');
    
    // 2. メモリ上のユーザー情報をリセットする
    currentUser = { userName: 'N/A', userEmail: 'N/A' };
    
    console.log('認証トークンを破棄しました。');
    
    // 3. ログインページへ強制的に移動させる
    //    ※ '/login' の部分は、君のサイトのログインページのURLに合わせて要修正
    window.location.href = '/login'; 
}

// ---【実行処理】---

// ページのHTMLが全て読み込まれた後の処理
document.addEventListener('DOMContentLoaded', () => {
    // ユーザー情報の取得を開始
    fetchUserData();

    // ★★★【新設】ログアウトボタンにクリックイベントを設定 ★★★
    const logoutBtn = document.getElementById('logoutButton');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', logout);
    }
});