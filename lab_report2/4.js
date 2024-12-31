function capitalizeFirstLetterEachWord(str) {
    return str
        .split(" ") 
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
        .join(" "); 
}

// Example Usage
console.log(capitalizeFirstLetterEachWord("scripting language")); 
console.log(capitalizeFirstLetterEachWord("javascript really hard")); 
