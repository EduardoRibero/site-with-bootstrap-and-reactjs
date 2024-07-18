import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.module.css';
import Home from './pages/Home';
import About from './pages/About';
import Doubts from './pages/Doubts';
import Contact from './pages/Contact';
import Budget from './pages/Budget';
import NavBar from "./compoentes/NavBar"
import Footer from "./compoentes/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route>
            <Route path="/site-with-bootstrap-and-reactjs/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/doubts" element={<Doubts/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/budget" element={<Budget/>}/>
          </Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
