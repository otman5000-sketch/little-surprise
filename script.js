// Pick an answer from Section 1
function pick(button) {
  const answerText = button.textContent || button.innerText;

  // Show feedback
  const finalAnswer = document.getElementById('finalAnswer');
  finalAnswer.textContent = "You clicked: " + answerText;
  finalAnswer.style.opacity = 1;

  // Make the continue button visible
  const continueBtn = document.getElementById('continueBtn');
  continueBtn.style.opacity = 1;
  continueBtn.style.pointerEvents = 'auto';

  console.log("Picked:", answerText);
}

// Continue to Section 2
function continueStory() {
  const nextSection = document.getElementById('nextSection');
  nextSection.style.display = 'block';
  nextSection.scrollIntoView({ behavior: 'smooth' });
}

// Section 2 buttons
function finalPick(button) {
  const msg = document.getElementById('finalMessage');
  msg.textContent = "Good choice. This part matters.";
  msg.style.opacity = 1;

  const memorySection = document.getElementById('memorySection');
  memorySection.style.display = 'block';
  memorySection.scrollIntoView({ behavior: 'smooth' });

  console.log("Final pick:", button.textContent);
}

// Go to choice section
function goToChoice(button) {
  const choiceSection = document.getElementById('choiceSection');
  choiceSection.style.display = 'block';
  choiceSection.scrollIntoView({ behavior: 'smooth' });

  console.log("Go to choice clicked:", button.textContent);
}

// Choice yes/no buttons
function chooseYes(button) {
  const choiceResult = document.getElementById('choiceResult');
  choiceResult.textContent = "Yeah… I knew it. There was never really a doubt, was there? 🙂";
  choiceResult.style.opacity = 1;

  const finalStory = document.getElementById('finalStory');
  finalStory.style.display = 'block';
  setTimeout(() => {
    finalStory.scrollIntoView({ behavior: 'smooth' });
  }, 600);

  console.log("Chose Yes:", button.textContent);
}

function chooseNo(button) {
  const choiceResult = document.getElementById('choiceResult');
  choiceResult.textContent = "oh oh oh wasnt expecting that but oh well i respect it, just send me a message because this website actually doesnt give a real life feedback";
  choiceResult.style.opacity = 1;

  console.log("Chose No:", button.textContent);
}

// Continue final story
function showFullStory(button) {
  const fullStory = document.getElementById('fullStory');
  fullStory.style.display = 'block';
  fullStory.scrollIntoView({ behavior: 'smooth' });

  console.log("Continue story clicked");
}

// Show last section
function showLastSection(button) {
  const lastSection = document.getElementById('lastSection');
  lastSection.style.display = 'block';
  lastSection.scrollIntoView({ behavior: 'smooth' });

  console.log("Last thing clicked");
}
