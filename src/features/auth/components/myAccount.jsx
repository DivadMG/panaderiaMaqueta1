import { useState } from "react";
import {
  Box, Container, Typography, Paper, TextField,
  Button, Divider, Alert, InputAdornment, IconButton,
} from "@mui/material";
import VisibilityIcon    from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LogoutIcon        from "@mui/icons-material/Logout";
import { useNavigate }   from "react-router-dom";

// ── Credenciales del login simulado ──────
const USUARIO_VALIDO  = "admin";
const PASSWORD_VALIDO = "1234";

// 
const MyAccount = () => {
  const navigate = useNavigate();

  // ── Estado del formulario ─────
  const [usuario,     setUsuario]     = useState("");      // valor del campo usuario
  const [password,    setPassword]    = useState("");      // valor del campo contraseña
  const [verPassword, setVerPassword] = useState(false);  // true = contraseña visible
  const [error,       setError]       = useState("");      // mensaje de error
  const [logueado,    setLogueado]    = useState(false);   // true = mostrar perfil

  // ── Login: verifica credenciales ──────
  const handleLogin = () => {
    if (usuario === USUARIO_VALIDO && password === PASSWORD_VALIDO) {
      setLogueado(true);  
      setError("");
    } else {
      setError("Usuario o contraseña incorrectos.");  
    }
  };

  // Permite enviar el formulario presionando Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleLogin();
  };

  // ── Logout 
  const handleLogout = () => {
    setLogueado(false);
    setUsuario("");
    setPassword("");
    setError("");
  };


  // VISTA 1: Formulario de login

  if (!logueado) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "#fdf6ec",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/RecursosVisuales/portadaLogin2.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: 4,
        }}
      >
        <Container maxWidth="xs">
          <Paper
            elevation={3}
            sx={{ borderRadius: 4, overflow: "hidden" }}
          >

            <Box
              sx={{
                backgroundColor: "#3e2723",
                py: 5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
              }}
            >
              
              <Typography sx={{ fontSize: "3.5rem", lineHeight: 1 }}>
                🧑‍🍳
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#fff", fontFamily: "serif", mt: 1 }}
              >
                Mi Cuenta
              </Typography>
              <Typography variant="body2" sx={{ color: "#d7ccc8" }}>
                Inicia sesión para continuar
              </Typography>
            </Box>

            {/* ── Formulario  */}
            <Box sx={{ px: 4, py: 4, display: "flex", flexDirection: "column", gap: 2.5 }}>

              {/* Alerta de error — solo aparece si hay error */}
              {error && (
                <Alert severity="error" sx={{ borderRadius: 2 }}>
                  {error}
                </Alert>
              )}

              {/* Campo Usuario */}
              <Box>
                <Typography
                  variant="body2"
                  sx={{ color: "#5d4037", fontWeight: "bold", mb: 0.8 }}
                >
                  Usuario
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Escribe tu usuario"
                  variant="outlined"
                  size="small"
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                  onKeyDown={handleKeyDown}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      // Color del borde al enfocar el campo
                      "&.Mui-focused fieldset": { borderColor: "#3e2723" },
                    },
                  }}
                />
              </Box>

              {/* Campo Contraseña */}
              <Box>
                <Typography
                  variant="body2"
                  sx={{ color: "#5d4037", fontWeight: "bold", mb: 0.8 }}
                >
                  Contraseña
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Escribe tu contraseña"
                  // type alterna entre "password" (oculto) y "text" (visible)
                  type={verPassword ? "text" : "password"}
                  variant="outlined"
                  size="small"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={handleKeyDown}
                  InputProps={{
                    endAdornment: (
                      // Botón 👁 para revelar/ocultar la contraseña
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setVerPassword(!verPassword)}
                          edge="end"
                          size="small"
                          aria-label={verPassword ? "ocultar contraseña" : "mostrar contraseña"}
                        >
                          {/* Cambia el ícono según si está visible o no */}
                          {verPassword
                            ? <VisibilityOffIcon fontSize="small" sx={{ color: "#8d6e63" }} />
                            : <VisibilityIcon   fontSize="small" sx={{ color: "#8d6e63" }} />
                          }
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      "&.Mui-focused fieldset": { borderColor: "#3e2723" },
                    },
                  }}
                />
              </Box>

              {/* Botón ingresar */}
              <Button
                fullWidth
                variant="contained"
                size="large"
                onClick={handleLogin}
                sx={{
                  backgroundColor: "#3e2723",
                  "&:hover": { backgroundColor: "#6d4c41" },
                  borderRadius: 2,
                  py: 1.3,
                  mt: 0.5,
                  textTransform: "none",
                  fontSize: "1rem",
                }}
              >
                Ingresar
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
    );
  }


  // VISTA 2: Perfil (después del login exitoso)

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#fdf6ec", py: 8 }}>
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ borderRadius: 4, overflow: "hidden" }}>

          {/* Cabecera del perfil */}
          <Box
            sx={{
              backgroundColor: "#3e2723",
              py: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography sx={{ fontSize: "3.5rem", lineHeight: 1 }}>🧑‍🍳</Typography>
            <Typography variant="h6" sx={{ color: "#fff", fontFamily: "serif", mt: 1 }}>
              {USUARIO_VALIDO}
            </Typography>
            <Typography variant="body2" sx={{ color: "#d7ccc8" }}>
              Sesión activa
            </Typography>
          </Box>

          {/* Datos del perfil */}
          <Box sx={{ px: 4, py: 4 }}>
            {/* 💡 Reemplaza estos datos cuando tengas usuarios reales */}
            <Typography variant="body1" sx={{ color: "#6d4c41", mb: 1.5 }}>
              <strong>Nombre:</strong> Usuario Demo
            </Typography>
            <Typography variant="body1" sx={{ color: "#6d4c41", mb: 1.5 }}>
              <strong>Correo:</strong> demo@lapanaderia.com
            </Typography>
            <Typography variant="body1" sx={{ color: "#6d4c41", mb: 3 }}>
              <strong>Teléfono:</strong> +57 300 000 0000
            </Typography>

            <Divider sx={{ mb: 3 }} />

            {/* Botones */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Button
                variant="outlined"
                startIcon={<LogoutIcon />}
                onClick={handleLogout}
                sx={{
                  borderColor: "#e53935", color: "#e53935",
                  borderRadius: 2, textTransform: "none",
                  "&:hover": { backgroundColor: "#fdecea" },
                }}
              >
                Cerrar sesión
              </Button>
              <Button
                variant="text"
                onClick={() => navigate("/")}
                sx={{ color: "#6d4c41", textTransform: "none" }}
              >
                Volver al inicio
              </Button>
            </Box>
          </Box>

        </Paper>
      </Container>
    </Box>
  );
};

export default MyAccount;