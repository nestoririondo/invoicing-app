import { NavLink } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="side-bar">
            <div className="side-bar-header">
                <h2>Invoice App</h2>
            </div>
            <div className="side-bar-links">
                <NavLink className='side-bar-new-invoice' to="/new-invoice">New invoice</NavLink>
                <NavLink to="/invoices">Invoices</NavLink>
                <NavLink to="/clients">Clients</NavLink>
                <NavLink to="/settings">Settings</NavLink>
            </div>
        </div>
    )
}

export default SideBar