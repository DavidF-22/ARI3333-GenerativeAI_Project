// Header - NavBar
const redThemeButton = document.querySelector('.red-theme');
const blueThemeButton = document.querySelector('.blue-theme');
const darkThemeButton = document.querySelector('.dark-theme--to_light');
const navElement = document.querySelector('.nav');
const hamburgerElement = document.querySelector('.hamburger');
const bodyElement = document.querySelector('body');

const chatHistoryElement = document.querySelector('.chatHistory');
const textareaElement = document.querySelector('.chatIn textarea');
const headerElement = document.querySelector('.header');
const textareaPlaceholderElement = document.querySelector('.chatIn textarea');

const largeIconElement = document.querySelector('.initialIcon img'); // Large icon in the center
const faviconElement = document.querySelector('link[rel="icon"]'); // Favicon in the browser tab

// Helper function to change placeholder text color dynamically
function togglePlaceholderColor(isLightMode) {
    if (isLightMode) {
        textareaElement.style.setProperty('--placeholder-color', 'white'); // Light mode placeholder
    } else {
        textareaElement.style.setProperty('--placeholder-color', 'black'); // Dark mode placeholder
    }
}

// Helper function to toggle text color
function toggleTextColor(isLightMode) {
    const textElements = document.querySelectorAll('.h1, span, p, a'); // Add other elements as necessary

    textElements.forEach((el) => {
        if (isLightMode) {
            el.style.color = 'white'; // Set text color to black for light mode
            textareaPlaceholderElement.style.color = 'white'; // Set text color to white for dark mode
        } else {
            el.style.color = 'black'; // Set text color to white for dark mode
            textareaPlaceholderElement.style.color = 'black'; // Set text color to black for light mode
        }

        togglePlaceholderColor(isLightMode); // Change placeholder color
    });
}

// Helper function to update border color
function updateBorderColor(color) {
    const chatHistoryHeader = document.querySelector('.chatHistory h1');
    if (chatHistoryHeader) {
        chatHistoryHeader.style.borderBottomColor = color; // Update the border-bottom color
    }
}

// Add event listeners to change background color
redThemeButton.addEventListener('click', () => {
    chatHistoryElement.style.backgroundColor = '#790808'; // Firebrick Red for chat history
    textareaElement.style.backgroundColor = '#790808'; // Firebrick Red for textarea
    headerElement.style.backgroundColor = '#790808'; // Firebrick Red for header
    updateNavBackgroundColor('#790808'); // Firebrick Red for nav

    // Change large icon in the center
    largeIconElement.src = 'assets/images/RenderersRealm_Icon2.ico'; // Path to the red theme large icon

    // Change favicon
    faviconElement.href = 'assets/images/RenderersRealm_Icon2.ico'; // Path to the red theme favicon
});

// Blue Theme
blueThemeButton.addEventListener('click', () => {
    chatHistoryElement.style.backgroundColor = '#48a6ccb3'; // Blue for chat history
    textareaElement.style.backgroundColor = '#48a6ccb3'; // Blue for textarea
    headerElement.style.backgroundColor = '#48a6ccb3'; // Blue for header
    updateNavBackgroundColor('#48a6ccb3'); // Blue for nav

    // Change large icon in the center
    largeIconElement.src = 'assets/images/RenderersRealm_Icon1.ico'; // Path to the red theme large icon

    // Change favicon
    faviconElement.href = 'assets/images/RenderersRealm_Icon1.ico'; // Path to the red theme favicon
});

darkThemeButton.addEventListener('click', () => {
    if (darkThemeButton.classList.contains('dark-theme--to_light')) {
        // Switch to light theme
        bodyElement.style.backgroundColor = '#ffffff'; // Light theme background
        darkThemeButton.classList.remove('dark-theme--to_light'); // Remove light theme icon class
        darkThemeButton.classList.add('dark-theme'); // Ensure dark-theme class remains for dark mode toggle

        toggleTextColor(false); // Switch text to black
    } else {
        // Switch to dark theme
        bodyElement.style.backgroundColor = '#2c2c2c'; // Dark theme background
        darkThemeButton.classList.add('dark-theme--to_light'); // Add light theme icon class
        darkThemeButton.classList.remove('dark-theme'); // Remove dark-theme class for the light mode icon

        toggleTextColor(true); // Switch text to black
    }

    chatHistoryElement.style.backgroundColor = '#a2a2a2b3'; // Dodger Blue for chat history
    textareaElement.style.backgroundColor = '#a2a2a2b3'; // Sky Blue for textarea
    headerElement.style.backgroundColor = '#a2a2a2b3'; // Steel Blue for header
    updateNavBackgroundColor('#a2a2a2b3'); // Steel Blue for header

    // Change large icon in the center
    largeIconElement.src = 'assets/images/RenderersRealm_Icon1.ico'; // Path to the red theme large icon

    // Change favicon
    faviconElement.href = 'assets/images/RenderersRealm_Icon1.ico'; // Path to the red theme favicon
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
