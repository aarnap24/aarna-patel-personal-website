import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";
import ProjectCards from "./components/project-cards";
import ContactForm from "./components/contact-form";

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
      <br></br>
      <br></br>
      <br></br>

      <div className="info-card" id="about">
        <div className="info-card-text">
          <h1>ABOUT ME</h1>
          <p>
            Hey! I'm Aarna, currently an undergrad at the University of Illinois Chicago, 
            majoring in Computer Science + Design. I'm interested in UI/UX design, 
            web development, and game design. I am always interested in opportunities to 
            expand and apply my skillset! In my free time, I love reading and playing video 
            games!
          </p>
          <br></br>
          <p>  
            This website is my digital portfolio showcasing my work in CS 
            and design. Happy exploring!
          </p>
        </div>
        <img src="mepicnew.jpg" alt="A picture of me" width="400"/>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <div id="projects">
        <br></br>
        <h1>PROJECTS</h1>
        <h2>Click a tab to learn more!</h2>
        <ProjectCards />
        {/* <a href="/projects" className="button">Explore Projects</a> */}
      </div>
      <br></br>
      <br></br>
      <br></br>
      
      <div className="info-card contact-card" id="contact">
        <div className="info-card-text contact-card-text contact-left">
          <h1>CONTACT ME</h1>
          <h2>SHOOT ME AN EMAIL!</h2>
          <a href="mailto:aarnapatel18@gmail.com" className="button contactbutton">SEND EMAIL</a>
        </div>

        <div className="info-card-text contact-card-text contact-right">
          <h2>OR SEND ME A MESSAGE!</h2>
          <ContactForm />
        </div>
      </div>

      
      <br></br>
      <br></br>
      <br></br>
      
    </div>

    
    
  );
}