import { places } from '../data/places.mjs';

const discoverGrid = document.querySelector('#discover-grid');
const visitMessage = document.querySelector('#visit-message');

function displayPlaces() {
    places.forEach((place, index) => {
        const card = document.createElement('section');

        card.classList.add('discover-card');
        card.classList.add(`card${index + 1}`);

        card.innerHTML = `
            <h2>${place.name}</h2>
            <figure>
                <img src="images/${place.image}" alt="${place.name}" loading="lazy" width="300" height="200">
            </figure>
            <address>${place.address}</address>
            <p>${place.description}</p>
            <button>Learn More</button>
        `;

        discoverGrid.appendChild(card);
    });
}

function displayVisitMessage() {
    const lastVisit = localStorage.getItem('lastVisit');
    const currentVisit = Date.now();

    if (!lastVisit) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const difference = currentVisit - Number(lastVisit);
        const daysDifference = Math.floor(difference / 86400000);

        if (daysDifference < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else if (daysDifference === 1) {
            visitMessage.textContent = "You last visited 1 day ago.";
        } else {
            visitMessage.textContent = `You last visited ${daysDifference} days ago.`;
        }
    }

    localStorage.setItem('lastVisit', currentVisit);
}

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('#lastModified').textContent =
`Last Modified: ${document.lastModified}`;

const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
});

displayPlaces();
displayVisitMessage();