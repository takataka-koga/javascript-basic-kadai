/*番号	合格基準
1	画面から取得したHTML要素が定数に代入されている
2	ボタンをクリックした際に正しく文字変更がされている */

  // output-btnというidを持つHTML要素を取得し、定数に代入する
  const Btn = document.getElementById('btn');
  const cge = document.getElementById('text');

  // HTML要素がクリックされたときにイベント処理を実行する
  Btn.addEventListener('click', () => {
    //HTMLの要素の編集をしたい、、、
    console.log('クリックされました！');
    cge.innerHTML = 'ボタンをクリックしました';

  });
