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
        
        // Hentikan pemutaran video saat ditutup
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


document.getElementById('btnEmail').addEventListener('click', function() {
    window.location.href = "mailto:email.anda@binus.ac.id";
});