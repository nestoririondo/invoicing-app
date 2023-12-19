const ClientInfo = ({clients, selectedClient}) => {

    const client = clients.find((cl) => cl.id === selectedClient)

    if (!client) {
        return <div>No client selected</div>;
    }

    return ( 
        <div>
            <h1>{client.name}</h1>
            <h2>{client.address}</h2>
            <h2>{client.UStIdNr}</h2>
        </div>
     );
}
 
export default ClientInfo;