import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Header } from "./features/auth/layout/components/Header";
import LandingPage from "./features/auth/layout/components/LandingPage";
import MyAccount from "./features/auth/components/MyAccount";
import MyBuys from "./features/auth/components/MyBuys";
import MyFavorites from "./features/auth/components/MyFavorites";
import Offers from "./features/auth/view/components/Offers";
import Article from "./features/auth/view/components/Article";

function App() {
  return (
    <>
      <Header />
      <Box sx={{ mt: "64px" }}>  {/* ← empuja el contenido debajo del AppBar */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/article" element={<Article />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/mybuys" element={<MyBuys />} />
          <Route path="/myfavorites" element={<MyFavorites />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;