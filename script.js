const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

// Select the audio elements
const ohHellNoSound = document.getElementById("oh-hell-no-sound");
const happySound = document.getElementById("happy-sound");

// Function to unlock sound on first interaction
const unlockAudio = () => {
  ohHellNoSound.muted = true;
  ohHellNoSound.play();
  ohHellNoSound.muted = false;

  // Remove event listeners after the first interaction
  document.body.removeEventListener("click", unlockAudio);
  document.body.removeEventListener("mouseover", unlockAudio);
};

// Add listeners to unlock sound on any first interaction
document.body.addEventListener("click", unlockAudio);
document.body.addEventListener("mouseover", unlockAudio);

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Ben de seni seviyorum :)";
  gif.src = "https://media1.giphy.com/media/iCVzZwwE6QNAV2tEE0/giphy.gif";

  // Play the happy sound when "Evet" is clicked
  happySound.play();
});

noBtn.addEventListener("mouseover", () => {
  // Play the "Oh hell no" sound when hovering over the "Hayır" button
  ohHellNoSound.play();

  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
