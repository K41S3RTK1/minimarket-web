

export default function CategoriesPage() {
  const categories = [
    {
      title: "Tecnología",
      description: "Productos electrónicos, accesorios y dispositivos modernos para uso diario.",
    },
    {
      title: "Hogar",
      description: "Artículos funcionales y decorativos para mejorar espacios del hogar.",
    },
    {
      title: "Ropa",
      description: "Prendas cómodas y modernas para diferentes estilos y ocasiones.",
    },
    {
      title: "Accesorios",
      description: "Complementos útiles para estudio, trabajo y actividades cotidianas.",
    },
    {
      title: "Papelería",
      description: "Productos escolares y de oficina para organización y productividad.",
    },
    {
      title: "Deportes",
      description: "Artículos para entrenamiento físico y actividades recreativas.",
    },
  ];

  return (
    <section>
      <div className="hero">
        <h1>Categorías de productos</h1>
        <p>
          MiniMarket Web ofrece distintas categorías para simular una experiencia
          variada de tienda online.
        </p>
      </div>

      <div className="cards-container">
        {categories.map((category) => (
          <article key={category.title} className="info-card">
            <h3>{category.title}</h3>
            <p>{category.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}