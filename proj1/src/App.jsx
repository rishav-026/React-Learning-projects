import { useState } from "react";
import "./App.css";

import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Gallery from "./Gallery";
import Contact from "./Contact";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app">
      <header className="navbar">
        <h1 className="logo">Risha.dev</h1>
        <nav>
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("about")}>About</button>
          <button onClick={() => setPage("skills")}>Skills</button>
          <button onClick={() => setPage("gallery")}>Gallery</button>
          <button onClick={() => setPage("contact")}>Contact</button>
        </nav>
      </header>

      <main className="main-content">
        {page === "home" && <Home />}
        {page === "about" && <About />}
        {page === "skills" && <Skills />}
        {page === "gallery" && <Gallery />}
        {page === "contact" && <Contact />}
      </main>
    </div>
  );
}

export default App;