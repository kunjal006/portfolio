function Education() {
  return (
    <section className="education-section">

      <div className="container">

        <h5 className="section-small-title">
          EDUCATION
        </h5>

        <h2 className="section-title">
          Academic Background
        </h2>

        {/* Graduation */}

        <div className="education-card">

          <h3>Bachelor of Computer Applications (BCA)</h3>

          <h5>
            D.A.V. Centenary College, Affiliated to Maharishi Dayanand University
          </h5>

          <p className="education-year">
            2023 – 2026
          </p>

          <p>
            Graduated with a CGPA of <strong>7.5</strong>.
          </p>

        </div>

        {/* Class XII */}

        <div className="education-card">

          <h3>Senior Secondary (CBSE)</h3>

          <h5>D.A.V. Public School, Faridabad</h5>

          <p className="education-year">
            2023
          </p>

          <p>
            Completed Class XII with <strong>76%</strong>.
          </p>

        </div>

        {/* Class X */}

        <div className="education-card">

          <h3>Secondary (CBSE)</h3>

          <h5>D.A.V. Public School, Faridabad</h5>

          <p className="education-year">
            2021
          </p>

          <p>
            Completed Class X with <strong>85%</strong>.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Education;