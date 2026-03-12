import { Box, Container, Typography, Button, Paper } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { useNavigate } from "react-router-dom";

const LinksRepo = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#fdf6ec",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.50), rgba(0,0,0,0.50)), url('/RecursosVisuales/portadaLogin2.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 4,
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={4} sx={{ borderRadius: 4, overflow: "hidden" }}>

          {/* Cabecera */}
          <Box sx={{
            backgroundColor: "#3e2723",
            py: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
          }}>
            <Typography sx={{ fontSize: "3rem", lineHeight: 1 }}>🥐</Typography>
            <Typography variant="h5" sx={{ color: "#fff", fontFamily: "serif", mt: 1 }}>
              La Panadería
            </Typography>
            <Typography variant="body2" sx={{ color: "#d7ccc8" }}>
              Proyecto académico — SENA 2024
            </Typography>
          </Box>

          {/* Contenido */}
          <Box sx={{ px: 4, py: 4, display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="body1" sx={{ color: "#5d4037", textAlign: "center", mb: 1 }}>
              Desarrollado por <strong>David Muñoz</strong> como parte del programa
              de Análisis y Desarrollo de Software del SENA.
            </Typography>

            {/* Botón GitHub */}
            <Button
              fullWidth
              variant="contained"
              size="large"
              startIcon={<GitHubIcon />}
              href="https://github.com/DivadMG/panaderiaMaqueta1"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                backgroundColor: "#24292e",
                "&:hover": { backgroundColor: "#444d56" },
                borderRadius: 2,
                py: 1.4,
                textTransform: "none",
                fontSize: "1rem",
              }}
            >
              Ver repositorio en GitHub
            </Button>

            {/* Botón Vercel */}
            <Button
              fullWidth
              variant="contained"
              size="large"
              startIcon={<RocketLaunchIcon />}
              href="https://panaderia-maqueta1-git-main-davids-projects-9f0fa5fc.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                backgroundColor: "#000",
                "&:hover": { backgroundColor: "#333" },
                borderRadius: 2,
                py: 1.4,
                textTransform: "none",
                fontSize: "1rem",
              }}
            >
              Ver deploy en Vercel
            </Button>

            <Button
              variant="text"
              onClick={() => navigate("/")}
              sx={{ color: "#6d4c41", textTransform: "none" }}
            >
              Volver al inicio
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default LinksRepo;