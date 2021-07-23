const inputEl = document.querySelector("input");
const renderButtonEl = document.querySelector('[data-action^="render"]');
const destroyButtonEl = document.querySelector('[data-action^="destroy"]');
const divBoxEl = document.getElementById("boxes");

renderButtonEl.addEventListener("click", createBoxes);

function createBoxes(amount) {
  amount = inputEl.value;
  let arr = [];
  for (let i = 0; i < amount; i++) {
    const newDiv = document.createElement("div");
    newDiv.style.backgroundColor =
      "#" +
      (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase();
    newDiv.style.width = "30px";
    newDiv.style.height = "30px";
    newDiv.style.margin = "0 2px 2px 0";
    arr[i] = newDiv;
  }
  arr.forEach((el, index) => {
    el.style.height = Number.parseInt(el.style.height) + index * 10 + "px";
    el.style.width = Number.parseInt(el.style.width) + index * 10 + "px";
  });
  divBoxEl.append(...arr);
}

destroyButtonEl.addEventListener("click", () => (divBoxEl.innerHTML = ""));
