// DOM要素の取得
const typingText = document.getElementById('typing-text');
const cursor = document.getElementById('cursor');
const specialTextContainer = document.createElement('span');

// タイピングするテキスト
const text = "これは問題なく動作しているかのテストです。\n順序通りに文章が表示されていきます。\n確認できていれば幸いです。";
specialTextContainer.id = 'line';

let index = 0;
const speed = 150; // タイピング速度 (ミリ秒)
const delayAfterTyping = 3000; // タイピング後の遅延 (ミリ秒)

// タイピング関数
function type() {
    if (index < text.length) {
        const char = text.charAt(index);
        if (char === "\n") {
            typingText.innerHTML = typingText.innerHTML.trim(); // 改行前のトリム
            typingText.innerHTML += "<br>";
        } else {
            typingText.innerHTML += char;
        }
        index++;
        setTimeout(type, speed);
    } else {
        // タイピングが完了したら
        typingText.appendChild(specialTextContainer);
        specialTextContainer.style.visibility = 'visible';
        cursor.style.display = "none"; // カーソルを非表示にする

        // フェードアウトとリダイレクト
        setTimeout(() => {
            document.documentElement.classList.add('fade-out');
            document.body.classList.add('fade-out');
            setTimeout(redirectToHome, 1000);
        }, delayAfterTyping);
    }
}

// ページ遷移関数
function redirectToHome() {
    window.location.href = "../Top/top.html";
}

// DOMが完全に読み込まれた際の処理
document.addEventListener('DOMContentLoaded', () => {
    type(); // タイピング開始
});