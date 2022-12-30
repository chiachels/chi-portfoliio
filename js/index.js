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
