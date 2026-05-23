

import { useState } from "react";

function CheckoutForm({ cart, total }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    paymentMethod: "Tarjeta"
  });

  const [error, setError] = useState("");
  const [purchaseSummary, setPurchaseSummary] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (cart.length === 0) {
      setError("No puedes finalizar la compra con el carrito vacío.");
      setPurchaseSummary(null);
      return;
    }

    if (!formData.fullName || !formData.email || !formData.address) {
      setError("Todos los campos son obligatorios.");
      setPurchaseSummary(null);
      return;
    }

    if (!isValidEmail(formData.email)) {
      setError("Ingresa un correo electrónico válido.");
      setPurchaseSummary(null);
      return;
    }

    setError("");
    setPurchaseSummary({
      customer: formData,
      items: cart,
      total
    });
  };

  return (
    <section className="checkout-container">
      <h2>Checkout Simulado</h2>

      <form onSubmit={handleSubmit} className="checkout-form">
        <input
          type="text"
          name="fullName"
          placeholder="Nombre completo"
          value={formData.fullName}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="address"
          placeholder="Dirección"
          value={formData.address}
          onChange={handleChange}
        />

        <select
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
        >
          <option value="Tarjeta">Tarjeta</option>
          <option value="Transferencia">Transferencia</option>
          <option value="Contra entrega">Contra entrega</option>
        </select>

        <button type="submit">Finalizar compra</button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {purchaseSummary && (
        <div className="purchase-summary">
          <h3>Resumen de compra</h3>
          <p><strong>Cliente:</strong> {purchaseSummary.customer.fullName}</p>
          <p><strong>Correo:</strong> {purchaseSummary.customer.email}</p>
          <p><strong>Dirección:</strong> {purchaseSummary.customer.address}</p>
          <p><strong>Método de pago:</strong> {purchaseSummary.customer.paymentMethod}</p>

          <h4>Productos comprados:</h4>
          {purchaseSummary.items.map((item) => (
            <p key={item.id}>
              {item.name} x {item.quantity} = Q{item.price * item.quantity}
            </p>
          ))}

          <h3>Total pagado: Q{purchaseSummary.total}</h3>
        </div>
      )}
    </section>
  );
}

export default CheckoutForm;