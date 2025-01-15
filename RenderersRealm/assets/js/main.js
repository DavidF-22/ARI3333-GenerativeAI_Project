// ! TO Locate token for API
// * CTRL + F -> token

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
const jsonPrevArrow = document.querySelector('#json-prev img');
const jsonNextArrow = document.querySelector('#json-next img');
const jsonNavButtons = document.querySelectorAll('.json-nav-buttons');

// Declare a variable to store the user-defined file name
let jsonFileName = ''

if (newChatButton) {
    newChatButton.addEventListener("click", () => {
        if (window.location.pathname.endsWith('index.php')) {
            promptForFileName("Enter a name for the JSON file\nNote: Please don't use spcaes. Thank you: ");
        }
    });
}

// * ############################################################################################################## * //

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Prompt the user for the file name at the start of the session
function promptForFileName(message) {
    const defaultName = 'default_file_name';
    const userProvidedName = prompt(message, defaultName);
    jsonFileName = userProvidedName.trim();

    // prepareation for appending in new file

    if (userOut && aiImgOut) {
        // Emptry userInpu and aiOut containers
        userOut.textContent = '';
        aiImgOut.innerHTML = '';

        // display initial content and hide chat containers
        userMessageContainer.style.display = "none";
        aiMessageContainer.style.display = "none";
        initialContent.style.display = "block";

        if (jsonNavButtons) {
            jsonNavButtons.forEach(button => {
                button.style.display = "none";
            });
        }
    }
}

// Helper function to get the current date in 'YYYY-MM-DD' format
function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
}

// Helper function to toggle text color
function toggleTextColor(isLightMode) {
    const textElements = document.querySelectorAll('h1, h2, h3, ol, ul, span, p, a, .logo, button, .json-date, .file-link');
    const preElements = document.querySelectorAll('pre'); // Select all <pre> elements

    textElements.forEach((el) => {
        el.style.color = isLightMode ? 'black' : 'white'; // Adjust text color
    });

    preElements.forEach((pre) => {
        pre.style.backgroundColor = isLightMode ? '#6a6a6a' : '#333'; // Light gray for light mode, dark for dark mode
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

function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}

// * ############################################################################################################## * //

// Centralized theme configurations, including light mode
const themes = {
    red: {
        icon: 'assets/images/RenderersRealm_Icon3.png',
        favicon: 'assets/images/RenderersRealm_Icon3.png',
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
        backToTop: { background: '#ce8600', hover: '#e79600' },
        textLight: false,
    },
    blue: {
        icon: 'assets/images/RenderersRealm_Icon2.png',
        favicon: 'assets/images/RenderersRealm_Icon2.png',
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
        backToTop: { background: '#564bfe', hover: '#4537bd' },
        textLight: false,
    },
    dark: {
        icon: 'assets/images/RenderersRealm_Icon1.png',
        favicon: 'assets/images/RenderersRealm_Icon1.png',
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
        backToTop: { background: '#a2a2a2', hover: '#7b7b7b' },
        textLight: false,
    },
    light: {
        icon: 'assets/images/RenderersRealm_Icon1.png',
        favicon: 'assets/images/RenderersRealm_Icon1.png',
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
        backToTop: { background: '#a2a2a2', hover: '#7b7b7b' },
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

    // Update arrow images based on theme
    if (jsonPrevArrow && jsonNextArrow) {
        const lightArrow = 'assets/images/up-arrow-black.png';
        const darkArrow = 'assets/images/up-arrow-white.png';

        if (themeName === 'light') {
            jsonPrevArrow.src = lightArrow;
            jsonNextArrow.src = lightArrow;
        } else {
            jsonPrevArrow.src = darkArrow;
            jsonNextArrow.src = darkArrow;
        }
    }

    // Apply Back to Top button styles
    if (backToTop) {
        backToTop.style.backgroundColor = theme.backToTop.background;
        backToTop.addEventListener('mouseover', () => {
            backToTop.style.backgroundColor = theme.backToTop.hover;
        });
        backToTop.addEventListener('mouseout', () => {
            backToTop.style.backgroundColor = theme.backToTop.background;
        });
    }

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
    console.log("Current Theme: " + savedTheme);
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
        console.error("No active JSON file. Please select or create a file.");
        return;
    }

    const currentDate = getCurrentDate(); // Get the current date
    const fileName = `${jsonFileName}.json`; // Use the current file name

    try {
        // Fetch existing file content
        const existingDataResponse = await fetch(`assets/json/${currentDate}/${fileName}`);
        let existingData = [];
        if (existingDataResponse.ok) {
            existingData = await existingDataResponse.json();
        } else {
            console.log("No existing data found. Creating a new file.");

            // Create the directory if it doesn't exist
        }

        // Append the new data
        const newEntry = { userInput, aiImageUrl, timestamp: new Date().toISOString() };
        existingData.push(newEntry);

        // Save updated data back to the server
        const response = await fetch('save_to_json.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                date: currentDate,
                fileName,
                data: existingData, // Send the updated array
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to save data to JSON.');
        }

        const result = await response.json();
        console.log('Data saved successfully:', result);
    } catch (error) {
        console.error("Error appending data to JSON file:", error);
    }

    // update the json file list
    fetchAndDisplayFiles();
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
            // Reverse the dates to show the most recent ones first
            const sortedDates = Object.keys(data).sort((a, b) => new Date(b) - new Date(a));

            // Iterate over each sorted date and its files
            sortedDates.forEach((date) => {
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
                        <button data_img_path="${filePath}" target="_blank" class="file-link">${fileNameWithoutExtension}</button>
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
    const token = '__Your_API_Token__'; // Replace with your API token hf_XXXXXXX
    // Query the API
    async function query(inputText) {
        // Hide the initial content
        initialContent.style.display = "none";

        // Hide json nav buttons
        jsonNavButtons.forEach(button => {
            button.style.display = "none";
        });

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
            // promt error to user
            prompt(`API Request failed with status: ${response.status}`);

            throw new Error("API request failed");
        }

        const result = await response.blob();
        return result;
    }

    // Handle user input
    async function handleInput() {
        const inputText = textareaElement.value.trim();
        if (inputText !== "") {
            textareaElement.value = ""; // Clear input field
            query(inputText).then(async (responseBlob) => {
                if (responseBlob) {
                    const base64Image = await blobToBase64(responseBlob); // Convert Blob to Base64
    
                    aiImgOut.innerHTML = `<img src="${base64Image}" alt="AI Output" />`;
    
                    // Save to JSON
                    saveToJSON(inputText, base64Image).then(() => {
                        fetchAndDisplayFiles();
                    });
                }
            });
        }
    }

    // Event listener for button click
    chatInButton.addEventListener("click", () => {
        if (!jsonFileName) {
            alert("File name is not set yet");
            promptForFileName("Enter a name for the JSON file: ");
            return; // Exit if no file name is set
        }
        handleInput();
    });

    // Event listener for Shift + Enter key press
    textareaElement.addEventListener("keydown", (event) => {
        if (event.key === "Enter" && event.shiftKey) {
            event.preventDefault(); // Prevent adding a new line

            if (!jsonFileName) {
                alert("File name is not set yet");
                sleep(ms = 250).then(() => { promptForFileName("Enter a name for the JSON file: "); });
                return; // Exit if no file name is set
            }

            handleInput();
        }
    });
}

// * ############################################################################################################## * //

// Click and Load

if (window.location.pathname.endsWith('index.php')) {
    // Attach click event listener to buttons with the 'file-link' class
    document.addEventListener("click", async (event) => {
        const button = event.target.closest(".file-link");
        if (button) {
            const filePath = button.getAttribute("data_img_path");
            console.log("Loading JSON file from:", filePath); // Debug file path

            if (!filePath) {
                console.error("File path not found in data attribute.");
                return;
            }

            try {
                // Reset json file list
                fetchAndDisplayFiles();
                
                // Extract file name from filePath and update jsonFileName
                const fileName = filePath.split('/').pop().replace('.json', '');
                jsonFileName = fileName; // Update the global file name
                console.log("Active JSON file name set to:", jsonFileName);

                // Fetch the JSON file to display its content
                const response = await fetch(filePath);
                if (!response.ok) {
                    throw new Error("Failed to fetch the JSON file.");
                }

                const data = await response.json();

                // Reverse the data array to bring the newest entry to the top
                const reversedData = data.reverse();

                // Hide the initial content and show the chat containers
                if (initialContent) {
                    initialContent.style.display = "none";
                }
                if (userMessageContainer) {
                    userMessageContainer.style.display = "block";
                }
                if (aiMessageContainer) {
                    aiMessageContainer.style.display = "block";
                }

                if (jsonNavButtons) {
                    jsonNavButtons.forEach(button => {
                        button.style.display = "block";
                    });
                }

                // Display the last entry in the JSON file
                const mostRecentEntry  = reversedData[0]; // Get the most recent entry
                userOut.textContent = mostRecentEntry .userInput || "No user input found.";
                aiImgOut.innerHTML = mostRecentEntry .aiImageUrl ? `<img src="${mostRecentEntry .aiImageUrl}" alt="AI Output" />` : "No AI output image found.";
            } catch (error) {
                console.error("Error fetching or processing JSON file:", error);
            }
        }
    });
}

// Global variables to track the current JSON data and index
let currentJsonData = []; // Holds the current JSON file's data
let currentIndex = 0; // Tracks the current entry index

// Function to display a JSON entry at a specific index
function displayJsonEntry(index) {
    if (!currentJsonData || currentJsonData.length === 0) {
        console.error("No JSON data loaded.");
        return;
    }

    // Handle index bounds
    if (index < 0 || index >= currentJsonData.length) {
        console.error("Index out of bounds.");
        return;
    }

    // Update the current index
    currentIndex = index;

    // Get the entry at the current index
    const entry = currentJsonData[index];

    // Display the entry in the appropriate containers
    if (userOut) {
        userOut.textContent = entry.userInput || "No user input found.";
    }
    if (aiImgOut) {
        aiImgOut.innerHTML = entry.aiImageUrl
            ? `<img src="${entry.aiImageUrl}" alt="AI Output" />`
            : "No AI output image found.";
    }
}

// Event listeners for navigation buttons
const jsonPrevButton = document.querySelector('#json-prev');
const jsonNextButton = document.querySelector('#json-next');

if (jsonPrevButton) {
    jsonPrevButton.addEventListener('click', () => {
        // Navigate to the previous entry
        if (currentJsonData.length > 0) {
            const newIndex = currentIndex - 1;
            if (newIndex >= 0) {
                displayJsonEntry(newIndex);
            } else {
                alert("Already at the most recent entry.");
            }
        }
    });
}

if (jsonNextButton) {
    jsonNextButton.addEventListener('click', () => {
        // Navigate to the next entry
        if (currentJsonData.length > 0) {
            const newIndex = currentIndex + 1;
            if (newIndex < currentJsonData.length) {
                displayJsonEntry(newIndex);
            } else {
                alert("Already at the last entry.");
            }
        }
    });
}

// Function to load JSON data from a selected file and display the most recent entry
async function loadJsonFile(filePath) {
    try {
        // Fetch the JSON file
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error("Failed to fetch JSON file.");
        }

        // Parse the JSON data
        const data = await response.json();

        // Reverse the data to display the newest entry first
        currentJsonData = data.reverse();

        // Display the most recent entry
        if (currentJsonData.length > 0) {
            displayJsonEntry(0); // Start at index 0
        } else {
            console.log("No entries found in the JSON file.");
        }
    } catch (error) {
        console.error("Error loading JSON file:", error);
    }
}

// Add an event listener to the file links to load the selected JSON file
document.addEventListener('click', async (event) => {
    const button = event.target.closest('.file-link');
    if (button) {
        const filePath = button.getAttribute('data_img_path');
        console.log("Loading JSON file:", filePath);

        // Load the selected JSON file
        await loadJsonFile(filePath);
    }
});

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