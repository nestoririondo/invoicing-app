import { useState } from "react";
const InvoiceTable = ({ invoices }) => {
  const [rate, setRate] = useState(0);
  const [amount, setAmount] = useState(0);

  const handleSetRate = (e) => {
    setRate(e.target.value);
  };

  const handleSetAmount = (e) => {
    setAmount(e.target.value);
  };

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
            <select>
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
              className="amount-input"
              type="number"
              onChange={handleSetAmount}
            />
          </td>
          <td className="total-input">{(rate * amount).toFixed(2)} €</td>
        </tr>
        <tr>
          <td>
            <select>
              <option>Translation</option>
              <option>Proofreading</option>
              <option>Other</option>
              <option></option>
            </select>
          </td>
          <td>
            <input type="number" step="0.01" />
          </td>
          <td>
            <input type="number" />
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default InvoiceTable;
