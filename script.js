// Function called by all buttons to pick an answer
function pick(button) {
  const answerText = button.textContent || button.innerText;

  // Show feedback on page
  const finalAnswer = document.getElementById('finalAnswer');
  finalAnswer.textContent = "You clicked: " + answerText;
  finalAnswer.style.opacity = 1;

  console.log("Picked: " + answerText);
}

// Continue to next section
function continueStory() {
  const next = document.getElementById('nextSection');
  next.style.display = 'block';
  next.scrollIntoView({ behavior: 'smooth' });
}

// Section 2 buttons
function finalPick(button) {
  const msg = document.getElementById('finalMessage');
  msg.textContent = "Good choice. This part matters.";
  msg.style.opacity = 1;

  document.getElementById('memorySection').style.display = 'block';
  document.getElementById('memorySection').scrollIntoView({ behavior: 'smooth' });

  console.log("Final pick: " + button.textContent);
}

// Go to choice section
function goToChoice(button) {
  document.getElementById('choiceSection').style.display = 'block';
  document.getElementById('choiceSection').scrollIntoView({ behavior: 'smooth' });

  console.log("Go to choice clicked: " + button.textContent);
}

// Choice yes/no buttons
function chooseYes(button) {
  document.getElementById('choiceResult').textContent = "Yeah… I knew it. There was never really a doubt, was there? 🙂";
  document.getElementById('choiceResult').style.opacity = 1;

  document.getElementById('finalStory').style.display = 'block';
  setTimeout(() => {
    document.getElementById('finalStory').scrollIntoView({ behavior: 'smooth' });
  }, 600);

  console.log("Chose Yes: " + button.textContent);
}

function chooseNo(button) {
  document.getElementById('choiceResult').textContent = "oh oh oh wasnt expecting that but oh well i respect it, just send me a message because this website actually doesnt give a real life feedback";
  document.getElementById('choiceResult').style.opacity = 1;

  console.log("Chose No: " + button.textContent);
}

// Final story continuation
function showFullStory(button) {
  document.getElementById('fullStory').style.display = 'block';
  document.getElementById('fullStory').scrollIntoView({ behavior: 'smooth' });

  console.log("Continue story clicked");
}

// Last section
function showLastSection(button) {
  document.getElementById('lastSection').style.display = 'block';
  document.getElementById('lastSection').scrollIntoView({ behavior: 'smooth' });

  console.log("Last thing clicked");
}
