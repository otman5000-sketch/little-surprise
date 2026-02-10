function pick(button) {
  const buttons = document.querySelectorAll(".intro-question .answers button");
  buttons.forEach(b => b.classList.remove("selected"));
  button.classList.add("selected");

  const finalAnswer = document.getElementById("finalAnswer");
  finalAnswer.textContent = "Honestly? All of the above 🙂";
  finalAnswer.style.opacity = 1;

  const continueBtn = document.getElementById("continueBtn");
  continueBtn.style.opacity = 1;
  continueBtn.style.pointerEvents = "auto";
}

function continueStory() {
  const next = document.getElementById("nextSection");
  next.style.display = "block";
  next.scrollIntoView({ behavior: "smooth" });
}

function finalPick() {
  const msg = document.getElementById("finalMessage");
  msg.textContent = "Good choice. This part matters.";
  msg.style.opacity = 1;

  const memory = document.getElementById("memorySection");
  memory.style.display = "block";
  memory.scrollIntoView({ behavior: "smooth" });
}

function goToChoice() {
  const choice = document.getElementById("choiceSection");
  choice.style.display = "block";
  choice.scrollIntoView({ behavior: "smooth" });
}

function chooseYes() {
  const result = document.getElementById("choiceResult");
  result.textContent =
    "Yeah… I knew it. There was never really a doubt, was there? 🙂";
  result.style.opacity = 1;

  const story = document.getElementById("finalStory");
  story.style.display = "block";

  setTimeout(() => {
    story.scrollIntoView({ behavior: "smooth" });
  }, 600);
}

function chooseNo() {
  const result = document.getElementById("choiceResult");
  result.textContent =
    "That’s okay. Some things are powerful enough just to be seen.";
  result.style.opacity = 1;
}
