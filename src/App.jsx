import { Routes, Route } from "react-router-dom";
import { Box }           from "@mui/material";
import { Header }        from "./features/auth/layout/components/Header";
import LandingPage       from "./features/auth/layout/components/LandingPage";
import MyAccount from './features/auth/components/myAccount'
import MyBuys            from "./features/auth/components/myBuys";
import MyFavorites       from "./features/auth/components/myFavorites";
import Offers            from "./features/auth/view/components/Offers";
import Article  from "./features/auth/view/components/Article";
import LinksRepo from "./features/auth/components/LinksRepo";
import Hooks from "./features/auth/hooks/Hooks";


function App() {
  return (
    <>
      {/* Header fuera de Routes: visible en TODAS las páginas */}
      <Header />

      <Box sx={{ mt: "64px" }}>
        <Routes>

          {/* Página principal */}
          <Route path="/"           element={<LandingPage />} />

          {/* Páginas existentes */}
          <Route path="/article"    element={<Article />} />
          <Route path="/offers"     element={<Offers />} />

          {/* Páginas de usuario */}
          <Route path="/hooks"      element={<Hooks />} />
          <Route path="/myaccount"   element={<MyAccount />} />
          <Route path="/mybuys"      element={<MyBuys />} />
          <Route path="/myfavorites" element={<MyFavorites />} />
          <Route path="/linksrepo" element={<LinksRepo />} />

        </Routes>
      </Box>
    </>
  );
}

export default App;