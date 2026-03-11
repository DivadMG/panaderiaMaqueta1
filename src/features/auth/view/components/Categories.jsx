import { Box, Container, Typography, Grid, Card, CardContent, Divider } from "@mui/material";

// ── Tarjetas de categorías ────────────────────────────────────
const categorias = [
  { emoji: "🍞", titulo: "Panes",      descripcion: "Artesanales, horneados cada mañana con masa madre natural.", bg: "#fff8f0", border: "#f5e0c3" },
  { emoji: "🥐", titulo: "Croissants", descripcion: "Hojaldrados, dorados y con rellenos gourmet.",               bg: "#fdf6ec", border: "#e8d5b7" },
  { emoji: "🎂", titulo: "Pasteles",   descripcion: "Para cumpleaños, bodas o simplemente darse un gusto.",       bg: "#fff0f3", border: "#f7cad0" },
  { emoji: "☕", titulo: "Bebidas",    descripcion: "Café de especialidad para acompañar tu pan favorito.",        bg: "#f0f4ff", border: "#c5cff0" },
];

// ── Franja informativa ────────────────────────────────────────
// 💡 EDITA AQUÍ los textos de "¿Por qué elegirnos?"
const infoProductos = [
  { emoji: "🌾", titulo: "Ingredientes naturales",   texto: "Harina de trigo seleccionada, sin conservantes ni aditivos artificiales." },
  { emoji: "⏰", titulo: "Horneado diario",           texto: "Cada producto sale del horno antes de las 7am para llegar fresco a tu mesa." },
  { emoji: "👨‍🍳", titulo: "Recetas tradicionales",  texto: "Más de 30 años perfeccionando las mismas recetas de nuestros fundadores." },
  { emoji: "📦", titulo: "Para llevar o a domicilio", texto: "Empacamos con cuidado para que lleguen en perfectas condiciones." },
];

// ─────────────────────────────────────────────────────────────
const Categories = () => {
  return (
    <Box sx={{ backgroundColor: "#fff" }}>

      {/* ── PARTE 1: Tarjetas de categorías ───────────────── */}
      <Box sx={{ py: 8 }}>
        <Container>

          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography variant="overline" sx={{ color: "#6d4c41", letterSpacing: 3, fontSize: "0.75rem" }}>
              Lo que ofrecemos
            </Typography>
            <Typography variant="h4" sx={{ fontFamily: "serif", color: "#3e2723", mt: 0.5 }}>
              Nuestras categorías
            </Typography>
            <Typography variant="body1" sx={{ color: "#8d6e63", mt: 1, maxWidth: 480, mx: "auto" }}>
              Encuentra el producto perfecto para cada momento del día.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {categorias.map((cat) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={cat.titulo}>
                <Card
                  elevation={0}
                  sx={{
                    backgroundColor: cat.bg,
                    border: `1px solid ${cat.border}`,
                    borderRadius: 4,
                    height: "100%",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    "&:hover": { transform: "translateY(-6px)", boxShadow: "0 12px 28px rgba(62,39,35,0.12)" },
                  }}
                >
                  <CardContent sx={{ textAlign: "center", py: 4 }}>
                    <Typography sx={{ fontSize: "2.8rem", mb: 2, lineHeight: 1 }}>{cat.emoji}</Typography>
                    <Typography variant="h6" sx={{ fontFamily: "serif", color: "#3e2723", mb: 1 }}>{cat.titulo}</Typography>
                    <Typography variant="body2" sx={{ color: "#6d4c41", lineHeight: 1.6 }}>{cat.descripcion}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

        </Container>
      </Box>

      <Divider sx={{ borderColor: "#f0e6d8" }} />

      {/* ── PARTE 2: Franja "¿Por qué elegirnos?" ─────────── */}
      {/* 💡 Cambia backgroundColor para cambiar el fondo de esta franja */}
      <Box sx={{ py: 8, backgroundColor: "#fdf6ec" }}>
        <Container>

          <Box sx={{ textAlign: "center", mb: 5 }}>
            <Typography variant="h5" sx={{ fontFamily: "serif", color: "#3e2723" }}>
              ¿Por qué elegirnos?
            </Typography>
            <Typography variant="body2" sx={{ color: "#8d6e63", mt: 1 }}>
              Cada detalle importa cuando se trata de buen pan.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {infoProductos.map((item) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.titulo}>
                <Box sx={{ textAlign: "center", px: 1 }}>

                  {/* Emoji dentro de un círculo */}
                  <Box sx={{
                    width: 64, height: 64, borderRadius: "50%",
                    backgroundColor: "#fff", border: "2px solid #e8d5b7",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    mx: "auto", mb: 2, fontSize: "1.8rem",
                  }}>
                    {item.emoji}
                  </Box>

                  <Typography variant="subtitle1" sx={{ fontFamily: "serif", color: "#3e2723", fontWeight: "bold", mb: 0.5 }}>
                    {item.titulo}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#6d4c41", lineHeight: 1.7 }}>
                    {item.texto}
                  </Typography>

                </Box>
              </Grid>
            ))}
          </Grid>

        </Container>
      </Box>

    </Box>
  );
};

export default Categories;