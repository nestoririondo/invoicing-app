import { useState } from "react";
import "./InvoiceList.css";
import InvoiceDocument from "./InvoiceDocument";

const InvoiceList = ({ invoices, clients, settings }) => {
  const [expandView, setExpandView] = useState([]);

  const handleToggle = (index) => {
    const newArray = [...expandView];
    newArray[index] = !newArray[index];
    setExpandView(newArray);
  };

  return (
    <div className="invoice-list">
      <h2>Invoices</h2>
      <table>
        <tr className="invoice-heading">
          <th>#</th>
          <th>Client</th>
          <th>Total</th>
          <th>Created</th>
          <th>Due Date</th>
          <th>Status</th>
        </tr>
        {invoices.map((invoice, index) => {
          return (
            <>
              <tr
                className="invoice-item"
                key={index}
                onClick={(e) => handleToggle(index)}
              >
                <td>{invoice.num}</td>
                <td>{invoice.client}</td>
                <td>
                  {invoice.services
                    .map((service) => service.rate * service.quantity)
                    .reduce((a, b) => a + b, 0) *
                    (1 + invoice.tax / 100).toFixed(2)}{" "}
                  €
                </td>
                <td>{invoice.date.created}</td>
                <td>{invoice.date.due}</td>
                {invoice.date.paid ? (
                  <td className="paid">Paid</td>
                ) : (
                  <td className="unpaid">Unpaid</td>
                )}
              </tr>
              {expandView[index] ? (
                <tr>
                  <td colSpan="6">
                    <div className="expanded-view-div">
                      {
                        /* {invoice.services.map((service, index) => {
                        return (
                          <div key={index}>
                            <p>{service.service}</p>
                            <p>{service.description}</p>
                            <p>{service.rate}</p>
                            <p>{service.quantity}</p>
                            <p>
                              {(service.rate * service.quantity).toFixed(2)} €
                            </p>
                          </div>
                        );
                      })} */
                        <InvoiceDocument
                          invoices={invoices}
                          index={index}
                          clients={clients}
                          settings={settings}
                        />
                      }
                    </div>
                  </td>
                </tr>
              ) : null}
            </>
          );
        })}
      </table>
    </div>
  );
};

export default InvoiceList;
