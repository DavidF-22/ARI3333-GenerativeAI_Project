(function () {
    /* Back to Top Button */
    const backtotop = document.querySelector(".backToTop");

    if (backtotop) {
        const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                backtotop.classList.add("active");
            } else {
                backtotop.classList.remove("active");
            }
        };

        // Trigger on both page load and scroll
        window.addEventListener("load", toggleBacktotop);
        window.addEventListener("scroll", toggleBacktotop); // Fix: Listen on window
    }
})();