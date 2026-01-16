import { createRoot } from "react-dom/client";
import "./index.css";

import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Projects from "./components/pageContent/project/Projects";
import About from "./components/pageContent/about/About";
import Contacts from "./components/pageContent/contact/Contacts";
import Footer from "./components/footer/Footer";


createRoot(document.getElementById("root")).render(
  <>
    {" "}
    <Navbar />
    <Hero />
    <Projects />
    <About />
    <Contacts />
    <Footer />
  </>
);
