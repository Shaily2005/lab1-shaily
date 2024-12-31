
const container = document.querySelector('.container');

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

for (let i = 0; i <= 100; i++) {
    const numberDiv = document.createElement('div');
    numberDiv.textContent = i;
    numberDiv.classList.add('number');

    if (isPrime(i)) {
        numberDiv.style.backgroundColor = 'red'; 
    } else if (i % 2 === 0) {
        numberDiv.style.backgroundColor = 'green'; 
    } else {
        numberDiv.style.backgroundColor = 'yellow'; 
    }

    container.appendChild(numberDiv);
}
