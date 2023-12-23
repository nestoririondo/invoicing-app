const InvoiceTableRow = ({ invoice, setInvoice, settings, index, item }) => {
  const handleSetService = (e) => {
    const selectedService = settings.services.find(
      (service) => service.service === e.target.value
    );
    console.log(item);
    const updatedServices = invoice.services.map((service, i) => {
      return i === index
        ? {
            ...service,
            service: e.target.value,
            rate: selectedService ? selectedService.rate : service.rate,
          }
        : service;
    });

    setInvoice({
      ...invoice,
      services: updatedServices,
    });
  };

  const handleSetDescription = (e) => {
    const updatedServices = invoice.services.map((service, i) => {
      return i === index
        ? { ...service, description: e.target.value }
        : service;
    });

    setInvoice({
      ...invoice,
      services: updatedServices,
    });
  };

  const handleSetRate = (e) => {
    const updatedServices = invoice.services.map((service, i) => {
      return i === index ? { ...service, rate: e.target.value } : service;
    });

    setInvoice({
      ...invoice,
      services: updatedServices,
    });
  };

  const handleSetQuantity = (e) => {
    const updatedServices = invoice.services.map((service, i) => {
      return i === index ? { ...service, quantity: e.target.value } : service;
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
          onChange={handleSetDescription}
        />
      </td>
      <td>
        <input
          className="rate-input"
          type="number"
          step="0.01"
          onChange={handleSetRate}
          min="0"
          defaultValue={invoice.services[index].rate}
        />
      </td>
      <td>
        <input
          className="quantity-input"
          type="number"
          onChange={handleSetQuantity}
          min="0"
        />
      </td>
      <td className="total-input">
        {(
          invoice.services[index].rate * invoice.services[index].quantity
        ).toFixed(2)}{" "}
        €
      </td>
    </tr>
  );
};

export default InvoiceTableRow;
