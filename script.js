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

newTab.addEventListener("click", function(e) {
  const message = document.querySelector(".message")
  if (message) {
    message.remove()
  }
})
