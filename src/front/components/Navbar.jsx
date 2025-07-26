import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';  //se debd instalar - npm install react-router-hash-link

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm mt-2 ms-2 me-2 px-3" style={{ backgroundColor: '#003366', borderRadius: '15px' }}>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          AutoTekc
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <HashLink smooth className="nav-link" to="/#servicios">Services</HashLink>
              
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <HashLink smooth className="nav-link" to="/#contactenos">Contact</HashLink>
              
            </li>
            <li className="nav-item">
              <Link className="btn btn-info ms-3" to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
