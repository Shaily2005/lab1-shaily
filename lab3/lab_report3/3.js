class Student {
    constructor() {
      this.name = '';
      this.surname = '';
      this.country = '';
      this.#tuition = 0;
      this._indexNumber = 0;
    }
  
    // Getter for name and surname
    getName() {
      return this.name;
    }
  
    getSurname() {
      return this.surname;
    }
  
    // Public method
    helloWorld() {
      return "Hello World";
    }
  
    // Protected method (simulated with `_`)
    _helloFamily() {
      return "Hello Family";
    }
  
    // Private method (simulated with `#`)
    #helloMe() {
      return "Hello me!";
    }
  
    // Private getter for tuition
    #getTuition() {
      return this.#tuition;
    }
  
    // Setters for tuition and index number
    setTuition(value) {
      this.#tuition = value;
    }
  
    setIndexNumber(value) {
      this._indexNumber = value;
    }
  
    // Public method to access private methods
    getHelloMe() {
      return this.#helloMe();
    }
  
    getTuitionValue() {
      return `Tuition: ${this.#getTuition()}`;
    }
  }
  
  class PartTimeStudent extends Student {
    // Public method to call protected method from the parent class
    helloParent() {
      return this._helloFamily();
    }
  }
  
  // Create objects and test the methods
  const student1 = new Student();
  student1.name = "John";
  student1.surname = "Doe";
  student1.country = "USA";
  student1.setTuition(5000);
  
  console.log(student1.getName()); // John
  console.log(student1.getSurname()); // Doe
  console.log(student1.helloWorld()); // Hello World
  console.log(student1.getHelloMe()); // Hello me!
  console.log(student1.getTuitionValue()); // Tuition: 5000
  
  const partTimeStudent = new PartTimeStudent();
  console.log(partTimeStudent.helloParent()); // Hello Family
  