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
    event.preventDefault(); // prevents page from automatically refreshing
    const description = document.getElementById("incomeDescription").value; // gets the value of incomeDescription
    const amount = parseFloat(document.getElementById("incomeAmount").value); // gets the value of incomeAmount and converts to a number

    try {
        myBudget.addIncome(description, amount); // add the descrip & amount to myBudget
        addToHistory("Income", description, amount); // add Income to my transaction history
        updateUI(); // updates budget summary
    } catch (error) {
        alert(error.message); // tells you what error I have
    }
    // clears inputs
    document.getElementById("incomeDescription").value = "";
    document.getElementById("incomeAmount").value = "";
});

// Functionality for expenses submission form
document.getElementById("expense-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const description = document.getElementById("expenseDescription").value; // add the descrip & amount to myBudget
    const amount = parseFloat(document.getElementById("expenseAmount").value); // gets the value of incomeAmount and converts to a number

    try {
        myBudget.addExpenses(description, amount); // add the descrip & amount to myBudget
        addToHistory("Expense", description, amount); // add Income to my transaction history
        updateUI(); // updates budget summary
    } catch (error) {
        alert(error.message); // tells you what error I have
    }
    // clears input
    document.getElementById("expenseDescription").value = "";
    document.getElementById("expenseAmount").value = "";
});

// Function to update the Budget interface
function updateUI() {
    const budgetTotalElement = document.querySelector(".budgetTotal"); // selecting element that displays Total Budget
    const incomeElement = document.querySelector(".income"); // selecting element that displays Income
    const expensesElement = document.querySelector(".expenses"); //selecting element that displays Expenses

    // updates text content of Budget, Income, and Expenses
    budgetTotalElement.textContent = `
    Total Budget: $${myBudget.getTotalBudget().toFixed(2)}`;
    incomeElement.textContent = `
    Income: $${myBudget.getTotalIncome().toFixed(2)}`;
    expensesElement.textContent = `
    Expenses: $${myBudget.getTotalExpenses().toFixed(2)}`;
}

// Function to save the input from Income and Expense into a transaction history
function addToHistory(type, description, amount) {
    const transaction = document.querySelector(".transactionList");

    const listItems = document.createElement("li"); // creates <li> tag
    listItems.textContent = `${type}: ${description} - $${amount.toFixed(2)}`; // content that will diaplay in <li> tag

    // if else statement to add specific class for Income and Expenses so I can target them in my stylesheet
    if (type === "Income") {
        listItems.classList.add("income-item");
    } else if (type === "Expense") {
        listItems.classList.add("expense-item");
    }
    transaction.appendChild(listItems); // appends the list item to transactionList
}

// console.log(myBudget.income);
// console.log(myBudget.expenses);
// console.log(myBudget.getTotalIncome());
// myBudget.addIncome("Job Check", 525.00);
// myBudget.addExpenses("Lunch", 7.00);
// updateUI();