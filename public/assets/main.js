document.addEventListener("DOMContentLoaded", () => {
    // Sticky Header
    const header = document.querySelector(".header--sticky");
    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 150) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        });
    }

    // Mobile Menu Toggle
    const menuBtn = document.querySelector(".menu-btn");
    const sideBar = document.querySelector("#side-bar");
    const closeBtn = document.querySelector(".close-icon-menu");
    const anyOverlay = document.querySelector(".any-overlay");

    if (menuBtn && sideBar) {
        menuBtn.addEventListener("click", (e) => {
            e.preventDefault();
            sideBar.classList.add("show");
            if (anyOverlay) anyOverlay.classList.add("show");
        });
    }

    if (closeBtn && sideBar) {
        closeBtn.addEventListener("click", (e) => {
            e.preventDefault();
            sideBar.classList.remove("show");
            if (anyOverlay) anyOverlay.classList.remove("show");
        });
    }

    if (anyOverlay && sideBar) {
        anyOverlay.addEventListener("click", () => {
            sideBar.classList.remove("show");
            anyOverlay.classList.remove("show");
        });
    }

    // Search overlay toggle
    const searchIcon = document.querySelector(".search-icon");
    const searchOverlay = document.querySelector(".search-input-area");
    const searchClose = document.querySelector(".search-input-area .search-input-inner span");

    if (searchIcon && searchOverlay) {
        searchIcon.addEventListener("click", (e) => {
            e.preventDefault();
            searchOverlay.classList.add("show");
        });
    }

    if (searchClose && searchOverlay) {
        searchClose.addEventListener("click", () => {
            searchOverlay.classList.remove("show");
        });
    }
});
