import "./Settings.css";

const Settings = ({ settings, setSettings }) => {
  return (
    <div className="settings">
      <h2>Settings</h2>
      <div className="company-data">
        <h3>Company information</h3>
        <form onSubmit="">
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
          <input type="text" name="country" placeholder={settings.address.country} />
          <input type="text" name="ustidnr" placeholder={settings.ustidnr} />
          <div className="newclient-buttons">
            <button>Submit</button>
            <button className="clearbtn">
              Clear
            </button>
            <button className="cancelbtn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
