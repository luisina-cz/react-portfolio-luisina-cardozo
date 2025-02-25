import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about';
import Proyects from './components/proyects';
import Contact from './components/contact';
import Services from './components/services';
import Carrusel from './components/carrusel';
const App = () => {
  console.log("App rendering");
  return (
    <div>

      <Navbar />
      <Hero />
      <About />
      <Proyects />
      <Carrusel />
      <Services />
      <Contact />
    </div>
  )
}

export default App