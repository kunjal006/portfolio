import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center justify-content-between hero-row">

          {/* Left Side */}
          <div className="col-lg-7">

            <p className="hero-tag">
              👋 Hello, I'm
            </p>

            <h1 className="hero-title">
              Kunjal <span>Rajput</span>
            </h1>

            <h3 className="hero-role">
              Software Developer | Backend Enthusiast
            </h3>

            <p className="hero-description">
              Passionate about building web applications using Python,
              FastAPI, PostgreSQL and React. I enjoy solving real-world
              problems, exploring backend technologies and continuously
              learning through hands-on projects.
            </p>

            <div className="hero-buttons">

              <a
                href="#projects"
                className="btn btn-primary px-4 py-2"
              >
                View Projects
              </a>

            </div>

            <div className="hero-icons mt-4">

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

          </div>

          {/* Right Side */}
          <div className="col-lg-5 d-none d-lg-block">

            <div className="terminal-box">

              <div className="terminal-header">
                <span className="red"></span>
                <span className="yellow"></span>
                <span className="green"></span>
              </div>

              <div className="terminal-body">

                <p>const developer = {"{"}</p>

                <p>&nbsp;&nbsp;name: "Kunjal Rajput",</p>

                <p>&nbsp;&nbsp;role: "Software Developer",</p>
                <p>&nbsp;&nbsp;focus: "Backend Development",</p>

                <p>&nbsp;&nbsp;languages: [</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;"Python",</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;"C",</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;"C++"</p>
                <p>&nbsp;&nbsp;],</p>

                <p>&nbsp;&nbsp;backend: [</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;"FastAPI",</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;"PostgreSQL",</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;"REST APIs",</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;"JWT Authentication"</p>
                <p>&nbsp;&nbsp;],</p>

                <p>{"};"}</p>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;