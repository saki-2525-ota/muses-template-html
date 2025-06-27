fetch('再発行.json')
  .then((res) => res.json())
  .then((data) => {
    // 画像
    const img = document.createElement('img');
    img.src = data.image;
    document.body.appendChild(img);

    // メッセージ
    const message = document.createElement('p');
    message.textContent = data.message;
    document.body.appendChild(message);

    // ボタン
    const button = document.createElement('button');
    button.textContent = data.button.label;
    button.onclick = () => {
      location.href = data.button.link;
    };
    document.body.appendChild(button);
  });
