const gamesContainer = document.querySelector('#games-container');
const dialog = document.querySelector('#game-dialog');
const dialogContent = document.querySelector('#dialog-content');
const closeButton = document.querySelector('#close-dialog');

async function loadGames() {
    try {
        const response = await fetch('data/games.json');

        if (!response.ok) {
            throw new Error('Unable to load game data.');
        }

        const games = await response.json();

        displayGames(games);

    } catch (error) {
        console.error(error);

        gamesContainer.innerHTML = `
            <p>Sorry, game information is unavailable right now.</p>
        `;
    }
}

function displayGames(games) {

    games.forEach(game => {

        const card = document.createElement('section');

        card.classList.add('game-card');

        card.innerHTML = `
            <img
                src="images/${game.image}"
                alt="${game.name}"
                loading="lazy"
                width="300"
                height="200"
            >

            <h2>${game.name}</h2>

            <p><strong>Players:</strong> ${game.players}</p>

            <p><strong>Play Time:</strong> ${game.playtime}</p>

            <p><strong>Difficulty:</strong> ${game.difficulty}</p>

            <button class="details-btn">
                View Details
            </button>
        `;

        const button = card.querySelector('.details-btn');

        button.addEventListener('click', () => {

            dialogContent.innerHTML = `
                <h2>${game.name}</h2>

                <img
                    src="images/${game.image}"
                    alt="${game.name}"
                    width="400"
                >

                <p><strong>Category:</strong> ${game.category}</p>

                <p><strong>Players:</strong> ${game.players}</p>

                <p><strong>Play Time:</strong> ${game.playtime}</p>

                <p><strong>Difficulty:</strong> ${game.difficulty}</p>

                <p><strong>Release Year:</strong> ${game.year}</p>

                <p>${game.description}</p>
            `;

            dialog.showModal();
        });

        gamesContainer.appendChild(card);
    });
}

closeButton?.addEventListener('click', () => {
    dialog.close();
});

const favoriteCategory = localStorage.getItem('favoriteCategory');

if (favoriteCategory) {
    const favoriteMessage = document.querySelector('#favorite-message');

    if (favoriteMessage) {
        favoriteMessage.textContent =
            `Welcome back! Your favorite category is ${favoriteCategory}.`;
    }
}

loadGames();