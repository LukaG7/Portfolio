import './App.css';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import NavBar from './components/Navbar';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import HomePage from './components/HomePage';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Sidebar />
    </div>
  );
}

export default App;
