function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "flex";
    }
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
        
        var iframe = modal.querySelector('iframe');
        if (iframe) {
            var iframeSrc = iframe.src;
            iframe.src = iframeSrc;
        }
    }
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        
        var iframe = event.target.querySelector('iframe');
        if (iframe) {
            var iframeSrc = iframe.src;
            iframe.src = iframeSrc;
        }
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, {
        threshold: 0.15
    });

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});
