function sendFeedback(button) {
  const form = document.getElementById("feedbackForm");
  const input = document.getElementById("buttonClicked");
  input.value = button.textContent; // Save which button was clicked
  form.submit(); // Send to Formspree
}

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

  sendFeedback(button); // Send Formspree feedback
}

function continueStory(button) {
  const next = document.getElementById("nextSection");
  next.style.display = "block";
  next.scrollIntoView({ behavior: "smooth" });
  sendFeedback(button);
}

function finalPick(button) {
  const msg = document.getElementById("finalMessage");
  msg.textContent = "Good choice. This part matters.";
  msg.style.opacity = 1;

  const memory = document.getElementById("memorySection");
  memory.style.display = "block";
  memory.scrollIntoView({ behavior: "smooth" });

  sendFeedback(button);
}

function goToChoice(button) {
  const choice = document.getElementById("choiceSection");
  choice.style.display = "block";
  choice.scrollIntoView({ behavior: "smooth" });

  sendFeedback(button);
}

function chooseYes(button) {
  const result = document.getElementById("choiceResult");
  result.textContent =
    "Yeah… I knew it. There was never really a doubt, was there? 🙂";
  result.style.opacity = 1;

  const story = document.getElementById("finalStory");
  story.style.display = "block";

  setTimeout(() => {
    story.scrollIntoView({ behavior: "smooth" });
  }, 600);

  sendFeedback(button);
}

function chooseNo(button) {
  const result = document.getElementById("choiceResult");
  result.textContent =
    "oh oh oh wasnt expecting that but oh well i respect it, just send me a message because this website actually doesnt give a real life feedback";
  result.style.opacity = 1;

  sendFeedback(button);
}

function showFullStory(button) {
  const full = document.getElementById("fullStory");
  full.style.display = "block";
  full.scrollIntoView({ behavior: "smooth" });

  sendFeedback(button);
}

function showLastSection(button) {
  const last = document.getElementById("lastSection");
  last.style.display = "block";
  last.scrollIntoView({ behavior: "smooth" });

  sendFeedback(button);
}
