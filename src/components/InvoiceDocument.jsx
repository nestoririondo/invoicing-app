import React from "react";
import "./NewInvoice.css";
import "./invoice-templates/t1.css";
import MyInfo from "./MyInfo";
import ClientInfo from "./ClientInfo";
import ContactInfo from "./ContactInfo";
import BankInfo from "./BankInfo";

const InvoiceDocument = ({ invoices, index, settings, clients }) => {
  const thisInvoice = invoices[index];

  const theClient = clients.find((client) => {
    return client.name === thisInvoice.client;
  });

  const subtotal = parseFloat(
    thisInvoice.services
      .map((service) => service.rate * service.quantity)
      .reduce((a, b) => a + b, 0)
      .toFixed(2)
  );

  const tax = parseFloat((subtotal * (thisInvoice.tax / 100)).toFixed(2));

  return (
    <>
      <div className={`new-invoice t1 invoice-document`}>
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
            <div className="invoice-num" type="text">
              {thisInvoice.num}
            </div>
          </div>
          <div className="invoice-date-wrapper">
            <div className="invoice-date" type="date">
              {thisInvoice.date.created}
            </div>
          </div>
          <div className="invoice-due-wrapper">
            <div className="invoice-due" type="date">
              {thisInvoice.date.due}
            </div>
          </div>
        </div>
        <div className="invoice-table-wrapper">
          <table className="invoice-table">
            <thead>
              <tr>
                <th>Service</th>
                <th>Description</th>
                <th>Rate</th>
                <th>Quantity</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {thisInvoice.services.map((item, index) => (
                <tr>
                  <td>{thisInvoice.services[index].service}</td>
                  <td> {thisInvoice.services[index].description}</td>
                  <td>{thisInvoice.services[index].rate}</td>
                  <td>{thisInvoice.services[index].quantity}</td>
                  <td className="total-input">
                    {`${parseFloat(
                      thisInvoice.services[index].rate *
                        thisInvoice.services[index].quantity
                    ).toLocaleString("de-DE", {
                      style: "currency",
                      currency: "EUR",
                    })}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="invoice-table-extra">
            <tr className="subtotal">
              <div className="subtotal-label-value">
                <td className="subtotal-label"></td>
                <td className="subtotal-value">{`${parseFloat(
                  subtotal
                ).toLocaleString("de-DE", {
                  style: "currency",
                  currency: "EUR",
                })}`}</td>
              </div>
            </tr>
            <tr className="tax">
              <td>
                {thisInvoice.tax} %
                <div className="tax-value">{`${parseFloat(tax).toLocaleString(
                  "de-DE",
                  { style: "currency", currency: "EUR" }
                )}`}</div>{" "}
              </td>
            </tr>
            <tr className="total">
              <td>{`${(subtotal + tax).toLocaleString("de-DE", {
                style: "currency",
                currency: "EUR",
              })}`}</td>{" "}
            </tr>
          </table>
          {/* <InvoiceTableExtra invoice={thisInvoice} settings={settings} /> */}
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
