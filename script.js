const slider = document.getElementById("guessSlider");
const text = document.getElementById("answerText");

const answers = {
  1: "A subtle flex that I can build a website 😌",
  2: "Something I made because I’m a little unhinged 🙃",
  3: "A small thing I wanted to make just for you 🙂",
  4: "A cry for help — I’ve clearly overthought this 🫠"
};

function updateText() {
  text.textContent = answers[slider.value];
}

slider.addEventListener("input", updateText);
updateText();
