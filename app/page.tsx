import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";
import ProjectCards from "./components/project-cards";

export default function Home() {
  return (
    <div>
      <div className="navbar">
        <ul>
          <li> <a href="#about">ABOUT</a> </li>
          <li> <a href="#projects">PROJECTS</a> </li>
          <li> <a href="#contact">CONTACT</a> </li>
        </ul>
      </div>

      <br></br>
      <Header />
      <br></br>
      <br></br>
      <br></br>

      <div className="info-card" id="about">
        <div className="info-card-text">
          <h2>ABOUT</h2>
          <p>description here</p>
        </div>
        <img src="mepic.jpg" alt="A picture of me" width="400"/>
      </div>
      
      <ProjectCards />
      
      <div className="info-card" id="contact">
        <div className="info-card-text">
          <h2>CONTACT</h2>
          <p>Info here</p>
        </div>
      </div>
    </div>
    
    
  );
}