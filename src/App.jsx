import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import styles from './App.module.css';
import Home from './pages/Home';
import About from './pages/About';
import Doubts from './pages/Doubts';
import Contact from './pages/Contact';
import Budget from './pages/Budget';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className={styles.header}>
          <img className={styles.logo} src="https://i.pinimg.com/736x/c1/3a/63/c13a63f39bb1b7bc71fda2e4686ef620.jpg" alt="logoImg" />
          <div>
            <div className={styles.ctt}>
              <p>📞 48 99944-2618</p>
              <p>✉️ Devfulltime@gmail.com</p>
            </div>
            <div className={styles.menu}>
              <nav className={styles.navH}>
                  <Link className={styles.link} to="/">Home</Link>
                  <Link className={styles.link} to="/about">About</Link>
                  <Link className={styles.link} to="/doubts">Doubts</Link>
                  <Link className={styles.link} to="/contact">Contact</Link>
              </nav>
              <Link className={styles.btn}  to="/budget">Budget</Link>
            </div>
          </div>
        </header>
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
