import "./App.css";
import Home from "./Home/Home.tsx";
import { CssBaseline } from "@mui/material";
import Navigation from "./Navigation/Navigation.tsx";
import AboutMe from "./AboutMe/AboutMe.tsx";
import Publications from "./Publications/Publications.tsx";

function App() {
  return (
    <>
      <CssBaseline />
      <Home />
      <Navigation />
      <AboutMe />
      <Publications />
    </>
  );
}

export default App;
