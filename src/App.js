
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
   <div>
    <Header/>
    <section id='home'>
      <Home/>
    </section>
    <section id='about'>
      <About/>
    </section>
     <section id='education'>
      <Education/>
    </section>
     <section id='skills'>
      <Skills/>
    </section>
    <section id='projects'>
      <Projects/>
    </section>
    <section id='contact'>
      <Contact/>
    </section>
   </div>
  
  )
}

export default App;
