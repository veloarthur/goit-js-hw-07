let counterValue = document.getElementById("value");
const decrementButton = document.querySelector(
  'button[data-action^="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action^="increment"]'
);
let counter = 0;
const decrement = () => {
  counterValue.textContent = counter -= 1;
};
const increment = () => {
  counterValue.textContent = counter += 1;
};

decrementButton.addEventListener("click", decrement);
incrementButton.addEventListener("click", increment);
