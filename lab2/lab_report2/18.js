function dateDifference() {
    let date1 = new Date(prompt("Enter the first date (YYYY-MM-DD):"));
    let date2 = new Date(prompt("Enter the second date (YYYY-MM-DD):"));
    let diffInTime = Math.abs(date2 - date1);
    let diffInDays = diffInTime / (1000 * 60 * 60 * 24);
    console.log(`Difference in days: ${diffInDays}`);
}
dateDifference();
