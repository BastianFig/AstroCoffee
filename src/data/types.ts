// Tipos compartidos. Si un dato no calza con estos tipos, TypeScript avisa al compilar.

export type Categoria = "Café" | "Té y otros" | "Pastelería" | "Salado";

export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number; // en CLP
  categoria: Categoria;
  destacado?: boolean; // el "?" lo hace opcional
}

export interface Local {
  id: string;
  nombre: string;
  direccion: string;
  comuna: string;
  telefono: string;
  horario: { dias: string; horas: string }[];
  mapsUrl: string;
}
