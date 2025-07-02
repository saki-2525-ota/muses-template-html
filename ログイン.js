document.addEventListener('DOMContentLoaded', async () => {
  const res = await fetch('ログイン.json');
  const config = await res.json();

  const container = document.getElementById('form-container');

  // フィールドを生成
  config.form.fields.forEach((field) => {
    const label = document.createElement('label');
    label.textContent = field.label;

    const input = document.createElement('input');
    input.type = field.type;
    input.id = field.id;

    container.appendChild(label);
    container.appendChild(document.createElement('br'));
    container.appendChild(input);
    container.appendChild(document.createElement('br'));
  });

  // ボタン行
  const btnRow = document.createElement('div');
  btnRow.className = 'button-row';

  config.form.buttons.forEach((btn) => {
    if (btn.link) {
      const a = document.createElement('a');
      a.href = btn.link;
      const b = document.createElement('button');
      b.textContent = btn.label;
      a.appendChild(b);
      btnRow.appendChild(a);
    } else {
      const b = document.createElement('button');
      b.textContent = btn.label;
      b.id = btn.id;
      b.addEventListener('click', () => {
        if (btn.action === 'login') {
          const username = document.getElementById('username').value;
          if (!username) {
            alert('ユーザー名を入力してください');
          } else {
            sessionStorage.username = username;
            location.href = 'index.html';
          }
        } else if (btn.action === 'goPC') {
          location.href = 'メニュー.html';
        }
      });
      btnRow.appendChild(b);
    }
  });

  container.appendChild(btnRow);

  // 追加リンク
  config.form.extraLinks.forEach((link) => {
    const a = document.createElement('a');
    a.href = link.link;
    a.textContent = link.label;
    container.appendChild(a);
  });
});

