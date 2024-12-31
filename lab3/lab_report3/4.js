class Product {
    constructor(description, quantity, price) {
      if (typeof description !== 'string') {
        console.error("Description must be a string.");
      } else {
        this.description = description;
      }
  
      if (typeof quantity !== 'number' || typeof price !== 'number') {
        console.error("Quantity and price must be numbers.");
      } else {
        this.quantity = quantity;
        this.price = price;
      }
    }
  
    // Getter and Setter for description
    getDescription() {
      return this.description;
    }
  
    setDescription(value) {
      this.description = value;
    }
  
    // Getter and Setter for quantity
    getQuantity() {
      return this.quantity;
    }
  
    setQuantity(value) {
      this.quantity = value;
    }
  
    // Getter and Setter for price
    getPrice() {
      return this.price;
    }
  
    setPrice(value) {
      this.price = value;
    }
  
    // Method to calculate total price
    calculatePrice() {
      return this.quantity * this.price;
    }
  }
  
  // Create an object and test the class
  const product1 = new Product("Laptop", 3, 800);
  console.log(`Description: ${product1.getDescription()}`); // Laptop
  console.log(`Quantity: ${product1.getQuantity()}`); // 3
  console.log(`Price: ${product1.getPrice()}`); // 800
  console.log(`Total Price: ${product1.calculatePrice()}`); // 2400
  