import "./app.scss";
import Contact from "./ComponentsNavbar/Contact/Contact";
import Cursor from "./ComponentsNavbar/Cursor/Cursor";
import Hero from "./ComponentsNavbar/Hero/Hero";
import Navbar from "./ComponentsNavbar/Navbar/Navbar";
import Parralax from "./ComponentsNavbar/Parralax/Parralax";
import Portfolio from "./ComponentsNavbar/Portfolio/Portfolio";
import Services from "./ComponentsNavbar/Services/Services";
function App() {
  return (
    <div className="App">
      <Cursor />
      <section id="Home">
        <Navbar></Navbar>

        <Hero></Hero>
      </section>
      <section id="">
        <Parralax type="services" />
      </section>
      <section id="Services">
        <Services></Services>
      </section>
      <section>
        <Parralax type="portfolio" />
      </section>
      <section>
        <Portfolio type="portfolio1" />
      </section>
      <section>
        <Portfolio type="portfolio2" />
      </section>

      <section>
        <Portfolio type="portfolio3" />
      </section>

      <section>
        <Portfolio type="portfolio4" />
      </section>

      <section id="Contact">
        <Contact />
      </section>
      <section id="About">Aout</section>
    </div>
  );
}

export default App;
