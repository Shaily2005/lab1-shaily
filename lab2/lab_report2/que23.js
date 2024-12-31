function removeCharacters(str, start, count) {
    if (typeof str !== "string") {
      throw new Error("Input must be a string.");
    }
    if (start < 0 || count < 0) {
      throw new Error("Start and count must be non-negative numbers.");
    }
  
    
    return str.slice(0, start) + str.slice(start + count);
  }
  
 
  console.log(removeCharacters("Hello World", 6, 5)); 
  console.log(removeCharacters("JavaScript", 4, 6));  
  console.log(removeCharacters("Example", 2, 3));     
  