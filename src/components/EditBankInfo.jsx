const EditBankInfo = ({settings, setSettings}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
          e.target.bankname.value === "" ||
          e.target.iban.value === "" ||
          e.target.bic.value === ""
        ) {
          alert("Please fill in all fields");
          return;
        }
        const newSettings = {
            name: settings.name,
            address: settings.address,
            bank: {
                name: e.target.bankname.value,
                iban: e.target.iban.value,
                bic: e.target.bic.value,
            },
            ustidnr: settings.ustidnr,
        };
        setSettings(newSettings);
        alert("Settings saved");
      }
    return ( 
        <div className="editbankinfo">
        <h4>Edit bank information</h4>
        <form onSubmit={handleSubmit}>
          <input type="text" name="bankname" placeholder={settings.bank.name} />
          <input type="text" name="iban" placeholder={settings.bank.iban} />
          <input type="text" name="bic" placeholder={settings.bank.bic} />
          <div className="newclient-buttons">
            <button>Save</button>
          </div>
        </form>
        </div>
     );
}
 
export default EditBankInfo;