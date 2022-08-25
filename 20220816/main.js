const button = document.querySelector(".btn");
button.addEventListener('click',toggleButton);

function toggleButton() {
    button.classList.add('inactive');
}