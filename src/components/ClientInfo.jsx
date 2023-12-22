const ClientInfo = ({theClient}) => {

    return ( 
        <div className="client-info">
            <p className="client-name">{theClient.name}</p>
            <p className="client-street">{theClient.address.street}</p>
            <p className="client-city">{theClient.address.zip} {theClient.address.city}</p>
            <p className="client-country">{theClient.address.country}</p>
            <p className="client-ustidnr">{theClient.ustidnr}</p>
        </div>
     );
}
 
export default ClientInfo;