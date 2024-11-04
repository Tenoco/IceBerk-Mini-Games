document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('searchInput');
    var searchButton = document.getElementById('searchButton');
    var toggleButton = document.getElementById('toggleButton');
    var gameButtons = document.querySelectorAll('.game-button');
    var body = document.body;

    // Load theme from cookie on page load
    var theme = getCookie('theme');
    if (theme === 'light') {
        body.classList.add('light-mode');
        toggleButton.textContent = 'Toggle Dark Mode';
    } else {
        body.classList.remove('light-mode');
        toggleButton.textContent = 'Toggle Light Mode';
    }

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
        body.classList.toggle('light-mode');
        toggleButton.textContent = body.classList.contains('light-mode') ? 'Toggle Dark Mode' : 'Toggle Light Mode';
        
        // Save theme to cookie
        setCookie('theme', body.classList.contains('light-mode') ? 'light' : 'dark', 30);
    });
});

function getCookie(name) {
    var cookieArr = document.cookie.split(";");
    for (var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        if (name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

function setCookie(name, value, daysToLive) {
    var cookie = name + "=" + encodeURIComponent(value);
    if (typeof daysToLive === "number") {
        cookie += "; max-age=" + (daysToLive * 24 * 60 * 60);
    }
    document.cookie = cookie;
}