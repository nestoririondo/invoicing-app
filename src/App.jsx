import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import InvoiceList from "./components/InvoiceList";
import SideBar from "./components/SideBar";
import NewInvoice from "./components/NewInvoice";
import ClientsList from "./components/ClientsList";
import Settings from "./components/Settings";
import "./App.css";


function App() {

  const [invoices, setInvoices] = useState([]);

  const [clients, setClients] = useState(() => {
    let localClients = localStorage.getItem('localClients');
    return localClients ? JSON.parse(localClients) : [
      {
        id: "cl1",
        name: "Example Client 1",
        address: {street: "Client Street 1", zip: "12345", city: "Berlin", country: "Germany" },
        contact: {phone: "+49 175 234 123", email: "client.email@clientcompany.com" },
        ustidnr: "DE 123 456 789",
      },
      {
        id: "cl2",
        name: "Example Client 2",
        address: {street: "Another Street 2", zip: "54321", city: "Berlin", country: "Germany" },
        contact: {phone: "+49 175 234 123", email: "client.email@clientcompany.com" },
        ustidnr: "DE 987 654 321",
      },
    ];
  });
  
  const [settings, setSettings] = useState(() => {
    const localSettings = localStorage.getItem('localSettings');
    return localSettings ? JSON.parse(localSettings) : {
      name: "My Company",
      address: {street: "Meine Strasse 12", zip: "12345", city: "Berlin", country: "Germany" },
      contact: {phone: "+49 175 234 123", email: "email.address@mycompany.de" },
      bank: {name: "My Bank", iban: "DE12 3456 7890 1234 5678 90", bic: "ABCDEFGH123" },
      ustidnr: "DE 123 456 789",
    };})

  useEffect(()=>{localStorage.setItem('localSettings', JSON.stringify(settings))},[settings])

  useEffect(() => {
    localStorage.setItem('localClients', JSON.stringify(clients));
  }, [clients]);

  return (
    <div className="app">
      <Router>
        <SideBar />
        <div className="content">
          <Switch>
            <Route path="/new-invoice">
              <NewInvoice invoices={invoices} clients={clients} setInvoices={setInvoices} settings={settings}/>
            </Route>
            <Route path="/invoices">
              <InvoiceList invoices={invoices} clients={clients}/>
            </Route>
            <Route path="/clients">
              <ClientsList clients={clients} setClients={setClients} />
            </Route>
            <Router path="/settings">
              <Settings settings={settings} setSettings={setSettings} />
            </Router>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
