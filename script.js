// Add event listener to navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const target = event.target.getAttribute('href');
        document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
    });
});
// Add event listener to toggle navbar on mobile devices
document.addEventListener("DOMContentLoaded", function() {
  const navbarToggler = document.querySelector(".navbar-toggler");
  navbarToggler.addEventListener("click", function() {
    document.querySelector(".navbar-collapse").classList.toggle("show");
  });
});
