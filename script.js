// Helper function to show a section smoothly
function showSection(id) {
  const section = document.getElementById(id);
  section.style.display = "block";
  setTimeout(() => {
    section.scrollIntoView({ behavior: "smooth" });
  }, 100);
}

// Function called by all buttons to pick an answer
function pick(button) {
  const answerText = button.textContent || button.innerText;

  const finalAnswer = document.getElementById('finalAnswer');
  finalAnswer.textContent = "You clicked: " + answerText;
  finalAnswer.style.opacity = 1;
}

// Continue to next section
function continueStory() {
  showSection("nextSection");
}

// Section 2 buttons
function finalPick(button) {
  const msg = document.getElementById('finalMessage');
  msg.textContent = "Good choice. This part matters.";
  msg.style.opacity = 1;

  showSection("memorySection");
}

// Go to choice section
function goToChoice() {
  showSection("choiceSection");
}

// Choice yes/no buttons
function chooseYes() {
  document.getElementById('choiceResult').textContent =
    "Yeah… I knew it. There was never really a doubt, was there? 🙂";
  document.getElementById('choiceResult').style.opacity = 1;

  setTimeout(() => {
    showSection("finalStory");
  }, 600);
}

function chooseNo() {
  document.getElementById('choiceResult').textContent =
    "oh oh oh wasnt expecting that but oh well i respect it, just send me a message because this website actually doesnt give a real life feedback";
  document.getElementById('choiceResult').style.opacity = 1;
}

// Final story continuation
function showFullStory() {
  showSection("fullStory");
}

// Last section
function showLastSection() {
  showSection("lastSection");
}
