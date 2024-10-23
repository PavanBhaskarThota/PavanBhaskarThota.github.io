import { useContext } from "react";
import "./App.css";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { GitHub } from "./Components/GitHub";
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import { Projects } from "./Components/Projects";
import { Skills } from "./Components/Skills";
import { ThemeContext, ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

function ThemedApp() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme === "dark" ? "black" : "white" }}>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <GitHub />
      <Contact />
    </div>
  );
}

export default App;
