document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    // prevent the default click behavior
    event.preventDefault()

    // get the target element and its top position
    const target = document.querySelector(link.getAttribute("href"))
    const top = target.getBoundingClientRect().top

    // scroll to the target element smoothly
    window.scrollTo({
      top,
      behavior: "smooth",
      duration: 1000, // scroll duration in milliseconds
      easing: "easeInOutQuad", // easing function
    })
  })
})
/* The querySelectorAll function is used to select all links on the page that have an href attribute starting with #. These links are passed to the forEach function, which iterates over each element and adds a click event listener to it.

When one of these links is clicked, the event object is passed to the event listener callback function. The preventDefault method is called on the event object to prevent the default click behavior, which would normally cause the page to navigate to the link's target.

The querySelector function is used to select the target element specified in the link's href attribute. The getBoundingClientRect method is used to get the top position of the target element relative to the viewport.

The scrollTo function is used to smoothly scroll the page to the target element. The top value specifies the vertical position to scroll to, and the behavior option is set to smooth to enable smooth scrolling. The duration and easing options can be used to customize the scroll behavior further. */
const backToTopButton = document.getElementById("back-to-top-button")
const footer = document.getElementById("footer")

window.addEventListener("scroll", scrollFunction)

function scrollFunction() {
  const footerTop = footer.getBoundingClientRect().top
  if (window.pageYOffset > 300 && footerTop > window.innerHeight) {
    // Show back to top button if window is scrolled down 300px and footer is not in view
    if (!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit")
      backToTopButton.classList.add("btnEntrance")
      backToTopButton.style.display = "block"
    }
  } else {
    // Hide back to top button if window is not scrolled down 300px or footer is in view
    if (backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance")
      backToTopButton.classList.add("btnExit")
      setTimeout(function () {
        backToTopButton.style.display = "none"
      }, 250)
    }
  }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop)

// function for smooth scroll back to top
function smoothScrollBackToTop() {
  const targetPosition = 0
  const startPosition = window.pageYOffset
  const distance = targetPosition - startPosition
  const duration = 750
  let start = null

  window.requestAnimationFrame(step)

  function step(timestamp) {
    if (!start) start = timestamp
    const progress = timestamp - start
    window.scrollTo(
      0,
      easeInOutCubic(progress, startPosition, distance, duration)
    )
    if (progress < duration) window.requestAnimationFrame(step)
  }
}

// function for scroll easing
function easeInOutCubic(t, b, c, d) {
  t /= d / 2
  if (t < 1) return (c / 2) * t * t * t + b
  t -= 2
  return (c / 2) * (t * t * t + 2) + b
}
