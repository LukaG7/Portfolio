import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Projects />
    </div>
  );
}

export default App;
