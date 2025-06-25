document.addEventListener('DOMContentLoaded', () => {
  const infoContainer = document.getElementById('information');

  if (infoContainer) {
    fetch('date.json') // 外部JSONを読み込む
      .then(response => {
        if (!response.ok) {
          throw new Error('ニュースデータの取得に失敗しました');
        }
        return response.json();
      })
      .then(data => {
        const newsData = data.newsData;

        const sortedNews = newsData.slice().sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        });

        sortedNews.slice(0, 2).forEach(item => {
          const a = document.createElement('a');
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
      })
      .catch(error => {
        console.error('読み込みエラー:', error);
        infoContainer.textContent = 'ニュースの読み込みに失敗しました。';
      });
  }
});
