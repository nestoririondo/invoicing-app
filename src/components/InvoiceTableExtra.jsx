const InvoiceTableExtra = ({ invoice, handleSetTax }) => {
  
  const subtotal = parseFloat(
    invoice.services
      .map((service) => service.rate * service.quantity)
      .reduce((a, b) => a + b, 0)
      .toFixed(2)
  );

  const tax = parseFloat((subtotal * (invoice.tax / 100)).toFixed(2));

  return (
    <table className="invoice-table-extra">
      <tbody>
        <tr className="subtotal">
          <td>{`${subtotal} €`}</td>
        </tr>
        <tr className="tax">
          <td>
            <input
              type="number"
              min="0"
              onChange={(e) => handleSetTax(e)}
              defaultValue="19"
            />
            <div className="tax-value">
              {`${tax} €`}
            </div>
          </td>
        </tr>
        <tr className="total">
          {`${(subtotal + tax).toFixed(2)} €`}
        </tr>
      </tbody>
    </table>
  );
};

export default InvoiceTableExtra;
