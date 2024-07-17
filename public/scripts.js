function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const maxHeight = content.style.maxHeight;

    if (maxHeight === "0px" || maxHeight === "") {
        content.style.maxHeight = content.scrollHeight + "px";
        element.querySelector("span:last-child").textContent = "-";
    } else {
        content.style.maxHeight = 0;
        element.querySelector("span:last-child").textContent = "+";
    }
}

document.getElementById('add-client-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const newClientName = document.getElementById('new-client').value;
    const clientList = document.getElementById('client-list');

    const newClientItem = document.createElement('li');
    newClientItem.className = 'flex justify-between items-center p-2 bg-gray-100 rounded mb-2 cursor-pointer';
    newClientItem.setAttribute('onclick', 'showClientDetails(this)');
    newClientItem.setAttribute('data-name', newClientName);
    newClientItem.setAttribute('data-code', 'New Code');
    newClientItem.setAttribute('data-email', 'newclient@example.com');
    newClientItem.innerHTML = `
        <span>${newClientName}</span>
        <button class="text-red-500" onclick="removeClient(event, this)">x</button>
    `;
    clientList.appendChild(newClientItem);

    document.getElementById('new-client').value = '';
});

function removeClient(event, button) {
    event.stopPropagation();
    const clientItem = button.parentElement;
    clientItem.remove();
}

function showClientDetails(clientItem) {
    const clientName = clientItem.getAttribute('data-name');
    const clientCode = clientItem.getAttribute('data-code');
    const clientEmail = clientItem.getAttribute('data-email');

    document.getElementById('client-name').textContent = clientName;
    document.getElementById('client-code').textContent = clientCode;
    document.getElementById('client-email').textContent = clientEmail;
    document.getElementById('client-details').classList.remove('hidden');
}

function editClient() {
    const clientName = document.getElementById('client-name').textContent;
    const clientCode = document.getElementById('client-code').textContent;
    const clientEmail = document.getElementById('client-email').textContent;

    alert(`Edit client: ${clientName}, Code: ${clientCode}, Email: ${clientEmail}`);
}
