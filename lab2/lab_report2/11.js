function findSmallestInArray() {
    let arr = prompt("Enter numbers separated by commas:").split(',').map(Number);
    let smallest = Math.min(...arr);
    console.log("Smallest number is:", smallest);
}
findSmallestInArray();
