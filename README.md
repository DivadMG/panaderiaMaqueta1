# 🥖 Panadería Maqueta 1

> Aplicación web tipo maqueta para una panadería artesanal, desarrollada con React + Vite y Material UI.

---

## 📋 Descripción

**Panadería Maqueta 1** es una aplicación web frontend construida como proyecto de aprendizaje en el programa de Análisis y Desarrollo de Software del SENA. Simula la interfaz de una panadería artesanal, permitiendo a los usuarios explorar productos, ofertas y gestionar su cuenta personal. El proyecto está desplegado en Vercel y conectado a un repositorio de GitHub para integración continua.

---

## ✨ Características Principales

- 🏠 **Landing Page** — Página de inicio con secciones de bienvenida, categorías y ofertas destacadas.
- 🔐 **Autenticación simulada** — Login con usuario y contraseña, con sesión activa y cierre de sesión.
- 👤 **Mi Cuenta** — Vista de perfil del usuario autenticado con datos personales.
- 🛒 **Mis Compras** — Sección para consultar el historial de compras del usuario.
- ❤️ **Mis Favoritos** — Sección para gestionar productos marcados como favoritos.
- 🎯 **Ofertas** — Página dedicada a productos en promoción.
- 📦 **Artículos** — Vista de detalle de productos individuales.
- 📱 **Diseño responsivo** — Adaptado para dispositivos móviles y escritorio.
- 🧭 **Navegación SPA** — Enrutamiento del lado del cliente con React Router DOM.

---

## 🖼️ Interfaz Gráfica

La interfaz está construida con **Material UI (MUI v5)** y utiliza una paleta de colores cálidos basada en tonos marrones y crema, evocando el ambiente de una panadería artesanal.

| Sección | Descripción |
|---|---|
| Header | Barra de navegación fija con acceso a todas las secciones |
| Hero Section | Imagen de portada con llamado a la acción |
| Categorías | Tarjetas visuales por tipo de producto |
| Ofertas | Productos destacados con precio y descripción |
| Login | Formulario con validación y toggle de contraseña |
| Perfil | Datos del usuario con opción de cerrar sesión |

---

## 🏗️ Arquitectura del Proyecto

```
panaderia-maqueta1/
├── public/
├── RecursosVisuales/          # Imágenes y recursos estáticos
│   ├── portada.jpg
│   ├── portadaLogin.jpg
│   └── portadaLogin2.jpg
├── src/
│   ├── App.jsx                # Componente raíz con rutas
│   ├── main.jsx               # Punto de entrada
│   └── features/
│       └── auth/
│           ├── components/    # Páginas de usuario
│           │   ├── myAccount.jsx
│           │   ├── myBuys.jsx
│           │   └── myFavorites.jsx
│           ├── hooks/         # Hooks personalizados
│           │   └── Hooks.jsx
│           ├── layout/
│           │   └── components/
│           │       ├── Header.jsx
│           │       └── LandingPage.jsx
│           └── view/
│               └── components/
│                   ├── Article.jsx
│                   ├── Categories.jsx
│                   ├── HeroSection.jsx
│                   └── Offers.jsx
├── index.html
├── vite.config.js
└── package.json
```

### Tecnologías utilizadas

| Tecnología | Versión | Uso |
|---|---|---|
| React | 18+ | Librería principal de UI |
| Vite | 7.3.1 | Bundler y servidor de desarrollo |
| Material UI | 5+ | Componentes de interfaz |
| React Router DOM | 6+ | Enrutamiento SPA |
| Vercel | — | Plataforma de despliegue |

---

## 👨‍💻 Datos del Autor

| Campo | Información |
|---|---|
| **Nombre** | David Muñoz |
| **Correo** | davidlastday96@gmail.com |
| **Programa** | Análisis y Desarrollo de Software |
| **Institución** | SENA (Servicio Nacional de Aprendizaje) |
| **Repositorio** | *(enlace pendiente)* |
| **Deploy** | [Ver en Vercel](https://panaderia-maqueta1-git-main-davids-projects-9f0fa5fc.vercel.app) |

---

## 🚀 Instalación y Uso Local

```bash
# Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>

# Entrar al directorio
cd panaderia-maqueta1

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build
```

---

*Proyecto académico desarrollado para el SENA — Trimestre 3*