import "./ClientsList.css";
const ClientsList = ({clients}) => {
    return ( 
        <div className='clients-list'>
            <h2>Clients</h2>
            <div className="client-grid">
            {clients.map((clients) => (
                <div key={clients.id} className="client-card">
                    <p>{clients.name}</p>
                    <p>{clients.address.street} {clients.address.number}</p>
                    <p>{clients.address.zip} {clients.address.city}</p>
                    <p>{clients.address.country}</p>
                    <p>{clients.UStIdNr}</p>
                </div>
            ))}
        </div>
        </div>
     );
}
 
export default ClientsList;