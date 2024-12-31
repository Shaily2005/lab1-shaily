class Bicycle {
    constructor(brand, model, year, weight, description = "Used bicycle") {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.weight = weight; // in grams
      this.description = description;
    }
  
    // Method to return bike info
    getInfo() {
      return `${this.brand} ${this.model} (${this.year})`;
    }
  
    // Method to return weight
    getWeight(inKilograms = false) {
      if (inKilograms) {
        return this.weight / 1000; // Convert grams to kilograms
      }
      return this.weight;
    }
  
    // Setter for weight
    setWeight(newWeight) {
      this.weight = newWeight;
    }
  }
  
  // Create two Bicycle objects
  const bike1 = new Bicycle("Trek", "FX 3", 2020, 12000);
  const bike2 = new Bicycle("Giant", "Escape 2", 2022, 13500, "Brand new bicycle");
  
  // Displaying bike information
  console.log(bike1.getInfo());
  console.log(bike2.getInfo());
  
  // Displaying bike weights
  console.log(`Bike 1 weight in kilograms: ${bike1.getWeight(true)} kg`);
  console.log(`Bike 1 weight in grams: ${bike1.getWeight()} g`);
  console.log(`Bike 2 weight in kilograms: ${bike2.getWeight(true)} kg`);
  console.log(`Bike 2 weight in grams: ${bike2.getWeight()} g`);
  