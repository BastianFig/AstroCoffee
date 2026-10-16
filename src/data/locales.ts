import type { Local } from "./types";

// Datos de ejemplo: reemplázalos por los reales.
export const locales: Local[] = [
  {
    id: "providencia",
    nombre: "Sucursal Providencia",
    direccion: "Av. Providencia 1234",
    comuna: "Providencia",
    telefono: "+56 9 1234 5678",
    horario: [
      { dias: "Lunes a Viernes", horas: "08:00 – 20:00" },
      { dias: "Sábado y Domingo", horas: "09:00 – 18:00" },
    ],
    mapsUrl: "https://maps.google.com/?q=Av.+Providencia+1234",
  },
  {
    id: "centro",
    nombre: "Sucursal Centro",
    direccion: "Calle Ejemplo 567",
    comuna: "Santiago",
    telefono: "+56 9 8765 4321",
    horario: [{ dias: "Lunes a Sábado", horas: "08:30 – 19:00" }],
    mapsUrl: "https://maps.google.com/?q=Calle+Ejemplo+567",
  },
];
