import { Box, Container, Grid, Typography, Link } from "@mui/material";

export const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#3e2723", color: "#fff", pt: 6, pb: 3 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ fontFamily: "serif", mb: 2 }}>
              🥐 La Panadería
            </Typography>
            <Typography variant="body2" sx={{ color: "#d7ccc8" }}>
              Pan artesanal elaborado con amor y tradición desde 1990.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>
              Navegación
            </Typography>
            {["Inicio", "Artículos", "Ofertas", "Nosotros"].map((item) => (
              <Typography key={item} variant="body2" sx={{ color: "#d7ccc8", mb: 0.5 }}>
                <Link href="/" underline="hover" color="inherit">{item}</Link>
              </Typography>
            ))}
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>
              Contacto
            </Typography>
            <Typography variant="body2" sx={{ color: "#d7ccc8" }}>📍 Calle del Pan 123</Typography>
            <Typography variant="body2" sx={{ color: "#d7ccc8" }}>📞 +57 300 000 0000</Typography>
            <Typography variant="body2" sx={{ color: "#d7ccc8" }}>✉️ hola@lapanaderia.com</Typography>
          </Grid>
        </Grid>
        <Box sx={{ borderTop: "1px solid #5d4037", mt: 4, pt: 3, textAlign: "center" }}>
          <Typography variant="body2" sx={{ color: "#a1887f" }}>
            © 2025 La Panadería · Todos los derechos reservados
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;