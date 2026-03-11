// ─────────────────────────────────────────────────────────────
// LandingPage.jsx — Página principal (ruta "/")
//
// Este archivo SOLO ensambla secciones, no tiene lógica propia.
// El orden de los componentes = el orden en que el usuario los ve
// al hacer scroll hacia abajo.
//
// ORDEN ACTUAL:
//   1. HeroSection  → Portada con imagen de fondo
//   2. Categories   → Tarjetas de categorías (Pan, Croissants...)
//   3. Article      → Sección "Nuestra Historia"
//   4. Footer       → Pie de página
//
// 💡 Para reordenar secciones: cambia el orden de los componentes.
// 💡 Para ocultar una sección: comenta la línea con {/* ... */}
// 💡 Para agregar una sección nueva: imórtala y agrégala aquí.
// ─────────────────────────────────────────────────────────────

import { Footer }      from "./Footer";
import HeroSection     from "../../view/components/HeroSection";
import Categories      from "../../view/components/Categories";
import Article         from "../../view/components/Article";

const LandingPage = () => {
  return (
    <>
      {/* 1️⃣ Portada con imagen de fondo */}
      <HeroSection />

      {/* 2️⃣ Categorías visuales — lo primero que ven al hacer scroll */}
      <Categories />

      {/* 3️⃣ Historia de la panadería */}
      <Article />

      {/* 4️⃣ Pie de página */}
      <Footer />
    </>
  );
};

export default LandingPage;