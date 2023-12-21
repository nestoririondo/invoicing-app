import "./InvoiceList.css";

const InvoiceList = ({invoices, clients}) => {
    return ( 
        <div className="invoice-list">
            <h2>Invoices</h2>
        <table>
            <tr>
                <th>#</th>
                <th>Client</th>
                <th>Amount</th>
                <th>Due Date</th>
                <th>Status</th>
            </tr>
            {invoices.map((invoice) => {
                return (
                    <tr>
                        <td>{invoice.num}</td>
                        <td>{invoice.client}</td>
                        <td>Amount</td>
                        <td>{invoice.date.due}</td>
                        {invoice.date.paid ? <td className="paid">Paid</td> : <td className="unpaid">Unpaid</td>}     
                    </tr>
                );
            })}
        </table>
        </div>
    )}
 
    // invNum: "INV-2021-0002",
    // client: "Example Client 2",
    // id: uuidv4(),
    // invDate: { created: "2023-02-01", due: "2024-02-28", paid: "" },
    // services: [{ service: "Tanslation", rate: 30, quantity: 15 }, { service: "Proofreading", rate: 30, quantity: 53 }],
    // tax: 19,

export default InvoiceList;