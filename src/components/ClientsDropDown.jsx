const ClientsDropDown = ({ clients, setSelectedClient }) => {

    const handleSelect = (event) => {
        setSelectedClient(event.target.value)
    }

    return ( 
        <div>
            <select onChange={handleSelect}>
            {clients.map((client) => (
                <option value={client.id}>{client.name}</option>
            ))}
            </select>
        </div>
     );
}
 
export default ClientsDropDown;