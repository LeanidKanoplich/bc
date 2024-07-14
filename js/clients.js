document.addEventListener('DOMContentLoaded', () => {
    const clientsForm = document.querySelector('#clients form');
    const clientsList = document.getElementById('clientsList');
    const clients = [];

    clientsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = e.target.clientName.value;
        const email = e.target.clientEmail.value;
        clients.push({ name, email });
        renderClients();
        e.target.reset();
    });

    function renderClients() {
        clientsList.innerHTML = '';
        clients.forEach((client, index) => {
            const li = document.createElement('li');
            li.textContent = `${client.name} (${client.email})`;
            li.appendChild(createDeleteButton(index));
            clientsList.appendChild(li);
        });
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
});
