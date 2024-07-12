import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./compoentes/Header"
import Home from './pages/Home';
import About from './pages/About';
import Doubts from './pages/Doubts';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/doubts" element={<Doubts/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
