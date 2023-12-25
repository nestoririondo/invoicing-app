import React from "react";
import "./NewInvoice.css";
import "./invoice-templates/t1.css";
import MyInfo from "./MyInfo";
import ClientInfo from "./ClientInfo";
import InvoiceTable from "./InvoiceTable";
import InvoiceTableExtra from "./InvoiceTableExtra";
import ContactInfo from "./ContactInfo";
import BankInfo from "./BankInfo";

const InvoiceDocument = ({ invoices, index, settings, clients }) => {
  const thisInvoice = invoices[index];
  
  const theClient = clients.find((client) => {
    return client.name === thisInvoice.client;
  })

  return (
    <>
      <div className={`new-invoice t1`}>
        <div className="inv-num-wrapper">
          <p>{thisInvoice.num}</p>
        </div>
        <div className="my-info-wrapper"></div>
        <MyInfo settings={settings} />
        <div className="client-info-wrapper">
          <ClientInfo theClient={theClient} />
        </div>
        <div className="invoice-info-wrapper">
          <div className="invoice-num-wrapper">
            <div
              className="invoice-num"
              type="text">{thisInvoice.num}
            </div>
          </div>
          <div className="invoice-date-wrapper">
            <div
              className="invoice-date"
              type="date"
              >{thisInvoice.date.created}
            </div>
          </div>
          <div className="invoice-due-wrapper">
            <div
              className="invoice-due"
              type="date">
              {thisInvoice.date.due}
            </div>
          </div>
        </div>
        <div className="invoice-table-wrapper">
          <InvoiceTable invoice={thisInvoice} settings={settings} />
          <InvoiceTableExtra invoice={thisInvoice} settings={settings} />
        </div>
        <div className="contact-wrapper">
          <ContactInfo settings={settings} />
        </div>
        <div className="bank-info-wrapper">
          <BankInfo settings={settings} />
        </div>
      </div>
    </>
  );
};

export default InvoiceDocument;
