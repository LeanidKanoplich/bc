let currentClient = null;

function toggleAccordion(element) {
    const content = element.nextElementSibling;
    element.classList.toggle('active');
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
    }
}

function showClientDetails(name, code, email) {
    currentClient = { name, code, email };
    const clientName = document.getElementById('client-name');
    const clientCode = document.getElementById('client-code');
    const clientEmail = document.getElementById('client-email');
    const clientDetails = document.getElementById('client-details');
    const formContainer = document.getElementById('form-container');

    clientName.textContent = name;
    clientCode.textContent = code;
    clientEmail.textContent = email;

    clientDetails.classList.remove('hidden');
    formContainer.classList.add('hidden');
}

function editClient() {
    const clientDetails = document.getElementById('client-details');
    const formContainer = document.getElementById('form-container');
    const editClientName = document.getElementById('edit-client-name');
    const editClientCode = document.getElementById('edit-client-code');
    const editClientEmail = document.getElementById('edit-client-email');

    editClientName.value = currentClient.name;
    editClientCode.value = currentClient.code;
    editClientEmail.value = currentClient.email;

    clientDetails.classList.add('hidden');
    formContainer.classList.remove('hidden');
}

function removeClient(event, button) {
    event.stopPropagation();
    const li = button.parentElement;
    li.remove();
}

document.getElementById('add-client-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const newClientName = document.getElementById('new-client-name').value;
    const newClientCode = document.getElementById('new-client-code').value;
    const newClientEmail = document.getElementById('new-client-email').value;
    const clientList = document.getElementById('client-list');

    const newClientItem = document.createElement('li');
    newClientItem.className = 'flex justify-between items-center mb-2 cursor-pointer';
    newClientItem.innerHTML = `
        <span onclick="showClientDetails('${newClientName}', '${newClientCode}', '${newClientEmail}')">${newClientName}</span>
        <button class="text-red-500" onclick="removeClient(event, this)">x</button>
    `;
    clientList.appendChild(newClientItem);

    document.getElementById('new-client-name').value = '';
    document.getElementById('new-client-code').value = '';
    document.getElementById('new-client-email').value = '';

    toggleAccordion(document.querySelector('.accordion-header.active'));
});

document.getElementById('edit-client-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const editClientName = document.getElementById('edit-client-name').value;
    const editClientCode = document.getElementById('edit-client-code').value;
    const editClientEmail = document.getElementById('edit-client-email').value;

    currentClient.name = editClientName;
    currentClient.code = editClientCode;
    currentClient.email = editClientEmail;

    const clientItems = document.querySelectorAll('#client-list li');
    clientItems.forEach(item => {
        const span = item.querySelector('span');
        if (span.textContent === currentClient.name) {
            span.textContent = editClientName;
        }
    });

    showClientDetails(editClientName, editClientCode, editClientEmail);

    document.getElementById('edit-client-name').value = '';
    document.getElementById('edit-client-code').value = '';
    document.getElementById('edit-client-email').value = '';
});
