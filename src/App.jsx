import { useState, useEffect } from "react";
import ClientsDropDown from "./components/ClientsDropDown";
import InvoiceList from "./components/InvoiceList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideBar from "./components/SideBar";
import "./App.css";
import NewInvoice from "./components/NewInvoice";

function App() {
  const [invoices, setInvoices] = useState([]);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/invoices")
      .then((response) => response.json())
      .then((data) => setInvoices(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/clients")
      .then((response) => response.json())
      .then((data) => setClients(data));
  }, []);

  return (
    <div className="app">
      <Router>
        <SideBar />
        <div className="content">
          <Switch>
            <Route path="/new-invoice">
              <NewInvoice invoices={invoices} client={clients} setInvoices={setInvoices}/>
            </Route>
            <Route path="/invoices">
              <InvoiceList invoices={invoices} clients={clients}/>
            </Route>
            <Route path="/clients">
              <ClientsDropDown clients={clients} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
