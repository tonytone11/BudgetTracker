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

/* Instantiate Phase */
const myBudget = new Budget(); // creating a Budget instance

// Functionality for income submission form
document.getElementById("income-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const description = document.getElementById("incomeDescription").value;
    const amount = parseFloat(document.getElementById("incomeAmount").value);

    try {
        myBudget.addIncome(description, amount);
        updateUI();
    } catch (error) {
        alert(error.message);
    }
    // clears inputs
    document.getElementById("incomeDescription").value = "";
    document.getElementById("incomeAmount").value = "";
});

// Functionality for expenses submission form
document.getElementById("expense-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const description = document.getElementById("expenseDescription").value.trim();
    const amount = parseFloat(document.getElementById("expenseAmount").value);

    try {
        myBudget.addExpenses(description, amount);
        updateUI();
    } catch (error) {
        alert(error.message);
    }
    // clears input
    document.getElementById("expenseDescription").value = "";
    document.getElementById("expenseAmount").value = "";
});

// Function to update the Budget interface
function updateUI() {
    const budgetTotalElement = document.querySelector(".budgetTotal");
    const incomeElement = document.querySelector(".income");
    const expensesElement = document.querySelector(".expenses");

    budgetTotalElement.textContent = `
    Total Budget: $${myBudget.getTotalBudget().toFixed(2)}`;
    incomeElement.textContent = `
    Income: $${myBudget.getTotalIncome().toFixed(2)}`;
    expensesElement.textContent = `
    Expenses: $${myBudget.getTotalExpenses().toFixed(2)}`;
}

// console.log(myBudget.income);
// console.log(myBudget.expenses);
// console.log(myBudget.getTotalIncome());
// myBudget.addIncome("Job Check", 525.00);
// myBudget.addExpenses("Lunch", 7.00);
// updateUI();