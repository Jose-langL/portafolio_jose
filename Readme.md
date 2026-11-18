# Portafolio personal

Portafolio web de José Luis Tot Herrera. Presenta información profesional, habilidades, proyectos y formas de contacto en una interfaz adaptable a distintos tamaños de pantalla.

## Contenido

- **Inicio:** presentación y acceso a perfiles profesionales.
- **Sobre mí:** perfil, intereses y objetivos profesionales.
- **Habilidades:** lenguajes, tecnologías y herramientas.
- **Proyectos:** selección de proyectos con sus detalles.
- **Contacto:** medios para comunicarse.

La interfaz incluye selector de idioma y tema, animaciones y elementos visuales interactivos.

## Tecnologías

- React 19
- Vite 8
- Tailwind CSS 4
- Framer Motion
- GSAP
- React Icons

## Requisitos

- Node.js y npm instalados.
- Git, si se desea clonar el repositorio.

## Ejecución local

Clona el repositorio y entra en la carpeta del proyecto:

```bash
git clone <URL_DEL_REPOSITORIO>
cd portafolio_jose
```

Instala las dependencias e inicia el servidor de desarrollo:

```bash
npm install
npm run dev
```

Vite mostrará en la terminal la dirección local para abrir el sitio en el navegador. Normalmente es `http://localhost:5173`.

## Comandos disponibles

```bash
npm run dev      # inicia el servidor de desarrollo
npm run build    # genera la versión de producción en dist/
npm run preview  # sirve localmente la versión de producción
npm run lint     # analiza el código con Oxlint
```

## Estructura principal

```text
src/
├── components/   # componentes reutilizables e interfaz
├── data/         # datos de habilidades y proyectos
├── i18n/         # traducciones y contexto de idioma
├── sections/     # secciones principales del portafolio
├── App.jsx       # composición de la aplicación
└── index.css     # estilos globales
public/           # imágenes, iconos y documentos estáticos
```

## Contacto

- Correo: [totherrerajoseluis@gmail.com](mailto:totherrerajoseluis@gmail.com)
- GitHub: [Jose-langL](https://github.com/Jose-langL)
