import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-section">

      <div className="container">

        <h5 className="section-small-title">
          CONTACT
        </h5>

        <h2 className="section-title">
          Let's Connect
        </h2>

        <p className="contact-text">
          I'm currently seeking Software Development internship opportunities.
          Feel free to connect with me on GitHub or LinkedIn.
        </p>

        <div className="contact-links">

          <a
            href="https://github.com/kunjal006"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/kunjal-rajput-189495270/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            <FaLinkedin />
            LinkedIn
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;