document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    const numberOfImages = 12; // Number of images to display

    for (let i = 0; i < numberOfImages; i++) {
        const img = document.createElement('img');
        img.src = `https://source.unsplash.com/random/400x300?sig=${i}`;
        img.alt = `Random Image ${i + 1}`;
        gallery.appendChild(img);
    }
     const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
