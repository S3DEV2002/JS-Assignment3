let balance = 5000;
let pin = 1234;

function atmWithdrawal(amount, enteredPin) {
    if (enteredPin !== pin) {
        return "Incorrect PIN";
    }
    if (amount > balance) {
        return "Insufficient Funds";
    }
    if (amount % 100 !== 0) {
        return "Enter amount in multiples of 100";
    }
    balance -= amount;
    updateBalance();
    return `Withdrawal Successful! Remaining Balance: $${balance}`;
}

function depositMoney() {
    let enteredPin = parseInt(document.getElementById("pin").value);
    let amount = parseInt(document.getElementById("amount").value);
    if (enteredPin !== pin) {
        document.getElementById("message").innerText = "Incorrect PIN";
        return;
    }
    if (amount <= 0) {
        document.getElementById("message").innerText = "Enter a valid deposit amount";
        return;
    }
    balance += amount;
    updateBalance();
    document.getElementById("message").innerText = `Deposit Successful! New Balance: $${balance}`;
}

function withdrawMoney() {
    let enteredPin = parseInt(document.getElementById("pin").value);
    let amount = parseInt(document.getElementById("amount").value);
    let message = atmWithdrawal(amount, enteredPin);
    document.getElementById("message").innerText = message;
}

function updateBalance() {
    document.getElementById("balance").innerText = `Balance: $${balance}`;
}