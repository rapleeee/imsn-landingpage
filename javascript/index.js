function toggleDarkMode() {
    const body = document.body;
    const darkModeEnabled = body.classList.toggle('dark');
    localStorage.setItem('darkMode', darkModeEnabled ? 'enabled' : 'disabled');
}

window.onload = () => {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark');
    }
};

function toggleMenu() {
    const navbar = document.getElementById('navbar-default');
    navbar.classList.toggle('hidden');
}

document.addEventListener('click', (event) => {
    const navbar = document.getElementById('navbar-default');
    const button = document.querySelector('button[onclick="toggleMenu()"]');

    if (!navbar.contains(event.target) && event.target !== button && !navbar.classList.contains('hidden')) {
        navbar.classList.add('hidden');
    }
});