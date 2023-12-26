import { useState } from "react";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import "./InvoiceList.css";
import InvoiceDocument from "./InvoiceDocument";

const InvoiceList = ({ invoices, clients, settings, setInvoices }) => {
  const [expandView, setExpandView] = useState([]);

  const handleToggle = (index) => {
    const newArray = [...expandView];
    newArray[index] = !newArray[index];
    setExpandView(newArray);
  };

  let datePaid = new Date().toISOString().slice(0, 10);
  const handleSetPaid = (index) => {
    const newArray = [...invoices];
    newArray[index].date.paid
      ? (newArray[index].date.paid = "")
      : (newArray[index].date.paid = datePaid);
    setInvoices(newArray);
  };

  const handleChangePaidDate = (event, index) => {
    datePaid = event.target.value;
    const newArray = [...invoices];
    newArray[index].date.paid = datePaid;
    setInvoices(newArray);
  };

  const exportPDF = (index) => {

    const input = document.querySelector(".invoice-document");

    html2canvas(input, { scale: window.devicePixelRatio }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`invoice-${invoices[index].num}`);
    });

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
                  {(
                    invoice.services
                      .map(
                        (service) =>
                          parseFloat(service.rate) *
                          parseFloat(service.quantity)
                      )
                      .reduce((a, b) => a + b, 0) *
                    (1 + parseFloat(invoice.tax) / 100)
                  ).toLocaleString("de-DE", {
                    style: "currency",
                    currency: "EUR",
                  })}
                </td>
                <td>{invoice.date.created}</td>
                <td>{invoice.date.due}</td>
                {invoice.date.paid ? (
                  <td className="paid">Paid</td>
                ) : (
                  <td className="unpaid">Not paid</td>
                )}
              </tr>
              {expandView[index] ? (
                <tr>
                  <td colSpan="6">
                    <div className="expanded-view-div">
                      {
                        <>
                          <div className="mark-as-paid">
                            <label htmlFor="Paid">
                              Mark as paid
                              <input
                                type="checkbox"
                                id="Paid"
                                checked={invoice.date.paid}
                                onClick={() => handleSetPaid(index)}
                              />
                              {invoice.date.paid ? (
                                <input
                                  className="paid-date-input"
                                  type="date"
                                  value={invoice.date.paid}
                                  onChange={(event) =>
                                    handleChangePaidDate(event, index)
                                  }
                                />
                              ) : (
                                <input
                                  className="paid-date-input"
                                  type="date"
                                  disabled
                                />
                              )}
                            </label>
                            <button onClick={(e) => exportPDF(index)}>Export to PDF</button>
                          </div>
                          <InvoiceDocument
                            invoices={invoices}
                            index={index}
                            clients={clients}
                            settings={settings}
                          />
                        </>
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
