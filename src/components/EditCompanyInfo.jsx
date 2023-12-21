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
      bank: settings.bank,
      ustidnr: e.target.ustidnr.value,
    };
    setSettings(newSettings);
    // feedback to user
    alert("Settings saved");
  };

  return (
    <div className="company-data">
      <h4>Edit company information</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder={settings.name} autoFocus />
        <input
          type="text"
          name="streetnumber"
          placeholder={settings.address.street}
        />
        <div className="zipcountry">
          <input type="text" name="zip" placeholder={settings.address.zip} />
          <input type="text" name="city" placeholder={settings.address.city} />
        </div>
        <input
          type="text"
          name="country"
          placeholder={settings.address.country}
        />
        <input type="text" name="ustidnr" placeholder={settings.ustidnr} />
        <div className="newclient-buttons">
          <button>Save</button>
        </div>
      </form>
    </div>
  );
};

export default EditCompanyInfo;
