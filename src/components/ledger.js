// ledger.js

document.addEventListener('DOMContentLoaded', () => {
    const ledgerSection = document.getElementById('ledger');
    const ledgerEntries = [];

    function renderLedger() {
        const ledgerList = ledgerSection.querySelector('ul') || document.createElement('ul');
        ledgerList.innerHTML = '';
        ledgerEntries.forEach((entry, index) => {
            const li = document.createElement('li');
            li.textContent = `${entry.description} (Amount: ${entry.amount})`;
            li.appendChild(createDeleteButton(index));
            ledgerList.appendChild(li);
        });
        if (!ledgerSection.contains(ledgerList)) {
            ledgerSection.appendChild(ledgerList);
        }
    }

    function createDeleteButton(index) {
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            ledgerEntries.splice(index, 1);
            renderLedger();
        });
        return deleteButton;
    }

    const addLedgerForm = document.createElement('form');
    addLedgerForm.innerHTML = `
        <label for="entryDescription">Description:</label>
        <input type="text" id="entryDescription" name="entryDescription" required>
        <label for="entryAmount">Amount:</label>
        <input type="number" id="entryAmount" name="entryAmount" required>
        <button type="submit">Add Entry</button>
    `;
    addLedgerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const description = e.target.entryDescription.value;
        const amount = e.target.entryAmount.value;
        ledgerEntries.push({ description, amount });
        renderLedger();
        e.target.reset();
    });

    ledgerSection.appendChild(addLedgerForm);
    renderLedger();
});
