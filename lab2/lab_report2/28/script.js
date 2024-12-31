
const wrapper = document.querySelector('.wrapper');
const heading1 = document.querySelector('h1');
const heading2 = document.querySelector('h2');
const listItems = document.querySelectorAll('li');

// a. Change the year color in the title every second
setInterval(() => {
    heading1.style.color = getRandomColor();
}, 1000);

// b. Change the background color of the subtitle every second
setInterval(() => {
    heading2.style.backgroundColor = getRandomColor();
}, 1000);

// c. Style list items based on their content
listItems.forEach((item) => {
    if (item.textContent.includes('Done')) {
        item.style.backgroundColor = 'green';
        item.style.color = 'white';
    } else if (item.textContent.includes('Ongoing')) {
        item.style.backgroundColor = 'yellow';
        item.style.color = 'black';
    } else if (item.textContent.includes('Coming')) {
        item.style.backgroundColor = 'red';
        item.style.color = 'white';
    }
    item.style.padding = '10px';
    item.style.margin = '5px 0';
    item.style.listStyle = 'none';
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
