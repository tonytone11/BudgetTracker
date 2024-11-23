/* Building functionality for a dynamic Budget Summary */
// Will create a Budget class to handle income, expenses, and total budget
class Budget {
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
}