import "./App.css";
import Hero from "./Hero/Hero.tsx";
import { CssBaseline } from "@mui/material";
import { Navigation } from "./Navigation/Navigation.tsx";

function App() {
  return (
    <>
      <CssBaseline />
      <Hero />
      <Navigation />
    </>
  );
}

export default App;
