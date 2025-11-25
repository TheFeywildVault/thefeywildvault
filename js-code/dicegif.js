document.addEventListener('DOMContentLoaded', () => {
  const gifContainer = document.getElementById('gifDisplayContainer');
  const generateButton = document.getElementById('generateButton');

  generateButton.addEventListener('click', () => {
      // Get button dimensions and position
      const buttonRect = generateButton.getBoundingClientRect();
      const gifWidth = gifContainer.offsetWidth;

      // Calculate position
      const topPosition = buttonRect.bottom + window.scrollY - 980; // Adjusted closer to the button
      const leftPosition = buttonRect.left + buttonRect.width / 2 - gifWidth / 2; // Centered horizontally

      // Set the calculated position
      gifContainer.style.top = `${topPosition}px`;
      gifContainer.style.left = `${Math.max(leftPosition, 0)}px`; // Ensure it doesn't go off-screen on small screens

      // Show the GIF
      gifContainer.classList.remove('hidden');

      // Hide the GIF after 1 second
      setTimeout(() => {
          gifContainer.classList.add('hidden');
      }, 1000);
  });
});