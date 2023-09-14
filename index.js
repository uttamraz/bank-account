class BankAccount {
    constructor() {
        this.accountName = '';
        this.accountType = '';
        this.balance = 0;
    }

    register(accountName, accountType) {
        try {
            if (accountName.trim() === '') {
                throw new Error('Account Name is required');
            }
            if (accountType.trim() === '') {
                throw new Error('Account Type is required');
            }
            this.accountName = accountName;
            this.accountType = accountType;
            return true;
        } catch (error) {
            console.log(error.message);
            alert(error.message);
            return false;
        }
    }

    deposit(amount) {
        try {
            if (isNaN(amount) || amount <= 0) {
                throw new Error('Invalid deposit amount');
            }
            this.balance += amount;
        } catch (error) {
            console.log(error.message);
            alert(error.message);
        } finally {
            this.updateBalanceLabel();
        }
    }

    withdraw(amount) {
        try {
            if (isNaN(amount) || amount <= 0) {
                throw new Error('Invalid withdrawal amount');
            }
            if (amount > this.balance) {
                throw new Error('Insufficient balance');
            }
            this.balance -= amount;
        } catch (error) {
            console.log(error.message);
            alert(error.message);
        } finally {
            this.updateBalanceLabel();
        }
    }

    updateBalanceLabel() {
        document.getElementById('balanceValue').textContent = `$${this.balance}`;
    }
}

const bankAccount = new BankAccount();

function registerUser() {
    const accountName = document.getElementById(`accountName`).value;
    const accountType = document.getElementById(`accountType`).value;
    const success = bankAccount.register(accountName, accountType);
    if (success) {
        document.getElementById('registration').style.display = 'none';
        document.getElementById('accountDetails').style.display = 'block';
        document.getElementById('displayAccountName').innerHTML = bankAccount.accountName;
        document.getElementById('displayAccountType').innerHTML = bankAccount.accountType;
    }
}

function openTab(tabName) {
    document.getElementById(`${activeTab}Link`).classList.remove('active');
    document.getElementById(activeTab).style.display = 'none';
    document.getElementById(`${tabName}Link`).classList.add('active');
    document.getElementById(tabName).style.display = 'block';
    activeTab = tabName;
    if (tabName === 'checkBalanceTab') {
        bankAccount.updateBalanceLabel();
    }
}

function performAction(action) {
    const amount = parseFloat(document.getElementById(`${action}Amount`).value);

    switch (action) {
        case 'deposit':
            bankAccount.deposit(amount);
            break;
        case 'withdraw':
            bankAccount.withdraw(amount);
            break;
        default:
            console.error('Invalid action');
            break;
    }

    document.getElementById(`${action}Amount`).value = '';
}

var activeTab = 'depositTab';
openTab(activeTab);
