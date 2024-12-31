document.getElementById('username').addEventListener('input', function () {
    const username = this.value;

    if (username.length > 0) {
        checkUsernameAvailability(username);
    } else {
        document.getElementById('status').innerHTML = '';
    }
});

function checkUsernameAvailability(username) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '13.php?username=' + encodeURIComponent(username), true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);

            if (response.available) {
                document.getElementById('status').innerHTML = 'Username is available.';
                document.getElementById('status').className = 'available';
            } else {
                document.getElementById('status').innerHTML = 'Username is not available.';
                document.getElementById('status').className = 'unavailable';
            }
        } else {
            console.error('Request failed: ' + xhr.statusText);
        }
    };

    xhr.onerror = function () {
        console.error('Request failed');
    };

    xhr.send();
}