const audrey = document.getElementById("audrey");

// Listen for scroll event
window.addEventListener("scroll", function() {
  audrey.style.width = `${(window.scrollY / 3)}px`
  audrey.style.height = `${(window.scrollY / 4)}px`
});
