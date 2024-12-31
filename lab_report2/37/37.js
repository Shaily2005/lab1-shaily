document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById("table-body");
    const addRowButton = document.getElementById("add-row");


    const addRow = () => {
        const rows = tableBody.querySelectorAll("tr");
        const rowNumber = rows.length + 1;


        const firstRow = rows[0];
        const newRow = firstRow.cloneNode(true);


        newRow.querySelector("td:first-child").textContent = rowNumber;

        const select = newRow.querySelector("select");
        const input = newRow.querySelector("input");

        select.value = "Select Product";
        input.value = "";


        const removeButton = newRow.querySelector(".remove-row");
        removeButton.addEventListener("click", removeRow);


        tableBody.appendChild(newRow);
    };


    const removeRow = (event) => {
        const button = event.target;
        const row = button.closest("tr");
        row.remove();


        const rows = tableBody.querySelectorAll("tr");
        rows.forEach((row, index) => {
            row.querySelector("td:first-child").textContent = index + 1;
        });
    };


    addRowButton.addEventListener("click", addRow);


    const initialRemoveButton = tableBody.querySelector(".remove-row");
    initialRemoveButton.addEventListener("click", removeRow);
});
