import "./App.css";
import Hero from "./Hero/Hero.tsx";
import { CssBaseline } from "@mui/material";
import Navigation from "./Navigation/Navigation.tsx";
import AboutMe from "./AboutMe/AboutMe.tsx";

function App() {
  return (
    <>
      <CssBaseline />
      <Hero />
      <Navigation />
      <AboutMe />
    </>
  );
}

export default App;
