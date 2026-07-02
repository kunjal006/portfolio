import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiBootstrap,
  SiMysql,
  SiFastapi,
  SiPostgresql,
  SiC,
  SiCplusplus,
  SiJsonwebtokens,
} from "react-icons/si";

const skills = [
  // Backend
  { name: "Python", icon: <FaPython />, color: "#3776AB" },
  { name: "FastAPI", icon: <SiFastapi />, color: "#009688" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
  { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  { name: "JWT Authentication", icon: <SiJsonwebtokens />, color: "#FF9800" },

  // Frontend
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
  { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },

  // Languages & Tools
  { name: "C", icon: <SiC />, color: "#00599C" },
  { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
  { name: "Git", icon: <FaGitAlt />, color: "#F1502F" },
  { name: "GitHub", icon: <FaGithub />, color: "#FFFFFF" },
];

function Skills() {
  return (
    <section className="skills-section">
      <div className="container">

        <h5 className="section-small-title">
          SKILLS
        </h5>

        <h2 className="section-title">
          Technologies I Work With
        </h2>

        <div className="row g-4 mt-4">

          {skills.map((skill) => (
            <div className="col-6 col-md-4 col-lg-3" key={skill.name}>

              <div className="skill-card">

                <div
                  className="skill-icon"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>

                <h5>{skill.name}</h5>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;