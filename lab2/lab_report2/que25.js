const personAccount = {
    firstName: "Sonu",
    lastName: "Gurung",
    incomes: [
      { description: "Salary", amount: 3000 },
      { description: "Freelance", amount: 1500 }
    ],
    expenses: [
      { description: "Rent", amount: 1200 },
      { description: "Groceries", amount: 300 }
    ],
  
    
    totalIncome() {
      return this.incomes.reduce((total, income) => total + income.amount, 0);
    },
  
    
    totalExpense() {
      return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    },
  
    
    accountInfo() {
      return `Account Holder: ${this.firstName} ${this.lastName}\nTotal Income: $${this.totalIncome()}\nTotal Expenses: $${this.totalExpense()}\nBalance: $${this.accountBalance()}`;
    },
  
    
    addIncome(description, amount) {
      this.incomes.push({ description, amount });
    },
  
    
    addExpense(description, amount) {
      this.expenses.push({ description, amount });
    },
  
    
    accountBalance() {
      return this.totalIncome() - this.totalExpense();
    }
  };
  
  
  console.log(personAccount.accountInfo());
  
  personAccount.addIncome("Bonus", 500); 
  personAccount.addExpense("Utilities", 200); 
  
  console.log("\nUpdated Account Info:");
  console.log(personAccount.accountInfo()); 