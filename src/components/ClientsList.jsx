import { useState } from "react";
import NewClientForm from "./NewClientForm";
import ClientInfo from "./ClientInfo";
import "./Clients.css";


const ClientsList = ({clients, setClients}) => {

    const [creatingClient, setCreatingClient] = useState(false)

    const createClient = () => {
        setCreatingClient(true)
    }

    const deleteClient = (clientId) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this client?");  
        if (!confirmDelete) { return }
        const clientToDelete = clients.find((client) => client.id === clientId)
        const newClientsArray = clients.filter((client) => client !== clientToDelete)
        setClients(newClientsArray)
    }

    return ( 
        <div className='clients-list'>
            <h2>Clients</h2>
            <button className="add-client-btn" onClick={createClient}>Add new client</button>
            <div className="client-grid">
                {
                    creatingClient && <NewClientForm setClients={setClients} setCreatingClient={setCreatingClient} clients={clients}/>
                }
            {clients.map((theClient) => (
                <div className="client-card">
                    <ClientInfo key={theClient.id} theClient={theClient} />
                    <button className={`client-card-delete-btn ${theClient.id}`} onClick={() => deleteClient(theClient.id)}>Delete</button>
                </div>
            ))}
        </div>
        </div>
     );
}
 
export default ClientsList;