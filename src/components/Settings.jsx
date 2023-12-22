import "./Settings.css";
import EditCompanyInfo from "./EditCompanyInfo";


const Settings = ({ settings, setSettings }) => {

  return (
    <div className="settings">
      <h2>Settings</h2>
      <div className="settings-info">
      <EditCompanyInfo settings={settings} setSettings={setSettings} />
    </div>
    </div>
  );
};

export default Settings;
