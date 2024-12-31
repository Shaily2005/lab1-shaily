function getCurrentDate() {
    const today = new Date();

    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    const year = today.getFullYear();

    const format1 = `${month}-${day}-${year}`;
    const format2 = `${month}/${day}/${year}`;
    const format3 = `${day}-${month}-${year}`;
    const format4 = `${day}/${month}/${year}`;
    const format5 = `${year} ${today.toLocaleString('default', { month: 'long' })} ${day}, ${today.toLocaleString('default', { weekday: 'long' })}`;

    console.log(`Format 1 (mm-dd-yyyy): ${format1}`);
    console.log(`Format 2 (mm/dd/yyyy): ${format2}`);
    console.log(`Format 3 (dd-mm-yyyy): ${format3}`);
    console.log(`Format 4 (dd/mm/yyyy): ${format4}`);
    console.log(`Format 5 (yyyy month date day): ${format5}`);
}

getCurrentDate();
