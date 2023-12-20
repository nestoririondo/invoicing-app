import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="side-bar">
            <div className="side-bar-header">
                <h1>Invoice App</h1>
            </div>
            <div className="side-bar-links">
                <Link to="/invoices">Invoices</Link>
                <Link to="/clients">Clients</Link>
            </div>
        </div>
    )
}

export default SideBar