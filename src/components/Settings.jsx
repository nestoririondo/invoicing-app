import "./Settings.css";
import EditCompanyInfo from "./EditCompanyInfo";

const Settings = ({ settings, setSettings }) => {

  return (
    <div className="settings">
      <h2>Settings</h2>
      <EditCompanyInfo settings={settings} setSettings={setSettings} />
    </div>
  );
};

export default Settings;
