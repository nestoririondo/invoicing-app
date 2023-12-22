import { v4 as uuidv4 } from 'uuid';

const NewClientForm = ({ setClients, setCreatingClient, clients }) => {

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !e.target.name.value ||
      !e.target.streetnumber.value ||
      !e.target.zip.value ||
      !e.target.city.value ||
      !e.target.country.value ||
      !e.target.ustidnr.value
    ) {
      alert("Please fill all fields");
      return;
    }

    const newClient = {
      name: e.target.name.value,
      id: uuidv4(),
      ustidnr: e.target.ustidnr.value,
      address: {
        street: e.target.streetnumber.value,
        zip: e.target.zip.value,
        city: e.target.city.value,
        country: e.target.country.value,
      },
    };
    setCreatingClient(false);
    setClients((prevClients) => [...prevClients, newClient]);
  };

    const handleClear = (e) => {
        e.preventDefault()
        e.target.closest('form').reset();
};

    const handleCancel = (e) => {
        e.preventDefault()
        setCreatingClient(false)
    }

  return (
    <div className="new-client-form">
      <p className="new-client-form-newclient">New Client</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Company name" autoFocus/>
        <input
          type="text"
          name="streetnumber"
          placeholder="Street and number"
        />
        <div className="zipcountry">
            <input type="text" name="zip" placeholder="Zip" />
            <input type="text" name="city" placeholder="City" />
        </div>
        <input type="text" name="country" placeholder="Country" />
        <input type="text" name="ustidnr" placeholder="UStIdNr" />
        <div className="newclient-buttons">
            <button>Submit</button>
            <button className="clearbtn" onClick={handleClear}>Clear</button>
            <button className="cancelbtn" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default NewClientForm;
