function pick(button) {
  const answerText = button.textContent || button.innerText;

  // Show feedback on page
  const finalAnswer = document.getElementById('finalAnswer');
  finalAnswer.textContent = "You clicked: " + answerText;
  finalAnswer.style.opacity = 1;

  // Set hidden form input and submit
  document.getElementById('buttonClicked').value = answerText;
  document.getElementById('feedbackForm').submit();

  console.log("Feedback sent: " + answerText);
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

  // Send feedback for this button
  document.getElementById('buttonClicked').value = button.textContent;
  document.getElementById('feedbackForm').submit();
}

// Go to choice section
function goToChoice(button) {
  document.getElementById('choiceSection').style.display = 'block';
  document.getElementById('choiceSection').scrollIntoView({ behavior: 'smooth' });

  // Send feedback
  document.getElementById('buttonClicked').value = button.textContent;
  document.getElementById('feedbackForm').submit();
}

// Choice yes/no buttons
function chooseYes(button) {
  document.getElementById('choiceResult').textContent = "Yeah… I knew it. There was never really a doubt, was there? 🙂";
  document.getElementById('choiceResult').style.opacity = 1;

  document.getElementById('finalStory').style.display = 'block';
  setTimeout(() => { document.getElementById('finalStory').scrollIntoView({ behavior: 'smooth' }); }, 600);

  // Send feedback
  document.getElementById('buttonClicked').value = button.textContent;
  document.getElementById('feedbackForm').submit();
}

function chooseNo(button) {
  document.getElementById('choiceResult').textContent = "oh oh oh wasnt expecting that but oh well i respect it, just send me a message because this website actually doesnt give a real life feedback";
  document.getElementById('choiceResult').style.opacity = 1;

  // Send feedback
  document.getElementById('buttonClicked').value = button.textContent;
  document.getElementById('feedbackForm').submit();
}

// Final story continuation
function showFullStory(button) {
  document.getElementById('fullStory').style.display = 'block';
  document.getElementById('fullStory').scrollIntoView({ behavior: 'smooth' });

  // Send feedback
  document.getElementById('buttonClicked').value = "Continue Story";
  document.getElementById('feedbackForm').submit();
}

// Last section
function showLastSection(button) {
  document.getElementById('lastSection').style.display = 'block';
  document.getElementById('lastSection').scrollIntoView({ behavior: 'smooth' });

  // Send feedback
  document.getElementById('buttonClicked').value = "Last Thing Clicked";
  document.getElementById('feedbackForm').submit();
}
