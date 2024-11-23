// Header - NavBar
const redThemeButton = document.querySelector('.red-theme');
const blueThemeButton = document.querySelector('.blue-theme');
const darkThemeButton = document.querySelector('.dark-theme--to_light');
const navElement = document.querySelector('.nav');
const hamburgerElement = document.querySelector('.hamburger');
const bodyElement = document.querySelector('body');
const chatHistoryHeader = document.querySelector('.chatHistory h1');
const chatInButton = document.querySelector('.chatIn .chatInputButton');
const chatClickToConvert = document.querySelector('.chatIn #click_to_convert');
const chatHistoryElement = document.querySelector('.chatHistory');
const textareaElement = document.querySelector('.chatIn textarea');
const headerElement = document.querySelector('.header');
const largeIconElement = document.querySelector('.initialIcon img'); // Large icon in the center
const faviconElement = document.querySelector('link[rel="icon"]'); // Favicon in the browser tab
const footerIcon = document.querySelector('.footer-img'); // Footer icon
const footerBackground = document.querySelector('.footer'); // Footer background
const toggleAllButton = document.querySelector('.toggle-all-btn');
const backToTop = document.querySelector('.backToTop');
const newChatButton = document.querySelector('.new-chat');

const userMessageContainer = document.getElementById('userMessageContainer');

// Declare a variable to store the user-defined file name
const defaultName = 'default_file_name'; // Default name if user cancels the prompt
let jsonFileName = '' || defaultName; // Default name if user cancels the prompt


if (newChatButton) {
    newChatButton.addEventListener("click", () => {
        if (window.location.pathname.endsWith('index.php')) {
            promptForFileName("Enter a name for the JSON file: ");
        }
    });
}

// * ############################################################################################################## * //

// Prompt the user for the file name at the start of the session
function promptForFileName(message) {
    const userProvidedName = prompt(message, defaultName);
    jsonFileName = userProvidedName.trim();

    console.log('JSON file name:', jsonFileName);
}

// Helper function to get the current date in 'YYYY-MM-DD' format
function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Helper function to toggle text color
function toggleTextColor(isLightMode) {
    const textElements = document.querySelectorAll('h1, h2, span, p, a, .logo, button, .json-date, .file-link');

    textElements.forEach((el) => {
        if (isLightMode) {
            el.style.color = 'black'; // Black for light mode
        } else {
            el.style.color = 'white'; // White for dark mode
        }
    });

    // Update placeholder text color for the textarea
    if (textareaElement) {
        textareaElement.style.setProperty('--placeholder-color', isLightMode ? 'black' : 'white');
    }

    // Update the user message container text color
    if (userMessageContainer) {
        userMessageContainer.style.color = isLightMode ? 'black' : 'white';
    }
}

// * ############################################################################################################## * //

// Centralized theme configurations, including light mode
const themes = {
    red: {
        icon: 'assets/images/RenderersRealm_Icon2.ico',
        favicon: 'assets/images/RenderersRealm_Icon2.ico',
        headerColor: '#790808',
        chatHistoryColor: '#790808',
        textareaColor: '#790808',
        borderColor: '#790808',
        footerIcon: 'assets/images/UoM_AI_Logo_black.png',
        footerBackground: '#790808',
        bodyColor: '#2c2c2c',
        jsonFileIcon: 'assets/images/document.png',
        newChatButton: { background: '#ce8600', hover: '#e79600' },
        chatClickToConvert: { background: 'orange', hover: '#c58000' },
        chatInButton: { background: 'orange', hover: '#c58000' },
        toggleAllButton: { background: '#ce8600', hover: '#e79600' },
        textLight: false,
    },
    blue: {
        icon: 'assets/images/RenderersRealm_Icon1.ico',
        favicon: 'assets/images/RenderersRealm_Icon1.ico',
        headerColor: '#48a6ccb3',
        chatHistoryColor: '#48a6ccb3',
        textareaColor: '#48a6ccb3',
        borderColor: '#48a6ccb3',
        footerIcon: 'assets/images/UoM_AI_Logo.png',
        footerBackground: '#48a6ccb3',
        bodyColor: '#2c2c2c',
        jsonFileIcon: 'assets/images/document.png',
        newChatButton: { background: '#564bfe', hover: '#4537bd' },
        chatClickToConvert: { background: '#564bfe', hover: '#4537bd' },
        chatInButton: { background: '#564bfe', hover: '#4537bd' },
        toggleAllButton: { background: '#564bfe', hover: '#4537bd' },
        textLight: false,
    },
    dark: {
        icon: 'assets/images/RenderersRealm_Icon1.ico',
        favicon: 'assets/images/RenderersRealm_Icon1.ico',
        headerColor: '#a2a2a2b3',
        chatHistoryColor: '#a2a2a2b3',
        textareaColor: '#a2a2a2b3',
        borderColor: '#a2a2a2b3',
        footerIcon: 'assets/images/UoM_AI_Logo.png',
        footerBackground: '#a2a2a2b3',
        bodyColor: '#2c2c2c',
        jsonFileIcon: 'assets/images/document.png',
        newChatButton: { background: '#b1b1b1b3', hover: '#aaaaaab3' },
        chatClickToConvert: { background: 'limegreen', hover: 'green' },
        chatInButton: { background: 'limegreen', hover: 'green' },
        toggleAllButton: { background: '#a2a2a2b3', hover: '#7b7b7bb3' },
        textLight: false,
    },
    light: {
        icon: 'assets/images/RenderersRealm_Icon1.ico',
        favicon: 'assets/images/RenderersRealm_Icon1.ico',
        headerColor: '#a2a2a2b3',
        chatHistoryColor: '#a2a2a2b3',
        textareaColor: '#a2a2a2b3',
        borderColor: '#a2a2a2b3',
        footerIcon: 'assets/images/UoM_AI_Logo.png',
        footerBackground: '#a2a2a2b3',
        bodyColor: '#ffffff',
        jsonFileIcon: 'assets/images/document_white.png',
        newChatButton: { background: '#b1b1b1b3', hover: '#aaaaaab3' },
        chatClickToConvert: { background: 'limegreen', hover: 'green' },
        chatInButton: { background: 'limegreen', hover: 'green' },
        toggleAllButton: { background: '#a2a2a2b3', hover: '#7b7b7bb3' },
        textLight: true,
    },
};

// Function to apply the theme
function applyTheme(themeName) {
    const theme = themes[themeName];
    if (!theme) return;

    // Apply general theme settings
    if (largeIconElement) largeIconElement.src = theme.icon;
    if (faviconElement) faviconElement.href = theme.favicon;
    if (headerElement) headerElement.style.backgroundColor = theme.headerColor;
    if (chatHistoryElement) chatHistoryElement.style.backgroundColor = theme.chatHistoryColor;
    if (textareaElement) textareaElement.style.backgroundColor = theme.textareaColor;
    if (chatHistoryHeader) chatHistoryHeader.style.borderBottomColor = theme.borderColor;
    if (footerIcon) footerIcon.src = theme.footerIcon;
    if (footerBackground) footerBackground.style.backgroundColor = theme.footerBackground;
    if (bodyElement) bodyElement.style.backgroundColor = theme.bodyColor;

    

    // Apply button-specific styles
    const buttonConfig = [
        { button: newChatButton, config: theme.newChatButton },
        { button: chatClickToConvert, config: theme.chatClickToConvert },
        { button: chatInButton, config: theme.chatInButton },
        { button: toggleAllButton, config: theme.toggleAllButton },
    ];

    buttonConfig.forEach(({ button, config }) => {
        if (button) {
            button.style.backgroundColor = config.background;
            button.addEventListener('mouseover', () => {
                button.style.backgroundColor = config.hover;
            });
            button.addEventListener('mouseout', () => {
                button.style.backgroundColor = config.background;
            });
        }
    });

    // Update JSON file icons
    jsonFileIcon = theme.jsonFileIcon; // Set the icon based on the theme
    fetchAndDisplayFiles();

    // Toggle text color based on theme
    toggleTextColor(theme.textLight);
}

// Function to save the theme to localStorage
function saveThemeToLocalStorage(themeName) {
    localStorage.setItem('selectedTheme', themeName);
}

// Initialize the theme on page load
function initializeTheme() {
    // saveThemeToLocalStorage(''); // set to default
    const savedTheme = localStorage.getItem('selectedTheme');
    applyTheme(savedTheme);
    console.log(savedTheme);
}

document.addEventListener('DOMContentLoaded', initializeTheme());

// Add event listeners to theme buttons
if (redThemeButton) {
    redThemeButton.addEventListener('click', () => {
        saveThemeToLocalStorage('red');
        applyTheme('red');
    });
}

if (blueThemeButton) {
    blueThemeButton.addEventListener('click', () => {
        saveThemeToLocalStorage('blue');
        applyTheme('blue');
    });
}

if (darkThemeButton) {
    darkThemeButton.addEventListener('click', () => {
        const isCurrentlyDark = localStorage.getItem('selectedTheme') === 'dark';
        if (isCurrentlyDark) {
            saveThemeToLocalStorage('light');
            applyTheme('light');
        } else {
            saveThemeToLocalStorage('dark');
            applyTheme('dark');
        }
    });
}

// * ############################################################################################################## * //

// Hamburger toggle for nav, if present
if (hamburgerElement && navElement) {
    hamburgerElement.addEventListener('click', () => {
        navElement.classList.toggle('nav--open');
        hamburgerElement.classList.toggle('hamburger--open');
    });

    navElement.addEventListener('click', () => {
        navElement.classList.remove('nav--open');
        hamburgerElement.classList.remove('hamburger--open');
    });
}

// * ############################################################################################################## * //

// Function to save data to JSON file
async function saveToJSON(userInput, aiImageUrl) {
    if (!jsonFileName) {
        console.error("JSON file name is not set.");
        return;
    }

    const currentDate = getCurrentDate(); // Get current date

    try {
        const response = await fetch('save_to_json.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                date: currentDate,
                fileName: `${jsonFileName}.json`,
                userInput: userInput,
                aiImageUrl: aiImageUrl,
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to save data to JSON.');
        }

        const result = await response.json();
        console.log('Data saved successfully:', result);
    } catch (error) {
        console.error('Error saving data to JSON:', error);
    }
}

async function fetchAndDisplayFiles() {
    try {
        const response = await fetch('get_json_files.php'); // Adjust path if needed
        if (!response.ok) {
            throw new Error("Failed to fetch JSON files.");
        }

        const data = await response.json();
        const creationDateElement = document.getElementById('creationDate'); // Date container
        const fileListElement = document.getElementById('jsonFileList'); // Files container

        // Clear existing content
        creationDateElement.innerHTML = '';
        fileListElement.innerHTML = '';

        // Check if the data is empty
        if (Object.keys(data).length === 0) {
            console.log("No JSON files or dates found.");
        } else {
            // Iterate over each date (subdirectory) and its files
            Object.keys(data).forEach((date) => {
                // Append the date to the file list
                const dateItem = document.createElement('li');
                dateItem.classList.add('json-date'); // Add a common class
                dateItem.textContent = `Date: ${date}`;
                fileListElement.appendChild(dateItem);

                // Append the files for this date
                data[date].forEach((file) => {
                    const filePath = `assets/json/${date}/${file}`; // Adjust the path logic if needed

                    // Remove the ".json" extension from the file name
                    const fileNameWithoutExtension = file.replace(/\.json$/, '');

                    const fileItem = document.createElement('li');
                    fileItem.classList.add('json-file'); // Add a common class
                    fileItem.innerHTML = `
                        <img src="${jsonFileIcon}" alt="icon_file">
                        <a href="${filePath}" target="_blank" class="file-link">${fileNameWithoutExtension}</a>
                    `;
                    fileListElement.appendChild(fileItem);
                });
            });

            // After rendering files, toggle text color
            const isLightMode = localStorage.getItem('selectedTheme') === 'light';
            toggleTextColor(isLightMode);
        }
    } catch (error) {
        console.error("Error fetching JSON files:", error);
    }
}


// Ensure the function runs on page load
if (chatHistoryElement) {
    document.addEventListener("DOMContentLoaded", () => {
        fetchAndDisplayFiles();
    });
}

// * ############################################################################################################## * //

// Speech To Text
//https://www.youtube.com/watch?v=SFGIKucaOZA&list=LL&index=2
// modified to add button animation
if (chatClickToConvert) {
    chatClickToConvert.addEventListener('click', function () {
        var speech = true;
        window.SpeachRecognition = window.webkitSpeechRecognition;
        const recognition = new SpeachRecognition();
    
        recognition.interimResults = true;
    
        recognition.addEventListener('result', e => {
            const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('')
            
            textareaElement.innerHTML = transcript;
        });
    
        recognition.addEventListener('start', () => {
            // Add waiting animation to button
            chatClickToConvert.classList.add('listening');
        });
    
        recognition.addEventListener('end', () => {
            // Remove waiting animation when recognition stops
            chatClickToConvert.classList.remove('listening');
        });
    
        if (speech == true) {
            recognition.start();
        }
    });
}

// * ############################################################################################################## * //

/* AI API - https://huggingface.co/black-forest-labs/FLUX.1-dev */

// Selecting elements
const aiMessageContainer = document.getElementById('aiMessageContainer');
const aiImgOut = document.getElementById("aiMessage");
const userOut = document.getElementById("userMessage");
const initialContent = document.getElementById("initialContent");

// Check if all necessary elements exist
if (chatInButton && textareaElement && userOut && initialContent) {
    const token = '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';

    // Query the API
    async function query(inputText) {
        // Hide the initial content
        initialContent.style.display = "none";

        // Display user message
        userMessageContainer.style.display = "block";
        userOut.innerHTML = inputText;

        // Display loading state for AI
        aiMessageContainer.style.display = "block";
        aiImgOut.innerHTML = `<img src="assets/images/loading.gif" alt="Loading..." />`;

        // API call
        const response = await fetch(
            "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev",
            {
                headers: { Authorization: `Bearer ${token}` },
                method: "POST",
                body: JSON.stringify({ inputs: inputText }), // Proper format for API request
            }
        );

        // Handle response
        if (!response.ok) {
            throw new Error("API request failed");
        }

        const result = await response.blob();
        return result;
    }

    // Handle user input
    function handleInput() {
        const inputText = textareaElement.value.trim(); // Get and trim input
        if (inputText !== "") {
            textareaElement.value = ""; // Clear input field
            query(inputText).then((response) => {
                if (response) {
                    // Display AI-generated content
                    const objectURL = URL.createObjectURL(response);
                    aiImgOut.innerHTML = `<img src="${objectURL}" alt="AI Output" />`;

                    // Save user input and AI output to JSON
                    saveToJSON(inputText, objectURL).then(() => {
                        // Fetch and display updated JSON files after saving is successful
                        fetchAndDisplayFiles();
                    })
                }
            });
        }
    }

    // Event listener for button click
    chatInButton.addEventListener("click", handleInput);

    // Event listener for Shift + Enter key press
    textareaElement.addEventListener("keydown", (event) => {
        if (event.key === "Enter" && event.shiftKey) {
            event.preventDefault(); // Prevent adding a new line
            handleInput();
        }
    });
}

// * ############################################################################################################## * //

if (toggleAllButton) {
    // FAQ Section - toggles
    document.addEventListener('DOMContentLoaded', () => {
        const faqQuestions = document.querySelectorAll('.faq-question');
        const toggleAllBtn = document.getElementById('toggle-all');

        // Toggle individual FAQ
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                question.classList.toggle('open');
                answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
            });
        });

        // Expand/Collapse All Button
        toggleAllBtn.addEventListener('click', () => {
            const allExpanded = [...faqQuestions].every(q => q.classList.contains('open'));

            faqQuestions.forEach(question => {
                const answer = question.nextElementSibling;
                if (allExpanded) {
                    question.classList.remove('open');
                    answer.style.display = 'none';
                } else {
                    question.classList.add('open');
                    answer.style.display = 'block';
                }
            });

            // Toggle button text
            toggleAllBtn.textContent = allExpanded ? 'Expand All' : 'Collapse All';
        });
    });
}

// * ############################################################################################################## * //

// Back to Top Button
document.addEventListener("DOMContentLoaded", () => {
    /* Back to Top Button */
    const backToTop = document.querySelector(".backToTop");

    if (backToTop) {
        // Toggle visibility of the back-to-top button
        const toggleBackToTop = () => {
            if (window.scrollY > 50) {
                backToTop.classList.add("active");
            } else {
                backToTop.classList.remove("active");
            }
        };

        // Smooth scroll to top
        backToTop.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });

        // Listen for scroll events
        window.addEventListener("scroll", toggleBackToTop);
    }
});

// * ############################################################################################################## * //

/* Preloader */
window.addEventListener("load", function () {
    const preloader = document.querySelector(".preloader");
    setTimeout(
      function () {
        preloader.classList.add("preloader--hiden");
      }
    );
});

// * ############################################################################################################## * //