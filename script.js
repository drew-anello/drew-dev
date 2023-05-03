// Get the navbar element
const navbar = document.querySelector('.nav-wrap');

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
  // Check if the user has scrolled
  if (window.pageYOffset > 0) {
    // Add a class to the navbar to hide it
    navbar.classList.add('hide');
  } else {
    // Remove the class from the navbar to show it
    navbar.classList.remove('hide');
  }
});
