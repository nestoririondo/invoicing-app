import { useState } from "react";
const InvoiceTable = ({ setInvoices }) => {
  const [rate, setRate] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [service, setService] = useState("Translation");

  const handleSetRate = (e) => {
    setRate(e.target.value);
    setInvoices((prev) => {
      const newInvoice = { ...prev };
      newInvoice.services[0].rate = rate;
      return newInvoice;
    });
  };

  const handleSetQuantity = (e) => {
    setQuantity(e.target.value);
    setInvoices((prev) => {
      const newInvoice = { ...prev };
      newInvoice.services[0].quantity = quantity;
      return newInvoice;
    });
  };

  const handleSetService = (e) => {
    setService(e.target.value);
    setInvoices((prev) => {
      const newInvoice = { ...prev };
      newInvoice.services[0].service = service;
      return newInvoice;
    });
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Service</th>
          <th>Rate</th>
          <th>Quantity</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <select onChange={handleSetService}>
              <option>Translation</option>
              <option>Proofreading</option>
              <option>Other</option>
              <option></option>
            </select>
          </td>
          <td>
            <input
              className="rate-input"
              type="number"
              step="0.01"
              onChange={handleSetRate}
            />
          </td>
          <td>
            <input
              className="quantity-input"
              type="number"
              onChange={handleSetQuantity}
            />
          </td>
          <td className="total-input">{(rate * quantity).toFixed(2)} €</td>
        </tr>
      </tbody>
    </table>
  );
};

export default InvoiceTable;
