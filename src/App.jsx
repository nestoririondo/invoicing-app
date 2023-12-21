import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import InvoiceList from "./components/InvoiceList";
import SideBar from "./components/SideBar";
import NewInvoice from "./components/NewInvoice";
import ClientsList from "./components/ClientsList";
import "./App.css";


function App() {
  const [invoices, setInvoices] = useState([]);
  const [clients, setClients] = useState(() => {
    const localClients = localStorage.getItem('localClients');
    return localClients ? JSON.parse(localClients) : [];})
  
  useEffect(()=>{
    localStorage.setItem('localClients', JSON.stringify(clients))
    },[clients])

  useEffect(() => {
    fetch("http://localhost:8000/invoices")
      .then((response) => response.json())
      .then((data) => setInvoices(data));
  }, []);

  return (
    <div className="app">
      <Router>
        <SideBar />
        <div className="content">
          <Switch>
            <Route path="/new-invoice">
              <NewInvoice invoices={invoices} clients={clients} setInvoices={setInvoices}/>
            </Route>
            <Route path="/invoices">
              <InvoiceList invoices={invoices} clients={clients}/>
            </Route>
            <Route path="/clients">
              <ClientsList clients={clients} setClients={setClients} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
