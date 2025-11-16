const gameArea = document.getElementById("game");

// 隨機放置星星
let correctIndex = Math.floor(Math.random() * 9);

// 建立 9 格
for (let i = 0; i < 9; i++) {
  let box = document.createElement("div");
  box.className = "box";
  box.dataset.index = i;

  box.addEventListener("click", () => {
    if (i == correctIndex) {
      box.textContent = "⭐";
      alert("你找到星星了！");
    } else {
      box.textContent = "❌";
    }
  });

  gameArea.appendChild(box);
}