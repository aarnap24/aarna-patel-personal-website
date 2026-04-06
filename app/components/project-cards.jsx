export default function ProjectCards() {
  return (
    <div className="project-grid-wrapper" id="projects">
        <div className="project-grid">

          <div className="project-card">
            <div className="project-card-placeholder">
              <img src="pawheart.png" alt="A picture of me"/>
            </div>
            <div className="project-card-text">
              <a href = "https://aarnap24.github.io/codepath-paws-and-connect/" target="_blank" 
              rel="noopener noreferrer"><h2>PAWS & CONNECT</h2></a>
              {/* <p>description here</p> */}
            </div>
          </div>

          <div className="project-card">
            <div className="project-card-placeholder">
              <img src="sweet-t-bg.png" alt="A picture of me"/>
            </div>
            <div className="project-card-text">
              <a href = "https://wics-uic.github.io/Sweet-T/" target="_blank" 
              rel="noopener noreferrer"><h2>SWEET T BAKERY<br></br>WEBSITE</h2></a>
              {/* <p>description here</p> */}
            </div>
          </div>

          <div className="project-card">
            <div className="project-card-placeholder">
              <img src="des255-cover.png" alt="A picture of me"/>
            </div>
            <div className="project-card-text">
              <a href = "https://aarna-des255-desmutations25.netlify.app/" target="_blank" 
              rel="noopener noreferrer"><h2>INTEGRATIVE<br></br>DESIGN STUDIO I<br></br>PORTFOLIO</h2></a>
              
              {/* <p>description here</p> */}
            </div>
          </div>

        </div>
      </div>
  );
}