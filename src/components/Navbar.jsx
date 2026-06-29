import { useState, useEffect } from "react";
import { FaCode } from "react-icons/fa";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? "glass-nav" : ""}`}>
      <div className="container">

        <a className="navbar-brand fw-bold text-light" href="#">
          <FaCode className="me-2 text-info" />
          Kunjal<span className="text-info">.</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="nav-link" href="#hero">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#education">Education</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;