import {
  Box, Container, Typography, Grid, Card, CardContent,
  CardActions, Button, IconButton, CardMedia, Chip,
} from "@mui/material";
import FavoriteIcon             from "@mui/icons-material/Favorite";
import ShoppingCartIcon         from "@mui/icons-material/ShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ArrowBackIcon            from "@mui/icons-material/ArrowBack";
import { useNavigate }          from "react-router-dom";
import { useShop }              from "../../../context/ShopContext";

// ─────────────────────────────────────────────────────────────
const MyFavorites = () => {
  const navigate = useNavigate();
  const { favoritos, eliminarDeFavoritos, carrito, toggleCarrito } = useShop();
  // favoritos:           array de productos favoritos
  // eliminarDeFavoritos: función para quitar un favorito por id
  // carrito:             para saber si un favorito ya está en el carrito
  // toggleCarrito:       para agregar/quitar del carrito desde esta página

  // ── VISTA: Sin favoritos ───────────────────────────────────
  if (favoritos.length === 0) {
    return (
      <Box sx={{ minHeight: "100vh", backgroundColor: "#fdf6ec", display: "flex", alignItems: "center" }}>
        <Container maxWidth="sm" sx={{ textAlign: "center" }}>
          <FavoriteIcon sx={{ fontSize: 80, color: "#d7ccc8", mb: 2 }} />
          <Typography variant="h5" sx={{ fontFamily: "serif", color: "#3e2723", mb: 1 }}>
            Aún no tienes favoritos
          </Typography>
          <Typography variant="body1" sx={{ color: "#6d4c41", mb: 4 }}>
            Presiona el corazón ❤️ en cualquier producto para guardarlo aquí.
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

  // ── VISTA: Con favoritos ───────────────────────────────────
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#fdf6ec", py: 8 }}>
      <Container>

        {/* Encabezado */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
          <Typography variant="h4" sx={{ fontFamily: "serif", color: "#3e2723" }}>
            Mis Favoritos
          </Typography>
          <Chip
            label={`${favoritos.length} guardado${favoritos.length !== 1 ? "s" : ""}`}
            sx={{ backgroundColor: "#e53935", color: "#fff" }}
          />
        </Box>

        {/* Grid de tarjetas */}
        <Grid container spacing={3}>
          {favoritos.map((p) => {
            // Verifica si este favorito ya está en el carrito
            const estaEnCarrito = carrito.some((c) => c.id === p.id);

            return (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={p.id}>
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: 2,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    "&:hover": { boxShadow: 6, transform: "translateY(-4px)" },
                  }}
                >
                  {/* Imagen */}
                  <CardMedia
                    component="img"
                    height="150"
                    image={p.imagen}
                    alt={p.nombre}
                    sx={{ objectFit: "cover" }}
                    onError={(e) => { e.target.style.display = "none"; }}
                  />

                  <CardContent sx={{ flexGrow: 1, py: 1.5 }}>
                    <Typography variant="h6" sx={{ fontFamily: "serif", color: "#3e2723", fontSize: "1rem" }}>
                      {p.nombre}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#6d4c41", mt: 0.5, fontSize: "0.8rem" }}>
                      {p.descripcion}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#3e2723", mt: 1, fontWeight: "bold" }}>
                      {p.precio}
                    </Typography>
                  </CardContent>

                  {/* Botones */}
                  <CardActions sx={{ px: 1.5, pb: 1.5, gap: 0.5 }}>
                    {/* Botón agregar/quitar carrito */}
                    <Button
                      variant={estaEnCarrito ? "outlined" : "contained"}
                      size="small"
                      fullWidth
                      startIcon={estaEnCarrito ? <ShoppingCartCheckoutIcon /> : <ShoppingCartIcon />}
                      onClick={() => toggleCarrito(p)}
                      sx={{
                        borderColor:     "#3e2723",
                        color:           estaEnCarrito ? "#3e2723" : "white",
                        backgroundColor: estaEnCarrito ? "transparent" : "#3e2723",
                        fontSize:        "0.75rem",
                        "&:hover": {
                          backgroundColor: estaEnCarrito ? "#f5f1e8" : "#6d4c41",
                          borderColor:     "#3e2723",
                        },
                      }}
                    >
                      {estaEnCarrito ? "Agregado ✓" : "Agregar"}
                    </Button>

                    {/* Botón quitar de favoritos */}
                    {/* 💡 Aquí el corazón SIEMPRE elimina, porque ya estamos en favoritos */}
                    <IconButton
                      onClick={() => eliminarDeFavoritos(p.id)}
                      aria-label="quitar de favoritos"
                      sx={{
                        color: "#e53935",
                        flexShrink: 0,
                        "&:hover": { backgroundColor: "#fdecea" },
                      }}
                    >
                      <FavoriteIcon fontSize="small" />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>

      </Container>
    </Box>
  );
};

export default MyFavorites;