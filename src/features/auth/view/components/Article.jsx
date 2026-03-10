import { Box, Container, Grid, Typography } from "@mui/material";

const Article = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: "#f5f1e8" }}>
      <Container>
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h4"
              sx={{ fontFamily: "serif", mb: 3, color: "#3e2723" }}
            >
              Nuestra Historia
            </Typography>
            <Typography variant="body1" sx={{ color: "#4e342e", lineHeight: 1.9, mb: 2 }}>
              Somos una panadería artesanal dedicada a la elaboración de pan fresco
              todos los días. Utilizamos ingredientes naturales y recetas tradicionales
              para ofrecer productos de alta calidad a nuestros clientes.
            </Typography>
            <Typography variant="body1" sx={{ color: "#4e342e", lineHeight: 1.9 }}>
              Desde 1990, cada madrugada nuestros panaderos trabajan con pasión para
              que tú disfrutes del mejor pan recién horneado.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                backgroundColor: "#e8dcc8",
                borderRadius: 4,
                height: 300,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h1">🍞</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Article;