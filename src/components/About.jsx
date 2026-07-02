function About() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="text-center mb-5">
          <p className="section-tag">ABOUT ME</p>
          <h2 className="section-title">Who Am I?</h2>
        </div>
        <div className="row align-items-center">
          {/* Left */}
          <div className="col-lg-7">
            <h3 className="mb-4">
              Curious About <span className="text-info">Building Software</span>
            </h3>
            <p className="about-text">
              I have a growing interest in backend engineering. I enjoy building practical 
              applications, designing REST APIs, working with databases, and solving
              programming problems through real-world projects.
            </p>
            <p className="about-text">
              My current tech stack includes
              <span className="accent-text">
                {" "}Python, FastAPI, PostgreSQL, React, JavaScript
              </span>
              . I enjoy learning new technologies by building projects rather
              than only studying theory.
            </p>
            <p className="about-text">
              At present, I'm focused on strengthening my backend development
              skills while continuously improving my problem-solving abilities
              and exploring modern software development practices.
            </p>
          </div>
          {/* Right */}
          <div className="col-lg-5">
            <div className="info-card">
              <div className="info-item">
                <strong>📍 Location</strong>
                <span>India</span>
              </div>
              <div className="info-item">
                <strong>💻 Interests</strong>
                <span>Backend Development & APIs</span>
              </div>
              <div className="info-item">
                <strong>🌱 Currently Learning</strong>
                <span>Data Structures & Algorithms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;