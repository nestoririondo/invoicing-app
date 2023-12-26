const InvoiceTableRow = ({ invoice, setInvoice, settings, index, item }) => {
  const handleUpdateService = (property, value) => {
    let updatedServices = invoice.services.map((service, i) => {
      return i === index ? { ...service, [property]: value } : service;
    });
    setInvoice({ ...invoice, services: updatedServices });
  };

  const handleSetService = (e) => {
    const selectedService = settings.services.find(
      (service) => service.service === e.target.value
    );
    const updatedServices = invoice.services.map((service, i) => {
      return i === index
        ? {
            ...service,
            service: e.target.value,
            rate: selectedService.rate,
          }
        : service;
    });

    setInvoice({
      ...invoice,
      services: updatedServices,
    });
  };

  return (
    <tr>
      <td>
        <select onChange={handleSetService}>
          {settings.services.map((service, index) => (
            <option key={index} value={service.service}>
              {service.service}
            </option>
          ))}
        </select>
      </td>
      <td>
        <input
          className="description-input"
          type="text"
          placeholder="Description"
          onChange={(e) => handleUpdateService("description", e.target.value)}
        />
      </td>
      <td>
        <input
          className="rate-input"
          type="number"
          step="0.01"
          onChange={(e) => handleUpdateService("rate", e.target.value)}
          min="0"
          value={invoice.services[index].rate}
        />
      </td>
      <td>
        <input
          className="quantity-input"
          type="number"
          onChange={(e) => handleUpdateService("quantity", e.target.value)}
          min="0"
        />
      </td>
      <td className="total-input">
        {parseFloat(
          invoice.services[index].rate * invoice.services[index].quantity
        ).toLocaleString("de-DE", { style: "currency", currency: "EUR" })}
      </td>
    </tr>
  );
};

export default InvoiceTableRow;
