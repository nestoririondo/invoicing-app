import React, { useState } from "react";
import "./Settings.css";

const EditCompanyServices = ({ settings, setSettings }) => {
  const [services, setServices] = useState(settings.services);

  const addNewService = () => {
    const newService = { service: "", rate: 0 };
    setServices([...services, newService]);
  };

  const saveService = (e) => {
    const serviceIndex = e.target.id;
    const serviceName = e.target.parentElement.children[0].value;
    const serviceRate = e.target.parentElement.children[1].children[0].value;
    const newService = {
      service: serviceName,
      rate: serviceRate,
    };
    const newServices = [...services];
    newServices[serviceIndex] = newService;
    setServices(newServices);
    const newSettings = {
      name: settings.name,
      address: settings.address,
      services: newServices,
      contact: settings.contact,
      bank: settings.bank,
      ustidnr: settings.ustidnr,
    };
    setSettings(newSettings);        
  };

    const deleteService = (e) => {
        const serviceIndex = parseInt(e.target.id, 10);
        const newServices = services.filter((service, index) => index !== serviceIndex);
        setServices(newServices);
        const newSettings = {
            name: settings.name,
            address: settings.address,
            services: newServices,
            contact: settings.contact,
            bank: settings.bank,
            ustidnr: settings.ustidnr,
        };
        setSettings(newSettings);
    }

  return (
    <div className="services">
      <h4>Services</h4>
      {services.map((service, index) => (
        <div key={index} className="service">
          <input
            type="text"
            name={`service${index}`}
            defaultValue={service.service}
          />
          <label htmlFor={`rate${index}`}>
            Rate in €
            <input
              type="number"
              step="0.01"
              name={`rate${index}`}
              defaultValue={service.rate}
            />
          </label>
          <button id={index} className="savebtn" onClick={(e) => saveService(e)}>
            Save
          </button>
          <button id={index} className="deletebtn" onClick={(e) => deleteService(e)}>Delete</button>
        </div>
      ))}
      <div className="add-service">
        <button className="addservicebtn" onClick={addNewService}>Add service</button>
      </div>
    </div>
  );
};

export default EditCompanyServices;
