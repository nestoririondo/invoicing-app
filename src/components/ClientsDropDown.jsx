const ClientsDropDown = ({ clients, setInvoice }) => {

    const handleSetClient = (e) => {
      setInvoice((prev) => ({ ...prev, client: e.target.value }));
    }

    return ( 
        <select defaultValue="" onChange={(e) => handleSetClient(e)}>
        <option value="" disabled defaultValue>Select client</option>
        {clients.map((client) => (
          <option key={client.id} value={client.name}>
            {client.name}
          </option>
        ))}
      </select>
     );
}
 
export default ClientsDropDown;