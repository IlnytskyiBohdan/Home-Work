//  DZ 11.1

function createPifagorasTable(size) {
  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.justifyContent = "center";
 

  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";

  for (let i = 1; i <= size; i++) {
    const row = document.createElement("tr");

    for (let j = 1; j <= size; j++) {
      const cell = document.createElement("td");
      cell.textContent = i * j;
      cell.style.border = "1px solid black";
      cell.style.padding = "5px";
      cell.style.textAlign = "center";

      row.appendChild(cell);
    }

    table.appendChild(row);
  }

  container.appendChild(table);
  document.body.appendChild(container);
}

createPifagorasTable(10);







//  DZ 11.2

const textBlock = document.getElementById("textBlock");
const button = document.getElementById("colorToggleButton");

const originalColor = "black";
const newColor = "red";
let isOriginalColor = true;

button.addEventListener("click", function () {
  if (isOriginalColor) {
    textBlock.style.color = newColor;
  } else {
    textBlock.style.color = originalColor;
  }
  isOriginalColor = !isOriginalColor;
});






//  DZ 11.3

const imageFolderPath = "./img";

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
];

const randomIndex = Math.floor(Math.random() * images.length);
const randomImage = images[randomIndex];

const imageElement = document.getElementById("randomImage");
if (imageElement) {
  imageElement.src = `${imageFolderPath}/${randomImage}`;
} else {
  console.error('Елемент з id="randomImage" не знайдено в HTML');
}
