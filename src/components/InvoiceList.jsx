import { useState } from "react";
import "./InvoiceList.css";

const InvoiceList = ({invoices, clients}) => {

    const [expandView, setExpandView] = useState(false)

    const handleToggle = (index) => {
        setExpandView(!expandView)
    }

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
            {invoices.map((invoice, index) => {
                return (
                    <>
                    <tr key={index} onClick={(e) => handleToggle(index)}>
                        <td>{invoice.num}</td>
                        <td>{invoice.client}</td>
                        <td>
                            {invoice.services.map((service) => service.rate*service.quantity)
                            .reduce((a, b) => a + b, 0)
                            .toFixed(2)} {" "} €
                        </td>
                        <td>{invoice.date.created}</td>
                        <td>{invoice.date.due}</td>
                        {invoice.date.paid ? <td className="paid">Paid</td> : <td className="unpaid">Unpaid</td>}     
                    </tr>
                    {expandView ? <tr>{invoice[index]}</tr> : <tr></tr>}
                    </>
                );
            })}
        </table>
        </div>
    )}

export default InvoiceList;