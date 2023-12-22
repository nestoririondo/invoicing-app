const InvoiceTable = ({
  setItemRate,
  setItemQuantity,
  setItemService,
  itemRate,
  itemQuantity,
}) => {
  const handleSetRate = (e) => {
    setItemRate(e.target.value);
  };

  const handleSetQuantity = (e) => {
    setItemQuantity(e.target.value);
  };

  const handleSetService = (e) => {
    setItemService(e.target.value);
  };

  return (
    <table className="invoice-table">
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
              min="0"
            />
          </td>
          <td>
            <input
              className="quantity-input"
              type="number"
              onChange={handleSetQuantity}
              min="0"
            />
          </td>
          <td className="total-input">
            {(itemRate * itemQuantity).toFixed(2)} €
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default InvoiceTable;
