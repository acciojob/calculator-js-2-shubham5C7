//your JS code here. If required.
const calculator = document.querySelector(".calculator");

const input = document.getElementById("input");

function addToInput(value) {
  input.value += value;
}

function calculate() {
  try {
    input.value = eval(input.value);
  } catch {
    input.value = "Error";
  }
}


function clearInput() {
  input.value = "";
}

function backspace() {
  input.value = input.value.slice(0, -1);
}

document.querySelectorAll(".num").forEach(btn => {
  btn.addEventListener("click", () => addToInput(btn.id));
});

document.getElementById("plus").addEventListener("click", () => addToInput("+"));
document.getElementById("*").addEventListener("click", () => addToInput("*"));
document.getElementById("divi").addEventListener("click", () => addToInput("/"));
document.getElementById("op").addEventListener("click", () => addToInput("("));
document.getElementById("cl").addEventListener("click", () => addToInput(")"));
document.getElementById(".").addEventListener("click", () => addToInput("."));  


document.getElementById("c").addEventListener("click", clearInput);
document.getElementById("back").addEventListener("click", backspace);
document.getElementById("equal").addEventListener("click", calculate);