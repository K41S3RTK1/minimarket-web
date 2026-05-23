import products from "./data/products";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  return (
    <div>
      <h1>MiniMarket Web</h1>
      <p className="subtitle">Tienda online creada con React + Vite</p>

      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;