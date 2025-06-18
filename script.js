// DOMの読み込みが完了してからスクリプトを実行
document.addEventListener('DOMContentLoaded', () => {

    // --- 共通データ ---
    // お知らせの全データをここに定義
    const newsData = [
        {
            date: '202x/04/20',
            from: '教務部　教務課',
            is_unread: true,
            subject: 'MUSESモバイルアプリの改善案の募集について',
            details: '詳細情報がここに入ります。'
        },
        {
            date: '202x/04/16',
            from: '学生部　学生課',
            is_unread: true,
            subject: '体育祭に参加しよう！',
            details: '詳細情報がここに入ります。'
        },
        {
            date: '2024/04/09',
            from: '社会情報学部',
            is_unread: false, // 既読の例
            subject: 'アプリケーション開発演習の履修条件について',
            details: '詳細情報がここに入ります。'
        }
    ];

    // --- index.html用処理 ---
    const infoContainer = document.getElementById('information');
    if (infoContainer) {
        // 日付で降順にソート（新しい順）
        const sortedNews = newsData.slice().sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });

        // 新しい2件だけ表示
        sortedNews.slice(0, 2).forEach(item => {
            const a = document.createElement('a');
            // 元配列のインデックスを使うためindexOfで取得
            const originalIndex = newsData.indexOf(item);
            a.href = `menu.html?news=${originalIndex}`;
            a.textContent = `${item.date}: ${item.subject}`;
            a.style.display = 'block';
            a.style.color = '#000';
            a.style.textDecoration = 'none';
            a.style.padding = '4px 0';
            a.style.cursor = 'pointer';

            a.addEventListener('mouseenter', () => {
                a.style.textDecoration = 'underline';
            });
            a.addEventListener('mouseleave', () => {
                a.style.textDecoration = 'none';
            });

            infoContainer.appendChild(a);
        });
    }});