// Vehicle Interface
class Vehicle {
    startEngine() {
      throw new Error("startEngine() must be implemented");
    }
    stopEngine() {
      throw new Error("stopEngine() must be implemented");
    }
  }
  
  // Car Class
  class Car extends Vehicle {
    #make; // Private property
    #model; // Private property
    #year; // Private property
  
    constructor(make, model, year) {
      super();
      this.#make = make;
      this.#model = model;
      this.#year = year;
    }
  
    // Getter and Setter for Make
    getMake() {
      return this.#make;
    }
  
    setMake(make) {
      this.#make = make;
    }
  
    // Getter and Setter for Model
    getModel() {
      return this.#model;
    }
  
    setModel(model) {
      this.#model = model;
    }
  
    // Getter and Setter for Year
    getYear() {
      return this.#year;
    }
  
    setYear(year) {
      this.#year = year;
    }
  
    // Methods
    start() {
      console.log("Car started.");
    }
  
    displayInfo() {
      console.log(`Make: ${this.#make}, Model: ${this.#model}, Year: ${this.#year}`);
    }
  
    getDescription() {
      return `${this.#year} ${this.#make} ${this.#model}`;
    }
  
    // Implementing Vehicle Interface methods
    startEngine() {
      console.log("Engine started.");
    }
  
    stopEngine() {
      console.log("Engine stopped.");
    }
  }
  
  // ElectricCar Class
  class ElectricCar extends Car {
    #batteryCapacity; // Private property
  
    constructor(make, model, year, batteryCapacity) {
      super(make, model, year);
      this.#batteryCapacity = batteryCapacity;
    }
  
    // Getter and Setter for Battery Capacity
    getBatteryCapacity() {
      return this.#batteryCapacity;
    }
  
    setBatteryCapacity(capacity) {
      this.#batteryCapacity = capacity;
    }
  
    charge() {
      console.log("Car is charging...");
    }
  
    // Overriding getDescription
    getDescription() {
      return `${super.getDescription()} with a battery capacity of ${this.#batteryCapacity} kWh.`;
    }
  }
  
  // Example usage
  const myCar = new Car("Toyota", "Corolla", 2022);
  myCar.start();
  myCar.displayInfo();
  console.log(myCar.getDescription());
  myCar.startEngine();
  myCar.stopEngine();
  
  const myElectricCar = new ElectricCar("Tesla", "Model 3", 2023, 75);
  myElectricCar.start();
  myElectricCar.displayInfo();
  console.log(myElectricCar.getDescription());
  myElectricCar.charge();
  