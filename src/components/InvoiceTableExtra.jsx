const InvoiceTableExtra = ({ invoice, handleSetTax, setInvoice, settings }) => {
  const subtotal = parseFloat(
    invoice.services
      .map((service) => service.rate * service.quantity)
      .reduce((a, b) => a + b, 0)
      .toFixed(2)
  );

  const tax = parseFloat((subtotal * (invoice.tax / 100)).toFixed(2));

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
    <table className="invoice-table-extra">
      <tbody>
        <tr className="subtotal">
        <td>
            <button className="add-table-row-btn" onClick={handleAddTableRow}>
              +
            </button>
          </td>
          <div className="subtotal-label-value">
          <td className="subtotal-label"></td>
          <td className="subtotal-value">{`${subtotal} €`}</td>
          </div>

        </tr>
        <tr className="tax">
          <td>
            <input
              type="number"
              min="0"
              onChange={(e) => handleSetTax(e)}
              defaultValue="19"
            />
            <div className="tax-value">{`${tax} €`}</div>
          </td>
        </tr>
        <tr className="total">
          <td>{`${(subtotal + tax).toFixed(2)} €`}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default InvoiceTableExtra;
