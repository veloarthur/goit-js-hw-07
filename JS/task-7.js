const inputEl = document.getElementById("font-size-control");
const spanEl = document.getElementById("text");

inputEl.min = "0";
inputEl.max = "100";
inputEl.step = "1";

inputEl.addEventListener("input", onMovingCrowler);
function onMovingCrowler() {
  spanEl.style.fontSize = inputEl.value + "px";
}
