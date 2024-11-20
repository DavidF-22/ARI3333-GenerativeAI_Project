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
const textareaPlaceholderElement = document.querySelector('.chatIn textarea');
const largeIconElement = document.querySelector('.initialIcon img'); // Large icon in the center
const faviconElement = document.querySelector('link[rel="icon"]'); // Favicon in the browser tab
const footerIcon = document.querySelector('.footer-img'); // Footer icon
const footerBackground = document.querySelector('.footer'); // Footer background
const toggleAllButton = document.querySelector('.toggle-all-btn');
const backToTop = document.querySelector('.backToTop');

// Helper function to toggle text color
function toggleTextColor(isLightMode) {
    const textElements = document.querySelectorAll('h1, h2, span, p, a, .logo'); // Add other elements as necessary
    textElements.forEach((el) => {
        if (isLightMode) {
            el.style.color = 'white';
        } else {
            el.style.color = 'black';
        }
    });

    if (textareaElement) {
        textareaElement.style.setProperty('--placeholder-color', isLightMode ? 'white' : 'black');
    }
}

// Add event listeners only if the elements exist
if (redThemeButton) {
    redThemeButton.addEventListener('click', () => {
        if (largeIconElement) largeIconElement.src = 'assets/images/RenderersRealm_Icon2.ico';
        if (faviconElement) faviconElement.href = 'assets/images/RenderersRealm_Icon2.ico';
        if (headerElement) headerElement.style.backgroundColor = '#790808';
        if (chatHistoryElement) chatHistoryElement.style.backgroundColor = '#790808';
        if (textareaElement) textareaElement.style.backgroundColor = '#790808';
        if (chatHistoryHeader) chatHistoryHeader.style.borderBottomColor = '#790808';
        if (footerIcon) footerIcon.src = 'assets/images/UoM_AI_Logo_black.png';
        if (footerBackground) footerBackground.style.backgroundColor = '#790808';

        if (chatClickToConvert) {
            chatClickToConvert.style.backgroundColor = 'orange';

            chatClickToConvert.addEventListener('mouseover', () => {
                chatClickToConvert.style.backgroundColor = '#c58000';
            });
    
            chatClickToConvert.addEventListener('mouseout', () => {
                chatClickToConvert.style.backgroundColor = 'orange';
            });
        }

        if (chatInButton) {
            chatInButton.style.backgroundColor = 'orange';

            chatInButton.addEventListener('mouseover', () => {
                chatInButton.style.backgroundColor = '#c58000';
            });
    
            chatInButton.addEventListener('mouseout', () => {
                chatInButton.style.backgroundColor = 'orange';
            });
        }

        if (toggleAllButton) {
            toggleAllButton.style.backgroundColor = '#790808';

            toggleAllButton.addEventListener('mouseover', () => {
                toggleAllButton.style.backgroundColor = '#ae0000';
            });
    
            toggleAllButton.addEventListener('mouseout', () => {
                toggleAllButton.style.backgroundColor = '#790808';
            });
        }

        if (backToTop) {
            backToTop.addEventListener('mouseover', () => {
                backToTop.style.backgroundColor = '#ae0000';
            });
    
            backToTop.addEventListener('mouseout', () => {
                backToTop.style.backgroundColor = 'black';
            });
        }
    });
}

if (blueThemeButton) {
    blueThemeButton.addEventListener('click', () => {
        if (largeIconElement) largeIconElement.src = 'assets/images/RenderersRealm_Icon1.ico';
        if (faviconElement) faviconElement.href = 'assets/images/RenderersRealm_Icon1.ico';
        if (headerElement) headerElement.style.backgroundColor = '#48a6ccb3';
        if (chatHistoryElement) chatHistoryElement.style.backgroundColor = '#48a6ccb3';
        if (textareaElement) textareaElement.style.backgroundColor = '#48a6ccb3';
        if (chatHistoryHeader) chatHistoryHeader.style.borderBottomColor = '#48a6ccb3';
        if (footerIcon) footerIcon.src = 'assets/images/UoM_AI_Logo.png';
        if (footerBackground) footerBackground.style.backgroundColor = '#48a6ccb3';

        if (chatClickToConvert) {
            chatClickToConvert.style.backgroundColor = '#7b02ff';

            chatClickToConvert.addEventListener('mouseover', () => {
                chatClickToConvert.style.backgroundColor = '#5804b5';
            });
    
            chatClickToConvert.addEventListener('mouseout', () => {
                chatClickToConvert.style.backgroundColor = '#7b02ff';
            });
        }

        if (chatInButton) {
            chatInButton.style.backgroundColor = '#7b02ff';

            chatInButton.addEventListener('mouseover', () => {
                chatInButton.style.backgroundColor = '#5804b5';
            });
    
            chatInButton.addEventListener('mouseout', () => {
                chatInButton.style.backgroundColor = '#7b02ff';
            });
        }
        
        if (toggleAllButton) {
            toggleAllButton.style.backgroundColor = '#48a6ccb3';

            toggleAllButton.addEventListener('mouseover', () => {
                toggleAllButton.style.backgroundColor = '#1fbfffb3';
            });
    
            toggleAllButton.addEventListener('mouseout', () => {
                toggleAllButton.style.backgroundColor = '#48a6ccb3';
            });
        }

        if (backToTop) {
            backToTop.addEventListener('mouseover', () => {
                backToTop.style.backgroundColor = '#1fbfff';
            });
    
            backToTop.addEventListener('mouseout', () => {
                backToTop.style.backgroundColor = 'black';
            });
        }
    });
}

if (darkThemeButton) {
    darkThemeButton.addEventListener('click', () => {
        if (headerElement) headerElement.style.backgroundColor = '#a2a2a2b3';
        if (chatHistoryElement) chatHistoryElement.style.backgroundColor = '#a2a2a2b3';
        if (textareaElement) textareaElement.style.backgroundColor = '#a2a2a2b3';
        if (chatHistoryHeader) chatHistoryHeader.style.borderBottomColor = '#a2a2a2b3';
        if (largeIconElement) largeIconElement.src = 'assets/images/RenderersRealm_Icon1.ico';
        if (faviconElement) faviconElement.href = 'assets/images/RenderersRealm_Icon1.ico';
        if (footerIcon) footerIcon.src = 'assets/images/UoM_AI_Logo.png';
        if (footerBackground) footerBackground.style.backgroundColor = '#a2a2a2b3';

        if (chatClickToConvert) {
            chatClickToConvert.style.backgroundColor = 'limegreen';

            chatClickToConvert.addEventListener('mouseover', () => {
                chatClickToConvert.style.backgroundColor = 'green';
            });
    
            chatClickToConvert.addEventListener('mouseout', () => {
                chatClickToConvert.style.backgroundColor = 'limegreen';
            });
        }

        if (chatInButton) {
            chatInButton.style.backgroundColor = 'limegreen';

            chatInButton.addEventListener('mouseover', () => {
                chatInButton.style.backgroundColor = 'green';
            });
    
            chatInButton.addEventListener('mouseout', () => {
                chatInButton.style.backgroundColor = 'limegreen';
            });
        }
        
        if (toggleAllButton) {
            toggleAllButton.style.backgroundColor = '#a2a2a2b3';

            toggleAllButton.addEventListener('mouseover', () => {
                toggleAllButton.style.backgroundColor = '#7b7b7bb3';
            });
    
            toggleAllButton.addEventListener('mouseout', () => {
                toggleAllButton.style.backgroundColor = '#a2a2a2b3';
            });
        }

        if (backToTop) {
            backToTop.addEventListener('mouseover', () => {
                backToTop.style.backgroundColor = '#6e6e6e';
            });
    
            backToTop.addEventListener('mouseout', () => {
                backToTop.style.backgroundColor = 'black';
            });    
        }

        if (darkThemeButton.classList.contains('dark-theme--to_light')) {
            toggleTextColor(false);
            bodyElement.style.backgroundColor = '#ffffff';
            darkThemeButton.classList.remove('dark-theme--to_light');
            darkThemeButton.classList.add('dark-theme');
        } else {
            toggleTextColor(true);
            bodyElement.style.backgroundColor = '#2c2c2c';
            darkThemeButton.classList.add('dark-theme--to_light');
            darkThemeButton.classList.remove('dark-theme');
        }
    });
}

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



// Speech To Text
//https://www.youtube.com/watch?v=SFGIKucaOZA&list=LL&index=2
// modified to add button animation
click_to_convert.addEventListener('click', function () {
    var speech = true;
    window.SpeachRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeachRecognition();

    recognition.interimResults = true;

    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
        
        convert_text.innerHTML = transcript;
    });

    recognition.addEventListener('start', () => {
        // Add waiting animation to button
        click_to_convert.classList.add('listening');
    });

    recognition.addEventListener('end', () => {
        // Remove waiting animation when recognition stops
        click_to_convert.classList.remove('listening');
    });

    if (speech == true) {
        recognition.start();

        // Revoke microphone permission
        navigator.permissions.revoke({ name: 'microphone' }).catch((err) => {
            console.warn("Permission revocation not supported on this browser:", err);
        });
    }
});



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



/* Preloader */
window.addEventListener("load", function () {
    const preloader = document.querySelector(".preloader");
    setTimeout(
      function () {
        preloader.classList.add("preloader--hiden");
      }
    );
});