// SECTION 1: Pick an answer
function pick(button) {
  const buttons = document.querySelectorAll(".intro-question .answers button");
  buttons.forEach(b => b.classList.remove("selected")); // remove previous selection

  button.classList.add("selected"); // highlight clicked button

  const final = document.getElementById("finalAnswer");
  final.textContent = "Honestly? All of the above 🙂";
  final.style.opacity = 1;

  const continueBtn = document.getElementById("continueBtn");
  continueBtn.style.opacity = 1;
  continueBtn.style.pointerEvents = "auto";
}

// SECTION 1 -> 2: Continue
function continueStory() {
  const next = document.getElementById("nextSection");
  next.style.display = "block";
  next.scrollIntoView({ behavior: "smooth" });
}

// SECTION 2: Yes/No options
function finalPick(button) {
  const msg = document.getElementById("finalMessage");

  if (button.textContent.includes("smiling") || button.textContent.includes("Keep going")) {
    msg.textContent = "I like that 🙂\nNo pressure.\nJust two people enjoying the moment.";
  } else {
    msg.textContent = "That’s totally okay 😌\nGood things don’t need to be rushed.";
  }

  msg.style.opacity = 1;

  const memorySection = document.getElementById("memorySection");
  memorySection.style.display = "block";
  memorySection.scrollIntoView({ behavior: "smooth" });
}

// SECTION 3: Choice Section
function goToChoice(button) {
  const choiceSection = document.getElementById("choiceSection");
  choiceSection.style.display = "block";
  choiceSection.scrollIntoView({ behavior: "smooth" });
}

// SECTION 4: Yes/No choice
function chooseYes(button) {
  const choiceResult = document.getElementById("choiceResult");
  choiceResult.textContent = "Yeah… I knew it. There was never really a doubt, was there? 🙂";
  choiceResult.style.opacity = 1;

  const finalStory = document.getElementById("finalStory");
  finalStory.style.display = "block";
  setTimeout(() => finalStory.scrollIntoView({ behavior: "smooth" }), 600);
}

function chooseNo(button) {
  const choiceResult = document.getElementById("choiceResult");
  choiceResult.textContent = "oh oh oh wasnt expecting that but oh well i respect it, just send me a message because this website actually doesnt give a real life feedback";
  choiceResult.style.opacity = 1;
}

// FINAL STORY CONTINUATION
function showFullStory(button) {
  const fullStory = document.getElementById("fullStory");
  fullStory.style.display = "block";
  fullStory.scrollIntoView({ behavior: "smooth" });
}

// LAST SECTION
function showLastSection(button) {
  const lastSection = document.getElementById("lastSection");
  lastSection.style.display = "block";
  lastSection.scrollIntoView({ behavior: "smooth" });
}
