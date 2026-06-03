document.querySelector('#timestamp').value = new Date().toISOString();

const modalLinks = document.querySelectorAll('[data-modal]');
const closeButtons = document.querySelectorAll('.close-modal');

modalLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();

        const modalId = link.getAttribute('data-modal');
        const modal = document.querySelector(`#${modalId}`);

        modal.showModal();
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.closest('dialog').close();
    });
});

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('#lastModified').textContent =
`Last Modified: ${document.lastModified}`;

const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
});