const InvoiceList = ({invoices}) => {
    return ( 
    <table>
        <tr>
            <th>#</th>
            <th>Client</th>
            <th>Amount</th>
            <th>Due Date</th>
            <th>Status</th>
        </tr>
        {invoices.map((invoice) => (
            <tr>
                <td>{invoice.invNum}</td>
                <td>{invoice.clientId}</td>
                <td>{invoice.words * invoice.rate + (invoice.words * invoice.rate * invoice.tax)} &euro;</td>
                <td>{invoice.due}</td>
                <td>{invoice.paid ? "Paid" : "Not paid"}</td>
            </tr>
        )
        )}
    </table>
    );
}
 
export default InvoiceList;