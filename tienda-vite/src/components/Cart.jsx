function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart
}) {

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>

      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">

              <h3>{item.name}</h3>

              <p>Precio: Q{item.price}</p>

              <p>Cantidad: {item.quantity}</p>

              <p>
                Subtotal: Q{item.price * item.quantity}
              </p>

              <div className="cart-buttons">
                <button onClick={() => increaseQuantity(item.id)}>
                  +
                </button>

                <button onClick={() => decreaseQuantity(item.id)}>
                  -
                </button>

                <button onClick={() => removeFromCart(item.id)}>
                  Eliminar
                </button>
              </div>
            </div>
          ))}

          <h3>Total: Q{total}</h3>

          <button onClick={clearCart}>
            Vaciar carrito
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;