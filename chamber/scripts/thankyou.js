const params = new URLSearchParams(window.location.search);

document.querySelector('#firstName').textContent = params.get('firstName');
document.querySelector('#lastName').textContent = params.get('lastName');
document.querySelector('#email').textContent = params.get('email');
document.querySelector('#phone').textContent = params.get('phone');
document.querySelector('#organization').textContent = params.get('organization');
document.querySelector('#timestampDisplay').textContent = params.get('timestamp');

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('#lastModified').textContent =
`Last Modified: ${document.lastModified}`;

const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
});