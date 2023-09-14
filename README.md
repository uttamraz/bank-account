# Bank Web App - User Guide

## Introduction

Welcome to the Bank Web App! This web application allows you to perform banking operations such as depositing, withdrawing, and checking your account balance. Here's how to use it:

## Usage Instructions

1. **Deposit Tab**: Click the "Deposit" tab to make a deposit. Enter the desired amount in the input field and click "Submit."

2. **Withdraw Tab**: Navigate to the "Withdraw" tab to make a withdrawal. Enter the withdrawal amount in the input field and click "Submit." Be sure not to exceed your account balance.

3. **Check Balance Tab**: Visit the "Check Balance" tab to view your current account balance.

## Technical Walkthrough

### Classes

- The BankAccount class encapsulates the account balance and transaction methods (deposit, withdraw, and updateBalanceLabel).

### Switch Statements

- A switch statement is used in the `performAction` function to determine the action (deposit or withdraw) based on user input. It then calls the corresponding method of the BankAccount class.

### Try-Catch-Finally Statements

- Try-catch-finally blocks are employed in the BankAccount class to handle errors and ensure data consistency.
- When making a deposit, it checks if the amount is valid, and if so, it updates the balance.
- During a withdrawal, it validates the amount and ensures there's enough balance before deducting.
- The `updateBalanceLabel` method ensures the balance label is always up-to-date.

### Styling and User Experience

- The interface is designed with CSS to provide a clean, organized layout.
- Tabs are used for easy navigation between actions.
- Active tabs are highlighted with a different color.
- Error messages are displayed when invalid inputs or insufficient balances are encountered.

## Conclusion

The Bank Web App offers a user-friendly way to manage your finances, incorporating object-oriented principles, switch statements for action selection, and robust error handling with try-catch-finally statements for a seamless and reliable banking experience.
