import {
  Box, Container, Typography, Paper, List, ListItem,
  ListItemText, ListItemAvatar, Avatar, Divider, Button, IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { useShop } from "../../../context/ShopContext";

const MyBuys = () => {
  const navigate = useNavigate();
  const { carrito, eliminarDelCarrito } = useShop();

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#fdf6ec", py: 8 }}>
      <Container maxWidth="sm">
        <Typography variant="h4" sx={{ fontFamily: "serif", color: "#3e2723", mb: 4, textAlign: "center" }}>
          🛒 Mi Carrito
        </Typography>

        {carrito.length === 0 ? (
          <Box sx={{ textAlign: "center", mt: 8 }}>
            <ShoppingCartIcon sx={{ fontSize: 64, color: "#d7ccc8", mb: 2 }} />
            <Typography variant="h6" sx={{ color: "#6d4c41", mb: 3 }}>
              Tu carrito está vacío
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
          <Paper elevation={3} sx={{ borderRadius: 4, overflow: "hidden" }}>
            <List>
              {carrito.map((item, index) => (
                <Box key={item.id}>
                  <ListItem
                    secondaryAction={
                      <IconButton edge="end" sx={{ color: "#e53935" }} onClick={() => eliminarDelCarrito(item.id)}>
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar
                        src={item.imagen}
                        alt={item.nombre}
                        variant="rounded"
                        sx={{ width: 56, height: 56, mr: 1 }}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.nombre}
                      secondary={item.precio}
                    />
                  </ListItem>
                  {index < carrito.length - 1 && <Divider />}
                </Box>
              ))}
            </List>
            <Box sx={{ p: 3, backgroundColor: "#f5f1e8" }}>
              <Button
                fullWidth variant="contained"
                sx={{ backgroundColor: "#3e2723", "&:hover": { backgroundColor: "#6d4c41" }, mb: 1 }}
              >
                Confirmar pedido
              </Button>
              <Button fullWidth variant="text" sx={{ color: "#6d4c41" }} onClick={() => navigate("/")}>
                Seguir comprando
              </Button>
            </Box>
          </Paper>
        )}
      </Container>
    </Box>
  );
};

export default MyBuys;