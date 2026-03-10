import { Box, Container, Typography, Avatar, Paper, Divider, Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";

const MyAccount = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#fdf6ec", py: 8 }}>
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 3 }}>
            <Avatar sx={{ width: 80, height: 80, backgroundColor: "#3e2723", mb: 2 }}>
              <PersonIcon sx={{ fontSize: 40 }} />
            </Avatar>
            <Typography variant="h5" sx={{ fontFamily: "serif", color: "#3e2723" }}>
              Mi Cuenta
            </Typography>
          </Box>
          <Divider sx={{ mb: 3 }} />
          <Typography variant="body1" sx={{ color: "#6d4c41", mb: 1 }}>
            <strong>Nombre:</strong> Usuario
          </Typography>
          <Typography variant="body1" sx={{ color: "#6d4c41", mb: 1 }}>
            <strong>Correo:</strong> usuario@email.com
          </Typography>
          <Typography variant="body1" sx={{ color: "#6d4c41", mb: 3 }}>
            <strong>Teléfono:</strong> +57 300 000 0000
          </Typography>
          <Button
            fullWidth
            variant="outlined"
            sx={{ borderColor: "#3e2723", color: "#3e2723" }}
            onClick={() => navigate("/")}
          >
            Volver al inicio
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default MyAccount;