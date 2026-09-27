import "./App.css";
import Home from "./Home/Home.tsx";
import { CssBaseline } from "@mui/material";
import Navigation from "./Navigation/Navigation.tsx";
import AboutMe from "./AboutMe/AboutMe.tsx";
import Portfolio from "./Portfolio/Portfolio.tsx";
import Experience from "./Experience/Experience.tsx";
import Education from "./Education/Education.tsx";
import Publications from "./Publications/Publications.tsx";
import Contact from "./Contact/Contact.tsx";

function App() {
  return (
    <>
      <CssBaseline />
      <Home />
      <Navigation />
      <AboutMe />
      <Portfolio />
      <Experience />
      <Education />
      <Publications />
      <Contact />
    </>
  );
}

export default App;
