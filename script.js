// ===========================
// HELPER: Send feedback via Formspree
// ===========================
function sendFeedback(button) {
  const input = document.getElementById("buttonClicked");
  input.value = button.textContent;

  const formData = new FormData(document.getElementById("feedbackForm"));

  fetch("https://formspree.io/f/mbdalbkb", {
    method: "POST",
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      showFeedbackNotice();
    } else {
      console.error("Feedback failed:", response.statusText);
    }
  })
  .catch(error => {
    console.error("Error sending feedback:", error);
  });
}

// Small popup notification
function showFeedbackNotice() {
  const notice = document.createElement("div");
  notice.textContent = "Feedback sent!";
  notice.style.position = "fixed";
  notice.style.bottom = "20px";
  notice.style.right = "20px";
  notice.style.padding = "10px 15px";
  notice.style.background = "#4CAF50";
  notice.style.color = "#fff";
  notice.style.borderRadius = "5px";
  notice.style.fontFamily = "sans-serif";
  notice.style.fontSize = "14px";
  notice.style.zIndex = 9999;
  document.body.appendChild(notice);
  setTimeout(() => notice.remove(), 2000);
}

// ===========================
// SECTION 1: Intro Question
// ===========================
function pick(button) {
  sendFeedback(button); // <-- send feedback

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

// ===========================
// SECTION 2: Next Question
// ===========================
function finalPick(button) {
  if(button) sendFeedback(button); // <-- send feedback if passed

  const msg = document.getElementById("finalMessage");
  msg.textContent = "Good choice. This part matters.";
  msg.style.opacity = 1;

  const memory = document.getElementById("memorySection");
  memory.style.display = "block";
  memory.scrollIntoView({ behavior: "smooth" });
}

// ===========================
// SECTION 3: Memory Section
// ===========================
function goToChoice(button) {
  if(button) sendFeedback(button); // <-- send feedback if passed

  const choice = document.getElementById("choiceSection");
  choice.style.display = "block";
  choice.scrollIntoView({ behavior: "smooth" });
}

// ===========================
// SECTION 4: Choice Section
// ===========================
function chooseYes(button) {
  if(button) sendFeedback(button); // <-- send feedback

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

function chooseNo(button) {
  if(button) sendFeedback(button); // <-- send feedback

  const result = document.getElementById("choiceResult");
  result.textContent =
    "oh oh oh wasnt expecting that but oh well i respect it, just send me a message because this website actually doesnt give a real life feedback";
  result.style.opacity = 1;
}

// ===========================
// FINAL STORY
// ===========================
function showFullStory(button) {
  if(button) sendFeedback(button); // <-- send feedback

  const full = document.getElementById("fullStory");
  full.style.display = "block";
  full.scrollIntoView({ behavior: "smooth" });
}

function showLastSection(button) {
  if(button) sendFeedback(button); // <-- send feedback

  const last = document.getElementById("lastSection");
  last.style.display = "block";
  last.scrollIntoView({ behavior: "smooth" });
}
