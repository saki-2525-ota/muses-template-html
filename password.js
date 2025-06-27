fetch('password.json')
  .then((res) => res.json())
  .then((data) => {
    // 画像
    const img = document.createElement('img');
    img.src = data.image;
    document.body.appendChild(img);

    // フォームタイトル
    const title = document.createElement('label');
    title.textContent = data.form.title;
    title.className = 'label';
    document.body.appendChild(title);

    // 入力フィールド
    data.form.fields.forEach((field) => {
      const input = document.createElement('input');
      input.type = field.type;
      input.placeholder = field.placeholder;
      input.id = field.id;
      document.body.appendChild(input);
      document.body.appendChild(document.createElement('br'));
    });

    // ボタン
    data.form.buttons.forEach((btn) => {
      const button = document.createElement('button');
      button.textContent = btn.label;
      button.onclick = () => {
        if (btn.action === 'submitUsername') {
          const username = document.getElementById('username').value;
          if (!username) {
            alert('ユーザー名を入力してください');
          } else {
            sessionStorage.username = username;
            location.href = data.links[0].href; // 秘密の質問ページへ
          }
        }
      };
      document.body.appendChild(button);
      document.body.appendChild(document.createElement('br'));
    });

    // 問い合わせ先
    const contactDiv = document.createElement('div');
    contactDiv.className = 'contact contact-box';
    data.contact.info.forEach((item) => {
      if (typeof item === 'string') {
        const p = document.createElement('p');
        p.textContent = item;
        contactDiv.appendChild(p);
      } else if (item.type === 'link') {
        const a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.text;
        contactDiv.appendChild(a);
      }
    });
    document.body.appendChild(contactDiv);

    // その他リンク
    const backLink = document.createElement('a');
    backLink.href = data.links[1].href;
    backLink.textContent = data.links[1].label;
    document.body.appendChild(backLink);
  });
