import "./Settings.css";
import "../App.css";

const EditCompanyServices = ({ settings, setSettings }) => {

  const services = settings.services;

  const addNewService = () => {
    const newServices = [
      ...services    ,
      {
        service: "",
        rate: 0,
      },
    ];
    setSettings({
      name: settings.name,
      address: settings.address,
      services: newServices,
      contact: settings.contact,
      bank: settings.bank,
      ustidnr: settings.ustidnr,
    });
  };

  const setService = (key) => (e) => {
    const serviceIndex = parseInt(e.target.name.slice(-1), 10);
    const newServices = services.map((service, index) => {
      if (index !== serviceIndex) return service;
      return {
        ...service,
        [key]: e.target.value,
      };
    });
    setSettings({
      name: settings.name,
      address: settings.address,
      services: newServices,
      contact: settings.contact,
      bank: settings.bank,
      ustidnr: settings.ustidnr,
    });
  }

  const deleteService = (e) => {
    const serviceIndex = parseInt(e.target.id, 10);
    const newServices = services.filter(
      (service, index) => index !== serviceIndex
    );
    setSettings({
      name: settings.name,
      address: settings.address,
      services: newServices,
      contact: settings.contact,
      bank: settings.bank,
      ustidnr: settings.ustidnr,
    });
  };

  return (
    <div className="services">
      <h4>Services</h4>
      {services.map((service, index) => (
        <div key={index} className="service">
          <input
            type="text"
            name={`service${index}`}
            defaultValue={service.service}
            onChange={setService("service")}
          />
          <label htmlFor={`rate${index}`}>
            Rate in €
            <input
              type="number"
              step="0.01"
              name={`rate${index}`}
              defaultValue={service.rate}
              onChange={setService("rate")}
            />
          </label>
          <button
            id={index}
            className="red-btn"
            onClick={(e) => deleteService(e)}
          >
            Delete
          </button>
        </div>
      ))}
      <div className="add-service">
        <button className="blue-btn" onClick={addNewService}>
          Add service
        </button>
      </div>
    </div>
  );
};

export default EditCompanyServices;
