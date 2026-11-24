# Portafolio personal — José Luis Tot Herrera

Portafolio web personal de José Luis Tot Herrera. Presenta información profesional, habilidades, proyectos y formas de contacto, con una interfaz adaptable a distintos tamaños de pantalla.

## Tecnologías

- React 19 y TypeScript
- Vite
- Tailwind CSS
- Framer Motion (animaciones)
- Lenis (scroll suave)
- Lucide React (íconos)

## Requisitos

- Node.js (versión LTS reciente)
- npm

## Instalación y uso

```bash
npm install
npm run dev
```

Abre `http://localhost:5173` en el navegador.

## Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Verifica tipos con TypeScript y genera la versión de producción en `dist/` |
| `npm run preview` | Sirve localmente la versión generada |
| `npm run lint` | Ejecuta ESLint |

## Estructura

```
portafolio_jose/
├── public/              # Archivos estáticos: avatar, imágenes de proyectos y CV
├── src/
│   ├── components/      # Componentes: hero, proyectos, actividad, contacto, etc.
│   ├── data/            # Contenido del sitio
│   ├── hooks/           # Hooks personalizados
│   ├── i18n/            # Traducciones
│   ├── sections/        # Secciones de la página
│   ├── types/           # Tipos de TypeScript
│   ├── App.tsx          # Componente principal
│   └── main.tsx         # Punto de entrada
├── index.html
└── vite.config.ts
```

## Despliegue

El proyecto es una aplicación de una sola página (SPA) construida con Vite. Se puede publicar en cualquier servicio de hosting estático, como GitHub Pages o Vercel, usando la carpeta `dist/` generada por `npm run build`.

## Autor

José Luis Tot Herrera
