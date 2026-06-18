const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const year = document.querySelector('#year');
const timestamp = document.querySelector('#timestamp');
const category = document.querySelector('#category');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
});

year.textContent = new Date().getFullYear();

timestamp.value = new Date().toLocaleString();

category.addEventListener('change', () => {
    localStorage.setItem('favoriteCategory', category.value);
});