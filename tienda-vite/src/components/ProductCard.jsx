function ProductCard({ product, addToCart }) {

  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.name}
      />

      <h2>{product.name}</h2>

      <p>
        <strong>Categoría:</strong>
        {" "}
        {product.category}
      </p>

      <p>
        <strong>Precio:</strong>
        {" "}
        Q{product.price}
      </p>

      <p>
        <strong>Stock:</strong>
        {" "}
        {product.stock}
      </p>

      <p>{product.description}</p>

      <p>
        <strong>Etiqueta:</strong>
        {" "}
        {product.tag}
      </p>

      <button
        onClick={() => addToCart(product)}
      >
        Agregar al carrito
      </button>

    </div>
  );
}

export default ProductCard;