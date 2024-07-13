import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./compoentes/Header"
import Footer from "./compoentes/Footer"
import Home from './pages/Home';
import About from './pages/About';
import Doubts from './pages/Doubts';
import Contact from './pages/Contact';
import Orcamento from './pages/Orcamento';

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
            <Route path="/Orcamento" element={<Orcamento/>}/>
          </Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
