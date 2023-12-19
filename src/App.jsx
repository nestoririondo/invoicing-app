import { useState, useEffect } from 'react'
import ClientsDropDown from './components/ClientsDropDown'
import InvoiceList from './components/InvoiceList'
import './App.css'

function App() {
  
  const [invoices, setInvoices] = useState([])
  const [clients, setClients] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/invoices')
      .then(response => response.json())
      .then(data => setInvoices(data))
  }
  , [])

  useEffect(() => {
    fetch('http://localhost:8000/clients')
      .then(response => response.json())
      .then(data => setClients(data))
  }, [])
  
  return (
    <>
    <ClientsDropDown clients={clients} />
    <InvoiceList invoices={invoices} />
    </>
  )
}

export default App
