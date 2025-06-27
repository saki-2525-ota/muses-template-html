fetch('秘密の質問.json')
  .then((res) => res.json())
  .then((data) => {
    // 画像
    const img = document.createElement('img');
    img.src = data.image;
    document.body.appendChild(img);

    // ラベル
    const label = document.createElement('label');
    label.textContent = data.question.label;
    document.body.appendChild(label);

    // セレクトボックス
    const select = document.createElement('select');
    select.name = 'secret';
    select.id = 'secret';
    const defaultOpt = document.createElement('option');
    defaultOpt.disabled = true;
    defaultOpt.selected = true;
    defaultOpt.textContent = '設定した質問を選んでください';
    select.appendChild(defaultOpt);

    data.question.options.forEach((opt) => {
      const option = document.createElement('option');
      option.value = opt.value;
      option.textContent = opt.label;
      select.appendChild(option);
    });
    document.body.appendChild(select);
    document.body.appendChild(document.createElement('br'));

    // 入力欄
    const input = document.createElement('input');
    input.placeholder = '回答を入力';
    document.body.appendChild(input);
    document.body.appendChild(document.createElement('br'));

    // ボタン
    const button = document.createElement('button');
    button.textContent = '決定';
    button.onclick = () => {
      const selected = select.value;
      const answer = input.value.trim();
      if (!selected || !answer) {
        alert('質問と回答を入力してください');
      } else {
        location.href = data.next.href;
      }
    };
    document.body.appendChild(button);

    // 問い合わせ先
    const contactBox = document.createElement('div');
    contactBox.className = 'contact-box';
    contactBox.innerHTML = `
      <p>${data.contact.text}</p>
      <p>${data.contact.details}</p>
      <a href="${data.contact.url}">${data.contact.url}</a>
    `;
    document.body.appendChild(contactBox);

    // 戻るリンク
    const backLink = document.createElement('a');
    backLink.href = data.back.href;
    backLink.textContent = data.back.label;
    document.body.appendChild(backLink);
  });

