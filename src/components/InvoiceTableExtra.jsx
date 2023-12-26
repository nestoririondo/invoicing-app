const InvoiceTableExtra = ({ invoice, handleSetTax, setInvoice, settings }) => {
  const subtotal = invoice.services
    .map((service) => service.rate * service.quantity)
    .reduce((a, b) => a + b, 0)
  const formattedSubtotal = subtotal.toLocaleString("de-DE", { style: "currency", currency: "EUR" });

  const tax = subtotal * (invoice.tax / 100);
  const formattedTax = tax.toLocaleString("de-DE", { style: "currency", currency: "EUR" });

  const total = subtotal + tax;
  const formattedTotal = total.toLocaleString("de-DE", { style: "currency", currency: "EUR" });

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

  const handleRemoveTableRow = () => {
    invoice.services.pop();
    setInvoice({
      ...invoice,
      services: invoice.services,
    });
  };

  return (
    <table className="invoice-table-extra">
      <tr className="subtotal">
        <td>
          {invoice.services.length > 6 ? null : (
            <button className="add-table-row-btn blue-btn" onClick={handleAddTableRow}>
              +
            </button>
          )}
          {invoice.services.length > 1 ? (
            <button
              className="remove-table-row-btn red-btn"
              onClick={handleRemoveTableRow}
            >
              -
            </button>
          ) : null}
        </td>
        <div className="subtotal-label-value">
          <td className="subtotal-label"></td>
          <td className="subtotal-value">{formattedSubtotal}</td>
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
          <div className="tax-value">{formattedTax}</div>
        </td>
      </tr>
      <tr className="total">
        <td>{formattedTotal}</td>
      </tr>
    </table>
  );
};

export default InvoiceTableExtra;
