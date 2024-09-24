// Example transaction history data
const transactions = [
    { date: '2024-01-15', amount: 200, type: 'Deposit' },
    { date: '2024-01-17', amount: 50, type: 'Withdrawal' },
    { date: '2024-01-20', amount: 120, type: 'Deposit' }
];

// Function to show or update the transaction history
function showTransactionHistory() {
    const transHistoryDiv = document.getElementById('transHistory');
    const historyList = document.getElementById('historyList');

    // Clear previous history if any
    historyList.innerHTML = '';

    // Add transactions to the list
    transactions.forEach(transaction => {
        const listItem = document.createElement('li');
        listItem.textContent = `${transaction.date} - ${transaction.type}: $${input-add-money}`;
        historyList.appendChild(listItem);
    });

    // Display the transaction history div
    transHistoryDiv.style.display = 'block';
}
