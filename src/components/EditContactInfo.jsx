const EditContactInfo = ({settings, setSettings}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
          e.target.email.value === "" ||
          e.target.phone.value === ""
        ) {
          alert("Please fill in all fields");
          return;
        }
        const newSettings = {
            name: settings.name,
            address: settings.address,
            bank: settings.bank,
            contact: {
                email: e.target.email.value,
                phone: e.target.phone.value,
            },
            ustidnr: settings.ustidnr,
        };
        setSettings(newSettings);
        alert("Settings saved");
      }
    return ( 
        <div className="editcontactinfo">
        <h4>Edit contact information</h4>
        <form onSubmit={handleSubmit}>
          <input type="text" name="email" placeholder={settings.contact.email} />
          <input type="text" name="phone" placeholder={settings.contact.phone} />
          <div className="newclient-buttons">
            <button>Save</button>
          </div>
        </form>
        </div>
     );
}
 
export default EditContactInfo;