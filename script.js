/* Building functionality for a dynamic Budget Summary */
class Budget { // Will create a Budget class to handle income, expenses, and total budget
    constructor() {
        this.income = [];  // this will store the income entries
        this.expenses = [];  // this will store the expenses entries
    }
    /* Encapsulating Phase */
    getTotalBudget() { // method to calculate income minus expenses
        return this.getTotalIncome() - this.getTotalExpenses();
    }
    getTotalIncome() { // method to calculate all the income amounts in the this.income array
        return this.income.reduce((total, item) => total + item.amount, 0); // reduce() method will take all amounts and add them together
    }
    getTotalExpenses() { // method to calculate all the expenses amounts in the this.expenses array
        return this.expenses.reduce((total, item) => total + item.amount, 0);
    }
    // method to add income entry
    addIncome(description, amount) {
        if (!description || amount <= 0) { // checks that "description" isn't missing or that amount isn't less than or equal to 0
            throw new Error("Invalid income entry"); // shows an error message
        }
        // if the parameters are met it will be added to income array as key-value pairs
        this.income.push({ description, amount });
    }
    // method to add expense entry
    addExpenses(description, amount) {
        if (!description || amount <= 0) { // checks that "description" isn't missing or that amount isn't less than or equal to 0
            throw new Error("Invalid income entry"); // shows an error message
        }
        // if the parameters are met it will be added to expenses array as key-value pairs
        this.expenses.push({ description, amount });
    }
}