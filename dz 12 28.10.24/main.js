//  DZ 12.1

const inputLink = document.querySelector(".inputLink");
const navLink = document.querySelector(".navLink");

let = "";

inputLink.addEventListener("click", function () {
  link = prompt("Пожалуйста, введите ссылку, по которой хотите перейти");
});

navLink.addEventListener("click", function () {
  window.location.href = link;
});

//  DZ 12.2

const buttonBlock = document.querySelector(".buttonBlock");

buttonBlock.addEventListener("click", function (event) {
  const buttonText = event.target.textContent;
  alert(`Клікнуто на кнопці: ${buttonText}`);
});

//  DZ 12.3

const textList = document.getElementById("textList");
const newText = document.getElementById("newText");
const addTextButton = document.getElementById("addTextButton");

addTextButton.addEventListener("click", function () {
  const newTextItem = newText.value.trim();
  if (newTextItem) {
    const newTextInput = document.createElement("li");
    newTextInput.classList.add("text-item");
    newTextInput.innerHTML = `${newTextItem} <button class="delete">Видалити</button>`;
    textList.appendChild(newTextInput);
    newText.value = "";
  }
});

textList.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    const textItem = event.target.closest("li");
    textList.removeChild(textItem);
  }
});
