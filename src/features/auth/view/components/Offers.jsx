import {
  Box, Container, Typography, Grid, Card, CardContent,
  CardActions, Button, IconButton, Snackbar, Alert, Chip, CardMedia,
} from "@mui/material";
import FavoriteIcon             from "@mui/icons-material/Favorite";
import FavoriteBorderIcon       from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon         from "@mui/icons-material/ShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useShop }              from "../../../../context/ShopContext";
import { useState }             from "react";

// ── Lista de productos ────────────────────────────────────────
// 💡 EDITA AQUÍ para agregar, quitar o modificar productos
const productos = [
  { id: 1, nombre: "Pan Artesanal",  descripcion: "Horneado cada mañana con masa madre.",          precio: "$3.500", tag: "Popular",  imagen: "/RecursosVisuales/croassaintGurmet.jpg" },
  { id: 2, nombre: "Croissant",      descripcion: "Hojaldrado y dorado, relleno de mantequilla.",  precio: "$4.200", tag: "Nuevo",    imagen: "/RecursosVisuales/Croassaint.jpg" },
  { id: 3, nombre: "Bizcocho",       descripcion: "Suave y esponjoso, perfecto con café.",         precio: "$2.800", tag: "",         imagen: "/RecursosVisuales/PanGurmet.jpg" },
  { id: 4, nombre: "Baguette",       descripcion: "Crujiente por fuera, suave por dentro.",        precio: "$5.000", tag: "",         imagen: "/RecursosVisuales/bagget.jpg" },
  { id: 5, nombre: "Pan de Queso",   descripcion: "Con queso fundido en cada bocado.",             precio: "$3.800", tag: "Popular",  imagen: "/RecursosVisuales/pandequeso.jpg" },
  { id: 6, nombre: "Waffles",        descripcion: "Perfectos para el desayuno.",                   precio: "$2.200", tag: "",         imagen: "/RecursosVisuales/waffles.jpg" },
];

// ─────────────────────────────────────────────────────────────
const Offers = () => {
  // Accede al carrito y favoritos del contexto global
  const { carrito, toggleCarrito, favoritos, toggleFavorito } = useShop();

  // snackbar: estado LOCAL para las notificaciones
  // Solo le importa a este componente, por eso no va en ShopContext
  const [snackbar, setSnackbar] = useState({ open: false, msg: "", severity: "success" });

  // ── Manejador carrito ──────────────────────────────────────
  // Se verifica el estado ANTES del toggle para saber qué mensaje mostrar
  const handleCarrito = (producto) => {
    const estaEnCarrito = carrito.some((p) => p.id === producto.id);
    toggleCarrito(producto);
    setSnackbar({
      open: true,
      msg: estaEnCarrito
        ? `"${producto.nombre}" quitado del carrito`
        : `"${producto.nombre}" agregado al carrito`,
      severity: estaEnCarrito ? "warning" : "success",
    });
  };

  // ── Manejador favoritos ────────────────────────────────────
  const handleFavorito = (producto) => {
    const esFavorito = favoritos.some((p) => p.id === producto.id);
    toggleFavorito(producto);
    setSnackbar({
      open: true,
      msg: esFavorito
        ? `"${producto.nombre}" quitado de favoritos`
        : `"${producto.nombre}" añadido a favoritos`,
      severity: esFavorito ? "warning" : "success",
    });
  };

  return (
    <Box sx={{ py: 8, backgroundColor: "#fff8f0" }}>
      <Container>

        {/* Encabezado */}
        <Typography variant="h4" sx={{ fontFamily: "serif", textAlign: "center", mb: 1, color: "#3e2723" }}>
          Nuestros Productos
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "center", color: "#6d4c41", mb: 6 }}>
          Selecciona tus favoritos y arma tu pedido
        </Typography>

        {/* Grid de tarjetas */}
        <Grid container spacing={3}>
          {productos.map((p) => {
            // Se calculan por cada producto para que cada tarjeta
            // sepa su propio estado de carrito y favorito
            const estaEnCarrito = carrito.some((c) => c.id === p.id);
            const esFavorito    = favoritos.some((f) => f.id === p.id);

            return (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={p.id}>
                <Card sx={{
                  borderRadius: 3, boxShadow: 2, height: "100%",
                  display: "flex", flexDirection: "column",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  "&:hover": { boxShadow: 6, transform: "translateY(-4px)" },
                }}>

                  {/* Imagen — onError la oculta si no carga */}
                  <CardMedia
                    component="img" height="180" image={p.imagen} alt={p.nombre}
                    sx={{ objectFit: "cover" }}
                    onError={(e) => { e.target.style.display = "none"; }}
                  />

                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <Typography variant="h6" sx={{ fontFamily: "serif", color: "#3e2723" }}>
                        {p.nombre}
                      </Typography>
                      {/* Tag solo se muestra si el campo no está vacío */}
                      {p.tag && (
                        <Chip label={p.tag} size="small" sx={{ backgroundColor: "#f5f1e8", color: "#3e2723" }} />
                      )}
                    </Box>
                    <Typography variant="body2" sx={{ color: "#6d4c41", mt: 1 }}>{p.descripcion}</Typography>
                    <Typography variant="h6" sx={{ color: "#3e2723", mt: 2, fontWeight: "bold" }}>{p.precio}</Typography>
                  </CardContent>

                  {/* Botones de acción */}
                  <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
                    <Button
                      variant={estaEnCarrito ? "outlined" : "contained"}
                      size="small"
                      startIcon={estaEnCarrito ? <ShoppingCartCheckoutIcon /> : <ShoppingCartIcon />}
                      onClick={() => handleCarrito(p)}
                      sx={{
                        borderColor:     "#3e2723",
                        color:           estaEnCarrito ? "#3e2723" : "white",
                        backgroundColor: estaEnCarrito ? "transparent" : "#3e2723",
                        "&:hover": {
                          backgroundColor: estaEnCarrito ? "#f5f1e8" : "#6d4c41",
                          borderColor: "#3e2723",
                        },
                      }}
                    >
                      {estaEnCarrito ? "Agregado ✓" : "Agregar"}
                    </Button>

                    <IconButton onClick={() => handleFavorito(p)} sx={{ color: "#e53935" }}>
                      {esFavorito ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      {/* Notificación — aparece abajo al centro por 2 segundos */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={2000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity={snackbar.severity} variant="filled">{snackbar.msg}</Alert>
      </Snackbar>
    </Box>
  );
};

export default Offers;