import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import styles from './App.module.css';
import Home from './pages/Home';
import About from './pages/About';
import Doubts from './pages/Doubts';
import Contact from './pages/Contact';
import Budget from './pages/Budget';
import NavBar from "./compoentes/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className=".conteiner">
      <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/doubts" element={<Doubts/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/budget" element={<Budget/>}/>
          </Route>
        </Routes>
        <footer className={styles.footer}>
          <div className={styles.conteiner}>
              <address className={styles.address}>
                  R. Aberal Lamar, N° 17, Alameda Dos Princepes, São João - RJ CEP:88067-67
              </address>
              <nav className={styles.navF}>
                  <Link className={styles.link} to="/">Home</Link>
                  <Link className={styles.link} to="/about">About</Link>
                  <Link className={styles.link} to="/doubts">Doubts</Link>
                  <Link className={styles.link} to="/contact">Contact</Link>
              </nav>
          </div>

          <div className={styles.ass}>
              <p>&copy; 2024 Eduardo Ribeiro Domingues</p>
          </div>
        
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
