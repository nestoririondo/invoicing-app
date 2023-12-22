import React, { useState } from "react";
import "./NewInvoice.css";
import "./invoice-templates/t1.css";
import "./invoice-templates/t2.css";
import "./invoice-templates/t3.css";
import ClientsDropDown from "./ClientsDropDown";
import ClientInfo from "./ClientInfo";
import MyInfo from "./MyInfo";
import BankInfo from "./BankInfo";
import ContactInfo from "./ContactInfo";

const NewInvoice = ({ clients, settings }) => {
  const [template, setTemplate] = useState("t1");

  const [selectedClient, setSelectedClient] = useState("");

  const handleTemplateChange = (event) => {
    setTemplate(event.target.value);
  };

  const theClient = clients.find((client) => client.id === selectedClient);

  return (
    <div className="invoice-wrapper">
      <h2 className="invoice-h2">Create new invoice</h2>

      {/* Top buttons */}
      <div className="invoice-button-wrapper">
        <ClientsDropDown
          clients={clients}
          setSelectedClient={setSelectedClient}
          className="clients-dropdown"
        />
        <select onChange={handleTemplateChange}>
          <option value="t1">Template 1</option>
          <option value="t2">Template 2</option>
          <option value="t3">Template 3</option>
        </select>
        <div className="save-export-wrapper">
          <button>Save</button>
          <button>Export to PDF</button>
        </div>
      </div>
      {/* Invoice */}
      <div className={`new-invoice ${template}`}>
        <div className="my-info-wrapper"></div>
          <MyInfo settings={settings} />
        <div className="client-info-wrapper">
          {theClient && <ClientInfo theClient={theClient} />}
        </div>
        <div className="invoice-info">
          
        </div>
        <div className="invoice-table"></div>
        <div className="invoice-total"></div>
        <div className="contact-wrapper">
          <ContactInfo settings={settings} />
        </div>
        <div className="bank-info-wrapper">
          <BankInfo settings={settings} />
        </div>
      </div>
    </div>
  );
};

export default NewInvoice;
