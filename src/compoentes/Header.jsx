import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    <header>
        <img className='logo' src="https://i.pinimg.com/736x/c1/3a/63/c13a63f39bb1b7bc71fda2e4686ef620.jpg" alt="logoImg" />
        <nav>
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/about">About</Link>
            <Link className='link' to="/doubts">Doubts</Link>
            <Link className='link' to="/contact">Contact</Link>
        </nav>
        <Link className='btn' to="/orcamento">Orçamento</Link>
    </header>
  )
}

export default Header