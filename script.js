// Send feedback with Formspree
function sendFeedback(buttonName) {
  const form = document.getElementById("feedbackForm");
  const hiddenInput = document.getElementById("buttonClicked");

  hiddenInput.value = buttonName;

  fetch(form.action, {
    method: form.method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(new FormData(form))
  })
  .then(response => {
    if (response.ok) {
      alert(`Feedback sent for button: "${buttonName}"! 🎉`);
      return response.json();
    } else {
      throw new Error("Network response was not ok");
    }
  })
  .catch(error => {
    alert("Oops! Something went wrong sending your feedback.");
    console.error("Form submission error:", error);
  });
}

// Handlers for all buttons:

function pick(button) {
  document.getElementById("finalAnswer").textContent = button.textContent;
  sendFeedback(button.textContent);
  // Show next section
  document.getElementById("nextSection").style.display = "block";
}

function continueStory(button) {
  sendFeedback(button.textContent);
  // Show next section(s)
  document.getElementById("nextSection").style.display = "none";
  document.getElementById("memorySection").style.display = "block";
}

function finalPick(button) {
  document.getElementById("finalMessage").textContent = button.textContent;
  sendFeedback(button.textContent);
  // Show next section
  document.getElementById("memorySection").style.display = "none";
  document.getElementById("choiceSection").style.display = "block";
}

function goToChoice(button) {
  sendFeedback(button.textContent);
  // Show choice section
  document.getElementById("choiceSection").style.display = "block";
}

function chooseYes(button) {
  sendFeedback(button.textContent);
  document.getElementById("choiceResult").textContent = "Great! You’re brave.";
  // Show final story section
  document.getElementById("choiceSection").style.display = "none";
  document.getElementById("finalStory").style.display = "block";
}

function chooseNo(button) {
  sendFeedback(button.textContent);
  document.getElementById("choiceResult").textContent = "No worries, maybe next time.";
  // Show final story section anyway
  document.getElementById("choiceSection").style.display = "none";
  document.getElementById("finalStory").style.display = "block";
}

function showFullStory(button) {
  sendFeedback(button.textContent);
  document.getElementById("finalStory").style.display = "none";
  document.getElementById("fullStory").style.display = "block";
}

function showLastSection(button) {
  sendFeedback(button.textContent);
  document.getElementById("fullStory").style.display = "none";
  document.getElementById("lastSection").style.display = "block";
}
