const inputEl = document.getElementById("name-input");
const spanEl = document.getElementById("name-output");

inputEl.addEventListener("input", onEnteryourName);

function onEnteryourName(event) {
  if (inputEl.value === "") {
    spanEl.textContent = "незнакомец";
  } else {
    spanEl.textContent = event.currentTarget.value;
  }
}
