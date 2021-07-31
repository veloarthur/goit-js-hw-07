const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ingredientsEl = document.getElementById("ingredients");
const arrayOfLis = [];

const elements = ingredients.map((el) => {
  const liElement = document.createElement("li");
  liElement.textContent = el;
  arrayOfLis.push(liElement);
  return liElement;
});

ingredientsEl.append(...arrayOfLis);
