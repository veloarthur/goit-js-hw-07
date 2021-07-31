const inputEl = document.getElementById("validation-input");

inputEl.addEventListener("blur", onEnterSomeSymbols);
function onEnterSomeSymbols() {
  if (inputEl.value.length === 6) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
    console.log("true");
  } else {
    console.log("false");
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}
