function addCookie() {
    const key = document.getElementById('key').value;
    const value = document.getElementById('value').value;
    document.cookie = `${key}=${value}`;
    displayCookies();
}

function readCookie() {
    const key = document.getElementById('key').value;
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [k, v] = cookie.split('=');
        if (k === key) alert(`${k}: ${v}`);
    }
}

function deleteCookie() {
    const key = document.getElementById('key').value;
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    displayCookies();
}

function clearCookies() {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [key] = cookie.split('=');
        document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
    displayCookies();
}

function displayCookies() {
    const table = document.getElementById('cookieTable');
    table.innerHTML = '<tr><th>Key</th><th>Value</th></tr>';
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key && value) {
            const row = table.insertRow();
            row.insertCell(0).textContent = key;
            row.insertCell(1).textContent = value;
        }
    }
}

displayCookies();