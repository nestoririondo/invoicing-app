import "./Settings.css";
import EditCompanyInfo from "./EditCompanyInfo";
import EditBankInfo from "./EditBankInfo";

const Settings = ({ settings, setSettings }) => {

  return (
    <div className="settings">
      <h2>Settings</h2>
      <EditCompanyInfo settings={settings} setSettings={setSettings} />
      <EditBankInfo settings={settings} setSettings={setSettings} />
    </div>
  );
};

export default Settings;
