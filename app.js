// Navigation Interaction
const openNav = document.getElementById('open-nav');
const closeNav = document.getElementById('close-nav');
const navLinks = document.getElementById('nav-links');

openNav.addEventListener('click', () => {
	navLinks.classList.add('open');
});

closeNav.addEventListener('click', () => {
	navLinks.classList.remove('open');
});
