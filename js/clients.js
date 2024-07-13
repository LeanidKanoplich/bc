// clients.js

document.addEventListener('DOMContentLoaded', () => {
    const clientsSection = document.getElementById('clients');
    const clients = [];

    function renderClients() {
        const clientsList = clientsSection.querySelector('ul') || document.createElement('ul');
        clientsList.innerHTML = '';
        clients.forEach((client, index) => {
            const li = document.createElement('li');
            li.textContent = `${client.name} (${client.email})`;
            li.appendChild(createDeleteButton(index));
            clientsList.appendChild(li);
        });
        if (!clientsSection.contains(clientsList)) {
            clientsSection.appendChild(clientsList);
        }
    }

    function createDeleteButton(index) {
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            clients.splice(index, 1);
            renderClients();
        });
        return deleteButton;
    }

    const addClientForm = document.createElement('form');
    addClientForm.innerHTML = `
        <label for="clientName">Name:</label>
        <input type="text" id="clientName" name="clientName" required>
        <label for="clientEmail">Email:</label>
        <input type="email" id="clientEmail" name="clientEmail" required>
        <button type="submit">Add Client</button>
    `;
    addClientForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = e.target.clientName.value;
        const email = e.target.clientEmail.value;
        clients.push({ name, email });
        renderClients();
        e.target.reset();
    });

    clientsSection.appendChild(addClientForm);
    renderClients();
});
