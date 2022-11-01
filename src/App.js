import './App.css';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import NavBar from './components/Navbar';
import About from './components/About';
import ContactMe from './components/ContactMe';
import HomePage from './components/HomePage';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Sidebar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactMe />} />
      </Routes>
    </div>
  );
}

export default App;
