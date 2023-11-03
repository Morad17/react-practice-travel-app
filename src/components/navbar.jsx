import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="main-nav">
      <ul className="link">
        <Link to="/">Home</Link>
      </ul>
      <ul className="link">
        <Link to="/register">Register</Link>
      </ul>
      <ul className="link">
        <Link>Login</Link>
      </ul>
      <ul className="link">
        <Link>Planner</Link>
      </ul>
    </nav>
  )
}

export default Navbar