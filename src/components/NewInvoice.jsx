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

  // export function (buggy)
  const exportPDF = () => {

    // add className to add-table-row-btn to turn it invisible
    const addTableRowBtn = document.querySelector(".add-table-row-btn");
    addTableRowBtn && addTableRowBtn.classList.add("invisible");
    const removeTableRowBtn = document.querySelector(".remove-table-row-btn");
    removeTableRowBtn && removeTableRowBtn.classList.add("invisible");
    
    
    const input = document.querySelector(".new-invoice");

    html2canvas(input, { scale: window.devicePixelRatio }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`invoice-${invoice.num}`);
    });
    addTableRowBtn && addTableRowBtn.classList.remove("invisible"); // turn it visible again
    removeTableRowBtn && removeTableRowBtn.classList.remove("invisible"); // turn it visible again
  };
  // export function (buggy)
  
  const today = new Date().toISOString().slice(0, 10);
  const dueDate = new Date();
  dueDate.setMonth(dueDate.getMonth() + 1);
  const dueDateString = dueDate.toISOString().slice(0, 10);

  // THE event handler
  const [invoice, setInvoice] = useState({
    num: "",
    client: "",
    date: { created: today, due: dueDateString, paid: "" },
    services: [
      {
        service: settings.services[0] ? settings.services[0].service : "",
        description: "",
        rate: settings.services[0] ? settings.services[0].rate : "",
        quantity: 0,
      },
    ],
    tax: 19,
  });

  //

  const handleSetInvNum = (e) => {
    setInvoice((prev) => ({ ...prev, num: e.target.value }));
  };

  const handleSetDate = (event) => {
    setInvoice({
      ...invoice,
      date: {
        ...invoice.date,
        created: event.target.value
      }
    });
  };

  const handleSetDueDate = (event) => {
    setInvoice({
      ...invoice,
      date: {
        ...invoice.date,
        due: event.target.value
      }
    });
  };

  const handleSetTax = (e) => {
    setInvoice((prev) => ({ ...prev, tax: e.target.value }));
  };

  const handleCreateInvoice = (event) => {
    event.preventDefault();
    if (!invoice.num) {
      alert("Please enter invoice number");
      return;
    }
    if (!invoice.client) {
      alert("Please select a client");
      return;
    } 
    
    setInvoices((prev) => [...prev, invoice]);
    alert("Invoice created");
  };

  const theClient = clients.find((client) => client.name === invoice.client);

  return (
    <div className="invoice-wrapper">
      <h2 className="invoice-h2">Create new invoice</h2>

      {/* Top buttons */}
      <div className="invoice-button-wrapper">
        <ClientsDropDown
          clients={clients}
          setInvoice={setInvoice}
          className="clients-dropdown"
        />
        <select onChange={handleTemplateChange}>
          <option value="t1">Template 1</option>
          <option value="t2">Template 2</option>
          <option value="t3">Template 3</option>
        </select>
        <div className="save-export-wrapper">
          <button className="green-btn" onClick={handleCreateInvoice}>Save</button>
          <button className="blue-btn" onClick={exportPDF}>Export to PDF</button>
        </div>
      </div>
      {/* Invoice */}
      <div className={`new-invoice ${template}`}>
        <div className="inv-num-wrapper">
          <p>{invoice.num}</p>
        </div>
        <div className="my-info-wrapper"></div>
        <MyInfo settings={settings} />
        <div className="client-info-wrapper">
          {invoice.client ? (
            <ClientInfo theClient={theClient} />
          ) : (
            <p className="no-client-selected">
              Select a client from top dropdown
            </p>
          )}
        </div>
        <div className="invoice-info-wrapper">
          <div className="invoice-num-wrapper">
            <input
              className="invoice-num"
              type="text"
              placeholder="Invoice No."
              onChange={handleSetInvNum}
              autoFocus
            />
          </div>
          <div className="invoice-date-wrapper">
            <input className="invoice-date" type="date" defaultValue={today} onChange={handleSetDate}/>
          </div>
          <div className="invoice-due-wrapper">
            <input
              className="invoice-due"
              type="date"
              defaultValue={dueDateString}
              onChange={handleSetDueDate}
            />
          </div>
        </div>
        <div className="invoice-table-wrapper">
          <InvoiceTable
            invoice={invoice}
            setInvoice={setInvoice}
            settings={settings}
          />
          <InvoiceTableExtra
            invoice={invoice}
            handleSetTax={handleSetTax}
            setInvoice={setInvoice}
            settings={settings}
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
