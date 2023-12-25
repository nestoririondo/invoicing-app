import React from "react";
import InvoiceTableRow from "./InvoiceTableRow";

const InvoiceTable = ({
  invoice,
  setInvoice,
  settings,
}) => {

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
    </>
  );
};

export default InvoiceTable;
