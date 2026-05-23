export default function Home() {
  return (
    <section>
      <div className="hero">
        <h1>MiniMarket Web</h1>
        <p>
          Una landing informativa creada con Next.js para presentar una tienda
          online ficticia con catálogo interactivo, carrito de compras y checkout simulado.
        </p>

        <a
          className="github-button"
          href="https://K41S3RTK1.github.io/minimarket-web/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver tienda principal en GitHub Pages
        </a>
      </div>

      <div className="cards-container">
        <article className="info-card">
          <h3>¿Qué es MiniMarket Web?</h3>
          <p>
            Es un mercado digital ficticio pensado para simular una experiencia
            básica de compra en línea, desde la exploración de productos hasta
            la generación de un resumen de compra.
          </p>
        </article>

        <article className="info-card">
          <h3>Catálogo interactivo</h3>
          <p>
            La app principal permite buscar productos, filtrarlos por categoría
            o etiqueta, ordenarlos por precio y agregarlos a un carrito funcional.
          </p>
        </article>

        <article className="info-card">
          <h3>Carrito y checkout</h3>
          <p>
            El carrito permite aumentar, disminuir y eliminar productos. Además,
            el checkout valida datos del usuario y muestra un resumen de compra.
          </p>
        </article>
      </div>
    </section>
  );
}
