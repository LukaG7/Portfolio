import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/projects' element={<Projects />}/> 
      </Routes>
    </div>
  );
}

export default App;
