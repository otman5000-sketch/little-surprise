function pick(button) {
  const buttons = document.querySelectorAll(".answers button");
  buttons.forEach(b => b.classList.remove("selected"));

  button.classList.add("selected");

  const final = document.getElementById("finalAnswer");
  final.textContent = "Honestly? All of the above 🙂";
  final.style.opacity = 1;
}
