const InvoiceTableExtra = ({
    itemRate,
    itemQuantity,
    handleSetTax,
    tax,
}) => {
    return ( 
        <table className="invoice-table-extra">
            <tr className="subtotal">
              <td>{(itemRate * itemQuantity).toFixed(2)} €</td>
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
                  {((itemRate * itemQuantity * tax) / 100).toFixed(2)} €
                </div>
              </td>
            </tr>
            <tr className="total">
              <td>
                {(itemRate * itemQuantity * (1 + tax / 100)).toFixed(2)} €
              </td>
            </tr>
          </table>
     );
}
 
export default InvoiceTableExtra;