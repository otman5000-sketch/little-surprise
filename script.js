// Hide all sections except the first one when page loads
document.addEventListener("DOMContentLoaded", function () {
  const sections = [
    "nextSection",
    "memorySection",
    "choiceSection",
    "finalStory",
    "fullStory",
    "lastSection"
  ];

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = "none";
  });
});


// Show section helper
function showSection(id) {
  const section = document.getElementById(id);
  section.style.display = "block";
  section.scrollIntoView({ behavior: "smooth" });
}


// SECTION 1
function pick(button) {
  const answerText = button.textContent;
  const finalAnswer = document.getElementById("finalAnswer");

  finalAnswer.textContent = "Interesting choice 🙂";
  finalAnswer.style.opacity = 1;
}


// CONTINUE BUTTON (ARE YOU READY FOR ADVENTURE)
function continueStory() {
  showSection("nextSection");
}


// SECTION 2
function finalPick() {
  const msg = document.getElementById("finalMessage");
  msg.textContent = "Good choice. This part matters.";
  msg.style.opacity = 1;

  setTimeout(() => {
    showSection("memorySection");
  }, 400);
}


// SECTION 3
function goToChoice() {
  showSection("choiceSection");
}


// SECTION 4
function chooseYes() {
  const result = document.getElementById("choiceResult");
  result.textContent = "Yeah… I knew it. There was never really a doubt, was there? 🙂";
  result.style.opacity = 1;

  setTimeout(() => {
    showSection("finalStory");
  }, 600);
}

function chooseNo() {
  const result = document.getElementById("choiceResult");
  result.textContent = "oh oh oh wasnt expecting that but oh well i respect it, just send me a message because this website actually doesnt give real feedback";
  result.style.opacity = 1;
}


// FINAL STORY
function showFullStory() {
  showSection("fullStory");
}


// LAST SECTION
function showLastSection() {
  showSection("lastSection");
}
