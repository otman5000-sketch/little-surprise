function pick(button) {
  const buttons = document.querySelectorAll(".intro-question .answers button");
  buttons.forEach(b => b.classList.remove("selected"));

  button.classList.add("selected");

  const final = document.getElementById("finalAnswer");
  final.textContent = "Honestly? All of the above 🙂";
  final.style.opacity = 1;

  const continueBtn = document.getElementById("continueBtn");
  continueBtn.style.opacity = 1;
  continueBtn.style.pointerEvents = "auto";
}

function continueStory() {
  const next = document.getElementById("nextSection");
  next.style.display = "block";

  next.scrollIntoView({
    behavior: "smooth"
  });
}

function finalPick() {
  const msg = document.getElementById("finalMessage");
  msg.textContent = "Good choice. This part matters.";
  msg.style.opacity = 1;

  const memory = document.getElementById("memorySection");
  memory.style.display = "block";

  setTimeout(() => {
    memory.scrollIntoView({ behavior: "smooth" });
  }, 400);
}

function revealNext() {
  const reveal = document.getElementById("revealText");
  reveal.textContent =
    "Someone who sees you clearly. Someone who isn’t intimidated by your depth — but drawn to it.";
  reveal.style.opacity = 1;
}
