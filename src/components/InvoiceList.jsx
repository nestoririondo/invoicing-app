const InvoiceList = ({invoices, clients}) => {
    return ( 
        <table>
            <tr>
                <th>#</th>
                <th>Client</th>
                <th>Amount</th>
                <th>Due Date</th>
                <th>Status</th>
            </tr>
            {invoices.map((invoice) => {
                const client = clients.find((client) => client.id === invoice.clientId);
                return (
                    <tr>
                        <td>{invoice.invNum}</td>
                        <td>
                            {client ? client.name : <span style={{ color: 'red' }}>Client not found</span>}
                        </td>
                        <td>{invoice.words * invoice.rate + (invoice.words * invoice.rate * invoice.tax)} &euro;</td>
                        <td>{invoice.due}</td>
                        <td>{invoice.paid ? "Paid" : "Not paid"}</td>
                    </tr>
                );
            })}
        </table>
    )}
 
export default InvoiceList;