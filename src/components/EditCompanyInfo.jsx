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
      contact: settings.contact,
      bank: settings.bank,
      ustidnr: e.target.ustidnr.value,
    };
    setSettings(newSettings);
    // feedback to user
    alert("Settings saved");
  };

  return (
    <div className="editcompanyinfo">
      <h4>Company information</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" defaultValue={settings.name} autoFocus />
        <input
          type="text"
          name="streetnumber"
          defaultValue={settings.address.street}
        />
        <div className="zipcountry">
          <input type="text" name="zip" defaultValue={settings.address.zip} />
          <input type="text" name="city" defaultValue={settings.address.city} />
        </div>
        <input
          type="text"
          name="country"
          defaultValue={settings.address.country}
        />
        <input type="text" name="ustidnr" defaultValue={settings.ustidnr} />
        <div className="newclient-buttons">
          <button>Save</button>
        </div>
      </form>
    </div>
  );
};

export default EditCompanyInfo;
