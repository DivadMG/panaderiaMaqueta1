// ─────────────────────────────────────────────────────────────
// MyBuys.jsx — Página del carrito de compras (ruta "/mybuys")
//
// Lee el array 'carrito' del contexto global y lo muestra.
// Si el carrito está vacío → muestra pantalla de estado vacío.
// Si tiene productos       → muestra la lista con total.
//
// 💡 Para agregar funcionalidad de cantidad (x2, x3...):
//    Agrega un campo 'cantidad' al objeto producto en ShopContext
//    y muestra un selector aquí.
//
// 💡 Para calcular el total real:
//    Necesitarías guardar el precio como número en lugar de string.
//    Ej: precio: 3500  en lugar de  precio: "$3.500"
// ─────────────────────────────────────────────────────────────

import {
  Box, Container, Typography, Paper, List, ListItem,
  ListItemText, ListItemAvatar, Avatar, Divider,
  Button, IconButton, Chip,
} from "@mui/material";
import DeleteIcon       from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowBackIcon    from "@mui/icons-material/ArrowBack";
import { useNavigate }  from "react-router-dom";
import { useShop }      from "../../../context/ShopContext";

// ─────────────────────────────────────────────────────────────
const MyBuys = () => {
  const navigate = useNavigate();
  const { carrito, eliminarDelCarrito } = useShop();
  // carrito:            array de productos agregados
  // eliminarDelCarrito: función que recibe un id y lo quita del array

  // ── VISTA: Carrito vacío ───────────────────────────────────
  if (carrito.length === 0) {
    return (
      <Box sx={{ minHeight: "100vh", backgroundColor: "#fdf6ec", display: "flex", alignItems: "center" }}>
        <Container maxWidth="sm" sx={{ textAlign: "center" }}>
          <ShoppingCartIcon sx={{ fontSize: 80, color: "#d7ccc8", mb: 2 }} />
          <Typography variant="h5" sx={{ fontFamily: "serif", color: "#3e2723", mb: 1 }}>
            Tu carrito está vacío
          </Typography>
          <Typography variant="body1" sx={{ color: "#6d4c41", mb: 4 }}>
            Agrega productos desde la sección de productos.
          </Typography>
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate("/productos")}
            sx={{ backgroundColor: "#3e2723", "&:hover": { backgroundColor: "#6d4c41" } }}
          >
            Ver productos
          </Button>
        </Container>
      </Box>
    );
  }

  // ── VISTA: Carrito con productos ───────────────────────────
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#fdf6ec", py: 8 }}>
      <Container maxWidth="md">

        {/* Encabezado con cantidad */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
          <Typography variant="h4" sx={{ fontFamily: "serif", color: "#3e2723" }}>
            Mi Carrito
          </Typography>
          {/* Badge con la cantidad total de productos */}
          <Chip
            label={`${carrito.length} producto${carrito.length !== 1 ? "s" : ""}`}
            sx={{ backgroundColor: "#3e2723", color: "#fff" }}
          />
        </Box>

        <Box sx={{ display: "flex", gap: 3, flexDirection: { xs: "column", md: "row" } }}>

          {/* ── Lista de productos (columna izquierda) ──────── */}
          <Paper elevation={2} sx={{ borderRadius: 3, overflow: "hidden", flex: 1 }}>
            <List disablePadding>
              {carrito.map((item, index) => (
                <Box key={item.id}>
                  <ListItem
                    sx={{ py: 2, px: 2.5 }}
                    secondaryAction={
                      // Botón eliminar — al hacer click llama a eliminarDelCarrito con el id
                      <IconButton
                        edge="end"
                        onClick={() => eliminarDelCarrito(item.id)}
                        aria-label="eliminar producto"
                        sx={{ color: "#e53935", "&:hover": { backgroundColor: "#fdecea" } }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    {/* Imagen del producto */}
                    <ListItemAvatar>
                      <Avatar
                        src={item.imagen}
                        alt={item.nombre}
                        variant="rounded"
                        sx={{ width: 60, height: 60, mr: 1.5 }}
                      />
                    </ListItemAvatar>

                    {/* Nombre y precio */}
                    <ListItemText
                      primary={
                        <Typography sx={{ fontFamily: "serif", color: "#3e2723", fontWeight: "bold" }}>
                          {item.nombre}
                        </Typography>
                      }
                      secondary={
                        <Typography variant="body2" sx={{ color: "#6d4c41", mt: 0.3 }}>
                          {item.precio}
                        </Typography>
                      }
                    />
                  </ListItem>

                  {/* Separador — no aparece después del último item */}
                  {index < carrito.length - 1 && <Divider />}
                </Box>
              ))}
            </List>
          </Paper>

          {/* ── Panel de resumen (columna derecha) ──────────── */}
          <Box sx={{ width: { xs: "100%", md: 260 }, flexShrink: 0 }}>
            <Paper elevation={2} sx={{ borderRadius: 3, p: 3 }}>
              <Typography variant="h6" sx={{ fontFamily: "serif", color: "#3e2723", mb: 2 }}>
                Resumen
              </Typography>
              <Divider sx={{ mb: 2 }} />

              {/* Cantidad de productos */}
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                <Typography variant="body2" sx={{ color: "#6d4c41" }}>Productos</Typography>
                <Typography variant="body2" sx={{ color: "#3e2723", fontWeight: "bold" }}>
                  {carrito.length}
                </Typography>
              </Box>

              {/* 💡 Aquí puedes agregar el total cuando tengas precios numéricos */}
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
                <Typography variant="body2" sx={{ color: "#6d4c41" }}>Total</Typography>
                <Typography variant="body2" sx={{ color: "#8d6e63", fontStyle: "italic" }}>
                  — por calcular —
                </Typography>
              </Box>

              {/* Botón confirmar pedido */}
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#3e2723",
                  "&:hover": { backgroundColor: "#6d4c41" },
                  mb: 1.5,
                  py: 1.2,
                }}
              >
                Confirmar pedido
              </Button>

              {/* Botón seguir comprando */}
              <Button
                fullWidth
                variant="text"
                startIcon={<ArrowBackIcon />}
                sx={{ color: "#6d4c41" }}
                onClick={() => navigate("/productos")}
              >
                Seguir comprando
              </Button>
            </Paper>
          </Box>

        </Box>
      </Container>
    </Box>
  );
};

export default MyBuys;