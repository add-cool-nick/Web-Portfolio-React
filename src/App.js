import './App.css';
import Intro from './components/Intro'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import Contact from './components/Contact'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
        {/* <Header /> */}
        <Intro />
        <About />
        <Projects />
        <Skills />
        <WorkExperience />
        <Contact />
    </div>
  );
}

export default App;
