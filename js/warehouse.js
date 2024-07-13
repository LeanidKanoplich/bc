// warehouse.js

document.addEventListener('DOMContentLoaded', () => {
    const warehouseSection = document.getElementById('warehouse');
    const warehouseItems = [];

    function renderWarehouse() {
        const warehouseList = warehouseSection.querySelector('ul') || document.createElement('ul');
        warehouseList.innerHTML = '';
        warehouseItems.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = `${item.name} (Quantity: ${item.quantity})`;
            li.appendChild(createDeleteButton(index));
            warehouseList.appendChild(li);
        });
        if (!warehouseSection.contains(warehouseList)) {
            warehouseSection.appendChild(warehouseList);
        }
    }

    function createDeleteButton(index) {
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            warehouseItems.splice(index, 1);
            renderWarehouse();
        });
        return deleteButton;
    }

    const addWarehouseForm = document.createElement('form');
    addWarehouseForm.innerHTML = `
        <label for="itemName">Name:</label>
        <input type="text" id="itemName" name="itemName" required>
        <label for="itemQuantity">Quantity:</label>
        <input type="number" id="itemQuantity" name="itemQuantity" required>
        <button type="submit">Add Item</button>
    `;
    addWarehouseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = e.target.itemName.value;
        const quantity = e.target.itemQuantity.value;
        warehouseItems.push({ name, quantity });
        renderWarehouse();
        e.target.reset();
    });

    warehouseSection.appendChild(addWarehouseForm);
    renderWarehouse();
});
