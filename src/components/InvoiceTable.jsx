import React from "react";
import InvoiceTableRow from "./InvoiceTableRow";

const InvoiceTable = ({
  invoice,
  setInvoice,
  settings,
}) => {

  const handleAddTableRow = () => {
    const newTableRow = {
      service: settings.services[0] ? settings.services[0].service : "",
      description: "",
      rate: settings.services[0] ? settings.services[0].rate : "",
      quantity: 0,
    };
    setInvoice({
      ...invoice,
      services: [...invoice.services, newTableRow],
    });
  };

  return (
    <>
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
        {invoice.services.map((item, index) => (
          <InvoiceTableRow
            key={index}
            index={index}
            item={item}
            setInvoice={setInvoice}
            invoice={invoice}
            settings={settings}
          />
        ))}
        
      </tbody>
    </table>
    <button className="add-table-row-btn" onClick={handleAddTableRow}>Add row</button>
    </>
  );
};

export default InvoiceTable;
