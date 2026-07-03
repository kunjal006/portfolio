import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer>

      <div className="container">

        <h3 className="footer-name">
          Kunjal Rajput
        </h3>

        <p className="footer-text">
          Contact
        </p>

        <div className="footer-icons">

          <a
            href="https://github.com/kunjal006"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/kunjal-rajput-189495270/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>


        </div>

        <hr />

        <p className="copyright">
          © 2026 Kunjal Rajput. Built with React & Bootstrap.
        </p>

      </div>

    </footer>
  );
}

export default Footer;