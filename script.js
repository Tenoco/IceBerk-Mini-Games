document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('searchInput');
    var searchButton = document.getElementById('searchButton');
    var toggleButton = document.getElementById('toggleButton');
    var gameButtons = document.querySelectorAll('.game-button');
    var body = document.body;

    searchButton.addEventListener('click', function() {
        var searchTerm = searchInput.value.toLowerCase();
        gameButtons.forEach(function(button) {
            var buttonText = button.textContent.toLowerCase();
            if (buttonText.includes(searchTerm)) {
                button.style.display = 'inline-block';
            } else {
                button.style.display = 'none';
            }
        });
    });

    toggleButton.addEventListener('click', function() {
        body.classList.toggle('light-mode'); // Toggle light mode class
        toggleButton.textContent = body.classList.contains('light-mode') ? 'Toggle Dark Mode' : 'Toggle Light Mode'; // Change button text
    });
});