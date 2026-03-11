import { useState } from "react";
import {
  AppBar, Toolbar, Box, Typography, Button,
  IconButton, Badge, Drawer, List, ListItem,
  ListItemText, Divider, useMediaQuery, useTheme,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

// Íconos de navegación central
import HomeIcon        from "@mui/icons-material/Home";
import CategoryIcon    from "@mui/icons-material/Category";
import LocalOfferIcon  from "@mui/icons-material/LocalOffer";
import InfoIcon        from "@mui/icons-material/Info";
import CodeIcon        from "@mui/icons-material/Code";

// Íconos de la derecha
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon     from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon          from "@mui/icons-material/Menu";

import { useShop } from "../../../../context/ShopContext";

const navLinks = [
  { path: "/",          label: "Inicio",    icon: <HomeIcon fontSize="small" /> },
  { path: "/offers",    label: "Productos",   icon: <LocalOfferIcon fontSize="small" /> },
  { path: "/article",   label: "Nosotros",  icon: <InfoIcon fontSize="small" /> },
  { path: "/hooks",     label: "Hooks",     icon: <CodeIcon fontSize="small" /> },
];

// ── Estilos de NavLink activo / inactivo ─────────────────────
// 💡 Para cambiar el color del link activo: edita color: "#ffcc80"
const linkStyle       = { color: "inherit", textDecoration: "none" };
const linkActiveStyle = { color: "#ffcc80", textDecoration: "none", fontWeight: "bold" };

// ─────────────────────────────────────────────────────────────
export const Header = () => {
  const navigate  = useNavigate();
  const theme     = useTheme();

  // isMobile: true cuando el ancho de pantalla es menor a "md" (900px)
  const isMobile  = useMediaQuery(theme.breakpoints.down("md"));

  // drawerOpen: controla si el menú lateral móvil está abierto o cerrado
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Accede a carrito y favoritos del contexto global
  const { carrito, favoritos } = useShop();

  // ── Render ────────────────────────────────────────────────
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          // 💡 Cambia este color para cambiar el fondo del navbar
          backgroundColor: "#1a0f0a",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Toolbar sx={{ px: { xs: 2, md: 4 }, minHeight: 64 }}>

          {/* ── IZQUIERDA: Logo ─────────────────────────────── */}
          <Box
            onClick={() => navigate("/")}
            sx={{ display: "flex", alignItems: "center", gap: 1, cursor: "pointer", flexShrink: 0 }}
          >
            {/* 💡 Cambia el emoji "🥐" por una <img> si tienes un logo real */}
            <Typography sx={{ fontSize: "1.6rem", lineHeight: 1 }}>🥐</Typography>
            <Typography
              variant="h6"
              sx={{ fontFamily: "serif", color: "#fff", fontSize: "1.1rem", letterSpacing: 0.5 }}
            >
              La Panadería
            </Typography>
          </Box>

          {/* ── CENTRO: Links (solo en desktop) ─────────────── */}
          {!isMobile && (
            <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", gap: 0.5 }}>
              {navLinks.map(({ path, label, icon }) => (
                <Button
                  key={path}
                  component={NavLink}
                  to={path}
                  // NavLink pasa isActive automáticamente a style
                  style={({ isActive }) => isActive ? linkActiveStyle : linkStyle}
                  startIcon={icon}
                  sx={{
                    textTransform: "none",
                    fontSize: "0.88rem",
                    px: 1.5,
                    py: 0.8,
                    borderRadius: 2,
                    // Fondo sutil al hacer hover
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.08)" },
                  }}
                >
                  {label}
                </Button>
              ))}
            </Box>
          )}

          {/* Espaciador flexible para empujar íconos a la derecha en mobile */}
          {isMobile && <Box sx={{ flexGrow: 1 }} />}

          {/* ── DERECHA: Íconos de acción ────────────────────── */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>

            {/* Ícono Carrito — badge muestra cantidad de productos */}
            <IconButton
              color="inherit"
              onClick={() => navigate("/mybuys")}
              aria-label="carrito de compras"
              sx={{ "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" } }}
            >
              <Badge
                badgeContent={carrito.length}
                // 💡 Cambia color del badge: "error" = rojo, "warning" = naranja
                color="error"
                // invisible: oculta el badge si el carrito está vacío
                invisible={carrito.length === 0}
              >
                <ShoppingCartIcon fontSize="small" />
              </Badge>
            </IconButton>

            {/* Ícono Favoritos — badge muestra cantidad */}
            <IconButton
              color="inherit"
              onClick={() => navigate("/myfavorites")}
              aria-label="mis favoritos"
              sx={{ "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" } }}
            >
              <Badge
                badgeContent={favoritos.length}
                color="error"
                invisible={favoritos.length === 0}
              >
                <FavoriteIcon fontSize="small" />
              </Badge>
            </IconButton>

            {/* Ícono Usuario — navega a Mi Cuenta */}
            <IconButton
              color="inherit"
              onClick={() => navigate("/myaccount")}
              aria-label="mi cuenta"
              sx={{ "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" } }}
            >
              <AccountCircleIcon fontSize="small" />
            </IconButton>

            {/* Menú hamburguesa — solo visible en móvil */}
            {isMobile && (
              <IconButton
                color="inherit"
                onClick={() => setDrawerOpen(true)}
                aria-label="abrir menú"
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 240, pt: 2 }}>
          <Typography sx={{ px: 2, pb: 1, fontFamily: "serif", color: "#3e2723", fontWeight: "bold" }}>
            🥐 La Panadería
          </Typography>
          <Divider />
          <List>
            {navLinks.map(({ path, label, icon }) => (
              <ListItem
                key={path}
                component={NavLink}
                to={path}
                onClick={() => setDrawerOpen(false)}
                sx={{ color: "#3e2723", "&:hover": { backgroundColor: "#fdf6ec" } }}
              >
                <Box sx={{ mr: 1.5, display: "flex" }}>{icon}</Box>
                <ListItemText primary={label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;