import { useState, useEffect, useContext, useRef, useReducer, useCallback, useMemo, createContext } from "react";
import { Box, Container, Typography, Button, TextField, Paper, Chip, Grid } from "@mui/material";

const TemaContext = createContext();

const contadorReducer = (state, action) => {
  switch (action.type) {
    case "incrementar": return { count: state.count + 1 };
    case "decrementar": return { count: state.count - 1 };
    case "reset":       return { count: 0 };
    default:            return state;
  }
};

const BotonTema = () => {
  const { tema, setTema } = useContext(TemaContext);
  return (
    <Button variant="contained" onClick={() => setTema(tema === "claro" ? "oscuro" : "claro")}
      sx={{ backgroundColor: tema === "oscuro" ? "#3e2723" : "#ffcc80", color: tema === "oscuro" ? "#fff" : "#3e2723" }}>
      Tema actual: {tema}
    </Button>
  );
};

const HookCard = ({ titulo, children }) => (
  <Paper elevation={2} sx={{ borderRadius: 3, overflow: "hidden", height: "100%" }}>
    <Box sx={{ backgroundColor: "#3e2723", px: 2.5, py: 1.5 }}>
      <Chip label={titulo} size="small" sx={{ backgroundColor: "#ffcc80", color: "#3e2723", fontWeight: "bold", fontFamily: "monospace" }} />
    </Box>
    <Box sx={{ p: 3 }}>{children}</Box>
  </Paper>
);

// ── useContador (Custom Hook) ─────────────────────────────────
const useContador = (inicial = 0) => {
  const [valor, setValor] = useState(inicial);
  const incrementar = () => setValor((v) => v + 1);
  const decrementar = () => setValor((v) => v - 1);
  const reset       = () => setValor(inicial);
  return { valor, incrementar, decrementar, reset };
};

// ── useOnline (Custom Hook) ───────────────────────────────────
const useOnline = () => {
  const [online, setOnline] = useState(false);
  useEffect(() => {
    const activar    = () => setOnline(true);
    const desactivar = () => setOnline(false);
    window.addEventListener("online",  activar);
    window.addEventListener("offline", desactivar);
    return () => {
      window.removeEventListener("online",  activar);
      window.removeEventListener("offline", desactivar);
    };
  }, []);
  return online;
};

// ── Componentes de demo ───────────────────────────────────────
const CustomHookDemo = () => {
  const { valor, incrementar, decrementar, reset } = useContador(10);
  return (
    <>
      <Typography variant="body2" sx={{ color: "#6d4c41", mb: 2 }}>Valor: <strong>{valor}</strong></Typography>
      <Box sx={{ display: "flex", gap: 1 }}>
        <Button size="small" variant="outlined" onClick={decrementar} sx={{ borderColor: "#3e2723", color: "#3e2723" }}>−</Button>
        <Button size="small" variant="contained" onClick={incrementar} sx={{ backgroundColor: "#3e2723" }}>+</Button>
        <Button size="small" variant="text" onClick={reset} sx={{ color: "#6d4c41" }}>Reset</Button>
      </Box>
    </>
  );
};

const OnlineDemo = () => {
  const online = useOnline();
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
      <Box sx={{ width: 14, height: 14, borderRadius: "50%", backgroundColor: online ? "#4caf50" : "#e53935" }} />
      <Typography variant="body1" sx={{ color: "#3e2723", fontWeight: "bold" }}>
        {online ? "Conectado a internet" : "Sin conexión"}
      </Typography>
    </Box>
  );
};

// ─────────────────────────────────────────────────────────────
const Hooks = () => {
  const [contador,       setContador]       = useState(0);
  const [segundos,       setSegundos]       = useState(0);
  const [tema,           setTema]           = useState("claro");
  const [state,          dispatch]          = useReducer(contadorReducer, { count: 0 });
  const [clicksCallback, setClicksCallback] = useState(0);
  const [numero,         setNumero]         = useState(1);
  const inputRef  = useRef(null);
  const cuadrado  = useMemo(() => numero * numero, [numero]);
  const handleCallback = useCallback(() => setClicksCallback((c) => c + 1), []);

  useEffect(() => {
    const intervalo = setInterval(() => setSegundos((s) => s + 1), 1000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#fdf6ec", py: 8 }}>
      <Container>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h4" sx={{ fontFamily: "serif", color: "#3e2723" }}>React Hooks</Typography>
          <Typography variant="body1" sx={{ color: "#6d4c41", mt: 1 }}>Ejemplos interactivos de cada hook</Typography>
        </Box>

        <Grid container spacing={3}>

          {/* useState */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <HookCard titulo="useState">
              <Typography variant="body2" sx={{ color: "#6d4c41", mb: 2 }}>Contador: <strong>{contador}</strong></Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Button size="small" variant="outlined" onClick={() => setContador(contador - 1)} sx={{ borderColor: "#3e2723", color: "#3e2723" }}>−</Button>
                <Button size="small" variant="contained" onClick={() => setContador(contador + 1)} sx={{ backgroundColor: "#3e2723" }}>+</Button>
                <Button size="small" variant="text" onClick={() => setContador(0)} sx={{ color: "#6d4c41" }}>Reset</Button>
              </Box>
            </HookCard>
          </Grid>

          {/* useEffect */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <HookCard titulo="useEffect">
              <Typography variant="body2" sx={{ color: "#6d4c41", mb: 1 }}>Temporizador activo desde que cargó la página:</Typography>
              <Typography variant="h4" sx={{ fontFamily: "monospace", color: "#3e2723" }}>{segundos}s</Typography>
            </HookCard>
          </Grid>

          {/* useContext */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <HookCard titulo="useContext">
              <Typography variant="body2" sx={{ color: "#6d4c41", mb: 2 }}>El componente hijo lee el tema del contexto:</Typography>
              <TemaContext.Provider value={{ tema, setTema }}>
                <BotonTema />
              </TemaContext.Provider>
            </HookCard>
          </Grid>

          {/* useRef */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <HookCard titulo="useRef">
              <Typography variant="body2" sx={{ color: "#6d4c41", mb: 2 }}>Haz click en el botón para enfocar el input:</Typography>
              <TextField inputRef={inputRef} size="small" placeholder="Enfócame" fullWidth sx={{ mb: 1.5 }} />
              <Button size="small" variant="contained" onClick={() => inputRef.current.focus()} sx={{ backgroundColor: "#3e2723" }}>Enfocar</Button>
            </HookCard>
          </Grid>

          {/* useReducer */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <HookCard titulo="useReducer">
              <Typography variant="body2" sx={{ color: "#6d4c41", mb: 2 }}>Contador: <strong>{state.count}</strong></Typography>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                <Button size="small" variant="outlined" onClick={() => dispatch({ type: "decrementar" })} sx={{ borderColor: "#3e2723", color: "#3e2723" }}>−</Button>
                <Button size="small" variant="contained" onClick={() => dispatch({ type: "incrementar" })} sx={{ backgroundColor: "#3e2723" }}>+</Button>
                <Button size="small" variant="text" onClick={() => dispatch({ type: "reset" })} sx={{ color: "#6d4c41" }}>Reset</Button>
              </Box>
            </HookCard>
          </Grid>

          {/* useCallback */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <HookCard titulo="useCallback">
              <Typography variant="body2" sx={{ color: "#6d4c41", mb: 2 }}>Función memorizada. Clicks: <strong>{clicksCallback}</strong></Typography>
              <Button size="small" variant="contained" onClick={handleCallback} sx={{ backgroundColor: "#3e2723" }}>Click</Button>
            </HookCard>
          </Grid>

          {/* useMemo */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <HookCard titulo="useMemo">
              <Typography variant="body2" sx={{ color: "#6d4c41", mb: 2 }}>Número: <strong>{numero}</strong> → Cuadrado: <strong>{cuadrado}</strong></Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Button size="small" variant="outlined" onClick={() => setNumero((n) => Math.max(1, n - 1))} sx={{ borderColor: "#3e2723", color: "#3e2723" }}>−</Button>
                <Button size="small" variant="contained" onClick={() => setNumero((n) => n + 1)} sx={{ backgroundColor: "#3e2723" }}>+</Button>
              </Box>
            </HookCard>
          </Grid>

          {/* Custom Hook useContador */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <HookCard titulo="Custom Hook · useContador">
              <Typography variant="body2" sx={{ color: "#6d4c41", mb: 1 }}>Hook propio que encapsula la lógica de un contador:</Typography>
              <CustomHookDemo />
            </HookCard>
          </Grid>

          {/* Custom Hook useOnline */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <HookCard titulo="Custom Hook · useOnline">
              <Typography variant="body2" sx={{ color: "#6d4c41", mb: 2 }}>Detecta si hay conexión a internet:</Typography>
              <OnlineDemo />
            </HookCard>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default Hooks;