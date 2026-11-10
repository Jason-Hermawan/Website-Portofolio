const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeLabel = document.getElementById("themeLabel");

function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);

    if (theme === "light") {
        themeIcon.textContent = "☾";
        themeLabel.textContent = "Dark Mode";
    } else {
        themeIcon.textContent = "☀";
        themeLabel.textContent = "Light Mode";
    }

    localStorage.setItem("portfolio-theme", theme);
}

let savedTheme = localStorage.getItem("portfolio-theme") || "dark";

setTheme(savedTheme);

themeToggle.addEventListener("click", function () {
    let currentTheme = document.documentElement.getAttribute("data-theme");

    if (currentTheme === "dark") {
        setTheme("light");
    } else {
        setTheme("dark");
    }
});

function openModal(modalId) {
    let modal = document.getElementById(modalId);

    if (modal) {
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    }
}

function closeModal(modalId) {
    let modal = document.getElementById(modalId);

    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";

        let iframe = modal.querySelector("iframe");

        if (iframe) {
            let iframeSrc = iframe.src;
            iframe.src = iframeSrc;
        }
    }
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        let modals = document.querySelectorAll(".modal");

        modals.forEach(function (modal) {
            if (modal.style.display === "flex") {
                closeModal(modal.id);
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let fadeElements = document.querySelectorAll(".fade-in");

    if (!("IntersectionObserver" in window)) {
        fadeElements.forEach(function (element) {
            element.classList.add("show");
        });

        return;
    }

    let observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, {
        threshold: 0.12
    });

    fadeElements.forEach(function (element) {
        observer.observe(element);
    });
});
