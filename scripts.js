const headingText = "Hi, I'm Juraij Bin Abdul Khadir";
const headingElement = document.getElementById('typing-heading');

let index = 0;
let isDeleting = false;

function typeLoop() {
  headingElement.textContent = headingText.substring(0, index);

  if (!isDeleting) {
    if (index < headingText.length) {
      index++;
      setTimeout(typeLoop, 100); // Typing speed
    } else {
      isDeleting = true;
      setTimeout(typeLoop, 1500); // Pause before deleting
    }
  } else {
    if (index > 4) { // Keep "Hi, " intact
      index--;
      setTimeout(typeLoop, 50); // Deleting speed
    } else {
      isDeleting = false;
      setTimeout(typeLoop, 1000); // Pause before retyping
    }
  }
}

typeLoop();
