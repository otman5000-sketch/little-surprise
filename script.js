function pick(button) {
  const buttons = document.querySelectorAll(".answers button");
  buttons.forEach(b => b.classList.remove("selected"));

  button.classList.add("selected");

  const final = document.getElementById("finalAnswer");
  final.textContent = "Honestly? All of the above 🙂";
  final.style.opacity = 1;
}
function pick(button) {
  const buttons = document.querySelectorAll(".answers button");
  buttons.forEach(b => b.classList.remove("selected"));

  button.classList.add("selected");

  const final = document.getElementById("finalAnswer");
  final.textContent = "Honestly? All of the above 🙂";
  final.style.opacity = 1;

  document.getElementById("continueBtn").style.opacity = 1;
}

function continueStory() {
  document.getElementById("nextSection").scrollIntoView({
    behavior: "smooth"
  });
}

function finalPick(choice) {
  const msg = document.getElementById("finalMessage");

  if (choice === "yes") {
    msg.textContent =
      "I like that 🙂\nNo pressure. Just two people enjoying the moment.";
  } else {
    msg.textContent =
      "That’s okay too 😌\nGood things don’t need to be rushed.";
  }

  msg.style.opacity = 1;
}
