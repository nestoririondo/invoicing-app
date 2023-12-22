import React, { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./NewInvoice.css";
import "./invoice-templates/t1.css";
import "./invoice-templates/t2.css";
import "./invoice-templates/t3.css";
import ClientsDropDown from "./ClientsDropDown";
import ClientInfo from "./ClientInfo";
import MyInfo from "./MyInfo";
import BankInfo from "./BankInfo";
import InvoiceTable from "./InvoiceTable";
import InvoiceTableExtra from "./InvoiceTableExtra";
import ContactInfo from "./ContactInfo";

const NewInvoice = ({ clients, settings, invoices, setInvoices }) => {
  const [template, setTemplate] = useState("t1");

  const handleTemplateChange = (event) => {
    setTemplate(event.target.value);
  };

  const [selectedClient, setSelectedClient] = useState("");

  const theClient = clients.find((client) => client.id === selectedClient);

  // event handlers for invoice info
  const [invNum, setInvNum] = useState("");
  const [itemRate, setItemRate] = useState(0);
  const [itemQuantity, setItemQuantity] = useState(0);
  const [itemService, setItemService] = useState("Translation");
  const [itemDescription, setItemDescription] = useState("");
  const [tax, setTax] = useState(19);

  // export function (buggy)
  const exportPDF = () => {
    const input = document.querySelector(".new-invoice");

    html2canvas(input, { scale: window.devicePixelRatio }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("download.pdf");
    });
  };
  // export function (buggy)

  const today = new Date().toISOString().slice(0, 10);
  const dueDate = new Date();
  dueDate.setMonth(dueDate.getMonth() + 1);
  const dueDateString = dueDate.toISOString().slice(0, 10);

  const handleInvNumChange = (event) => {
    setInvNum(event.target.value);
  };

  const handleSetTax = (e) => {
    setTax(e.target.value);
  };

  const handleCreateInvoice = (event) => {
    event.preventDefault();
    if (!invNum) {
      alert("Please enter invoice number");
      return;
    }
    if (!selectedClient) {
      alert("Please select a client");
      return;
    }
    const newInvoice = {
      num: invNum,
      client: theClient.name,
      date: { created: today, due: dueDateString, paid: "" },
      services: [
        { service: itemService, description: itemDescription, rate: itemRate, quantity: itemQuantity },
      ],
      tax: tax,
    };
    setInvoices((prev) => [...prev, newInvoice]);
    alert("Invoice created");
  };

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
          <button onClick={handleCreateInvoice}>Save</button>
          <button onClick={exportPDF}>Export to PDF</button>
        </div>
      </div>
      {/* Invoice */}
      <div className={`new-invoice ${template}`}>
        <div className="inv-num-wrapper">
          <p>{invNum}</p>
        </div>
        <div className="my-info-wrapper"></div>
        <MyInfo settings={settings} />
        <div className="client-info-wrapper">
          {theClient ? (
            <ClientInfo theClient={theClient} />
          ) : (
            <p className="no-client-selected">
              Select a client from top dropdown
            </p>
          )}
        </div>
        <div className="invoice-info-wrapper">
          {/* <InvoiceInfo invoices={invoices} /> */}
          <div className="invoice-num-wrapper">
            <input
              className="invoice-num"
              type="text"
              placeholder="Invoice No."
              onChange={handleInvNumChange}
              autoFocus
            />
          </div>
          <div className="invoice-date-wrapper">
            <input className="invoice-date" type="date" defaultValue={today} />
          </div>
          <div className="invoice-due-wrapper">
            <input
              className="invoice-due"
              type="date"
              defaultValue={dueDateString}
            />
          </div>
        </div>
        <div className="invoice-table-wrapper">
          <InvoiceTable
            setItemRate={setItemRate}
            setItemQuantity={setItemQuantity}
            setItemService={setItemService}
            setItemDescription={setItemDescription}
            itemRate={itemRate}
            itemQuantity={itemQuantity}
          />
          <InvoiceTableExtra
            itemRate={itemRate}
            itemQuantity={itemQuantity}
            handleSetTax={handleSetTax}
            tax={tax}
          />
        </div>
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
