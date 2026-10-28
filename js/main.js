// Set footer year dynamically
document.getElementById("year").textContent = new Date().getFullYear();

// Work out which page we're on from the filename in the URL
const currentPage = window.location.pathname.split("/").pop().replace(".html", "") || "index";

// Loop through nav links and add "active" class to the one matching the current page
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
  if (link.dataset.page === currentPage) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
});
