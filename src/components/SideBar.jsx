import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="side-bar">
            <div className="side-bar-header">
                <h2>Invoice App</h2>
            </div>
            <div className="side-bar-links">
                <Link to="new-invoice">New invoice</Link>
                <Link to="/invoices">Invoices</Link>
                <Link to="/clients">Clients</Link>
            </div>
        </div>
    )
}

export default SideBar