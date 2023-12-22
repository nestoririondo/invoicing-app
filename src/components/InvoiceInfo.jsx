const InvoiceInfo = ({invoices}) => {
    return ( 
        <div className="invoice-info">
            <p className="invoice-number">Invoice No. {invoices.length + 1}</p>
            <p className="invoice-date">Date: {new Date().toLocaleDateString()}</p>
        </div>
     );
}
 
export default InvoiceInfo;