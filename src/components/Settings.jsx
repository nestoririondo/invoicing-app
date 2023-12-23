import "./Settings.css";
import EditCompanyInfo from "./EditCompanyInfo";
import EditCompanyServices from "./EditCompanyServices";

const Settings = ({ settings, setSettings }) => {
  return (
    <div className="settings">
      <h2>Settings</h2>
      <div className="settings-info">
        <EditCompanyInfo settings={settings} setSettings={setSettings} />
        <EditCompanyServices settings={settings} setSettings={setSettings} />
      </div>
    </div>
  );
};

export default Settings;
