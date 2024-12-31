// a. Get the first paragraph using document.querySelector(tagname)
const firstParagraph = document.querySelector('p');
console.log("First Paragraph:", firstParagraph.textContent);

// b. Get each paragraph using document.querySelector('#id') by their IDs
const secondParagraph = document.querySelector('#para2');
const thirdParagraph = document.querySelector('#para3');
console.log("Second Paragraph:", secondParagraph.textContent);
console.log("Third Paragraph:", thirdParagraph.textContent);

// c. Get all p elements as a NodeList using document.querySelectorAll(tagname)
const allParagraphs = document.querySelectorAll('p');
console.log("All Paragraphs:", allParagraphs);

// d. Loop through the NodeList and get the text content of each paragraph
allParagraphs.forEach((paragraph, index) => {
    console.log(`Paragraph ${index + 1}:`, paragraph.textContent);
});

// e. Set a new text content to the fourth paragraph
allParagraphs[3].textContent = "Fourth Paragraph";

// f. Set ID and class attributes for all paragraphs using different methods
allParagraphs.forEach((paragraph, index) => {
    paragraph.id = `para${index + 1}`; 
    paragraph.setAttribute('class', `paragraph-class-${index + 1}`);
});

// g. Change the style of each paragraph
allParagraphs.forEach((paragraph, index) => {
    paragraph.style.color = index % 2 === 0 ? "blue" : "green";
    paragraph.style.backgroundColor = index % 2 === 0 ? "lightgray" : "lightyellow"; 
    paragraph.style.border = "1px solid black";
    paragraph.style.fontSize = `${16 + index * 2}px`; 
    paragraph.style.fontFamily = "Arial, sans-serif"; 
});

// h. Select all paragraphs and loop through each element
// Give the first and third paragraphs a green color, and the second and fourth a red color
allParagraphs.forEach((paragraph, index) => {
    if (index === 0 || index === 2) {
        paragraph.style.color = "green"; 
    } else if (index === 1 || index === 3) {
        paragraph.style.color = "red"; 
    }
});

// i. Set text content, id, and class to each paragraph
allParagraphs.forEach((paragraph, index) => {
    paragraph.textContent = `This is paragraph number ${index + 1}`; 
    paragraph.id = `new-para${index + 1}`; 
    paragraph.className = `new-class-${index + 1}`; 
});
