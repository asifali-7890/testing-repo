// Get all clients
export function getClients() {
    const data = localStorage.getItem("clients");
    return data ? JSON.parse(data) : [];
}

// Save full list
export function saveClients(clients) {
    localStorage.setItem("clients", JSON.stringify(clients));
}

// Add one client
export function addClient(newClient) {
    const clients = getClients();
    clients.push({ id: Date.now().toString(), ...newClient });
    saveClients(clients);
}

// Delete client by id
export function deleteClient(id) {
    const clients = getClients().filter(c => c.id !== id);
    saveClients(clients);
}
