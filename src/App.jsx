import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import InvoiceList from "./components/InvoiceList";
import SideBar from "./components/SideBar";
import NewInvoice from "./components/NewInvoice";
import ClientsList from "./components/ClientsList";
import Settings from "./components/Settings";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [invoices, setInvoices] = useState(() => {
    let localInvoices = localStorage.getItem("localInvoices");
    return localInvoices
      ? JSON.parse(localInvoices)
      : [
          {
            num: "INV-2021-0001",
            client: "Example Client 1",
            id: uuidv4(),
            date: { created: "2021-01-01", due: "2021-01-31", paid: "" },
            services: [
              {
                service: "Translation",
                description: "Product catalogue DE-ES translation",
                rate: 30,
                quantity: 10,
              },
              {
                service: "Proofreading",
                description: "Proofreading of same document",
                rate: 30,
                quantity: 5,
              },
            ],
            tax: 19,
          },
          {
            num: "INV-2021-0002",
            client: "Example Client 2",
            id: uuidv4(),
            date: { created: "2023-02-01", due: "2024-02-28", paid: "" },
            services: [
              {
                service: "Translation",
                description: "E-Learning EN-ES translation",
                rate: 30,
                quantity: 15,
              },
              {
                service: "Proofreading",
                description: "Proofreading of previous jobs",
                rate: 30,
                quantity: 53,
              },
            ],
            tax: 19,
          },
        ];
  });

  const [clients, setClients] = useState(() => {
    let localClients = localStorage.getItem("localClients");
    return localClients
      ? JSON.parse(localClients)
      : [
          {
            id: uuidv4(),
            name: "Example Client 1",
            address: {
              street: "Client Street 1",
              zip: "12345",
              city: "Berlin",
              country: "Germany",
            },
            contact: {
              phone: "+49 175 234 123",
              email: "client.email@clientcompany.com",
            },
            ustidnr: "DE 123 456 789",
          },
          {
            id: uuidv4(),
            name: "Example Client 2",
            address: {
              street: "Another Street 2",
              zip: "54321",
              city: "Berlin",
              country: "Germany",
            },
            contact: {
              phone: "+49 175 234 123",
              email: "client.email@clientcompany.com",
            },
            ustidnr: "DE 987 654 321",
          },
        ];
  });

  const [settings, setSettings] = useState(() => {
    const localSettings = localStorage.getItem("localSettings");
    return localSettings
      ? JSON.parse(localSettings)
      : {
          name: "My Business",
          address: {
            street: "Meine Strasse 12",
            zip: "12345",
            city: "Berlin",
            country: "Germany",
          },
          services: [
            { service: "Service 1", rate: 30 },
            { service: "Service 2", rate: 20 },
          ],
          contact: {
            phone: "+49 175 234 123",
            email: "email.address@mycompany.de",
          },
          bank: {
            name: "My Bank",
            iban: "DE12 3456 7890 1234 5678 90",
            bic: "ABCDEFGH123",
          },
          ustidnr: "DE 123 456 789",
        };
  });

  useEffect(() => {
    localStorage.setItem("localSettings", JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem("localClients", JSON.stringify(clients));
  }, [clients]);

  useEffect(() => {
    localStorage.setItem("localInvoices", JSON.stringify(invoices));
  }, [invoices]);

  return (
    <>
      <div className="app">
        <Router>
          <SideBar />
          <div className="content">
            <Switch>
              <Route path="/new-invoice">
                <NewInvoice
                  invoices={invoices}
                  clients={clients}
                  setInvoices={setInvoices}
                  settings={settings}
                />
              </Route>
              <Route path="/invoices">
                <InvoiceList
                  invoices={invoices}
                  setInvoices={setInvoices}
                  clients={clients}
                  settings={settings}
                />
              </Route>
              <Route path="/clients">
                <ClientsList clients={clients} setClients={setClients} />
              </Route>
              <Route path="/settings">
                <Settings settings={settings} setSettings={setSettings} />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
