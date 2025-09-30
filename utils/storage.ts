export interface Client {
    id: string;
    name: string;
    email: string;
    status: string;
}

// Get all clients
export function getClients(): Client[] {
    if (typeof window === "undefined") return [];
    const data = localStorage.getItem("clients");
    return data ? JSON.parse(data) : [];
}

// Save full list
export function saveClients(clients: Client[]): void {
    if (typeof window === "undefined") return;
    localStorage.setItem("clients", JSON.stringify(clients));
}

// Add one client
export function addClient(newClient: Omit<Client, 'id'>): void {
    const clients = getClients();
    clients.push({ id: Date.now().toString(), ...newClient });
    saveClients(clients);
}

// Delete client by id
export function deleteClient(id: string): void {
    const clients = getClients().filter(c => c.id !== id);
    saveClients(clients);
}