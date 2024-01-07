window.addEventListener('load', () => { // ページロードで処理開始
    var progressBar = document.getElementById("myBar"); // プログレスバーの要素を取得
    var progressContainer = document.querySelector(".progress-container"); // 親要素を取得
    var width = 1; // widthの指定
    var interval = setInterval(function() { //setIntervalで特定の処理を繰り返す
        if (width >= 100) { // ifで条件分岐
        clearInterval(interval);
        progressContainer.style.display = "none"; // 非表示に
        } else {
        width++;
        progressBar.style.width = width + "%"; // プログレスバーののサイズ可変
        }
    }, 10);
});
