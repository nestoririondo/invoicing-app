import "./InvoiceList.css";

const InvoiceList = ({invoices, clients}) => {
    return ( 
        <div className="invoice-list">
            <h2>Invoices</h2>
        <table>
            <tr>
                <th>#</th>
                <th>Client</th>
                <th>Total</th>
                <th>Created</th>
                <th>Due Date</th>
                <th>Status</th>
            </tr>
            {invoices.map((invoice) => {
                return (
                    <tr>
                        <td>{invoice.num}</td>
                        <td>{invoice.client}</td>
                        <td>

                        </td>
                        <td>{invoice.date.created}</td>
                        <td>{invoice.date.due}</td>
                        {invoice.date.paid ? <td className="paid">Paid</td> : <td className="unpaid">Unpaid</td>}     
                    </tr>
                );
            })}
        </table>
        </div>
    )}

export default InvoiceList;