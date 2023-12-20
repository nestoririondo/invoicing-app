import React, { useState } from 'react';
import ClientInfo from './ClientInfo'

const ClientsDropDown = ({ clients }) => {

    const [selectedClient, setSelectedClient] = useState('')

    const handleSelect = (event) => {
        setSelectedClient(event.target.value)
    }

    return ( 
        <div className='clients-dropdown'>
            <select onChange={handleSelect}>
            {clients.map((clients) => (
                <option value={clients.id}>{clients.name}</option>
            ))}
            </select>
        <ClientInfo clients={clients} selectedClient={selectedClient}/>
        </div>
     );
}
 
export default ClientsDropDown;