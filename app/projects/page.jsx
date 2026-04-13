import React from 'react'
import ProjectCards from "../components/project-cards";

const Projects = () => {
  return (
    <div>
      <div className="navbar">
        <ul>
          <li> <a href="../">BACK</a> </li>
        </ul>
      </div>
      <h1>PROJECTS</h1>
      <h2>Click a tab to learn more!</h2>

      <ProjectCards />
    </div>
  )
}

export default Projects