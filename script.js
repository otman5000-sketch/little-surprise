// ===============================
// SECTION 1
// ===============================

// Function called by answer buttons
function pick(button) {
  const answerText = button.textContent || button.innerText;

  const finalAnswer = document.getElementById('finalAnswer');
  finalAnswer.textContent = "You clicked: " + answerText;
  finalAnswer.style.opacity = 1;

  console.log("Button clicked:", answerText);
}

// Continue to Section 2
function continueStory() {
  const next = document.getElementById('nextSection');
  next.style.display = 'block';
  next.scrollIntoView({ behavior: 'smooth' });
}


// ===============================
// SECTION 2
// ===============================

function finalPick(button) {
  const msg = document.getElementById('finalMessage');
  msg.textContent = "Good choice. This part matters.";
  msg.style.opacity = 1;

  const memory = document.getElementById('memorySection');
  memory.style.display = 'block';
  memory.scrollIntoView({ behavior: 'smooth' });

  console.log("Button clicked:", button.textContent);
}


// ===============================
// SECTION 3
// ===============================

function goToChoice(button) {
  const choiceSection = document.getElementById('choiceSection');
  choiceSection.style.display = 'block';
  choiceSection.scrollIntoView({ behavior: 'smooth' });

  console.log("Button clicked:", button.textContent);
}


// ===============================
// SECTION 4 (YES / NO)
// ===============================

function chooseYes(button) {
  const result = document.getElementById('choiceResult');
  result.textContent =
    "Yeah… I knew it. There was never really a doubt, was there? 🙂";
  result.style.opacity = 1;

  const finalStory = document.getElementById('finalStory');
  finalStory.style.display = 'block';

  setTimeout(() => {
    finalStory.scrollIntoView({ behavior: 'smooth' });
  }, 600);

  console.log("Button clicked:", button.textContent);
}

function chooseNo(button) {
  const result = document.getElementById('choiceResult');
  result.textContent =
    "oh oh oh wasnt expecting that but oh well i respect it, just send me a message because this website actually doesnt give a real life feedback";
  result.style.opacity = 1;

  console.log("Button clicked:", button.textContent);
}


// ===============================
// FINAL STORY
// ===============================

function showFullStory(button) {
  const fullStory = document.getElementById('fullStory');
  fullStory.style.display = 'block';
  fullStory.scrollIntoView({ behavior: 'smooth' });

  console.log("Continue Story clicked");
}

function showLastSection(button) {
  const lastSection = document.getElementById('lastSection');
  lastSection.style.display = 'block';
  lastSection.scrollIntoView({ behavior: 'smooth' });

  console.log("Last Thing clicked");
}
