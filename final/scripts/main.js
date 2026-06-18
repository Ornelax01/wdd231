const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const year = document.querySelector('#year');
const preferenceMessage = document.querySelector('#preference-message');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
});

year.textContent = new Date().getFullYear();

const favoriteCategory = localStorage.getItem('favoriteCategory');

if (favoriteCategory) {
    preferenceMessage.textContent =
        `Your saved favorite category is ${favoriteCategory}.`;
}