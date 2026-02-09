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

function finalPick(choice) {
  const msg = document.getElementById("finalMessage");

  if (choice === "yes") {
    msg.textContent =
      "I like that 🙂\nNo pressure.\nJust two people enjoying the moment.";
  } else {
    msg.textContent =
      "That’s totally okay 😌\nGood things don’t need to be rushed.";
  }

  msg.style.opacity = 1;
}
