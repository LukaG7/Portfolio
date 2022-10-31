import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/Navbar';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
