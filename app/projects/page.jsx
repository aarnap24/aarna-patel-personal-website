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

      <ProjectCards />
    </div>
  )
}

export default Projects