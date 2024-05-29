
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode')
    
    });
});