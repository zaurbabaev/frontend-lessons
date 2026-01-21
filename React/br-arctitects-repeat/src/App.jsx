import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Projects from "./components/pageContent/project/Projects";
import About from "./components/pageContent/about/About";
import Contact from "./components/pageContent/contact/Contact";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
