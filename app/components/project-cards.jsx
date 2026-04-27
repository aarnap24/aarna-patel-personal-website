"use client";
import { useState } from "react";
import ProjectModal from "./project-modal";

const projects = [
  {
    id: 1,
    title: "PAWS & CONNECT",
    image: "pawheart.png",
    link: "https://aarnap24.github.io/codepath-paws-and-connect/",
    tags: ["Web Dev", "HTML/CSS", "JavaScript"],
    description:
      "Built a mock event website for CodePath’s summer WEB101 course. Engineered interactive features and layouts while debugging and optimizing code for performance. Includes a navigation bar, an RSVP function with a pop-up animated modal upon submission, and a dark mode toggle.",
  },
  {
    id: 2,
    title: "SWEET T BAKERY WEBSITE",
    image: "sweet-t-bg.png",
    link: "https://wics-uic.github.io/Sweet-T/",
    tags: ["Web Dev", "Postman", "MongoDB", "Node.js", "Express.js"],
    description:
      "A bakery website created for Sweet T as part of a WICS UIC project. Worked on a team focused on backend development, developing APIs for the website's checkout page.",
  },
  {
    id: 3,
    title: "INTEGRATIVE DESIGN STUDIO I PORTFOLIO",
    image: "des255-cover.png",
    link: "https://aarna-des255-desmutations25.netlify.app/",
    tags: ["Portfolio", "HTML/CSS"],
    description:
      "A portfolio from the Integrative Design Studio I course (DES 255) at UIC. This collection showcases explorations in form, concept, and visual communication developed throughout the semester.",
  },
];

export default function ProjectCards() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <>
      <div className="project-grid-wrapper" id="projects">
        <div className="project-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => setActiveProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter") setActiveProject(project); }}
            >
              <div className="project-card-placeholder">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-card-text">
                <h2>{project.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  );
}