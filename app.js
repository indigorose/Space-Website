// // Navigation Interaction
const openNav = document.getElementById('open-nav');
const closeNav = document.getElementById('close-nav');
const navLinks = document.getElementById('nav-links');

openNav.addEventListener('click', () => {
	navLinks.classList.add('open');
	openNav.classList.add('hide');
	console.log('navigation open');
});

closeNav.addEventListener('click', () => {
	navLinks.classList.remove('open');
	openNav.classList.remove('hide');
	console.log('navigation closed');
});

// Active navigation page

document.querySelectorAll('.nav-links li a').forEach((link) => {
	link.addEventListener('click', function () {
		document
			.querySelectorAll('.nav-links li a')
			.forEach((l) => l.classList.remove('nav-active'));
		this.classList.add('nav-active');
		console.log('changed');
	});
});

// Destination Pagination

document.addEventListener('DOMContentLoaded', () => {
	let destinationData = [];

	// Fetch the data.json file
	fetch('data.json')
		.then((response) => response.json())
		.then((data) => {
			destinationData = data.destinations;
			setupPagination();
			updateDestination(0); // This will show the first array item by default
		});

	function setupPagination() {
		const paginationLinks = document.querySelectorAll('.pagination li a');
		paginationLinks.forEach((link, idx) => {
			link.addEventListener('click', function (e) {
				e.preventDefault();
				updateDestination(idx);
				paginationLinks.forEach((l) =>
					l.removeAttribute('aria-current')
				);
				this.setAttribute('aria-current', 'page');
			});
		});
	}

	function updateDestination(idx) {
		const destination = destinationData[idx];
		// Update the image as a background
		const destinationImgDiv = document.getElementById('destination-img');
		if (destinationImgDiv) {
			destinationImgDiv.src = destination.images.webp;
			destinationImgDiv.style.backgroundSize = 'cover';
			destinationImgDiv.style.backgroundPosition = 'center';
			destinationImgDiv.style.height = '150px';
			destinationImgDiv.style.width = '150px';
		}
		// Update the name
		const destinationName = document.getElementById('destination-name');
		if (destinationName) destinationName.textContent = destination.name;
		// Update the description
		const destinationDescription = document.getElementById(
			'destination-description'
		);
		if (destinationDescription)
			destinationDescription.textContent = destination.description;
		// Update the distance
		const destinationDistance = document.getElementById(
			'destination-distance'
		);
		if (destinationDistance)
			destinationDistance.textContent = destination.distance;
		// Update the travel time
		const destinationTime = document.getElementById('destination-time');
		if (destinationTime) destinationTime.textContent = destination.travel;
	}
	console.log('working');
});

// Crew Navigation

document.addEventListener('DOMContentLoaded', () => {
	let crewData = [];

	// Fetch the data.json file
	fetch('data.json')
		.then((response) => response.json())
		.then((data) => {
			crewData = data.crew;
			setupCrewPagination();
			updateCrew(0); // This will show the first array item by default
		});

	function setupCrewPagination() {
		const paginationLinks = document.querySelectorAll(
			'.crew-pagination li a'
		);
		paginationLinks.forEach((link, idx) => {
			link.addEventListener('click', function (e) {
				e.preventDefault();
				updateCrew(idx);
				paginationLinks.forEach((l) =>
					l.removeAttribute('aria-current')
				);
				this.setAttribute('aria-current', 'page-active');
			});
		});
	}

	function updateCrew(idx) {
		const crew = crewData[idx];
		// Update the image as a background
		const crewImgDiv = document.getElementById('crew-img');
		if (crewImgDiv) {
			crewImgDiv.style.backgroundImage = `url('${crew.images.webp}')`;
			crewImgDiv.style.backgroundSize = 'contain';
			crewImgDiv.style.backgroundRepeat = 'no-repeat';
			crewImgDiv.style.backgroundPosition = 'center';
			crewImgDiv.style.height = '330px';
			crewImgDiv.style.width = '271px';
		}
		// Update the name and rank
		const crewRank = document.getElementById('crew-rank');
		if (crewRank) crewRank.textContent = crew.role;
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
			setupTechPagination();
			updateTech(0); // This will show the first array item by default
		});

	function setupTechPagination() {
		const paginationLinks = document.querySelectorAll(
			'.tech-pagination li a'
		);
		paginationLinks.forEach((link, idx) => {
			link.addEventListener('click', function (e) {
				e.preventDefault();
				updateTech(idx);
				paginationLinks.forEach((l) =>
					l.removeAttribute('aria-current')
				);
				this.setAttribute('aria-current', 'tech-active');
			});
		});
	}

	function updateTech(idx) {
		const tech = techData[idx];
		// Update the image as a background
		const techImgDiv = document.getElementById('tech-img');
		if (techImgDiv) {
			techImgDiv.src = tech.images.portrait;
			techImgDiv.style.backgroundSize = 'contain';
			techImgDiv.style.backgroundPosition = 'center';
			techImgDiv.style.backgroundRepeat = 'no-repeat';
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
