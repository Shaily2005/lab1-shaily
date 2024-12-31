
const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
    "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
    "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
    "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada",
    "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros",
    "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark",
    "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador"
];

const table = document.getElementById('countries-table');

function createCountriesTable(countries) {
    const numRows = Math.ceil(countries.length / 6); 
    let tableContent = "<thead><tr><th>Countries</th></tr></thead><tbody>"; 

    for (let i = 0; i < numRows; i++) {
        tableContent += "<tr>"; 
        for (let j = 0; j < 6; j++) {
            const countryIndex = i * 6 + j;
            if (countryIndex < countries.length) {
                tableContent += `<td>${countries[countryIndex]}</td>`;
            } else {
                tableContent += "<td></td>"; 
            }
        }
        tableContent += "</tr>";
    }

    tableContent += "</tbody>";
    table.innerHTML = tableContent; 
}

createCountriesTable(countries);
