import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/Navbar';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
