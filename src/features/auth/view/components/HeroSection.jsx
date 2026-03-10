import { Box, Container, Typography, Button } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        minHeight: { xs: "60vh", md: "80vh" },
        backgroundColor: "#fdf6ec",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Box sx={{ maxWidth: 600 }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "serif",
              color: "#3e2723",
              mb: 2,
              fontSize: { xs: "2.2rem", md: "3.5rem" },
            }}
          >
            Pan fresco cada día
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#6d4c41",
              mb: 4,
              fontWeight: 400,
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            Elaborado con ingredientes naturales y recetas tradicionales desde 1990.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#3e2723",
                "&:hover": { backgroundColor: "#6d4c41" },
                px: 4,
              }}
            >
              Ver productos
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: "#3e2723",
                color: "#3e2723",
                "&:hover": { borderColor: "#6d4c41", color: "#6d4c41" },
                px: 4,
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