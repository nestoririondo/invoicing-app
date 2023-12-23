const EditCompanyInfo = ({ settings, setSettings }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      e.target.name.value === "" ||
      e.target.streetnumber.value === "" ||
      e.target.zip.value === "" ||
      e.target.city.value === "" ||
      e.target.country.value === "" ||
      e.target.ustidnr.value === ""
    ) {
      alert("Please fill in all fields");
      return;
    }
    const newSettings = {
      name: e.target.name.value,
      address: {
        street: e.target.streetnumber.value,
        zip: e.target.zip.value,
        city: e.target.city.value,
        country: e.target.country.value,
      },
      services: settings.services,
      contact: {
        phone: e.target.phone.value,
        email: e.target.email.value,
      },
      bank: {
        name: e.target.bankname.value,
        iban: e.target.bankiban.value,
        bic: e.target.bankbic.value,
      },
      ustidnr: e.target.ustidnr.value,
    };
    setSettings(newSettings);
    alert("Settings saved");
  };

  return (
    <div className="editcompanyinfo">
      <form onSubmit={handleSubmit}>
        <div className="business">
          <h4>Business information</h4>
          <input
            type="text"
            name="name"
            defaultValue={settings.name}
            autoFocus
          />
          <input
            type="text"
            name="streetnumber"
            defaultValue={settings.address.street}
          />
          <div className="zipcountry">
            <input type="text" name="zip" defaultValue={settings.address.zip} />
            <input
              type="text"
              name="city"
              defaultValue={settings.address.city}
            />
          </div>
          <input
            type="text"
            name="country"
            defaultValue={settings.address.country}
          />
          <input type="text" name="ustidnr" defaultValue={settings.ustidnr} />
        </div>
        <div className="contact">
          <h4>Contact information</h4>
          <input
            type="text"
            name="phone"
            defaultValue={settings.contact.phone}
          />
          <input
            type="email"
            name="email"
            defaultValue={settings.contact.email}
          />
        </div>

        <div className="bank">
          <h4>Bank information</h4>
          <input
            type="text"
            name="bankname"
            defaultValue={settings.bank.name}
          />
          <input
            type="text"
            name="bankiban"
            defaultValue={settings.bank.iban}
          />
          <input type="text" name="bankbic" defaultValue={settings.bank.bic} />
        </div>

        <div className="services">
          <h4>Services</h4>
          {settings.services.map((service, index) => (
            <div key={index} className="service">
              <input
                type="text"
                name={`service${index}`}
                defaultValue={service.service}
              />
              <input
                type="number"
                name={`rate${index}`}
                defaultValue={service.rate}
              />
            </div>
          ))}
          <div className="add-service">
            {/* <button onClick={addNewService}>Add service</button> */}
          </div>

          <div className="newclient-buttons">
            <button>Save</button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default EditCompanyInfo;
