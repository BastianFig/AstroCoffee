import type { Categoria, Producto } from "./types";

export const categorias: Categoria[] = ["Café", "Té y otros", "Pastelería", "Salado"];

export const productos: Producto[] = [
  { id: "espresso", nombre: "Espresso", descripcion: "Shot simple de café de origen.", precio: 2200, categoria: "Café" },
  { id: "americano", nombre: "Americano", descripcion: "Espresso alargado con agua caliente.", precio: 2500, categoria: "Café" },
  { id: "latte", nombre: "Latte", descripcion: "Espresso con leche vaporizada.", precio: 3200, categoria: "Café", destacado: true },
  { id: "capuccino", nombre: "Capuccino", descripcion: "Espresso, leche y espuma cremosa.", precio: 3200, categoria: "Café" },
  { id: "te-chai", nombre: "Chai Latte", descripcion: "Té especiado con leche.", precio: 3400, categoria: "Té y otros" },
  { id: "chocolate", nombre: "Chocolate caliente", descripcion: "Cacao intenso con leche.", precio: 3300, categoria: "Té y otros" },
  { id: "brownie", nombre: "Brownie", descripcion: "Chocolate y nueces, casero.", precio: 2800, categoria: "Pastelería", destacado: true },
  { id: "croissant", nombre: "Croissant", descripcion: "Mantequilla, recién horneado.", precio: 2400, categoria: "Pastelería" },
  { id: "tostada", nombre: "Tostada de palta", descripcion: "Pan de masa madre, palta y limón.", precio: 4500, categoria: "Salado" },
];

// Función pura y tipada: agrupa los productos por categoría.
export function productosPorCategoria(): Record<Categoria, Producto[]> {
  const grupos = {} as Record<Categoria, Producto[]>;
  for (const cat of categorias) {
    grupos[cat] = productos.filter((p) => p.categoria === cat);
  }
  return grupos;
}

export const formatearPrecio = (n: number): string =>
  new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 }).format(n);
