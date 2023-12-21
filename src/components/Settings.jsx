import "./Settings.css";
import EditCompanyInfo from "./EditCompanyInfo";
import EditBankInfo from "./EditBankInfo";
import EditContactInfo from "./EditContactInfo";

const Settings = ({ settings, setSettings }) => {

  return (
    <div className="settings">
      <h2>Settings</h2>
      <div className="settings-info">
      <EditCompanyInfo settings={settings} setSettings={setSettings} />
      <EditContactInfo settings={settings} setSettings={setSettings} />
      <EditBankInfo settings={settings} setSettings={setSettings} />
    </div>
    </div>
  );
};

export default Settings;
