import { AppProvider } from './context/AppContext';
import NavBar from './components/NavBar/NavBar';
import Hero from './views/Hero';
import Skills from './views/Skills';
import Projects from './views/Projects';
import BackToTop from './components/BackToTop/BackToTop';
import PortflioBtn from './components/PortfolioBtn/PortfolioBtn';
import Footer from './components/Footer/Footer';
import About from './views/About';
import Contact from './views/Contact';

function App() {

  return (
    <AppProvider>
      <div className='App'> 
          <NavBar />
          <Hero />
          <Skills />  
          <Projects /> 
          <About/>
          <Contact/>
          <Footer/>
          <BackToTop/>
          <PortflioBtn/>
      </div>
    </AppProvider>

  )
}

export default App;
