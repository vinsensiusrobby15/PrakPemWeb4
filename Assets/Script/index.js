const darkButton = document.querySelector('#slide');
darkButton.addEventListener('click', darkMode)

function darkMode() {
    document.body.classList.toggle('dark');
}