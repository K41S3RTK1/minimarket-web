

export default function AboutPage() {
  return (
    <section>
      <div className="hero">
        <h1>Acerca de MiniMarket Web</h1>
        <p>
          MiniMarket Web es un negocio ficticio creado para simular una tienda
          online moderna usando tecnologías web actuales.
        </p>
      </div>

      <div className="cards-container">
        <article className="info-card">
          <h3>Objetivo del proyecto</h3>
          <p>
            El objetivo es demostrar cómo una aplicación web puede mostrar
            productos, permitir interacción con el usuario y simular un proceso
            de compra sin necesidad de conectarse a una tienda real.
          </p>
        </article>

        <article className="info-card">
          <h3>Funcionalidades de la tienda</h3>
          <p>
            La tienda principal incluye catálogo de productos, búsqueda por
            nombre, filtros por categoría y etiqueta, ordenamiento por precio,
            carrito de compras, validación de checkout y persistencia con localStorage.
          </p>
        </article>

        <article className="info-card">
          <h3>Vite + React y Next.js</h3>
          <p>
            La aplicación interactiva fue desarrollada con Vite + React porque
            permite crear una experiencia dinámica para el usuario. Esta landing
            fue creada con Next.js para presentar información del negocio por
            medio de páginas organizadas y navegación compartida.
          </p>
        </article>
      </div>
    </section>
  );
}