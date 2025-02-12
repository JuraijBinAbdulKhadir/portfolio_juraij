const headingText = "Hi, I'm Juraij Bin Abdul Khadir"; // Replace [Your Name] with your actual name
const headingElement = document.getElementById('typing-heading');
let index = headingText.indexOf(','); // Start index at the comma
let isDeleting = false;

function typeLoop() {
  const currentText = headingElement.textContent;

  if (!isDeleting) {
    // Typing forward
    headingElement.textContent = headingText.substring(0, index + 1);
    index++;

    // If the text is fully typed, start deleting
    if (index === headingText.length) {
      isDeleting = true;
      setTimeout(typeLoop, 1000); // Pause before deleting
    } else {
      setTimeout(typeLoop, 100); // Typing speed
    }
  } else {
    // Deleting backward, but only until the comma
    if (index > headingText.indexOf(',') + 1) { // Stop deleting at the comma
      headingElement.textContent = headingText.substring(0, index - 1);
      index--;
      setTimeout(typeLoop, 50); // Backspacing speed
    } else {
      // When backspacing reaches the comma, start typing again
      isDeleting = false;
      setTimeout(typeLoop, 500); // Pause before retyping
    }
  }
}

// Start the typing loop
typeLoop();