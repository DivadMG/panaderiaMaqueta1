import { createContext, useContext, useState } from "react"; 

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  // Carrito
  const toggleCarrito = (producto) => {
    const estaEnCarrito = carrito.some((p) => p.id === producto.id);
    if (estaEnCarrito) {
      setCarrito((prev) => prev.filter((p) => p.id !== producto.id));
    } else {
      setCarrito((prev) => [...prev, producto]);
    }
  };

  const eliminarDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((p) => p.id !== id));
  };

  // Favoritos (Revisar con Andres)
  const toggleFavorito = (producto) => {
    const esFavorito = favoritos.some((p) => p.id === producto.id);
    if (esFavorito) {
      setFavoritos((prev) => prev.filter((p) => p.id !== producto.id));
    } else {
      setFavoritos((prev) => [...prev, producto]);
    }
  };

  const eliminarDeFavoritos = (id) => {
    setFavoritos((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <ShopContext.Provider value={{
      carrito, toggleCarrito, eliminarDelCarrito,
      favoritos, toggleFavorito, eliminarDeFavoritos,
    }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);