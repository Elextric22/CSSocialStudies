import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar (){
    return (
        <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/legalism">Legalism</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/censorship">Censorship</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/immortaly">Immortalyiyty</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/modernday">ModernDay</NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}