const categorysList = document.querySelectorAll("li.item");
const animalsQuantity = categorysList[0].lastElementChild.children.length;
const productsQuantity = categorysList[1].lastElementChild.children.length;
const technologysQuantity = categorysList[2].lastElementChild.children.length;

console.log(`В списке ${categorysList.length} категории.`);

console.log(`Категория: ${categorysList[0].firstElementChild.textContent}
Количество элементов: ${animalsQuantity}`);
console.log(`Категория: ${categorysList[1].firstElementChild.textContent}
Количество элементов: ${productsQuantity}`);
console.log(`Категория: ${categorysList[2].firstElementChild.textContent}
Количество элементов: ${technologysQuantity}`);
