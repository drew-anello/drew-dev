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

const newTab = document.getElementById('newTab')
const toolTip = document.getElementById("toolTip");


newTab.addEventListener('mouseenter', function(e) {
  const message = document.createElement('div')
    message.textContent = "This will open in a new tab with my resume 😎"
    message.classList.add('message')
    newTab.appendChild(message)
});

newTab.addEventListener("mouseleave", function(e) {
  const message = document.querySelector(".message")
  if (message) {
    message.remove()
  }
})

