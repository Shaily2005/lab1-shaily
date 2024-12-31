function calculateAge() {
    let birthDate = new Date(prompt("Enter your birth date (YYYY-MM-DD):"));
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    console.log(`Your age is: ${age}`);
}
calculateAge();
