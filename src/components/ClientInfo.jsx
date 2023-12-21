const ClientInfo = ({theClient}) => {

    return ( 
        <div>
            <p>{theClient.name}</p>
            <p>{theClient.address.street} {theClient.address.number}</p>
            <p>{theClient.address.zip} {theClient.address.city}</p>
            <p>{theClient.address.country}</p>
            <p>{theClient.UStIdNr}</p>
        </div>
     );
}
 
export default ClientInfo;