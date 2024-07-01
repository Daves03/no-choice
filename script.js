const gifUrls = [
    "giphy (8).gif",
      "giphy (1).gif",
      "giphy (2).gif",
      "giphy (3).gif",
      "giphy (4).gif",
      "giphy (5).gif",
      "giphy (9).gif",
      "giphy (10).gif",
      "giphy (6).gif"
  ];

  const excludedGifs = ["giphy (6).gif", "giphy (8).gif"]; // Gifs to be excluded from 'No' clicks

  let currentIndex = 0;

  const gifElement = document.getElementById("gif");
  const gifTextElement = document.getElementById("gif-text");
  const noButton = document.getElementById("button");
  const yesButton = document.getElementById("buttonyes");

  // Display initial GIF and text
  gifElement.style.display = "block";
  gifTextElement.style.display = "block";

  document.addEventListener("DOMContentLoaded", () => {
      gifElement.src = gifUrls[0];
      gifTextElement.textContent = "Can you be my girlfriend?";
  });

  noButton.addEventListener("click", () => {
      currentIndex = getNextValidIndex(currentIndex);
      gifElement.src = gifUrls[currentIndex];
      gifTextElement.style.display = "block";
      gifTextElement.textContent = "Can you be my girlfriend?";
  });

  function moveButton() {
      var button = document.getElementById('button');
      var buttonWidth = button.offsetWidth;
      var buttonHeight = button.offsetHeight;
      var screenWidth = window.innerWidth - buttonWidth;
      var screenHeight = window.innerHeight - buttonHeight - 500; // Adjust for button container height
      
      var randomX = Math.random() * screenWidth;
      var randomY = Math.random() * screenHeight;
      
      // Ensure button stays within the viewport
      if (randomX < 0) randomX = 0;
      if (randomX > screenWidth) randomX = screenWidth;
      if (randomY < 0) randomY = 0;
      if (randomY > screenHeight) randomY = screenHeight;
      
  }

  function showLove() {
      gifElement.src = "giphy (6).gif"; // Replace with your desired GIF for "Yes" response
      gifTextElement.textContent = "Really????, I love youuuuu!";
      gifElement.style.display = "block";
      gifTextElement.style.display = "block";
      
      // Disable further interaction
      noButton.disabled = true;
      yesButton.disabled = true;
      noButton.style.cursor = 'not-allowed';
      yesButton.style.cursor = 'not-allowed';
  }

  function getNextValidIndex(currentIndex) {
      let nextIndex = currentIndex + 1;
      if (nextIndex >= gifUrls.length) {
          nextIndex = 0;
      }
      while (excludedGifs.includes(gifUrls[nextIndex])) {
          nextIndex++;
          if (nextIndex >= gifUrls.length) {
              nextIndex = 0;
          }
      }
      return nextIndex;
  }