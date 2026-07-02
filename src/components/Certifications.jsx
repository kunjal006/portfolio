function Certifications() {
  const certifications = [
    {
      title: "The Complete Full-Stack Web Development Bootcamp",
      platform: "Udemy",
      year: "2026",
    },
    {
      title: "Programming for Everybody (Getting Started with Python)",
      platform: "Coursera",
      year: "2023",
    },
    {
      title: "CUET-UG",
      platform: "Score: 91%",
      year: "2023",
    },
  ];

  return (
    <section className="certifications-section">

      <div className="container">

        <h5 className="section-small-title">
          CERTIFICATIONS
        </h5>

        <h2 className="section-title">
          Certifications
        </h2>

        <div className="row g-4">

          {certifications.map((cert) => (

            <div className="col-md-6 col-lg-4" key={cert.title}>

              <div className="certificate-card">

                <h4>{cert.title}</h4>

                <p>{cert.platform}</p>

                <span className="certificate-year">
                  {cert.year}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Certifications;