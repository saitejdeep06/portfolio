import React from "react";
import Home from "./components/Home";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Home />
      <Education />
      <Experience />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;