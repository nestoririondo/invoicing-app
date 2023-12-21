const ClientsDropDown = ({ clients, setSelectedClient }) => {

    return ( 
        <select defaultValue="" onChange={(e) => setSelectedClient(e.target.value)}>
        <option value="" disabled selected>Select client</option>
        {clients.map((client) => (
          <option key={client.id} value={client.id}>
            {client.name}
          </option>
        ))}
      </select>
     );
}
 
export default ClientsDropDown;