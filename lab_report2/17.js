function findLargestNumber() {
    let numbers = prompt("Enter 5 numbers separated by commas:").split(',').map(Number);
    let largest = Math.max(...numbers);
    alert("The largest number is: " + largest);
}
findLargestNumber();
