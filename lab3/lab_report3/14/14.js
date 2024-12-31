
document.getElementById('country').addEventListener('change', function () {
    const country = this.value;

    if (country === "") {
        document.getElementById('city').innerHTML = "<option value=''>Select a City</option>";
        return;
    }


    fetchCities(country);
});
function fetchCities(country) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `14.php?country=${country}`, true);

    xhr.onload = function () {
        if (xhr.status === 200) {

            const cities = JSON.parse(xhr.responseText);


            const cityDropdown = document.getElementById('city');
            cityDropdown.innerHTML = "<option value=''>Select a City</option>";

            cities.forEach(function (city) {
                const option = document.createElement('option');
                option.value = city;
                option.textContent = city;
                cityDropdown.appendChild(option);
            });
        } else {
            console.error('Request failed: ' + xhr.statusText);
        }
    };

    xhr.onerror = function () {
        console.error('Request failed');
    };

    xhr.send();
}
