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
          <li> <a href="/projects">PROJECTS</a> </li>
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
          <p>Hello! My name is Aarna Patel. I am currently an undergrad at 
            the University of Illinois Chicago, majoring in computer science and design.
            I am interested in web development and game design, and I am looking to gain
            experience through internships. This website is my digital portfolio showcasing
            my skills in CS and design. Happy exploring!
          </p>
        </div>
        <img src="mepic.jpg" alt="A picture of me" width="400"/>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <h2>CHECK OUT MY PROJECTS!</h2>
      <br></br>
      <a href="/projects" className="button">Explore Projects</a>
      <br></br>
      <br></br>
      <br></br>
      
      <div className="info-card contact-card" id="contact">
        <div className="info-card-text contact-card-text">
          <br></br>
          <h2>SHOOT ME AN EMAIL!</h2>
          <br></br>
          <a href="mailto:aarnapatel18@gmail.com" className="button contactbutton">Send Email</a>
          <br></br>
          <br></br>
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