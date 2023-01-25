import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
  <div className="container-fluid">
    <Link to="/" className="logo">Homestay<span>.</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="d-flex">
      <div className="collapse navbar-collapse " id="navbarNavAltMarkup" >
      <div className="navbar-nav">
        <Link to="/" className="nav-link active">Home</Link>
        <Link to="/forowners" className="nav-link mx-3">For Owners</Link>
        <Link to="/about" className="nav-link ">About</Link>
        <Link to="/contact" className="nav-link mx-3">Contact</Link>
        <Link to="/login" className="loginbtn">Login</Link>

      </div>
      </div>
    </div>
  </div>
</nav>
  )
}
