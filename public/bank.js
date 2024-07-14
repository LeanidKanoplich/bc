// bank.js

document.addEventListener('DOMContentLoaded', () => {
    const bankSection = document.getElementById('bank');
    const bankAccounts = [];

    function renderBankAccounts() {
        const bankList = bankSection.querySelector('ul') || document.createElement('ul');
        bankList.innerHTML = '';
        bankAccounts.forEach((account, index) => {
            const li = document.createElement('li');
            li.textContent = `${account.name} (Balance: ${account.balance})`;
            li.appendChild(createDeleteButton(index));
            bankList.appendChild(li);
        });
        if (!bankSection.contains(bankList)) {
            bankSection.appendChild(bankList);
        }
    }

    function createDeleteButton(index) {
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            bankAccounts.splice(index, 1);
            renderBankAccounts();
        });
        return deleteButton;
    }

    const addBankForm = document.createElement('form');
    addBankForm.innerHTML = `
        <label for="accountName">Name:</label>
        <input type="text" id="accountName" name="accountName" required>
        <label for="accountBalance">Balance:</label>
        <input type="number" id="accountBalance" name="accountBalance" required>
        <button type="submit">Add Account</button>
    `;
    addBankForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = e.target.accountName.value;
        const balance = e.target.accountBalance.value;
        bankAccounts.push({ name, balance });
        renderBankAccounts();
        e.target.reset();
    });

    bankSection.appendChild(addBankForm);
    renderBankAccounts();
});
