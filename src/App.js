import { AppProvider } from './context/AppContext';
import NavBar from './components/NavBar/NavBar';
import Hero from './views/Hero';
import Skills from './views/Skills';
import Projects from './views/Projects';
import BackToTop from './components/BackToTop/BackToTop';

function App() {

  return (
    <AppProvider>
      <div className='App'> 
          <NavBar />
          <Hero />
          <Skills />  
          <Projects /> 
          <BackToTop/>
      </div>
    </AppProvider>

  )
}

export default App;
