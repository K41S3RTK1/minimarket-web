# MiniMarket Web

Proyecto académico para el laboratorio de reposición: **Simulador de Tienda Online con Carrito de Compras**.

El proyecto contiene dos aplicaciones:

- **tienda-vite/**: aplicación principal desarrollada con Vite + React.
- **landing-next/**: mini landing page informativa desarrollada con Next.js.

## Tecnologías utilizadas

- React
- Vite
- Next.js
- CSS
- Git
- GitHub
- GitHub Pages
- localStorage

## Sitio publicado

Aplicación principal publicada en GitHub Pages:

https://k41s3rtk1.github.io/minimarket-web/

## Repositorio

https://github.com/K41S3RTK1/minimarket-web

## Funcionalidades de la app principal

La tienda principal fue desarrollada con **Vite + React** e incluye:

- Catálogo con 12 productos.
- Cards con imagen, nombre, categoría, precio, stock, descripción y etiqueta.
- Botón para agregar productos al carrito.
- Carrito de compras visible.
- Agregar productos al carrito.
- Eliminar productos del carrito.
- Aumentar y disminuir cantidades.
- Vaciar carrito completo.
- Cálculo de subtotal por producto.
- Cálculo del total general.
- Búsqueda de productos por nombre.
- Filtro por categoría.
- Filtro por etiqueta.
- Ordenamiento por precio de menor a mayor y de mayor a menor.
- Checkout simulado con formulario.
- Validación de campos vacíos.
- Validación básica de correo electrónico.
- Validación de carrito vacío.
- Resumen de compra al finalizar correctamente.
- Persistencia del carrito con localStorage.

## Funcionalidades de la landing con Next.js

La mini app secundaria fue desarrollada con **Next.js** e incluye:

- Página principal `/`.
- Página `/about`.
- Página `/categories`.
- Navbar compartido.
- Footer compartido.
- Cards informativas.
- Explicación de qué es MiniMarket Web.
- Explicación de los tipos de productos que vende.
- Explicación de las funcionalidades de la tienda.
- Diferencia entre la app interactiva hecha con Vite + React y la landing informativa hecha con Next.js.
- Enlace hacia la app principal publicada en GitHub Pages.

## Estructura del proyecto

```text
minimarket-web/
├── tienda-vite/
│   ├── src/
│   │   ├── components/
│   │   ├── data/
│   │   ├── App.jsx
│   │   └── App.css
│   ├── package.json
│   └── vite.config.js
├── landing-next/
│   ├── app/
│   │   ├── about/
│   │   ├── categories/
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   └── package.json
├── README.md
└── .gitignore
```

## Cómo ejecutar la app principal

Desde la raíz del proyecto:

```bash
cd tienda-vite
npm install
npm run dev
```

Luego abrir:

```text
http://localhost:5173
```

## Cómo ejecutar la landing con Next.js

Desde la raíz del proyecto:

```bash
cd landing-next
npm install
npm run dev
```

Luego abrir:

```text
http://localhost:3000
```

## Despliegue en GitHub Pages

La aplicación principal de Vite fue publicada usando el paquete `gh-pages`.

Comando utilizado:

```bash
npm run deploy
```

## Autor
Daniel Sandoval
Proyecto realizado como parte del curso **Sistemas y Tecnologías Web**.