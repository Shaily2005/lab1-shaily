const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const userInput = parseInt(prompt("Enter a number: "), 22);
document.write("<div>");
for (let i = 1; i <= userInput; i++) {
    let className = isPrime(i) ? "prime" : i % 2 === 0 ? "even" : "odd";
    document.write(`<span class="${className}">${i}</span> `);
}
document.write("</div>");