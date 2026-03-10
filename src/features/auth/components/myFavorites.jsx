import {
  Box, Container, Typography, Grid, Card, CardContent,
  CardActions, Button, IconButton, CardMedia,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useNavigate } from "react-router-dom";
import { useShop } from "../../../context/ShopContext";

const MyFavorites = () => {
  const navigate = useNavigate();
  const { favoritos, eliminarDeFavoritos, carrito, toggleCarrito } = useShop();

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#fdf6ec", py: 8 }}>
      <Container>
        <Typography variant="h4" sx={{ fontFamily: "serif", color: "#3e2723", mb: 4, textAlign: "center" }}>
          ❤️ Mis Favoritos
        </Typography>

        {favoritos.length === 0 ? (
          <Box sx={{ textAlign: "center", mt: 8 }}>
            <FavoriteIcon sx={{ fontSize: 64, color: "#d7ccc8", mb: 2 }} />
            <Typography variant="h6" sx={{ color: "#6d4c41", mb: 3 }}>
              Aún no tienes favoritos
            </Typography>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#3e2723", "&:hover": { backgroundColor: "#6d4c41" } }}
              onClick={() => navigate("/")}
            >
              Ver productos
            </Button>
          </Box>
        ) : (
          <Grid container spacing={3}>
            {favoritos.map((p) => {
              const estaEnCarrito = carrito.some((c) => c.id === p.id);
              return (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={p.id}>
                  <Card sx={{
                    borderRadius: 3, boxShadow: 2, height: "100%",
                    display: "flex", flexDirection: "column",
                    "&:hover": { boxShadow: 6, transform: "translateY(-4px)", transition: "all 0.2s" },
                  }}>
                    <CardMedia
                      component="img" height="180" image={p.imagen} alt={p.nombre}
                      sx={{ objectFit: "cover" }}
                      onError={(e) => { e.target.style.display = "none"; }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" sx={{ fontFamily: "serif", color: "#3e2723" }}>
                        {p.nombre}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#6d4c41", mt: 1 }}>{p.descripcion}</Typography>
                      <Typography variant="h6" sx={{ color: "#3e2723", mt: 2, fontWeight: "bold" }}>{p.precio}</Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
                      <Button
                        variant={estaEnCarrito ? "outlined" : "contained"}
                        size="small"
                        startIcon={estaEnCarrito ? <ShoppingCartCheckoutIcon /> : <ShoppingCartIcon />}
                        onClick={() => toggleCarrito(p)}
                        sx={{
                          borderColor: "#3e2723",
                          color: estaEnCarrito ? "#3e2723" : "white",
                          backgroundColor: estaEnCarrito ? "transparent" : "#3e2723",
                          "&:hover": { backgroundColor: estaEnCarrito ? "#f5f1e8" : "#6d4c41", borderColor: "#3e2723" },
                        }}
                      >
                        {estaEnCarrito ? "Agregado ✓" : "Agregar"}
                      </Button>
                      <IconButton onClick={() => eliminarDeFavoritos(p.id)} sx={{ color: "#e53935" }}>
                        <FavoriteIcon />
                      </IconButton>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default MyFavorites;