const products = [
  {
    id: 1,
    name: "Audífonos Bluetooth",
    category: "Tecnología",
    price: 225,
    image: "data:image/jpeg;base64,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",
    description: "Audífonos inalámbricos con estuche de carga.",
    stock: 8,
    tag: "popular"
  },
  {
    id: 2,
    name: "Teclado Mecánico",
    category: "Tecnología",
    price: 450,
    image: "https://digitalpc.com.gt/wp-content/uploads/2024/07/1463770_picture_1632489377.webp",
    description: "Teclado RGB para gaming.",
    stock: 5,
    tag: "nuevo"
  },
  {
    id: 3,
    name: "Mouse Gamer",
    category: "Tecnología",
    price: 180,
    image: "https://img.pacifiko.com/PROD/resize/1/250x250/MWFlZGNjNm_1.jpg",
    description: "Mouse ergonómico de alta precisión.",
    stock: 10,
    tag: "oferta"
  },
  {
    id: 4,
    name: "Silla de Oficina",
    category: "Hogar",
    price: 850,
    image: "https://www.officedepot.com.gt/medias/34113.jpg-1200ftw?context=bWFzdGVyfHJvb3R8Mjk5NTM2fGltYWdlL2pwZWd8YUdJd0wyZ3lNQzg1T0RZM01UQXhPRFl6T1RZMkxtcHdad3w3ZTg5NjM4MGEyYTcyNjFiNDJkNTY1M2RlYmYxZGY5NmRlNjNmMTJiODA0OGM4N2I5ZmEwYjY2YTFkZjkxZDM1",
    description: "Silla cómoda para trabajo y estudio.",
    stock: 3,
    tag: "popular"
  },
  {
    id: 5,
    name: "Sudadera Negra",
    category: "Ropa",
    price: 275,
    image: "https://static.zara.net/assets/public/429e/c8c1/96dc4f178442/5bafd6e21b94/03199630800-f1/03199630800-f1.jpg?ts=1769208899820",
    description: "Sudadera de algodón unisex.",
    stock: 7,
    tag: "nuevo"
  },
  {
    id: 6,
    name: "Mochila Escolar",
    category: "Accesorios",
    price: 320,
    image: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=500",
    description: "Mochila resistente con varios compartimentos.",
    stock: 6,
    tag: "popular"
  },
  {
    id: 7,
    name: "Cuaderno Profesional",
    category: "Papelería",
    price: 45,
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=500",
    description: "Cuaderno de 100 hojas rayadas.",
    stock: 20,
    tag: "oferta"
  },
  {
    id: 8,
    name: "Balón de Fútbol",
    category: "Deportes",
    price: 210,
    image: "https://www.sportline.com.gt/media/catalog/product/j/d/jd8034_hardware-front-center-view.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
    description: "Balón profesional para entrenamiento.",
    stock: 9,
    tag: "popular"
  },
  {
    id: 9,
    name: "Lámpara LED",
    category: "Hogar",
    price: 130,
    image: "https://www.radioshackla.com/media/catalog/product/6/3/6301885.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
    description: "Lámpara moderna de bajo consumo.",
    stock: 12,
    tag: "nuevo"
  },
  {
    id: 10,
    name: "Reloj Inteligente",
    category: "Tecnología",
    price: 600,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
    description: "Smartwatch con monitoreo cardíaco.",
    stock: 4,
    tag: "popular"
  },
  {
    id: 11,
    name: "Botella Térmica",
    category: "Accesorios",
    price: 95,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500",
    description: "Botella de acero inoxidable.",
    stock: 15,
    tag: "oferta"
  },
  {
    id: 12,
    name: "Yoga Mat",
    category: "Deportes",
    price: 160,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500",
    description: "Colchoneta ideal para yoga y ejercicio.",
    stock: 11,
    tag: "nuevo"
  }
];

export default products;