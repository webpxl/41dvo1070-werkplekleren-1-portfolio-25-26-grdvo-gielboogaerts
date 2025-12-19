const scrollToTopButton = document.querySelector("#goToTop");

scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});