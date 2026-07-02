import { FaGithub } from "react-icons/fa";

import expenseImg from "../assets/expense-tracker.png";
import githubImg from "../assets/github-profile.png";
import portfolioImg from "../assets/portfolio.png";

const projects = [
  {
    title: "Expense Tracker",
    image: expenseImg,

    description:
      "A full-stack expense tracking application with JWT authentication, transaction management, analytics dashboard, and PostgreSQL integration. Built using FastAPI and React with a REST API architecture.",

    tech: [
      "FastAPI",
      "React",
      "PostgreSQL",
      "JWT",
      "REST API",
    ],

    github: "https://github.com/kunjal006/expense-tracker",
  },

  {
    title: "GitHub Profile Explorer",
    image: githubImg,

    description:
      "A React application that uses the GitHub REST API to search users and display profile information, repositories, followers, and other public account details.",

    tech: [
      "React",
      "GitHub REST API",
      "Bootstrap",
    ],

    github: "https://github.com/kunjal006/github-profile-explorer",
  },

  {
    title: "Developer Portfolio",
    image: portfolioImg,

    description:
      "A responsive developer portfolio built with React and Bootstrap to showcase projects, technical skills, certifications, and professional information.",

    tech: [
      "React",
      "Bootstrap",
    ],

    github: "https://github.com/kunjal006/portfolio",
  },
];

function Projects() {
  return (
    <section className="projects-section">
      <div className="container">

        <h5 className="section-small-title">
          PROJECTS
        </h5>

        <h2 className="section-title">
          Featured Projects
        </h2>

        <div className="row g-4">

          {projects.map((project) => (

            <div className="col-lg-4" key={project.title}>

              <div className="project-card">

                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">

                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}

                </div>

                <div className="project-buttons">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-info"
                  >
                    <FaGithub className="me-2" />
                    Source Code
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;