import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createAnyElement(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 要素の作成
const createAnyElement = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li生成
  const li = document.createElement("li");
  li.innerText = text;

  // button生成(完了)
  const doneButton = document.createElement("button");
  doneButton.innerText = "完了";
  doneButton.addEventListener("click", () => {
    deleteFromIncompleteList(doneButton.parentNode);

    //完了リストのdiv要素を作成
    const div = document.createElement("div");
    div.className = "list-row";

    // li生成
    const li = document.createElement("li");
    li.innerText = doneButton.parentNode.firstElementChild.innerText;

    // button生成（戻す）
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    returnButton.addEventListener("click", () => {
      document
        .getElementById("complete-list")
        .removeChild(returnButton.parentNode);

      const text = returnButton.parentNode.firstElementChild.innerText;

      createAnyElement(text);
    });

    // div以下を初期化
    doneButton.parentNode.textContent = null;

    // divタグの子要素に各要素を設定
    div.appendChild(li);
    div.appendChild(returnButton);

    document.getElementById("complete-list").appendChild(div);
  });

  // button生成(削除)
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ（div）を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(doneButton);
  div.appendChild(deleteButton);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
