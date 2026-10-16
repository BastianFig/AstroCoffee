# Cofee ☕

Sitio web estático para una cafetería: inicio, carta de productos y ubicaciones con horarios.

Hecho con [Astro](https://astro.build), [Tailwind CSS v4](https://tailwindcss.com) y TypeScript (modo strict).

## Requisitos

- Node.js >= 22.22
- npm

## Comenzar

```bash
npm install
npm run dev
```

El sitio queda disponible en http://localhost:4321.

## Comandos

| Comando           | Acción                                              |
| ----------------- | --------------------------------------------------- |
| `npm install`     | Instala las dependencias                            |
| `npm run dev`     | Servidor local con recarga automática               |
| `npm run check`   | Verifica tipos TypeScript (`.ts` y `.astro`)        |
| `npm run build`   | Genera el sitio estático en `dist/`                 |
| `npm run preview` | Sirve `dist/` localmente para probar el build       |

## Estructura

```text
src/
├── data/
│   ├── types.ts        Interfaces: Producto, Local, Categoria
│   ├── menu.ts         Productos y funciones (agrupar, formatear precio)
│   └── locales.ts      Sucursales y horarios
├── layouts/
│   └── Layout.astro    HTML base, importa Tailwind, usa <slot />
├── components/         Header, Footer, ProductCard, LocalCard
├── pages/              Cada archivo es una ruta
│   ├── index.astro         /
│   ├── carta.astro         /carta
│   └── ubicaciones.astro   /ubicaciones
└── styles/global.css   @import "tailwindcss"
```

## Cómo editar el contenido

- **Productos:** edita el arreglo `productos` en `src/data/menu.ts`. Si agregas una categoría nueva, súmala también al tipo `Categoria` en `src/data/types.ts` y al arreglo `categorias`.
- **Sucursales y horarios:** edita `src/data/locales.ts`.
- **Nueva página:** crea `src/pages/nombre.astro` y agrega el enlace en `src/components/Header.astro`.
- **Colores y estilos:** cambia las clases de Tailwind en el layout y los componentes.

> Los datos actuales (productos, direcciones, teléfonos) son de ejemplo.

## Colaboración

Trabajamos con ramas (`dev-bastian`, `dev-vicente`) y Pull Requests hacia `main`. Revisa la guía completa en [CONTRIBUTING.md](CONTRIBUTING.md).

## Despliegue

`npm run build` genera archivos estáticos en `dist/`, que se pueden publicar en Netlify, Vercel, GitHub Pages o cualquier hosting estático.

Para GitHub Pages, configura `site` (y `base` si no usas dominio propio) en `astro.config.mjs`.
