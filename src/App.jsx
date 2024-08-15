import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
  return (
    <>
      <Hero />
      <div className="flex flex-col bg-black">
        <Skills />
        <Projects />
      </div>
    </>
  );
}

export default App;
