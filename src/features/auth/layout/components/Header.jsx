import {
  Box, AppBar, Toolbar, Typography, Button,
  ButtonGroup, InputBase,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

// Íconos
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import DiscountIcon from "@mui/icons-material/Discount";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import InventoryIcon from "@mui/icons-material/Inventory";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import SearchIcon from "@mui/icons-material/Search";

// Barra de búsqueda estilizada (igual que el profesor)
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.25) },
  marginLeft: theme.spacing(1),
  width: "auto",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "12ch",
  },
}));

const navLinkStyle = {
  color: "inherit",
  textDecoration: "none",
};

const navLinkActiveStyle = {
  color: "#ffcc80",
  textDecoration: "none",
  fontWeight: "bold",
};

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#3e2723" }}>
        <Toolbar sx={{ justifyContent: "space-around" }}>
          <Box>
            <Typography variant="h6" sx={{ fontFamily: "serif" }}>
              🥐 La Panadería
            </Typography>
          </Box>

          <ButtonGroup>
            <Button variant="text" color="inherit" startIcon={<HomeIcon />}>
              <NavLink to="/" style={({ isActive }) => isActive ? navLinkActiveStyle : navLinkStyle}>
                Inicio
              </NavLink>
            </Button>
            <Button variant="text" color="inherit" startIcon={<StoreIcon />}>
              <NavLink to="/article" style={({ isActive }) => isActive ? navLinkActiveStyle : navLinkStyle}>
                Artículos
              </NavLink>
            </Button>
            <Button variant="text" color="inherit" startIcon={<DiscountIcon />}>
              <NavLink to="/offers" style={({ isActive }) => isActive ? navLinkActiveStyle : navLinkStyle}>
                Ofertas
              </NavLink>
            </Button>
            <Button variant="text" color="inherit" startIcon={<AccountBoxIcon />}>
              <NavLink to="/myaccount" style={({ isActive }) => isActive ? navLinkActiveStyle : navLinkStyle}>
                Mi cuenta
              </NavLink>
            </Button>
            <Button variant="text" color="inherit" startIcon={<InventoryIcon />}>
              <NavLink to="/mybuys" style={({ isActive }) => isActive ? navLinkActiveStyle : navLinkStyle}>
                Mis compras
              </NavLink>
            </Button>
            <Button variant="text" color="inherit" startIcon={<BookmarkIcon />}>
              <NavLink to="/myfavorites" style={({ isActive }) => isActive ? navLinkActiveStyle : navLinkStyle}>
                Mis favoritos
              </NavLink>
            </Button>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Buscar…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;