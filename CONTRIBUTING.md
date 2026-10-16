# Flujo de trabajo con ramas

Guía para colaborar en este proyecto sin pisarnos el código.

## Ramas

```text
main              ← siempre estable. NO se trabaja directo aquí.
 ├── dev-bastian
 └── dev-vicente
```

- `main` solo recibe cambios mediante **Pull Request**.
- Cada persona trabaja en su propia rama `dev-nombre`.

## Reparto de archivos (para evitar conflictos)

| Persona     | Se encarga de          | Archivos                                                                                              |
| ----------- | ---------------------- | ----------------------------------------------------------------------------------------------------- |
| **Bastian** | Base y carta           | `Layout.astro`, `Header.astro`, `Footer.astro`, `carta.astro`, `ProductCard.astro`, `data/menu.ts`    |
| **Vicente** | Ubicaciones y contacto | `ubicaciones.astro`, `LocalCard.astro`, `data/locales.ts`, `contacto.astro` (nueva)                   |

**Archivos compartidos** (`Header.astro`, `types.ts`, `global.css`): avisar al otro antes de editarlos.

## Configuración inicial (una sola vez)

```bash
git clone https://github.com/BastianFig/AstroCoffee.git
cd AstroCoffee
npm install
git switch -c dev-tunombre          # crea tu rama y te cambia a ella
git push -u origin dev-tunombre     # la sube a GitHub
```

## Flujo del día a día

### 1. Empezar el día: traer lo nuevo de `main`

```bash
git switch dev-tunombre
git fetch
git merge origin/main
```

### 2. Trabajar y guardar cambios

```bash
git status                       # ver qué cambió
git add .                        # preparar los cambios
git commit -m "Agrega sección de horarios en ubicaciones"
git push                         # subir a tu rama
```

Antes de subir, comprueba que todo funcione:

```bash
npm run check
npm run build
```

### 3. Unir tu trabajo a `main`: Pull Request

1. En GitHub, entra al repo → pestaña **Pull requests** → **New pull request**.
2. Elige `base: main` ← `compare: dev-tunombre`.
3. Escribe un título y una descripción corta de qué cambiaste.
4. Pide revisión a la otra persona.
5. Quien revisa lee los cambios (**Files changed**), comenta si hace falta y aprueba.
6. **Merge pull request**.

### 4. Después del merge

```bash
git switch main
git pull
git switch dev-tunombre
git merge main
```

## Buenas prácticas

- **Commits pequeños y frecuentes**, cada uno con un solo cambio con sentido.
- **Mensajes claros** en imperativo: "Agrega...", "Corrige...", "Cambia...".
- **Pull Requests chicos**: mejor uno por funcionalidad que uno gigante a fin de semana.
- **Nunca** `git push --force` sobre `main`.
- Si dudas, corre `git status` antes de cualquier cosa.

## Resolver un conflicto

Si al hacer `git merge` aparece `CONFLICT`:

1. Abre el archivo marcado. Verás algo así:

   ```text
   <<<<<<< HEAD
   tu versión
   =======
   versión del otro
   >>>>>>> origin/main
   ```

2. Deja el texto final correcto y **borra** las líneas `<<<<<<<`, `=======` y `>>>>>>>`.
3. Guarda y ejecuta:

   ```bash
   git add archivo-resuelto
   git commit
   ```

   (VS Code también ofrece los botones "Accept Current / Incoming / Both Changes".)

4. Si te enredas y quieres volver atrás: `git merge --abort`.

## Chuleta de comandos

| Comando                     | Qué hace                                  |
| --------------------------- | ----------------------------------------- |
| `git status`                | Muestra el estado de tus archivos         |
| `git branch`                | Lista las ramas locales                   |
| `git switch nombre`         | Cambia de rama                            |
| `git switch -c nombre`      | Crea una rama nueva y cambia a ella       |
| `git log --oneline -5`      | Últimos 5 commits resumidos               |
| `git diff`                  | Muestra los cambios sin guardar           |
| `git fetch`                 | Descarga novedades sin mezclarlas         |
| `git merge origin/main`     | Mezcla `main` en tu rama actual           |
| `git pull`                  | `fetch` + `merge` de tu rama remota       |
| `git merge --abort`         | Cancela un merge con conflictos           |
