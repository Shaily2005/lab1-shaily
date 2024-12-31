
var xhr = new XMLHttpRequest();


xhr.open("GET", "../11/bca.txt", true);


xhr.onload = function () {
    if (xhr.status == 200) {

        document.getElementById('bca-content').innerHTML = xhr.responseText;
    } else {

        document.getElementById('bca-content').innerHTML = "Error loading content.";
    }
};

xhr.onerror = function () {
    document.getElementById('bca-content').innerHTML = "Request failed.";
};

xhr.send();
