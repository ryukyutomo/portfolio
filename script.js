const animatedTextElement = document.querySelector('.hero-title');
const text = "お好みのテキストを入力してください！"; // ここに表示したいテキストを設定
let index = 0;

function typeWriter() {
    if (index < text.length) {
        animatedTextElement.textContent = text.substring(0, index + 1);
        index++;
        setTimeout(typeWriter, 350); // タイピングの速度 (ms)
    } else {
        // アニメーション完了後の処理 (必要であれば)
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.fade-in-element');
    
    const onScroll = () => {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                element.classList.add('is-visible');
            }
        });
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); // 初期表示時にもチェック
});

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.fade-in-element2');
    
    const onScroll = () => {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                element.classList.add('is-visible2');
            }
        });
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); // 初期表示時にもチェック
});

