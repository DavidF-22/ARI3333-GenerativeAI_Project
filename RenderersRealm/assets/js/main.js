// Header - NavBar
const redThemeButton = document.querySelector('.red-theme');
const blueThemeButton = document.querySelector('.blue-theme');
const darkThemeButton = document.querySelector('.dark-theme--to_light');
const navElement = document.querySelector('.nav');
const hamburgerElement = document.querySelector('.hamburger');
const bodyElement = document.querySelector('body');

// Add event listeners to change background color
redThemeButton.addEventListener('click', () => {
    bodyElement.style.backgroundColor = '#a71515'; // Red theme background
});

blueThemeButton.addEventListener('click', () => {
    bodyElement.style.backgroundColor = '#1594a7'; // Blue theme background
});

darkThemeButton.addEventListener('click', () => {
    if (darkThemeButton.classList.contains('dark-theme--to_light')) {
        // Switch to light theme
        bodyElement.style.backgroundColor = '#ffffff'; // Light theme background
        darkThemeButton.classList.remove('dark-theme--to_light'); // Remove light theme icon class
        darkThemeButton.classList.add('dark-theme'); // Ensure dark-theme class remains for dark mode toggle
    } else {
        // Switch to dark theme
        bodyElement.style.backgroundColor = '#2c2c2c'; // Dark theme background
        darkThemeButton.classList.add('dark-theme--to_light'); // Add light theme icon class
        darkThemeButton.classList.remove('dark-theme'); // Remove dark-theme class for the light mode icon
    }
});

// Hamburger toggle for nav
hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('nav--open');
    hamburgerElement.classList.toggle('hamburger--open');
});

navElement.addEventListener('click', () => {
    navElement.classList.remove('nav--open');
    hamburgerElement.classList.remove('hamburger--open');
});
