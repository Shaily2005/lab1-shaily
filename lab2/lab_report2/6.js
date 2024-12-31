function daysUntilChristmas() {
    const today = new Date(); 
    const currentYear = today.getFullYear();

    const christmas = new Date(currentYear, 11, 25); 

    if (today > christmas) {
        christmas.setFullYear(currentYear + 1);
    }

    const diffInMilliseconds = christmas - today;
    const daysLeft = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));

    return daysLeft;
}

console.log(`There are ${daysUntilChristmas()} days left until Christmas!`);
