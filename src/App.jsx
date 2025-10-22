import About from "./components/About/About";
import Contact from "./components/Contacts/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Projects/Project";
import War from "./components/War/War";


function App() {
  return (
    <div>
      <Navbar />
      <section id="home"><War /></section>
      <section id="about"><About /></section>
      <section id="projects"><Project /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}

export default App;
