// // Navigation Interaction
// const openNav = document.getElementById('open-nav');
// const closeNav = document.getElementById('close-nav');
// const navLinks = document.getElementById('nav-links');

// openNav.addEventListener('click', () => {
// 	navLinks.classList.add('open');
// 	openNav.classList.add('hide');
// });

// closeNav.addEventListener('click', () => {
// 	navLinks.classList.remove('open');
// 	openNav.classList.remove('hide');
// });

// Crew Navigation

document.addEventListener('DOMContentLoaded', () => {
	let crewData = [];

	// Fetch the data.json file
	fetch('data.json')
		.then((response) => response.json())
		.then((data) => {
			crewData = data.crew;
			setupPagination();
			updateCrew(0); // This will show the first array item by default
		});

	function setupPagination() {
		const paginationLinks = document.querySelectorAll('.pagination li a');
		paginationLinks.forEach((link, idx) => {
			link.addEventListener('click', function (e) {
				e.preventDefault();
				updateCrew(idx);
				paginationLinks.forEach((l) =>
					l.removeAttribute('aria-current')
				);
				this.setAttribute('aria-current', 'page');
			});
		});
	}

	function updateCrew(idx) {
		const crew = crewData[idx];
		// Update the image as a background
		const crewImgDiv = document.getElementById('crew-img');
		if (crewImgDiv) {
			crewImgDiv.style.backgroundImage = `url('${crew.images.webp}')`;
			crewImgDiv.style.backgroundSize = 'cover';
			crewImgDiv.style.backgroundPosition = 'center';
			crewImgDiv.style.height = '258px';
			crewImgDiv.style.width = '258px';
		}
		// Update the name
		const crewName = document.getElementById('crew-name');
		if (crewName) crewName.textContent = crew.name;
		// Update the description
		const crewDescription = document.getElementById('crew-description');
		if (crewDescription) crewDescription.textContent = crew.description;
	}
	console.log('working');
});

// Technology Navigation

document.addEventListener('DOMContentLoaded', () => {
	let techData = [];

	// Fetch the data.json file
	fetch('data.json')
		.then((response) => response.json())
		.then((data) => {
			techData = data.technology;
			setupPagination();
			updateTech(0); // This will show the first array item by default
		});

	function setupPagination() {
		const paginationLinks = document.querySelectorAll('.pagination li a');
		paginationLinks.forEach((link, idx) => {
			link.addEventListener('click', function (e) {
				e.preventDefault();
				updateTech(idx);
				paginationLinks.forEach((l) =>
					l.removeAttribute('aria-current')
				);
				this.setAttribute('aria-current', 'page');
			});
		});
	}

	function updateTech(idx) {
		const tech = techData[idx];
		// Update the image as a background
		const techImgDiv = document.getElementById('tech-img');
		if (techImgDiv) {
			techImgDiv.style.backgroundImage = `url('${tech.images.landscape}')`;
			techImgDiv.style.backgroundSize = 'cover';
			techImgDiv.style.backgroundPosition = 'center';
			techImgDiv.style.height = '258px';
			techImgDiv.style.width = '100vw';
		}
		// Update the name
		const techName = document.getElementById('tech-name');
		if (techName) techName.textContent = tech.name;
		// Update the description
		const techDescription = document.getElementById('tech-description');
		if (techDescription) techDescription.textContent = tech.description;
	}
	console.log('working');
});
