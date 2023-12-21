const MyInfo = ({settings}) => {

    return ( 
        <div className="my-info">
            <p className="my-name">{settings.name}</p>
            <p className="my-street">{settings.address.street}</p>
            <p className="my-city">{settings.address.zip} {settings.address.city}</p>
            <p className="my-country">{settings.address.country}</p>
            <p className="my-ustidnr">{settings.ustidnr}</p>
        </div>
     );
}
 
export default MyInfo;