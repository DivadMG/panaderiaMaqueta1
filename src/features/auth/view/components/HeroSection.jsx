import { Box, Container, Typography, Button } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        minHeight: { xs: "60vh", md: "90vh" },
        // ── Imagen de fondo ──────────────────────────────────────────
        backgroundImage: `
          linear-gradient(
            to right,
            rgba(20, 10, 5, 0.80) 0%,
            rgba(20, 10, 5, 0.50) 55%,
            rgba(20, 10, 5, 0.15) 100%
          ),
          url('/RecursosVisuales/portada.jpg')
        `,
        // El gradiente va encima de la imagen: oscuro a la izquierda
        // (donde está el texto) y casi transparente a la derecha
        // para que se vea bien la foto.

        backgroundSize: "cover",
        // cover: la imagen cubre todo el Box sin dejar espacios vacíos,
        // recortando los bordes si es necesario.

        backgroundPosition: "center",
        // Centra la imagen. Puedes cambiar a "top", "bottom", etc.

        backgroundRepeat: "no-repeat",
        // Evita que la imagen se repita si es más pequeña que el Box.

        display: "flex",
        alignItems: "center",
        // Centra verticalmente el contenido dentro del Box.
      }}
    >
      <Container>
        <Box sx={{ maxWidth: 580 }}>

          {/* ── Etiqueta pequeña encima del título ── */}
          <Typography
            variant="overline"
            sx={{
              color: "#ffcc80",
              letterSpacing: 4,
              fontSize: "0.75rem",
              display: "block",
              mb: 1,
            }}
          >
            Artesanal · Tradicional · Fresco
          </Typography>

          {/* ── Título principal ── */}
          <Typography
            variant="h2"
            sx={{
              fontFamily: "serif",
              color: "#ffffff",
              mb: 2,
              fontSize: { xs: "2.4rem", md: "3.8rem" },
              lineHeight: 1.15,
              textShadow: "0 2px 12px rgba(0,0,0,0.5)",
              // textShadow: sombra suave detrás del texto para mejor legibilidad.
            }}
          >
            Pan fresco<br />cada día
          </Typography>

          {/* ── Subtítulo ── */}
          <Typography
            variant="h6"
            sx={{
              color: "rgba(255,255,255,0.85)",
              mb: 5,
              fontWeight: 400,
              fontSize: { xs: "1rem", md: "1.2rem" },
              maxWidth: 440,
              lineHeight: 1.7,
            }}
          >
            Elaborado con ingredientes naturales y recetas
            tradicionales desde 1990.
          </Typography>

          {/* ── Botones ── */}
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#3e2723",
                "&:hover": { backgroundColor: "#6d4c41" },
                px: 4,
                py: 1.5,
                fontSize: "0.95rem",
                boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
              }}
            >
              Ver productosw
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: "rgba(255,255,255,0.7)",
                color: "#ffffff",
                "&:hover": {
                  borderColor: "#ffffff",
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
                px: 4,
                py: 1.5,
                fontSize: "0.95rem",
              }}
            >
              Nuestra historia
            </Button>
          </Box>

        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;